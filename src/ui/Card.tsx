import type { ReactNode } from "react";
import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: white;
  width: 100%;
  padding: 1rem;
  position: relative;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media screen and (min-width: 786px) {
    padding-left: 5rem;
  }
`;

const Card = ({ children }: PropsType) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;

type PropsType = {
  children: ReactNode;
};
