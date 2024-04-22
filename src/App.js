import { Home, Login, Personal, Public } from "./containers/public/";
import { Routes, Route } from "react-router-dom";
import path from "./utils/path";
import * as actions from "./store/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

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

          <Route path={path.STAR} element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
