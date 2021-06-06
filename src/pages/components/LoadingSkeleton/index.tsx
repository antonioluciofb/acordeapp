import React from "react";
import ContentLoader from "react-content-loader";

import { Container, BoxLoading, ChordLoading } from "./styles";

const LoadingSkeleton: React.FC = () => {
  return (
    <Container>
      <BoxLoading>
        <ContentLoader speed={2} width={250} height={300} viewBox="0 0 200 200" backgroundColor="#dbdbdb" foregroundColor="#f3f3f3">
          <rect x="35" y="34" rx="5" ry="5" width="130" height="161" />
          <circle cx="38" cy="16" r="10" />
          <circle cx="68" cy="16" r="10" />
          <circle cx="99" cy="16" r="10" />
          <circle cx="130" cy="16" r="10" />
          <circle cx="159" cy="16" r="10" />
        </ContentLoader>
      </BoxLoading>
      <ChordLoading>
        <ContentLoader speed={2} width={50} height={50} viewBox="0 0 200 200" backgroundColor="#dbdbdb" foregroundColor="#f3f3f3">
          <rect x="30" y="30" rx="10" ry="10" width="140" height="140" />
        </ContentLoader>
        <ContentLoader speed={2} width={50} height={50} viewBox="0 0 200 200" backgroundColor="#dbdbdb" foregroundColor="#f3f3f3">
          <rect x="30" y="30" rx="10" ry="10" width="140" height="140" />
        </ContentLoader>
        <ContentLoader speed={2} width={50} height={50} viewBox="0 0 200 200" backgroundColor="#dbdbdb" foregroundColor="#f3f3f3">
          <rect x="30" y="30" rx="10" ry="10" width="140" height="140" />
        </ContentLoader>
      </ChordLoading>
      <ContentLoader speed={2} width={100} height={30} viewBox="0 0 100 30" backgroundColor="#dbdbdb" foregroundColor="#f3f3f3">
        <rect rx="5" ry="5" width="100" height="30" />
      </ContentLoader>
    </Container>
  );
};

export default LoadingSkeleton;
