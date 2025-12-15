import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

// ISR endpoint for comment updates
export async function POST(request: NextRequest) {
    try {
        const { path, secret } = await request.json();

        // Verify secret to prevent unauthorized revalidation
        if (secret !== process.env.REVALIDATION_SECRET) {
            return NextResponse.json({ error: 'Invalid secret' }, { status: 401 });
        }

        if (!path) {
            return NextResponse.json({ error: 'Path required' }, { status: 400 });
        }

        // Revalidate the path
        revalidatePath(path);

        return NextResponse.json({ revalidated: true, now: Date.now() });
    } catch (err) {
        return NextResponse.json({ error: 'Error revalidating' }, { status: 500 });
    }
}
