import styles from "../css/ReviewComment.module.css";

const ReviewComment = ({
    parentId,
    setParentId,
    writer_pic,
    writer,
    comment,
    replyId,
}) => {
    const toggleComment = () => {
        // 현재 선택된 parentId와 replyId가 같은 경우 해제, 아닌 경우 선택
        if (parentId === replyId) {
            setParentId(""); // 선택 해제
        } else {
            setParentId(replyId); // 선택
        }
    };
    return (
        <div className={styles.container}>
            <img className={styles.profile} src={writer_pic}></img>
            <div>
                <div className={styles.writer}>{writer}</div>
                <div className={styles.comment}>{comment}</div>
                {setParentId && (
                    <button
                        onClick={toggleComment}
                        className={`${styles.replyButton} ${parentId === replyId ? styles.selectedReplyButton : ""
                            }`}
                    >
                        답글 달기
                    </button>
                )}
            </div>
        </div>
    );
};

export default ReviewComment;