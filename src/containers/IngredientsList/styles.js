import styled from 'styled-components';

import { focusIn } from '~/assets/styles/partials/_animations';

export const Wrapper = styled.div`
  animation: ${focusIn} 2s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  display: flex;
  width: 70%;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
