import { getFavGradients, addFavGradient, removeFavGradient } from "@utils";

const handleGradientSave = (id: string) => {
  getFavGradients().includes(id) ? removeFavGradient(id) : addFavGradient(id);
};

export default handleGradientSave;
