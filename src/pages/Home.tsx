import { FunctionComponent } from 'react';
import ErrorBoundary from '@shared/components/ErrorBoundary';
import Container from '@shared/components/Container';
import styled from 'styled-components';
import { Spacing } from '@shared/styles/styles';
import { Link } from 'react-router-dom';
import { Colors } from '@shared/styles/colors';
import { StyledTypography } from '@shared/styles/typography';

export const Home: FunctionComponent = () => {
  return (
    <ErrorBoundary>
      <Container>
        <StyledTypography.H1>Problem Context</StyledTypography.H1>
        <p>
          The story is set in the planet of Lengaburu......in the distant,
          distant galaxy of Tara B. And our protagonists are King Shan, Queen
          Anga & their family. King Shan is the emperor of Lengaburu and has
          been ruling the planet for the last 350 years (they have long lives in
          Lengaburu, you see!). The Empire has now been for FOUR generations
        </p>
        <StyledTypography.Bold>
          Problem 4 is to help folks in Lengaburu know the relationship between
          the royalty as the empire has been around for four generations
        </StyledTypography.Bold>
        <S.Link>
          <Link to={`/result`}> Go to Problem 4</Link>
        </S.Link>
      </Container>
    </ErrorBoundary>
  );
};

const S = {
  Link: styled.div`
    display: inline-block;
    background-color: ${Colors.blue.base};
    outline: none;
    border: 0;
    border-radius: ${Spacing.u1};
    min-width: 120px;
    &:hover,
    &:focus {
      cursor: pointer;
      opacity: 0.8;
    }
    ,
    > a {
      color: ${Colors.white.base};
      text-decoration: none;
      padding: ${Spacing.u3};
    }
  `,
};

export default Home;
