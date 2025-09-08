import { PageWrapper, ClientLink } from "./styles";

function Clients() {
  return (
    <PageWrapper>
      <ClientLink to="/facebook">Facebook</ClientLink>
      <ClientLink to="/instagram">Instagram</ClientLink>
      <ClientLink to="/youtube">YouTube</ClientLink>
    </PageWrapper>
  );
}

export default Clients;
