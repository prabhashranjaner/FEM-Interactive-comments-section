import type { ActionType, StateType } from "../types/contexTypes";
import { v4 as uuidv4 } from "uuid";

export function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case "comment/add": {
      //! crate created At
      const newComment = {
        id: uuidv4(),
        content: action.payload,
        user: state.currentUser,
        score: 0,
        createdAt: "now",
        replies: [],
      };

      return { ...state, comments: [...state.comments, newComment] };
    }

    case "comment/update": {
      const newCommentList = state.comments.map((comment) => {
        if (comment.id === action.payload.id) return action.payload;
        else return comment;
      });

      return { ...state, comments: newCommentList };
    }

    case "comment/delete": {
      return {
        ...state,
        comments: state.comments.filter(
          (comment) => comment.id !== action.payload
        ),
      };
    }
    default:
      return state;
  }
}
