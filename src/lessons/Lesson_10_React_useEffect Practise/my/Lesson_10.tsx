import { useState } from "react";
import axios, { AxiosError } from "axios";
import { v4 } from "uuid";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

import {
  PageWrapper,
  UniversitiesWrapper,
  UniversitiesCard,
  Text,
  ErrorText,
} from "./styles";

function Lesson_10() {
  const [universities, setUniversities] = useState<string[] | undefined>([]);
  const [error, setError] = useState<string | undefined>(undefined);
  const [country, setCountry] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const getUniversities = async () => {
    setUniversities(undefined);
    setError(undefined);
    if (country !== "") {
      setIsDisabled(true);

      try {
        const response = await axios.get(
          `http://universities.hipolabs.com/search?country=${country}`
        );
        console.log(response);

        const data = response.data;
        if (data.length === 0) {
          setError(`No universities found for ${country}`);
        } else {
          const countryArray = response.data
            .splice(0, 15)
            .map((university: any) => {
              return <Text key={v4()}>{university.name}</Text>;
            });

          setUniversities(countryArray);
        }
      } catch (error: any) {
        setError("Some Network Error");
      } finally {
        setIsDisabled(false);
      }
    } else {
      alert(
        "Please enter the name of the country and then perform the search."
      );
    }
  };

  return (
    <PageWrapper>
      <UniversitiesWrapper>
        <Input
          id="country"
          name="country"
          placeholder="Enter Country for searching universities"
          label="Country"
          value={country}
          onChange={(event) => setCountry(event.target.value.trim())}
        ></Input>
        <Button
          buttonName="Get Universities"
          onClick={getUniversities}
          disabled={isDisabled}
        ></Button>
        {!!universities && <UniversitiesCard>{universities}</UniversitiesCard>}
        {!!error && <ErrorText>{error}</ErrorText>}
      </UniversitiesWrapper>
    </PageWrapper>
  );
}

export default Lesson_10;
