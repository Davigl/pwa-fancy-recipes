import Vibrant from 'node-vibrant';

import api from '~/services/api';

import { threatMeal } from './helpers';

const getDominantColor = async (image) => Vibrant.from(image).getPalette().then((data) => data);

const getMeal = async () => {
  let meal = await api.get('random.php').then(({ data }) => threatMeal(data.meals[0]));

  return meal;
};

export { getDominantColor, getMeal };
