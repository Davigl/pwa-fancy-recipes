import styled from 'styled-components';

export const RecipeIngredient = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 130px;
  padding: 15px;
  border-radius: 3px;
  background-color: rgba(169, 127, 212, 0.6);
  margin: 3px;
`;

export const IngredientTitle = styled.span`
  font-size: 19px;
  margin-bottom: 10px;
  font-weight: 700;
`;

export const IngredientQuantity = styled.span`
  font-size: 22px;
  margin-top: 10px;
  font-weight: 700;
`;

export const IngredientMeasure = styled.span`
  margin-top: 35px;
  font-size: 15px;
  font-weight: 400;
  min-height: 22px;
`;
