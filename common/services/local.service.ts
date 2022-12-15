const GRADIENTS: string[] = [];

const gradients: {
  add: (id: string) => void;
  remove: (id: string) => void;
  save: () => void;
  includes: (id: string) => boolean;
} = {
  add(id) {
    GRADIENTS.push(id);
  },

  remove(id) {
    const str = localStorage.getItem("gradients");

    if (str)
      localStorage.setItem(
        "gradients",
        JSON.stringify(JSON.parse(str).filter((grad: string) => grad !== id))
      );
  },

  save() {
    const str = localStorage.getItem("gradients");

    if (str) {
      localStorage.setItem(
        "gradients",
        JSON.stringify([...GRADIENTS, ...JSON.parse(str)])
      );
    } else {
      localStorage.setItem("gradients", JSON.stringify([...GRADIENTS]));
    }

    GRADIENTS.length = 0;
  },

  includes(id) {
    const str = localStorage.getItem("gradients");

    if (str) return JSON.parse(str).includes(id);

    return false;
  },
};

const local = {
  gradients,
};

export default local;
