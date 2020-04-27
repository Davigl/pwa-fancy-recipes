import styled from 'styled-components';

export const RecipeIngredient = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 130px;
  padding: 15px;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, .3);
  box-shadow: 2px 6px 5px 0px rgba(204,204,204, .6);
  margin: 5px;
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
