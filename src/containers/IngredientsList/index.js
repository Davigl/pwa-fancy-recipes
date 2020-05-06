import React from 'react';

import Ingredient from '~/components/Ingredient';

import { Wrapper, Title } from './styles';

export default function IngredientsList({ ingredients }) {
  const List = () => ingredients.map((ingredient, index) => (
    <Ingredient
      key={index}
      name={ingredient.ingredientName}
      quantity={ingredient.quantity}
      measure={ingredient.measure}
    />
  ));

  return (
    <>
      <Title> Ingredients </Title>
      <Wrapper>
        {ingredients && <List />}
      </Wrapper>
    </>
  );
}
