import { comments } from "@/data/comments";

export default function handler(req: any, res: any) {

    if (req.method === 'GET') {
        const { commentId } = req.query 
        const comment = comments.find((comment) => comment.id === parseInt(commentId))
        res.status(200).json(comment);
    } else if (req.method === 'DELETE') {
        const { commentId } = req.query 
        const deletedComment = comments.find((comment) => comment.id === parseInt(commentId))

        const index = comments.findIndex(comment => comment.id === parseInt(commentId))  // get index for deleted comment
        comments.splice(index, 1);  // remove comment from comments using splice()
        res.status(200).json(deletedComment)
    }
}