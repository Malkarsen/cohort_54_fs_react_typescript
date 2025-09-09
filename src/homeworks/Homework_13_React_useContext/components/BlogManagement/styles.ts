import styled from "@emotion/styled";

export const BlogManagementForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 50px;
  border: 1px solid black;
  border-radius: 8px;
  padding: 50px;
  width: 600px;
  height: fit-content;
  background-color: white;
`;

export const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const TextArea = styled.textarea`
  outline: none;
  border: 1px solid black;
  border-radius: 8px;
  padding: 15px;
  min-width: 100%;
  max-width: 100%;
  min-height: 150px;
  max-height: 200px;
  font-size: 20px;
`;

export const ErrorText = styled.div`
  height: 18px;
  font-size: 16px;
  color: rgba(232, 23, 23, 1);
`;
