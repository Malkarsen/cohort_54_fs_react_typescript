import styled from "@emotion/styled";

export const ClientPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 500px;
  height: fit-content;
`;

export const ClientInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: rgba(0, 10, 66, 0.9);
`;

export const ClientInfo = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 24px;
  font-weight: normal;
  color: rgba(1, 6, 33, 0.9);
`;

export const ClientInfoTitle = styled.span`
  padding-bottom: 10px;
  font-weight: bold;
`;

export const FoundersListItem = styled.li`
  font-size: 20px;
  font-weight: normal;
`;
