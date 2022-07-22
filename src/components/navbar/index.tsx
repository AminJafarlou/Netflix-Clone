import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";

export const Navbar = () => {
  const classes = useStyles();

  const [showBG, setShowBG] = useState<boolean>(false);
  const handleShowBG = () => {
    if (window.scrollY > 100) {
      setShowBG(true);
    } else {
      setShowBG(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleShowBG);
    return () => {
      window.removeEventListener("scroll", handleShowBG);
    };
  }, []);

  return (
    <div
      className={
        showBG ? classes.navbar + " " + classes.navBlack : classes.navbar
      }
    >
      <img
        className={classes.navLogo}
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="NETFLIX"
      />
      <img
        className={classes.navAvatar}
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt=""
      />
    </div>
  );
};
