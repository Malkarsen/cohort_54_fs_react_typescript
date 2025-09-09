// Шаг 4: Импортируем хук useContext из библиотеки react
import { useContext } from "react";

import Button from "components/Button/Button";
import { MainContext } from "lessons/Lesson_13/components/Main/Main";

import { ContentInfo, ContentTitle, ContentWrapper } from "./styles";

function Content() {
  // Шаг 5: Получить доступ к данным, хранящимся в контексте
  const { userData, setUserData } = useContext(MainContext);
  console.log(userData);

  const deleteUserData = () => {
    // Тут пишем логику по удалению данных из state, который хранится в Main
    setUserData(undefined);
  };

  return (
    <ContentWrapper>
      <ContentTitle>Content Component</ContentTitle>
      <ContentInfo>Full name: {userData?.fullName}</ContentInfo>
      <ContentInfo>Age: {userData?.age}</ContentInfo>
      <ContentInfo>Job: {userData?.jobPosition}</ContentInfo>
      <Button buttonName="Dalete user data" isRed onClick={deleteUserData} />
    </ContentWrapper>
  );
}

export default Content;
