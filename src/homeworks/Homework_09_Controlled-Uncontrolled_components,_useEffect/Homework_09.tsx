import { useState, useEffect } from "react";

import Button from "components/Button/Button";
import {
  Homework_09PageWrapper,
  JokeWrapper,
  JokeContainer,
  Joke,
  JokeSetup,
  JokePunchline,
  Error,
} from "./styles";

function Homework_09() {
  const JOKE_URL: string = "https://official-joke-api.appspot.com/random_joke";
  
  const [jokeSetup, setJokeSetup] = useState<string | undefined>(undefined);
  const [jokePunchline, setJokePunchline] = useState<string | undefined>(
    undefined
  );
  const [error, setError] = useState<string | undefined>(undefined);

  const getNewJoke = async () => {
    const response = await fetch(JOKE_URL, { method: "GET" });
    const result = await response.json();

    if (response.ok) {
      setJokeSetup(result.setup);
      setJokePunchline(result.punchline);

      setError(undefined);
    } else {
      setJokeSetup(undefined);
      setJokePunchline(undefined);

      setError("Some Network Error");
    }
  };

  useEffect(() => {
    getNewJoke();
  }, [])

  return (
    <Homework_09PageWrapper>
      <JokeWrapper>
        <JokeContainer>
          <Joke>
            <JokeSetup>{jokeSetup}</JokeSetup>
            <JokePunchline>{jokePunchline}</JokePunchline>
          </Joke>
          <Error>{error}</Error>
        </JokeContainer>
        <Button buttonName="Get new joke" onClick={getNewJoke}></Button>
      </JokeWrapper>
    </Homework_09PageWrapper>
  );
}

export default Homework_09;
