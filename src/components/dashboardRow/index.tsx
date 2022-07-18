import React from "react";
import { PosterList } from "../PostersList";

interface Props {
  fetchUrl?: string;
  title: string;
  titleSize?: number;
}

export const DashBoardRow = ({ fetchUrl, title, titleSize = 16 }: Props) => {
  return (
    <div>
      <h2 style={{ fontSize: titleSize }}>{title}</h2>
      <div>
        <PosterList list={[]} />
      </div>
    </div>
  );
};
