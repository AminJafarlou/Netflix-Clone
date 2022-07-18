import React from "react";

export const PosterList = ({ list }: { list: any[] }) => {
  return (
    <div>
      {list.map((movie, index) => {
        return <div>{index}</div>;
      })}
    </div>
  );
};
