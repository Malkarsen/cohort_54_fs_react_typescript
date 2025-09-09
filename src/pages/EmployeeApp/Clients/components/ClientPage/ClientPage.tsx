import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";

import { type ClientPageProps } from "./types";
import {
  ClientPageWrapper,
  ClientInfoWrapper,
  Title,
  ClientInfo,
  ClientInfoTitle,
  FoundersListItem,
} from "./styles";

function ClientPage({
  title,
  yearOfFoundation,
  placeOfFoundation,
  founders,
  ownership,
  purpose = "",
  numberOfUsers,
}: ClientPageProps) {
  const foundersList = founders.map((founder) => {
    return <FoundersListItem key={v4()}>{founder}</FoundersListItem>;
  });

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <ClientPageWrapper>
      <Title>{title}</Title>
      <ClientInfoWrapper>
        <ClientInfo>
          <ClientInfoTitle>Founded:</ClientInfoTitle> {yearOfFoundation},{" "}
          {placeOfFoundation}
        </ClientInfo>
        <ClientInfo>
          <ClientInfoTitle>Founders:</ClientInfoTitle> {foundersList}
        </ClientInfo>
        <ClientInfo>
          <ClientInfoTitle>Ownership:</ClientInfoTitle> {ownership}
        </ClientInfo>
        <ClientInfo>
          <ClientInfoTitle>Purpose:</ClientInfoTitle> {purpose}
        </ClientInfo>
        <ClientInfo>
          <ClientInfoTitle>Users:</ClientInfoTitle> {numberOfUsers}
        </ClientInfo>
      </ClientInfoWrapper>
      <Button buttonName="Go back" onClick={goBack}></Button>
    </ClientPageWrapper>
  );
}

export default ClientPage;
