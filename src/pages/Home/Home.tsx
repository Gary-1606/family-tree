import { FunctionComponent } from "react";
import ErrorBoundary from "@shared/components/ErrorBoundary";
import Container from "@shared/components/Container";
import Button from "@shared/components/Button";

export const Home: FunctionComponent = () => {
  const onBtnClick = () => {
    console.log("working...");
  };

  return (
    <ErrorBoundary>
      <Container>
        <Button buttonText="Trial" onBtnClick={onBtnClick} />
      </Container>
    </ErrorBoundary>
  );
};

export default Home;
