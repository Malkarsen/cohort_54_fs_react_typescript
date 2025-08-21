import styled from "@emotion/styled";

export const Homework08PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export const ElementControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 400px;
`;

export const Text = styled.p`
  font-size: 30px;
  font-weight: bold;
`;

// Можно достилизовать компонент:
// в данном примере мы берем все стили ElementControl в DellteButtonControl + добавляем свои стили
export const DeleteButtonControl = styled(ElementControl)`
  width: 400px;
`;
