import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";

import { PageWrapper, ButtonControl } from "./styles";

function About() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goToMainPage = () => {
    navigate("/");
  };
  return (
    <PageWrapper>
      Information about company
      <ButtonControl>
        <Button buttonName="Go back" onClick={goBack} />
      </ButtonControl>
      <ButtonControl>
        <Button buttonName="Go to Home page" onClick={goToMainPage} />
      </ButtonControl>
    </PageWrapper>
  );
}

export default About;
