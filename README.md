# TeeViewr-3D-T-Shirt-Customizer

1. install vite
   -npm create vite@latest -- --template react clien
2. install packages

- npm install three @react-three/fiber @react-three/drei maath valtio react-color framer-motion

3. setup tailwind

4)folder structure
:src
-components
-pages
-Home.jsx - main page

-customizer.jsx - the entirety of the app funcitonalities be contained in the two pages
:canvas

## -index.js

5)now lets create homepage
import motion, AnimatePresence from 'framer-motion'
import useSnapshot from valtio - grate react state library
import {headContainerAnimation,etc} from '../config/motion

//how valtio works
-create new folder store - index.js
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

import this states in Home file.
HOW TO USE IT?

const Home = () => {
const snap = useSnapshot(state); //one current snapshot of that state
return(

<div>Home</div>
)
}

6)we wrap everthing in <AnimatePresence>: this is component by framer motion tha's going to allow us to enable the animation of the component that have been removed from the tree.

IN WHICH WE can write if we are on home page - {snap.intro && (render home page data -> <motion.div> -> regular div but with some animations )}

code -
<AnimatePresence>
{snap.intro && (
<motion.section className="home" {...slideAnimation("left")}>
<motion.header>
<img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
</motion.header>
</motion.section>
)}
</AnimatePresence>

7)now we need button which takes us customization page from homepage.
for that we can create <CustomButton /> component
and we can export it from index.js file to homepage

-we pass some props to button
<CustomButton
type="filled"
title="Customize it"
handleClick={() => (state.intro = false)} //updating state in valtio (no react rule breaking here)
customStyles="w-fit px-4 py-2.5 font-bold text=sm"
/>

//we have two types of buttons

8)lets create customizer

-WE FIRST WRAP everything in <AnimatePresence>
-AND inside that we check are we on a home page or customizer
for that we have to acces state.

<!-- - const snap = useSnapshot(state) -->

const Customizer = () => {
const snap = useSnapshot(state)
return <AnimatePresence>
{!snap.intro && (
rest of the code we show
)}
</AnimatePresence>
};
