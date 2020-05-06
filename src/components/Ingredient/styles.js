import styled from 'styled-components';

export const RecipeIngredient = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  flex-direction: column;
  width: 120px;
  height: 120px;
  padding: 15px;
  border-radius: 5px;
  margin: 8px;
  background-color: rgba(255, 255, 255, .3);
`;

export const IngredientTitle = styled.span`
  font-size: 19px;
  font-weight: 700;
`;

export const IngredientQuantity = styled.span`
  font-size: 22px;
  font-weight: 700;
`;

export const IngredientMeasure = styled.span`
  font-size: 15px;
  font-weight: 400;
  min-height: 22px;
`;
