import styled from 'styled-components';

import {
  loadingEffect, focusIn, tiltIn
} from '~/assets/styles/partials/_animations';

export const Container = styled.main`
  display: flex;
  min-height: 100vh;

  @media screen and (max-width: 768px) {
    height: auto;
    flex-direction: column-reverse;
  }
`;

export const RecipeWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const RecipeTitle = styled.h1`
  animation: ${focusIn} 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  color: #fff;
  font-family: 'Quicksand', sans-serif;
  font-size: ${(props) => (props.titleSize > 20 ? '3.5rem' : '4.5rem')};
  font-weight: 500;
  color: ${(props) => props.color};

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    flex-basis: 10vh;
  }
`;

export const RecipeInstructions = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-family: 'Quicksand';
  text-align: justify;
  white-space: pre-line;
  color: #666;
`;

export const RecipeDescription = styled.p`
  color: #fff;
  animation: ${focusIn} 2s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  line-height: 3rem;
  font-family: 'Nunito';
  font-size: 20px;
`;

export const TypeFood = styled.span`
  animation: ${focusIn} 4s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  margin-left: 5px;
  font-family: 'Quicksand';
  font-size: 18px;
`;

export const FirstWrapper = styled.div`
  color: #fff;
  transition: background-color 1s linear,
            left .6s ease-out 1s,
            transform 1s steps(3, start);
  background-color: ${(props) => props.hex};
  color: ${(props) => props.bodyColor};
  display: flex;
  flex-basis: 60%;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SecondWrapper = styled.div`
  flex-basis: 40%;
  animation: ${focusIn} 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  background-image: url(${(props) => props.thumbnail});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (max-width: 768px) {
    flex-basis: initial;
    height: 40vh;
  }
`;

export const Loading = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  color: #fff;

  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${loadingEffect} 1.2s linear infinite;
  }
`;

export const ModalWrapper = styled.section`
  width: 400px;
  overflow-y: auto;
  max-height: 80vh;
  padding: 30px;
  background: #fff;
  border-radius: 15px;
  text-align: justify;
  animation: ${tiltIn} 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

  @media screen and (max-width: 768px) {
    width: 300px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  animation: ${focusIn} 2s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
`;

export const InstructionsButton = styled.button`
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  margin: 20px;
  border: 7px solid rgba(255,255,255,0.6);
  border-radius: 50px;
  padding: 1em 4em;
  background-repeat: no-repeat;
  background-size: 100%;
  background-clip: padding-box;
  background-color: ${(props) => props.hex};
  position: relative;
  color: #FFF;
  outline: none;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  &:before {
    background-image: linear-gradient(90deg, #a97fd4, transparent);
  }

  &:after {
    background-image: linear-gradient(90deg, transparent, #a97fd4);
  }

  @media screen and (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const InstructionsTitle = styled.h1`
  color: ${(props) => props.hex};
  font-size: 30px;
  margin-bottom: 15px;
  text-align: center;
`;
