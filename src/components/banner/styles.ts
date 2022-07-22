import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  bannerContainer: {
    color: "#fff",
    height: 448,
    objectFit: "contain",
    textAlign: "start",
  },
  bannerContent: {
    marginInline: 30,
    paddingBlockStart: 140,
    height: 190,
  },
  bannerTitle: {
    fontSize: "3rem",
    fontWeight: 800,
    paddingBlockEnd: "0.3rem",
  },
  buttonContainer: {
    display: "flex",
  },
  bannerButton: {
    cursor: "pointer",
    color: "#fff",
    border: "none",
    outline: "none",
    fontWeight: 700,
    borderRadius: "2px",
    padding: "0.5rem 1.5rem",
    marginInlineEnd: "1rem",
    backgroundColor: "rgba(51,51,51,0.5)",

    "&:hover": {
      color: "#000",
      backgroundColor: "#e6e6e6",
      transition: "all 0.2s",
    },
  },
  description: {
    width: "45rem",
    lineHeight: 1.3,
    paddingTop: "1rem",
    fontSize: "0.8rem",
    maxWidth: 360,
    height: 80,
  },
  fadeBackground: {
    height: "7.4rem",
    backgroundImage:
      "linear-gradient(180deg, transparent, rgba(37,37,37,0.61), #111)",
  },
});
