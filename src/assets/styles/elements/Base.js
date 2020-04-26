import { css, createGlobalStyle } from 'styled-components';

import NeurialGroteskMedium from '~/assets/fonts/NeurialGrotesk-Medium.otf';
import NeurialGroteskRegular from '~/assets/fonts/NeurialGrotesk-Regular.otf';
import Quicksand from '~/assets/fonts/Quicksand-Regular.ttf';

const Fonts = css`
  @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

  @font-face {
    font-family: 'Quicksand';
    src: url(${Quicksand});
  }

  @font-face {
    font-family: 'NeurialGrotesk-Regular';
    src: url(${NeurialGroteskRegular});
  }

  @font-face {
    font-family: 'NeurialGrotesk-Medium';
    src: url(${NeurialGroteskMedium});
  }
`;

const GlobalStyle = createGlobalStyle`
  ${Fonts};

  body {
    font-family: Nunito, sans-serif;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar {
    width: 10px;
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ba83ca;
    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%,  rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent)
  }
`;

export default GlobalStyle;
