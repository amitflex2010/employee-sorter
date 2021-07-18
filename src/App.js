import "./App.css";
import store from "./store";
import { useEffect } from "react";
import { getEmployees } from "./action/loademployee";
import { useSelector } from "react-redux";
import buildObject from "./utils/builddata";
import Tabs from "./components/Tabs";
import ContentContainer from "./components/ContentContainer";
import ErrorPage from "./pages/Errorpage/ErrorPage";
import Config from './config.json'

const users = (state) => ({
  employees: state.employeeReducer.employees,
  loading: state.employeeReducer.loading,
  error: state.employeeReducer.error,
});

function App() {
 ;
  useEffect(() => {
    store.dispatch(getEmployees(Config.EMPLOYEE_COUNT));
  }, []);
  const { employees, loading, error } = useSelector(users);

  return loading ? (
    <div className="loading-indicator">
      <img alt="loading" src="loading.gif" />
    </div>
  ) : error.status === "404" ? (
    <ErrorPage msg={error.msg}></ErrorPage>
  ) : (
    <Tabs>
      {buildObject(employees).map((item, i) => (
        <div key={i} label={item.alphabet} count={item.itemCollection.length}>
          {item.itemCollection.map((coll, index) => (
            <ContentContainer
              key={index}
              title={`${coll.name.last}, ${coll.name.first}`}
              props={coll}
            ></ContentContainer>
          ))}
        </div>
      ))}
    </Tabs>
  );
}

export default App;
