import { keyframes } from 'styled-components';

export const loadingEffect = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const focusIn = keyframes`
  0% {
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    filter: blur(0px);
    opacity: 1;
  }
`;

export const tiltIn = keyframes`
   0% {
    transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg);
    opacity: 0;
  }
  100% {
    transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
    opacity: 1;
  }
`;

export const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100%;
  }

`;
