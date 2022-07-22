import React, { useState } from "react";
import { useEffect } from "react";
import { PosterList } from "../PostersList";
import axios from "../../core/axios";
import YouTube from "react-youtube";

interface Props {
  fetchUrl: string;
  title: string;
  titleSize?: number;
  isLargeRow?: boolean;
}

export const DashBoardRow = ({
  fetchUrl,
  title,
  titleSize = 24,
  isLargeRow = false,
}: Props) => {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchMovies();
  }, [fetchUrl]);

  return (
    <div>
      <div style={{ textAlign: "start" }}>
        <h1 style={{ fontSize: titleSize, color: "#fff" }}>{title}</h1>
      </div>
      <div>
        <PosterList list={movies || []} isLargeRow={isLargeRow} />
      </div>
    </div>
  );
};
