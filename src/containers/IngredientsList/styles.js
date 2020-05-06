import styled from 'styled-components';

import { focusIn } from '~/assets/styles/partials/_animations';

export const Wrapper = styled.div`
  animation: ${focusIn} 3.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  display: flex;
  width: 70%;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  animation: ${focusIn} 3s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  font-family: 'Quicksand', sans-serif;
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 3rem;
`;
