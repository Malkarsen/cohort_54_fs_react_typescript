import { PageWrapper, Paragraph, ButtonControl, Box1, Box2, Box3 } from "./styles";
import Button from "components/Button/Button";

function Lesson_08() {
  return (
    <PageWrapper>
      <Paragraph>Lesson 08</Paragraph>
      <ButtonControl>
        <Button buttonName="Simple Button" />
      </ButtonControl>
      <ButtonControl>
        <Button buttonName="Delete Button" isRed={true} />
      </ButtonControl>
      <ButtonControl>
        <Button buttonName="Disabled Button" isRed={true} disabled={true} />
      </ButtonControl>
      <Box1>Box1</Box1>
      <Box2>Box2</Box2>
      <Box3>Box3</Box3>
    </PageWrapper>
  );
}

export default Lesson_08;
