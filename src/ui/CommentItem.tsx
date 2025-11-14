import type { CommentType } from "../types/contexTypes";
import Card from "./Card";
import ScorePill from "./ScorePill";
import { useStateData } from "../state/StateDataContextProvider";
import { useState } from "react";
import Input from "./Input";
import { v4 as uuidv4 } from "uuid";
import {
  Avatar,
  BlueButton,
  Bottom,
  Content,
  DateWrapper,
  EditForm,
  EditInput,
  IconWrapper,
  OptionsWrapper,
  ScoreWrapper,
  StyledCommentItem,
  Title,
  Top,
  YouPill,
} from "../styles/sharedStyles";
import Modal from "./Modal";

const CommentItem = ({ comment }: PropsType) => {
  const {
    state: { currentUser },
    dispatch,
  } = useStateData();

  const [isReply, setIsReply] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(comment.content);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReply = (content: string) => {
    //! If the "comment" is comment
    if (comment.replies) {
      const newReply = {
        id: uuidv4(),
        content: content,
        user: currentUser,
        score: 0,
        createdAt: "",
        replyingTo: comment.user.username,
      };

      const updatedComment = {
        ...comment,
        replies: [...comment.replies, newReply],
      };

      dispatch({ type: "comment/update", payload: updatedComment });
    }

    setIsReply(false);
  };

  const handleVote = (value: number) => {
    dispatch({
      type: "comment/update",
      payload: { ...comment, score: comment.score + value },
    });
  };

  //! Function to update a reply
  function handleUpdateReply() {
    if (comment.content === value) return;
    const updatedComment = { ...comment, content: value };
    dispatch({ type: "comment/update", payload: updatedComment });
    setIsEdit(false);
  }

  function handleDeleteComment() {
    dispatch({ type: "comment/delete", payload: comment.id });
  }

  return (
    <StyledCommentItem>
      <Card>
        <Top>
          <Avatar alt="avatar" src={comment.user.image.png} />
          <Title>{comment.user.username}</Title>
          {comment.user.username === currentUser.username && (
            <YouPill>you</YouPill>
          )}

          <DateWrapper>{comment.createdAt}</DateWrapper>
        </Top>
        {currentUser.username === comment.user.username && isEdit ? (
          <EditForm>
            <EditInput
              rows={4}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            ></EditInput>
            <BlueButton onClick={handleUpdateReply}>UPDATE</BlueButton>
          </EditForm>
        ) : (
          <Content>
            {comment.replyingTo && <span>@{comment.replyingTo}</span>}
            {comment.content}
          </Content>
        )}

        <Bottom>
          <ScoreWrapper>
            <ScorePill comment={comment} handleVote={handleVote} />
          </ScoreWrapper>
          <OptionsWrapper>
            {comment.user.username === currentUser.username ? (
              <>
                <IconWrapper
                  className="delete"
                  onClick={() => setIsModalOpen(true)}
                >
                  <img alt="delete" src="/images/icon-delete.svg" />
                  <span>Delete</span>
                </IconWrapper>
                <IconWrapper onClick={() => setIsEdit(true)}>
                  <img alt="edit" src="/images/icon-edit.svg" />
                  <span>Edit</span>
                </IconWrapper>
              </>
            ) : (
              <IconWrapper onClick={() => setIsReply((s) => !s)}>
                <img alt="reply" src="/images/icon-reply.svg" />
                <span>Reply</span>
              </IconWrapper>
            )}
          </OptionsWrapper>
        </Bottom>
      </Card>

      {isReply && <Input handleSubmit={handleReply} />}
      {isModalOpen && (
        <Modal handleYes={handleDeleteComment} handleNo={setIsModalOpen} />
      )}
    </StyledCommentItem>
  );
};

export default CommentItem;

type PropsType = {
  comment: CommentType;
};
