import CommentSection from './CommentSection';

interface CommentsProps {
    slug: string;
}

export default function Comments({ slug }: CommentsProps) {
    return <CommentSection slug={slug} />;
}
