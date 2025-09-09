import { useEffect } from "react";
import { ROUTES } from "constants/routes";

import { PageWrapper, ClientLink } from "./styles";

function Clients() {
  useEffect(() => {
    // Unmounting
    return () => {
      console.log("Inmounting Clients Component");
    };
  });

  return (
    <PageWrapper>
      <ClientLink to={ROUTES.FACEBOOK}>Facebook</ClientLink>
      <ClientLink to={ROUTES.INSTAGRAM}>Instagram</ClientLink>
      <ClientLink to={ROUTES.YOUTUBE}>YouTube</ClientLink>
    </PageWrapper>
  );
}

export default Clients;
