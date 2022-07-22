import React from "react";
import { DashBoardRow } from "../dashboardRow";
import { requests } from "../../core/requests";

export const Content = () => {
  return (
    <div style={{ paddingInline: 20 }}>
      <DashBoardRow
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <DashBoardRow title="Trending Now" fetchUrl={requests.fetchTrending} />
      <DashBoardRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <DashBoardRow
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <DashBoardRow
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />
      <DashBoardRow
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <DashBoardRow
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
};
