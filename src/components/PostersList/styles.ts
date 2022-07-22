import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  posterList: {
    display: "flex",
    flexDirection: "row",
    overflowY: "hidden",
    overflowX: "scroll",
    paddingBlockEnd: 20,

    "&::-webkit-scrollbar": {
      display: "none",
    },
  },

  image: {
    width: "100%",
    maxHeight: 100,
    objectFit: "contain",
    marginInlineEnd: 20,
    transition: "transform 450ms",

    "&:hover": {
      transform: "scale(1.08)",
    },
  },
  imageLarge: {
    width: "100%",
    maxHeight: 200,
    objectFit: "contain",
    marginInlineEnd: 20,
    transition: "transform 450ms",

    "&:hover": {
      transform: "scale(1.09)",
    },
  },
});
