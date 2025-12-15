import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { z } from 'zod';

// Validation schema
const commentSchema = z.object({
    slug: z.string().min(1).max(100),
    author: z.string().min(2).max(50),
    email: z.string().email(),
    comment: z.string().min(10).max(1000),
    honeypot: z.string().optional(), // Anti-spam
});

interface Comment {
    id: string;
    author: string;
    email: string;
    comment: string;
    date: string;
    approved: boolean;
}

interface CommentFile {
    slug: string;
    comments: Comment[];
}

const commentsDirectory = path.join(process.cwd(), 'content/comments');

// Ensure comments directory exists
if (!fs.existsSync(commentsDirectory)) {
    fs.mkdirSync(commentsDirectory, { recursive: true });
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Honeypot check (anti-spam)
        if (body.honeypot) {
            return NextResponse.json({ error: 'Spam detected' }, { status: 400 });
        }

        // Validate input
        const validatedData = commentSchema.parse(body);

        const { slug, author, email, comment } = validatedData;

        // Generate unique ID
        const id = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

        // Create new comment
        const newComment: Comment = {
            id,
            author: author.trim(),
            email: email.trim().toLowerCase(),
            comment: comment.trim(),
            date: new Date().toISOString(),
            approved: true, // Auto-approve (change to false for moderation)
        };

        // Read or create comment file
        const filePath = path.join(commentsDirectory, `${slug}.json`);
        let commentData: CommentFile;

        if (fs.existsSync(filePath)) {
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            commentData = JSON.parse(fileContent);
        } else {
            commentData = { slug, comments: [] };
        }

        // Add new comment
        commentData.comments.push(newComment);

        // Save to file
        fs.writeFileSync(filePath, JSON.stringify(commentData, null, 2));

        // Return success (without email)
        const { email: _, ...publicComment } = newComment;

        return NextResponse.json({
            success: true,
            comment: publicComment,
        });

    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: 'Validation error', details: error.errors },
                { status: 400 }
            );
        }

        console.error('Comment submission error:', error);
        return NextResponse.json(
            { error: 'Failed to submit comment' },
            { status: 500 }
        );
    }
}
