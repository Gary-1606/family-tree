/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { FunctionComponent } from 'react';
import { StyledTypography } from '@shared/styles/typography';
import familytree from '@shared/assets/images/family-tree.png';

export const ContextHeader: FunctionComponent = () => {
  return (
    <>
      <StyledTypography.H1>Problem 4: Who&#39;s Your Daddy</StyledTypography.H1>
      <p>
        Since the empire has been around for four generations, there are many
        folks in Lengaburu who do not know the relationship between the royalty.{' '}
      </p>
      <StyledTypography.Bold>
        Given two names as input, the output should be the relationship between
        the two.
      </StyledTypography.Bold>
      <StyledTypography.Bold>
        Input: Person = Kriya <br /> Input: Relative = Saayan <br />
        Expected Output: Paternal Uncle
      </StyledTypography.Bold>
      <img width={1100} src={familytree} alt="family-tree" />
    </>
  );
};

export default ContextHeader;
