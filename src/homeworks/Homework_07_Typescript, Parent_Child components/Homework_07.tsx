import "./styles.css";
import { useState } from "react";

import Feedback from "components/Feedback/Feedback";

function Homework_07() {
  const [like, setLike] = useState<number>(0);
  const [dislike, setDislike] = useState<number>(0);

  const onLike = () => {
    setLike((prevValue: number) => prevValue + 1);
  };

  const onDislike = () => {
    setDislike((prevValue: number) => prevValue + 1);
  };

  const resetResults = () => {
    setLike(0);
    setDislike(0);
  };

  return (
    <div className="homework07_page_wrapper">
      <Feedback
        onLike={onLike}
        like={like}
        onDislike={onDislike}
        dislike={dislike}
        resetResults={resetResults}
      />
    </div>
  );
}

export default Homework_07;
