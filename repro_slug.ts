
import { getPostBySlug } from '@/lib/mdx';
import fs from 'fs';
import path from 'path';

async function test() {
    console.log('Starting test...');
    const testSlugWithAccent = 'test-tête';
    const filePath = path.join(process.cwd(), 'content/posts', `${testSlugWithAccent}.mdx`);

    try {
        // Create dummy file
        fs.writeFileSync(filePath, '---\ntitle: Test Tête\n---\n\nContent');
        console.log(`Created file: ${filePath}`);

        // Test 1: Fetch using exact slug (accented)
        console.log(`\nAttempting to fetch with slug: "${testSlugWithAccent}"`);
        const post1 = await getPostBySlug(testSlugWithAccent);
        console.log(`Result 1: ${post1 ? 'Found' : 'Not Found'}`);

        // Test 2: Fetch using encoded slug
        const encodedSlug = encodeURIComponent(testSlugWithAccent);
        console.log(`\nAttempting to fetch with encoded slug: "${encodedSlug}"`);
        const post2 = await getPostBySlug(encodedSlug);
        console.log(`Result 2: ${post2 ? 'Found' : 'Not Found'}`);

        // Cleanup
        fs.unlinkSync(filePath);
        console.log('\nCleaned up test file.');

    } catch (error) {
        console.error('Error during test:', error);
    }
}

test();
