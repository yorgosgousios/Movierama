import React from "react";

const GlobalData = React.createContext({
  title: "",
  release_date: "",
  overview: "",
  imgsource: "",
  movieId: "",
  key: "",
});

export default GlobalData;
