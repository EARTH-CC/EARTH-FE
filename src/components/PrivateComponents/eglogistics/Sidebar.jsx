import React, { useState } from "react";
import { Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { UilBars, UilSignOutAlt } from "@iconscout/react-unicons";
import EGLogo from "../../../assets/eglogistics.png";
import { SidebarData } from "../../../data/Data";
import "./Sidebar.css";

export default function Sidebar() {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };

  const handleMenuItemClick = (index) => {
    if (selected === index) {
      // If the same item is clicked again, toggle the submenu expansion
      setExpanded(!expanded);
    } else {
      setSelected(index);
      // If a different item is clicked, close the submenu (if it was open)
      setExpanded(true);
    }
  };

  return (
    <>
      <Box
        className="bars"
        role="button"
        tabIndex="0"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpanded(!expanded)}
      >
        <UilBars />
      </Box>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={{ left: expanded ? "0" : "-60%" }}
      >
        <div className="logo" style={{ margin: "20px" }}>
          <img src={EGLogo} alt="logo" />
        </div>
        <div className="logo" style={{ marginLeft: "20px" }}>
          <span>
            E & G <span>LOGISTICS</span>
          </span>
        </div>

        <div className="menu">
          <AnimatePresence>
            {SidebarData.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <React.Fragment key={index}>
                <Box
                  className={
                    selected === index && expanded
                      ? "menuItem active"
                      : "menuItem"
                  }
                  onClick={() => handleMenuItemClick(index)}
                >
                  <item.icon />
                  <span>{item.heading}</span>
                </Box>
                {selected === index && expanded && item.subMenu && (
                  <div className="submenu">
                    {item.subMenu.map((subItem, subIndex) => (
                      <Box
                        // eslint-disable-next-line react/no-array-index-key
                        key={subIndex}
                        className={
                          selected === subIndex
                            ? "subMenuItem active"
                            : "subMenuItem"
                        }
                        onClick={() => setSelected(subIndex)}
                      >
                        <subItem.icon />
                        <span>{subItem.heading}</span>
                      </Box>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
          </AnimatePresence>
          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
}
