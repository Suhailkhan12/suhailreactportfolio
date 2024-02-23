export const pathVariantsone = {
  hidden: {
    x: "-50%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      type: "spring",
      mass: 0.4,
      damping: 5,
      when: "beforeChildren",
    },
  },
};

export const pathVariantstwo = {
  hidden: {
    x: "50%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      type: "spring",
      mass: 0.4,
      damping: 5,

      when: "beforeChildren",
    },
  },
};

export const smallHeadingcrunch = {
  hidden: {
    y: "3px",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      mass: 0.4,
      damping: 5,
      when: "beforeChildren",
      staggerChildren: 5,
    },
  },
};

export const appearence = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.3,
      type: "spring",
      mass: 0.4,
      damping: 5,
      when: "beforeChildren",
      staggerChildren: 5,
    },
  },
};
