import React from "react";
import { DashBoardRow } from "../dashboardRow";

export const Content = () => {
  return (
    <div>
      <DashBoardRow title="Trending Movies" titleSize={18} />
      <DashBoardRow title="Top Rated" />
      <DashBoardRow title="Action Movies" />
      <DashBoardRow title="Drama Movies" />
      <DashBoardRow title="Thriller Movies" />
    </div>
  );
};
