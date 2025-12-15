import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface Comment {
    id: string;
    author: string;
    comment: string;
    date: string;
}

interface CommentFile {
    slug: string;
    comments: Array<{
        id: string;
        author: string;
        email: string;
        comment: string;
        date: string;
        approved: boolean;
    }>;
}

const commentsDirectory = path.join(process.cwd(), 'content/comments');

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params;
        const filePath = path.join(commentsDirectory, `${slug}.json`);

        // If file doesn't exist, return empty array
        if (!fs.existsSync(filePath)) {
            return NextResponse.json({ comments: [] });
        }

        // Read comments file
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const data: CommentFile = JSON.parse(fileContent);

        // Filter only approved comments and remove emails
        const publicComments: Comment[] = data.comments
            .filter(c => c.approved)
            .map(({ id, author, comment, date }) => ({
                id,
                author,
                comment,
                date,
            }))
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        return NextResponse.json({ comments: publicComments });

    } catch (error) {
        console.error('Error fetching comments:', error);
        return NextResponse.json(
            { error: 'Failed to fetch comments' },
            { status: 500 }
        );
    }
}
