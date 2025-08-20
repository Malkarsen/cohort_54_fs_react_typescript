import Button from "components/Button/Button";
import { type FeedbackProps } from "./types";
import {
  FeedbackWrapper,
  FeedbackControl,
  ButtonWithCountContainer,
  Count,
} from "./styles";

function Feedback({
  onLike,
  like,
  onDislike,
  dislike,
  resetResults,
}: FeedbackProps) {
  return (
    <FeedbackWrapper>
      <FeedbackControl>
        <ButtonWithCountContainer>
          <Button buttonName="Like" onClick={onLike} />
          <Count>{like}</Count>
        </ButtonWithCountContainer>
        <ButtonWithCountContainer>
          <Button buttonName="Dislike" onClick={onDislike} />
          <Count>{dislike}</Count>
        </ButtonWithCountContainer>
      </FeedbackControl>
      <Button buttonName="Reset Results" onClick={resetResults} />
    </FeedbackWrapper>
  );
}

export default Feedback;
