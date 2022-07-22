import React, { useEffect, useState } from "react";
import instance from "../../core/axios";
import { base_imageUrl } from "../../core/constants";
import { requests } from "../../core/requests";
import { useStyles } from "./styles";

export const Banner = () => {
  const classes = useStyles();
  const [bannerMovie, setBannerMovie] = useState<any>();
  useEffect(() => {
    const fetchBannerMovie = async () => {
      const request = await instance.get(requests.fetchNetflixOriginals);
      setBannerMovie(
        request.data?.results?.[
          Math.floor(Math.random() * request?.data?.results?.length)
        ]
      );
      return request;
    };

    fetchBannerMovie();
  }, []);

  const truncate = (string: string, n: number) => {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  };

  return (
    <header
      className={classes.bannerContainer}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_imageUrl}${bannerMovie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className={classes.bannerContent}>
        <h1 className={classes.bannerTitle}>
          {bannerMovie?.title ||
            bannerMovie?.name ||
            bannerMovie?.original_name ||
            ""}
        </h1>

        <div className={classes.buttonContainer}>
          <button className={classes.bannerButton}>play</button>
          <button className={classes.bannerButton}>My List</button>
        </div>

        <h1 className={classes.description}>
          {truncate(bannerMovie?.overview, 150)}
        </h1>
      </div>
      <div className={classes.fadeBackground}></div>
    </header>
  );
};
