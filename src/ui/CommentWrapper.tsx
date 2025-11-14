import styled from "styled-components";
import type { CommentType } from "../types/contexTypes";

import CommentItem from "./CommentItem";
import ReplyItem from "./ReplyItem";

const StyledCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const ReplyWrapper = styled.div`
  padding-left: 1rem;
  border-left: 1px solid var(--col-purple-light);
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CommentWrapper = ({ comment }: PropsType) => {
  return (
    <StyledCommentWrapper>
      <CommentItem comment={comment} />

      {comment.replies && (
        <ReplyWrapper>
          {comment.replies.map((reply) => (
            <ReplyItem reply={reply} comment={comment} key={reply.id} />
          ))}
        </ReplyWrapper>
      )}
    </StyledCommentWrapper>
  );
};

export default CommentWrapper;

type PropsType = {
  comment: CommentType;
};
