import styled from "styled-components";
import { FontSize, FontWeight } from "@shared/styles/styles";

export const StyledTypography = {
  H1: styled.div`
    font-size: ${FontSize.u1};
  `,
  Bold: styled.p`
    font-weight: ${FontWeight.strong};
  `,
};
