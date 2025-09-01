import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(5, 34, 57, 1);
`;

export const UniversitiesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 50px;
  border-radius: 8px;
  width: 800px;
  min-height: 300px;
  height: fit-content;
  background-color: white;
`;

export const UniversitiesCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Text = styled.p`
  font-size: 20px;
`;

export const ErrorText = styled(Text)`
  color: red;
`;
