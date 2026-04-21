function CommentItem({ item }) { return <article className="comment-item"><strong>{item.user}</strong><span>{item.time}</span><p>{item.content}</p></article>; }
export default CommentItem;
