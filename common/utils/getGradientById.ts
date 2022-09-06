import gradients from "@jsons/gradients";
import { Id } from "@types";
import { GradientScheme } from '@interfaces';

const getGradientById: {
  (id: Id): GradientScheme
} = id => gradients[id];

export default getGradientById;