import gradients from "@jsons/gradients";
import { Id } from "@types";

const getGradientById = (id: Id) => gradients[id];

export default getGradientById;