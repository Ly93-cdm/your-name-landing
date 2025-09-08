export const defaultTransition = { duration: 1.5, ease: "easeInOut" };
export const withDelay = (delay) => ({ ...defaultTransition, delay });

export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.5, ease: "easeInOut" }
};