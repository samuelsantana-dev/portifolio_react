import { scroll } from "framer-motion/dom";

const progressWheel = document.querySelector(".progress");

scroll((progress) => {
  progressWheel.style.strokeDasharray = `${progress}, 1`;
});
