import styled from "styled-components";

export const Button = styled.button`
  padding: 0.8rem;
  border: 5px;
  color: white;
  border-radius: 6px;
  width: 120px;
  justify-self: end;
  font-weight: 700;
`;

export const BlueButton = styled(Button)`
  background-color: var(--col-purple);
`;

export const GrayButton = styled(Button)`
  background-color: var(--col-gray-3);
`;

export const PinkButton = styled(Button)`
  background-color: var(--col-pink);
`;

export const StyledCommentItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
`;

export const Title = styled.span`
  font-weight: 700;
  color: var(--col-gray-5);
`;

export const YouPill = styled.span`
  background-color: var(--col-purple);
  font-size: 14px;
  color: white;
  padding: 1px 3px;
`;

export const DateWrapper = styled.span`
  color: var(--col-gray-3);
  font-size: 14px;
  margin-left: 8px;
`;

export const Content = styled.p`
  color: var(--col-gray-3);
  line-height: 22px;

  & span {
    font-weight: 700;
    margin-right: 5px;
    color: var(--col-purple);
  }
`;

export const EditForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: end;
`;
export const EditInput = styled.textarea`
  padding: 8px;
  border-radius: 6px;
  border: 1px solid lightgray;
  width: 100%;
  outline: none;
  line-height: 20px;
  color: var(--col-gray-4);
  &:hover {
    border-color: var(--col-purple);
  }
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ScoreWrapper = styled.div``;

export const OptionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media screen and (min-width: 786px) {
    position: absolute;
    top: 15%;
    right: 20px;
  }
`;

export const IconWrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: var(--col-purple);

  &.delete {
    color: var(--col-pink);
  }

  &:hover {
    filter: brightness(120%);
  }
`;
