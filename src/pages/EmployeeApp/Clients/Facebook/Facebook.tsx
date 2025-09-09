import ClientPage from "pages/EmployeeApp/Clients/components/ClientPage/ClientPage";

import { PageWrapper } from "./styles";

function Facebook() {
  return (
    <PageWrapper>
      <ClientPage
        title="Facebook"
        yearOfFoundation={2004}
        placeOfFoundation="Harvard, USA"
        founders={[
          "Mark Zuckerberg",
          "Eduardo Saverin",
          "Andrew McCollum",
          "Dustin Moskovitz",
          "Chris Hughes",
        ]}
        ownership="Part of Meta Platforms, Inc."
        purpose="Social network for communication, posting updates, sharing photos and videos"
        numberOfUsers="Over 3 billion monthly active users (2023)"
      />
    </PageWrapper>
  );
}

export default Facebook;
