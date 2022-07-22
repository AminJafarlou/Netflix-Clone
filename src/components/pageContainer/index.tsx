import React from "react";
import { createUseStyles } from "react-jss";
import { Banner } from "../banner";
import { Content } from "../content";
import { Navbar } from "../navbar";

export const PageContainer = () => {
  const classes = useStyles();
  return (
    <div className={classes.pageWrapper}>
      <Navbar />
      <Banner />
      <Content />
    </div>
  );
};

const useStyles = createUseStyles({
  pageWrapper: {
    backgroundColor: "#111",
  },
});
