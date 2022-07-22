import React, { useState } from "react";
import YouTube from "react-youtube";
import { base_imageUrl } from "../../core/constants";
import { useStyles } from "./styles";
// @ts-ignore
import movieTrailer from "movie-trailer";

const opts = {
  height: "448",
  width: "100%",
  playerVars: {
    autoplay: 1,
  },
};

export const PosterList = ({
  list,
  isLargeRow = false,
}: {
  list: any[];
  isLargeRow?: boolean;
}) => {
  const classes = useStyles();

  const [trailerUrl, setTrailerUrl] = useState<string>("");

  const handleClick = (movie: any) => {
    console.log({ movie });

    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.original_title || movie?.name || "")
        .then((url: string) => {
          const urlParam = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParam.get("v") || "");
        })
        .catch((err: any) => console.log(err));
    }
  };

  return (
    <div>
      <div className={classes.posterList}>
        {list.map((movie, index) => {
          return (
            <img
              key={index}
              style={{ cursor: "pointer" }}
              className={isLargeRow ? classes.imageLarge : classes.image}
              onClick={() => handleClick(movie)}
              src={`${base_imageUrl}${
                isLargeRow ? movie?.poster_path : movie.backdrop_path
              }`}
              alt={movie?.name || ""}
            />
          );
        })}
      </div>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};
