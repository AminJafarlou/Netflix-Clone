import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  navbar: {
    position: "fixed",
    display: "flex",
    justifyContent: "space-between",
    top: 0,
    width: "100%",
    paddingBlock: 20,
    height: 30,
    zIndex: 1,

    transitionTimingFunction: "ease-in",
    transition: "all 0.5s",
  },
  navBlack: {
    backgroundColor: "#111",
  },
  navLogo: {
    width: 80,
    objectFit: "contain",
    position: "fixed",
    left: 20,
  },
  navAvatar: {
    width: 30,
    objectFit: "contain",
    position: "fixed",
    right: 20,
  },
});
