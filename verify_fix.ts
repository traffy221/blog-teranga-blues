
import { getPostBySlug } from '@/lib/mdx';

async function test() {
    console.log('Starting verification...');

    const testCases = [
        // The safe filename (should work)
        'le-poisson-pourrit-toujours-par-la-tete',
        // The accented slug (user's URL) - should work via fallback
        'le-poisson-pourrit-toujours-par-la-tête',
        // Encoded accented slug (what the browser sees) - should work via fallback
        encodeURIComponent('le-poisson-pourrit-toujours-par-la-tête'),
        // Existing post
        'ciel-noir'
    ];

    for (const slug of testCases) {
        console.log(`\nTesting slug: "${slug}"`);
        const post = await getPostBySlug(slug);
        if (post) {
            console.log(`✅ Found: "${post.title}" (Slug: ${post.slug})`);
        } else {
            console.log(`❌ Not Found`);
        }
    }
}

test();
