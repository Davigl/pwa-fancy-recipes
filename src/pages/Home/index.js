import React, { useState, useEffect } from 'react';
import useModal from 'react-hooks-use-modal';

import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import IngredientsList from '~/containers/IngredientsList';
import { getDominantColor, getMeal } from '~/utils';

import {
  Container, FirstWrapper, SecondWrapper, RecipeWrapper, RecipeTitle,
  RecipeDescription, TypeFood, Loading, ModalWrapper, InstructionsButton,
  ButtonsWrapper, RecipeInstructions, InstructionsTitle
} from './styles';

export default function Home() {
  const [hexColor, setHexcolor] = useState('#fff');
  const [titleSize, setTitleSize] = useState(0);
  const [meal, setMeal] = useState({});
  const [loading, setLoading] = useState(false);
  const [Modal, open] = useModal('root');

  async function getRandomMeal() {
    setLoading(true);

    await setMeal(await getMeal());

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }

  useEffect(() => {
    const getColor = async () => {
      const { Vibrant } = await getDominantColor(meal.thumbnail);

      setHexcolor(Vibrant.hex);
    };

    if (meal.thumbnail) {
      getColor();
      setTitleSize(meal.title.length);
    }
  }, [meal]);

  useEffect(() => {
    getRandomMeal();
  }, []);

  return (
    <Container>
      <FirstWrapper hex={hexColor}>
        { loading ? <Loading />
          : (
            <>
              <RecipeWrapper>
                <RecipeTitle titleSize={titleSize}> { meal.title } </RecipeTitle>
                <RecipeDescription> {meal.country} Food </RecipeDescription>
                <TypeFood> {meal.category} </TypeFood>

                <ButtonsWrapper>
                  <InstructionsButton type="button" onClick={open} hex={hexColor}> Instructions </InstructionsButton>
                  <InstructionsButton type="button" onClick={getRandomMeal} hex={hexColor}> <FontAwesomeIcon icon={faRedoAlt} /> </InstructionsButton>
                </ButtonsWrapper>
              </RecipeWrapper>
              <IngredientsList ingredients={meal.ingredients} />
              <Modal>
                <ModalWrapper>
                  <InstructionsTitle hex={hexColor}> Instructions </InstructionsTitle>
                  <RecipeInstructions> {meal.instructions} </RecipeInstructions>
                </ModalWrapper>
              </Modal>
            </>
          )}
      </FirstWrapper>
      { !loading && <SecondWrapper thumbnail={meal.thumbnail} /> }
    </Container>
  );
}
