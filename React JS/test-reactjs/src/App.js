import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Fragment } from 'react';

import Home from './Pages/Home';
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

function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path='/hooks/useState' Component={() =>
            <Fragment>
              <Hooks_useState />
            </Fragment>
          } />

          <Route path='/hooks/useEffect' Component={() =>
            <Fragment>
              <Hooks_useEffect />
            </Fragment>
          } />

          <Route path='/hooks/useRef' Component={() =>
            <Fragment>
              <Hooks_useRef />
            </Fragment>
          } />

          <Route path='/hooks/useReducer' Component={() =>
            <Fragment>
              <Hooks_useReducer />
            </Fragment>
          } />

          <Route path='/hooks/useMemo' Component={() =>
            <Fragment>
              <Hooks_useMemo />
            </Fragment>
          } />

          <Route path='/hooks/useCallback' Component={() =>
            <Fragment>
              <Hooks_useCallback />
            </Fragment>
          } />

          <Route path='/hooks/tanstackQuery' Component={() =>
            <Fragment>
              <React_Query />
            </Fragment>
          } />

          <Route path='/hooks/tanstackQuery/posts' Component={() =>
            <Fragment>
              <Posts />
            </Fragment>
          } />

          <Route path='/props/defaultProps' Component={() =>
            <Fragment>
              <Props_defaultProps />
            </Fragment>
          } />

          <Route path='/testReact' Component={() =>
            <Fragment>
              <Test_React />
            </Fragment>
          } />

          <Route path='/' Component={() =>
            <Fragment>
              <Home />
            </Fragment>
          } />

        </Routes >
      </Router>
    </>
  );
}

export default Component_Layout(App);
