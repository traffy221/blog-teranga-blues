'use client';

import Giscus from '@giscus/react';

interface CommentsProps {
    slug: string;
}

export default function Comments({ slug }: CommentsProps) {
    return (
        <div className="bg-white/15 backdrop-blur-xl border border-white/30 p-8 rounded-lg mt-12">
            <h2 className="text-2xl font-bold mb-6">Quantum Comment Threads</h2>
            <Giscus
                id="comments"
                repo="yourusername/your-repo" // Replace with your repo
                repoId="YOUR_REPO_ID" // Replace with your repo ID
                category="General"
                categoryId="YOUR_CATEGORY_ID" // Replace with your category ID
                mapping="pathname"
                term={slug}
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme="transparent_dark"
                lang="en"
                loading="lazy"
            />
        </div>
    );
}
