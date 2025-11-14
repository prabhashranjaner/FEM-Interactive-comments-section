import styled from "styled-components";
import { Button } from "../styles/sharedStyles";
import { useStateData } from "../state/StateDataContextProvider";
import { useState } from "react";

const InputCard = styled.div`
  background-color: white;
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

const TextArea = styled.textarea`
  grid-column: span 2;
  border-radius: 8px;
  border: 1px solid var(--col-gray-2);
  padding: 10px;
  outline: none;

  &:focus {
    border: 1px solid var(--col-purple);
  }
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
`;

const SendButton = styled(Button)`
  background-color: var(--col-purple);
`;

const Input = ({ handleSubmit }: PropsType) => {
  const { state } = useStateData();

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input) return;
    handleSubmit(input);
    setInput("");
  };

  return (
    <InputCard>
      <TextArea
        rows={5}
        placeholder="Add a comment..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></TextArea>
      <Avatar alt="avatar" src={state.currentUser.image.png} />
      <SendButton onClick={handleSend}>SEND</SendButton>
    </InputCard>
  );
};

export default Input;

type PropsType = {
  handleSubmit: (value: string) => void;
};
