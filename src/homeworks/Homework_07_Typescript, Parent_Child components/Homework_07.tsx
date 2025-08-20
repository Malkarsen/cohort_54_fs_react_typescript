import { useState } from "react";
import { Homework07PageWrapper } from "./styles";

import Feedback from "components/Feedback/Feedback";

function Homework_07() {
  const [like, setLike] = useState<number>(0);
  const [dislike, setDislike] = useState<number>(0);

  const onLike = (): void => {
    setLike((prevValue: number): number => prevValue + 1);
  };

  const onDislike = (): void => {
    setDislike((prevValue: number): number => prevValue + 1);
  };

  const resetResults = (): void => {
    setLike(0);
    setDislike(0);
  };

  const isRow = true;
  
  return (
    <Homework07PageWrapper style={ {display: "flex", flexDirection: isRow ? "row" : "column"}}>
      <Feedback
        onLike={onLike}
        like={like}
        onDislike={onDislike}
        dislike={dislike}
        resetResults={resetResults}
      />
    </Homework07PageWrapper>
  );
}

export default Homework_07;
