import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import TablesBookingID from './components/views/Tables/TablesBookingID';
import TablesNew from './components/views/Tables/TablesNew';
import TablesEventsID from './components/views/Tables/TablesEventsID';
import TablesEventsNew from './components/views/Tables/TablesEventsNew';
import Waiter from './components/views/Waiter/WaiterContainer';
import WaiterOrderID from './components/views/Waiter/WaiterOrderID';
import WaiterOrderNew from './components/views/Waiter/WaiterOrderNew';
import Kitchen from './components/views/Kitchen/Kitchen';
import Homepage from './components/views/Homepage/Homepage';
import { StylesProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3b3b3b',
    },
    secondary: {
      main: '#ff6b6b',
    },
  },
});


const App = () => (
  <BrowserRouter basename={'/panel'}>
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <MainLayout>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
            <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
            <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
            <Route exact path={process.env.PUBLIC_URL + `/tables/booking/:id`} component={TablesBookingID} />
            <Route exact path={process.env.PUBLIC_URL + `/tables/new`} component={TablesNew} />
            <Route exact path={process.env.PUBLIC_URL + `/tables/events/:id`} component={TablesEventsID} />
            <Route exact path={process.env.PUBLIC_URL + `/tables/events/new`} component={TablesEventsNew} />
            <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
            <Route exact path={process.env.PUBLIC_URL + `/waiter/order/new`} component={WaiterOrderNew} />
            <Route exact path={process.env.PUBLIC_URL + `/waiter/order/:id`} component={WaiterOrderID} />
            <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
          </Switch>
        </MainLayout>
      </ThemeProvider>
    </StylesProvider>
  </BrowserRouter>
);

export default App;
