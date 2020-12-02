import React, { Fragment, Suspense, lazy } from "react";

import theme from "./theme";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";

import Pace from "./components/Pace";
import AdminView from './components/AdminView'
import Landing from "./components/Landing";


// import AppRoute from './utils/AppRoute';
// import ScrollReveal from './utils/ScrollReveal';
// import ReactGA from 'react-ga';

// Layouts
// import LayoutDefault from './layouts/LayoutDefault';

// Views 
// import Home from './views/Home';

// Initialize Google Analytics
// ReactGA.initialize(process.env.REACT_APP_GA_CODE);

// const trackPage = page => {
//   ReactGA.set({ page });
//   ReactGA.pageview(page);
// };

const App = () => {

  // const childRef = useRef();
  // let location = useLocation();

  // useEffect(() => {
  //   const page = location.pathname;
  //   document.body.classList.add('is-loaded')
  //   // childRef.current.init();
  //   // trackPage(page);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [location]);

  return (
    // <ScrollReveal
    //   ref={childRef}
    //   children={() => (
    //     <Switch>
    //       <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
    //     </Switch>
    //   )} />
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Pace color={theme.palette.primary.light} />
      <Suspense fallback={<Fragment />}>
        <Switch>
          <Route path="/admin">
            <AdminView />
          </Route>
          <Route >
            <Landing />
          </Route>
        </Switch>
      </Suspense>

    </MuiThemeProvider>

  )
}

export default App;