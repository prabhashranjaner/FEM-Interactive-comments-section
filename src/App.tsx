import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { useStateData } from "./state/StateDataContextProvider";
import CommentWrapper from "./ui/CommentWrapper";
import Input from "./ui/Input";

const Main = styled.main`
  width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 1rem;

  @media screen and (min-width: 786px) {
    width: 700px;
  }
`;

const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

function App() {
  const { state, dispatch } = useStateData();

  const handleAddComment = (value: string) => {
    dispatch({ type: "comment/add", payload: value });
  };

  return (
    <Main>
      <GlobalStyles />
      <CommentList>
        {state.comments.map((comment) => (
          <CommentWrapper key={comment.id} comment={comment} />
        ))}
      </CommentList>
      <Input handleSubmit={handleAddComment} />
    </Main>
  );
}

export default App;
