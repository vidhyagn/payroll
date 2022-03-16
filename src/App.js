import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'


import configureStore from './configureStore';

const Header = React.lazy(() => import(/* webpackChunkName: "nomatch" */'./components/pages/Header'));
const SideBar = React.lazy(() => import(/* webpackChunkName: "nomatch" */'./components/pages/SideBar'));
const Dashboard = React.lazy(() => import(/* webpackChunkName: "nomatch" */'./components/pages/Dashboard'));
const Employee = React.lazy(() => import(/* webpackChunkName: "nomatch" */'./components/pages/employee/Employee'));
const EmployeeDetail = React.lazy(() => import(/* webpackChunkName: "nomatch" */'./components/pages/employee/EmployeeDetail'));
const addEmployee = React.lazy(() => import(/* webpackChunkName: "nomatch" */'./components/pages/employee/AddEmployee'));
const PayInfo = React.lazy(() => import(/* webpackChunkName: "nomatch" */'./components/pages/employee/PayInfo'));
const Earnings = React.lazy(() => import(/* webpackChunkName: "nomatch" */'./components/pages/payroll/Earnings'));
const Deduction = React.lazy(() => import(/* webpackChunkName: "nomatch" */'./components/pages/payroll/Deduction'));
const Contribution = React.lazy(() => import(/* webpackChunkName: "nomatch" */'./components/pages/payroll/Contribution'));
const Processing = React.lazy(() => import(/* webpackChunkName: "nomatch" */'./components/pages/payroll/periodicProcessing'));
const Customfield = React.lazy(() => import(/* webpackChunkName: "nomatch" */'./components/pages/administration/Customfield'));
const Companyrule = React.lazy(() => import(/* webpackChunkName: "nomatch" */'./components/pages/administration/Companyrule'));
const Tax = React.lazy(() => import(/* webpackChunkName: "nomatch" */'./components/pages/administration/Tax'));
const NoMatch = React.lazy(() => import(/* webpackChunkName: "nomatch" */'./components/pages/NoMatch'));

const store = configureStore();

const MainLayout = ({children}, ...rest) => {
  return (
      <div className="wrapper">
            <Header/>
            <main className="content-area">

              <SideBar/>

              <div className="right-content-area">
                {children}
              </div>
            </main>

      </div>
  );
};
const NoLayout = ({children, ...rest}) => {
  return (
      <>
        {children}
      </>
  )
};
const MainLayoutRoute = ({component: Component, ...rest}) => {


  return (
      <Route {...rest} render={matchProps => (
          <MainLayout>
            <Component {...matchProps}  />
          </MainLayout>
      )}/>
  );
};
const LoginLayout = ({children, ...rest}) => {
  return (
      <>
        {children}
      </>
  );
};
const NoLayoutRoute = ({component: Component, ...rest}) => {
  return (
      <Route {...rest} render={matchProps => (
          <NoLayout>
            <Component {...matchProps} />
          </NoLayout>
      )}/>
  )
};
const LoginLayoutRoute = ({component: Component, ...rest}) => {
  return (
      <Route {...rest} render={matchProps => (
          <LoginLayout>
            <Component {...matchProps} />
          </LoginLayout>
      )}/>
  );
};

function App() {
  return (
      <Provider store={store}>
        <Router>
          <React.Suspense fallback={
            <div className="wrapper">
              ........loading
            </div>
          }>
            <Switch>
                <MainLayoutRoute exact path="/" component={Dashboard}/>
                <MainLayoutRoute exact path="/employee" component={Employee}/>
                <MainLayoutRoute exact path="/pay-info" component={PayInfo}/>
                <MainLayoutRoute exact path="/employeedetail/:id" component={EmployeeDetail}/>
                <MainLayoutRoute exact path="/add-employee" component={addEmployee}/>
                <MainLayoutRoute exact path="/payroll/earnings" component={Earnings}/>
                <MainLayoutRoute exact path="/payroll/deduction" component={Deduction}/>
                <MainLayoutRoute exact path="/payroll/company-contribution" component={Contribution}/>
                <MainLayoutRoute exact path="/payroll/periodic-processing" component={Processing}/>
                <MainLayoutRoute exact path="/administration/custom-fields" component={Customfield}/>                
                <MainLayoutRoute exact path="/administration/company-rule" component={Companyrule}/>
                <MainLayoutRoute exact path="/administration/tax" component={Tax}/>
                <MainLayoutRoute component={NoMatch}/>
            </Switch>
          </React.Suspense>
        </Router>
      </Provider>
  );
}

export default App;

