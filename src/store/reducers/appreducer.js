import actionType from "../actions/actionTypes";

const initState = {
  banner: [],
  newReleaseChart: [],
  homeData: []
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.GET_HOME:
      return {
        ...state,
        banner:
          action.homeData?.find((item) => item.sectionType === "banner")
            .items || null,
        newReleaseChart:
          action.homeData?.find(
            (item) => item.sectionType === "newReleaseChart"
          ).items || null,
        homeData: action.homeData
      };

    default:
      return state;
  }
};

export default appReducer;
