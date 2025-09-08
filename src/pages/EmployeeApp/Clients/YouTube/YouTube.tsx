import ClientPage from "pages/EmployeeApp/Clients/components/ClientPage/ClientPage";

import { PageWrapper } from "./styles";

function YouTube() {
  return (
    <PageWrapper>
      <ClientPage
        title="YouTube"
        yearOfFoundation={2005}
        placeOfFoundation="USA"
        founders={["Chad Hurley", "Steve Chen", "Jawed Karim"]}
        ownership="Acquired by Google (Alphabet) in 2006"
        purpose="Video hosting and streaming platform"
        numberOfUsers="Over 2.5 billion monthly active users (2023)"
      />
    </PageWrapper>
  );
}

export default YouTube;
