import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Fragment } from 'react';

import Home from './Pages/Home/Home';
import Error from './Pages/Error'
import Test_React from './Test.React';
import Component_Layout from './Components/Component.Layout';
import Props_defaultProps from './Components/Props/props.defaultProps';
import Hooks_useState from './Components/Hooks/hooks.useState';
import Hooks_useEffect from './Components/Hooks/hooks.useEffect';
import Hooks_useRef from './Components/Hooks/hooks.useRef';
import Hooks_useReducer from './Components/Hooks/UseReducer/hooks.useReducer';
import Hooks_useMemo from './Components/Hooks/hooks.useMemo';
import Hooks_useCallback from './Components/Hooks/UseCallback/hooks.useCallback'
import React_Query from './Components/Hooks/TanStack Query/React.Query';
import Posts from './Components/Hooks/TanStack Query/Posts';
import Hooks_useContext from './Components/Hooks/UseContext/hooks.useContext';
import ProfileSettings from './Pages/ProfileSettings';
import AdminSettings from './Pages/AdminSettings';
import ReactTree from './Components/ReactTree';
import VideoFrame from './Components/VideoFrame';
import MUIComponent from './Components/MUIComponent';
import Debouncing from './Components/Advance Concepts/Debouncing';
import Throttling from './Components/Advance Concepts/Throttling';

function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path='/hooks' >
            <Route path='useState' Component={() =>
              <Fragment>
                <Hooks_useState />
              </Fragment>
            } />

            <Route path='useEffect' Component={() =>
              <Fragment>
                <Hooks_useEffect />
              </Fragment>
            } />

            <Route path='useRef' Component={() =>
              <Fragment>
                <Hooks_useRef />
              </Fragment>
            } />

            <Route path='useReducer' Component={() =>
              <Fragment>
                <Hooks_useReducer />
              </Fragment>
            } />

            <Route path='useMemo' Component={() =>
              <Fragment>
                <Hooks_useMemo />
              </Fragment>
            } />

            <Route path='useCallback' Component={() =>
              <Fragment>
                <Hooks_useCallback />
              </Fragment>
            } />

            <Route path='useContext' Component={() =>
              <Fragment>
                <Hooks_useContext />
              </Fragment>
            } />

            <Route path='tanstackQuery'>
              <Route path='' Component={() =>
                <Fragment>
                  <React_Query />
                </Fragment>
              } />

              <Route path='posts' Component={() =>
                <Fragment>
                  <Posts />
                </Fragment>
              } />
            </Route>
          </Route>

          <Route path='/props/defaultProps' Component={() =>
            <Fragment>
              <Props_defaultProps />
            </Fragment>
          } />

          <Route path='/testReact' element={<Test_React />} />
          <Route path='/' element={<Home />} />

          <Route path='/settings'>
            <Route path='profile' Component={() =>
              <Fragment>
                <ProfileSettings />
              </Fragment>
            } />

            <Route path='admin' Component={() =>
              <Fragment>
                <AdminSettings />
              </Fragment>
            } />
          </Route>

          <Route path='/advance'>
            <Route path='debouncing' element={<Debouncing />} />
            <Route path='throttling' element={<Throttling />} />
          </Route>

          <Route path='/MUIComponent' element={<MUIComponent />}></Route>
          <Route path='/react-tree' element={<ReactTree />}></Route>
          <Route path='/test-video' element={<VideoFrame />}></Route>

        </Routes >
      </Router>
    </>
  );
}

export default Component_Layout(App);
