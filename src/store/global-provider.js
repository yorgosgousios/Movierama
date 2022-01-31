import GlobalData from "./global-context";

const GlobalProvider = (props) => {
  const globalData = {
    title: "",
    release_date: "",
    overview: "",
    imgsource: "",
    movieId: "",
    key: "",
  };

  return (
    <GlobalData.Provider value={globalData}>
      {props.children}
    </GlobalData.Provider>
  );
};

export default GlobalProvider;
