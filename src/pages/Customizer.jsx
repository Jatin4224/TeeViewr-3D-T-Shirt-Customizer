import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import config from "../config/config";
import state from "../store";
import { download } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";
import {
  AIPicker,
  ColorPicker,
  CustomButton,
  FilePicker,
  Tab,
} from "../components";

const Customizer = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {!snap.intro && (
        <div className="absolute top-0 left-0 z-10">
          <motion.div
            key="custom"
            className="flex items-center min-h-screen"
            {...slideAnimation("left")}
          >
            <div className="editortabs-container tabs">
              {EditorTabs.map((tab) => (
                <Tab key={tab.name} tab={tab} handleClick={() => {}} />
              ))}
            </div>
          </motion.div>

          <motion.div className="absolute z-10 top-5 left-5" {...fadeAnimation}>
            <CustomButton
              type="filled"
              title="GO BACK"
              handleClick={() => (state.intro = true)}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>

          <motion.div
            className="filtertabs-container"
            {...slideAnimation("up")}
          >
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab={tab.isActive} // Make sure isActiveTab is set correctly
                handleClick={() => {}}
              />
            ))}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
