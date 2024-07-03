import {
  Home,
  Login,
  Personal,
  Public,
  Album,
  Top100,
  NewReleasePage
} from "./containers/public/";
import { Routes, Route } from "react-router-dom";
import path from "./utils/path";
import * as actions from "./store/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Search from "./containers/public/Search";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getHome());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.MYMUSIC} element={<Personal />} />
          <Route path={path.ALBUM_TITLE_PID} element={<Album />} />
          <Route path={path.PLAYLIST_TITLE_PID} element={<Album />} />
          <Route path={path.TOP_100} element={<Top100 />} />
          <Route path={path.NEW_RELEASECHART} element={<NewReleasePage />} />
          <Route path={path.STAR} element={<Home />} />
          {/* <Route path={path.SEARCH} element={<Search />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
