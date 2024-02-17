export const transition = { type: "spring", duration: 0.8 };

export const slideAnimation = (direction) => {
  return {
    initial: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: 0 },
    },
    exit: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      transition: { ...transition, delay: 0 },
    },
  };
};

export const fadeAnimation = {
  initial: {
    opacity: 0,
    transition: { ...transition, delay: 0.5 },
  },
  animate: {
    opacity: 1,
    transition: { ...transition, delay: 0 },
  },
  exit: {
    opacity: 0,
    transition: { ...transition, delay: 0 },
  },
};

export const headTextAnimation = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 5,
    stiffness: 40,
    restDelta: 0.001,
    duration: 0.3,
  },
};

export const headContentAnimation = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 7,
    stiffness: 30,
    restDelta: 0.001,
    duration: 0.6,
    delay: 0.2,
    delayChildren: 0.2,
  },
};

export const headContainerAnimation = {
  initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
  animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
  exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
};

// 1. `transition`: This variable defines a transition configuration object with a type of "spring" and a duration of 0.8 seconds. This configuration will be used for transitions throughout the animations.

// 2. `slideAnimation`: This is a function that takes a `direction` parameter (e.g., "left", "right", "up", "down") and returns an object with properties for the initial, animate, and exit states of an animation. Depending on the direction, it sets the initial position of the element outside the viewport, then animates it to its final position and opacity. The transition includes a delay to give a staggered effect.

// 3. `fadeAnimation`: This object defines animations for fading elements in and out. It includes initial, animate, and exit states with changes in opacity and a transition with a delay for a staggered effect.

// 4. `headTextAnimation`, `headContentAnimation`, `headContainerAnimation`: These objects define animations for specific elements (presumably in a header section). They have initial and animate states with changes in position and opacity. Each has a spring-type transition with specific damping, stiffness, restDelta, and duration properties to control the motion dynamics.

// - `damping`: Controls the amount of spring damping.
// - `stiffness`: Controls the stiffness of the spring.
// - `restDelta`: The minimum distance before a spring is considered at rest.
// - `delay`: Delay before starting the animation.
// - `delayChildren`: Delay before starting the children animations.

// These animations provide smooth transitions and effects to enhance the user experience when elements enter, leave, or change on the screen. They can be used in React components by importing and applying them where needed.
