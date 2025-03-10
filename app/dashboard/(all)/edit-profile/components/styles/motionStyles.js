export const profileMotion = {
  start: { scale: 0 },
  end: { scale: 1 },
  transition: { duration: 0.2, ease: "easeOut" },
};

export const textMotion = {
  start: { opacity: 0, x: -100 },
  end: { opacity: 1, x: 0 },
  transition: { type: "spring", duration: 0.5, ease: "easeOut" },
};
