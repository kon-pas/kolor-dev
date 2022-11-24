const removeFavGradient = (id: string) => {
  const favGradientsStr = localStorage.getItem("gradients");

  if (favGradientsStr) {
    const favGradients = JSON.parse(favGradientsStr).filter(
      (e: string) => e !== id
    );

    localStorage.setItem("gradients", JSON.stringify(favGradients));
  }
};

export default removeFavGradient;
