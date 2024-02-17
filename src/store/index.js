import { proxy } from "valtio";
const state = proxy({
  //think it as a react context whatever here can be utilize in whole application
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",

  //this all are empty default values
});
export default state;
