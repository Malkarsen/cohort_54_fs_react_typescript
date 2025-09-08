import ClientPage from "pages/EmployeeApp/Clients/components/ClientPage/ClientPage";

import { PageWrapper } from "./styles";

function Instagram() {
  return (
    <PageWrapper>
      <ClientPage
        title="Instagram"
        yearOfFoundation={2010}
        placeOfFoundation="USA"
        founders={["Kevin Systrom", "Mike Krieger"]}
        ownership="Acquired by Facebook (Meta) in 2012"
        purpose="Social network for sharing photos and short videos"
        numberOfUsers="Over 2 billion monthly active users (2023)"
      />
    </PageWrapper>
  );
}

export default Instagram;
