import { Container, SpinnerCircle, SpinnerWrapper } from "./styled";

export function Loading({ loading }) {
  return (
    loading && (
      <Container>
        <SpinnerWrapper>
          <SpinnerCircle />
        </SpinnerWrapper>
      </Container>
    )
  );
}
