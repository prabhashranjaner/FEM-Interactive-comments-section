import type { Dispatch } from "react";

export type UserType = {
  image: {
    png: string;
    webp: string;
  };
  username: string;
};

export type CommentType = {
  id: string;
  content: string;
  createdAt: string;
  score: number;
  user: UserType;
  replyingTo?: string;
  replies?: CommentType[];
};

export type newCommnetType = Extract<CommentType, "content" | "user">;

export type ActionType =
  | {
      type: "comment/add";
      payload: string;
    }
  | {
      type: "comment/update";
      payload: Partial<CommentType>;
    }
  | {
      type: "comment/delete";
      payload: string;
    };

export type StateType = {
  currentUser: UserType;
  comments: CommentType[];
};

export type ContextType = {
  state: StateType;
  dispatch: Dispatch<ActionType>;
};
