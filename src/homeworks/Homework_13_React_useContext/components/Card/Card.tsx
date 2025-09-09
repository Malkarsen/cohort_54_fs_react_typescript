import Message from "homeworks/Homework_13_React_useContext/components/Message/Message";

import { FullNameTitle, CardWrapper } from "./styles";

function Card() {
  return (
    <CardWrapper>
      <FullNameTitle>Arina Malko</FullNameTitle>
      <Message></Message>
    </CardWrapper>
  );
}

export default Card;
