import styled from "styled-components";
import type { CommentType } from "../types/contexTypes";

const StyledScorePill = styled.div`
  background-color: var(--col-gray-1);
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  font-weight: 700;

  @media screen and (min-width: 786px) {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    flex-direction: column;
  }
`;

const Button = styled.button`
  color: var(--col-purple);
  padding: 8px 12px;
`;

const Score = styled.span`
  padding: 8px 12px;
  color: var(--col-purple);
`;
const ScorePill = ({ comment, handleVote }: PropsType) => {
  const handleDecrease = () => {
    if (comment.score === 0) return;
    handleVote(-1);
  };

  const handleIncrease = () => {
    handleVote(1);
  };
  return (
    <StyledScorePill>
      <Button onClick={handleIncrease}>
        <img src="/public/images/icon-plus.svg" alt="plus" />
      </Button>
      <Score>{comment.score}</Score>
      <Button onClick={handleDecrease} disabled={comment.score === 0}>
        <img src="/public/images/icon-minus.svg" alt="minus" />
      </Button>
    </StyledScorePill>
  );
};

export default ScorePill;

type PropsType = {
  comment: CommentType;
  handleVote: (value: number) => void;
};
