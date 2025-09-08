import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ClientLink = styled(Link)`
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: rgba(0, 10, 66, 0.9);
`;
