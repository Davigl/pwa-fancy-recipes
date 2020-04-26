import React from 'react';

import {
  RecipeIngredient, IngredientTitle, IngredientMeasure, IngredientQuantity
} from './styles';

export default function index({ name, quantity, measure }) {
  return (
    <RecipeIngredient>
      <IngredientTitle> { name } </IngredientTitle>
      <IngredientQuantity> { quantity } </IngredientQuantity>
      <IngredientMeasure> { measure } </IngredientMeasure>
    </RecipeIngredient>
  );
}
