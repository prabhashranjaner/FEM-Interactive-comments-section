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

const ReplyItem = ({ reply, comment }: PropsType) => {
  const {
    state: { currentUser },
    dispatch,
  } = useStateData();

  const [isReply, setIsReply] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(reply.content);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //! Function to Vote
  const handleVote = (value: number) => {
    if (comment.replies) {
      const updatedReplies = comment.replies.map((item) => {
        if (item.id === reply.id) return { ...item, score: item.score + value };
        else return item;
      });
      dispatch({
        type: "comment/update",
        payload: { ...comment, replies: updatedReplies },
      });
    }
  };

  //! Function to add Reply
  const handleReply = (content: string) => {
    const newReply = {
      id: uuidv4(),
      content: content,
      user: currentUser,
      score: 0,
      createdAt: "",
      replyingTo: reply.user.username,
    };

    if (comment.replies) {
      const updatedComment = {
        ...comment,
        replies: [...comment.replies, newReply],
      };

      dispatch({ type: "comment/update", payload: updatedComment });
    }

    setIsReply(false);
  };

  //! Function to update a reply
  function handleUpdateReply() {
    setIsEdit(false);
    if (reply.content === value) return;
    if (comment.replies) {
      const updatedReplies = comment.replies.map((item) => {
        if (item.id === reply.id) return { ...item, content: value };
        else return item;
      });
      const updatedComment = { ...comment, replies: updatedReplies };
      dispatch({ type: "comment/update", payload: updatedComment });
    }
  }

  function handleDeleteReply() {
    if (comment.replies) {
      const updatedReplies = comment.replies.filter(
        (item) => item.id !== reply.id
      );
      const updatedComment = { ...comment, replies: updatedReplies };
      dispatch({ type: "comment/update", payload: updatedComment });
    }
  }
  return (
    <StyledCommentItem>
      <Card>
        <Top>
          <Avatar alt="avatar" src={reply.user.image.png} />
          <Title>{reply.user.username}</Title>
          {reply.user.username === currentUser.username && (
            <YouPill>you</YouPill>
          )}

          <DateWrapper>{reply.createdAt}</DateWrapper>
        </Top>
        {currentUser.username === reply.user.username && isEdit ? (
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
            {reply.replyingTo && <span>@{reply.replyingTo}</span>}
            {reply.content}
          </Content>
        )}
        <Bottom>
          <ScoreWrapper>
            <ScorePill comment={reply} handleVote={handleVote} />
          </ScoreWrapper>
          <OptionsWrapper>
            {reply.user.username === currentUser.username ? (
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
        <Modal handleYes={handleDeleteReply} handleNo={setIsModalOpen} />
      )}
    </StyledCommentItem>
  );
};

export default ReplyItem;

type PropsType = {
  reply: CommentType;
  comment: CommentType;
};
