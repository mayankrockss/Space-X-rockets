import { Fragment, useCallback, useEffect, useState } from 'react';
import actionTypes from "./helpers/actionTypes";
import { FlightCard } from './components/flight.card/FlightCard';
import axios from "axios";
import Filters from './components/filters/Filters';
import { useReducedState } from './helpers/useReducedState';
import Loader from './assets/loader.gif';
import './App.css';

function App() {
  const [state, dispatch] = useReducedState();
  const [loading, setLoading] = useState(false);
  const { flights = [], yearFilter, launchFilter, landingFilter } = state;

  const callSpaceXApi = useCallback(async (yearFilter, launchFilter, landingFilter) => {
    try {
      setLoading(true);
      const { data } = await axios(`https://api.spacexdata.com/v3/launches?limit=100${launchFilter ? "&launch_success=" + launchFilter : ""}${landingFilter ? "&land_success=" + landingFilter : ""}${yearFilter ? "&launch_year=" + yearFilter : ""}`);
      dispatch({ type: actionTypes.UPDATE_FLIGHTS, data });
      setLoading(false);
    }
    catch (err) {
      alert("error occured- " + err.message)
    }
  }, [dispatch]);

  useEffect(() => {
    callSpaceXApi();
  }, [callSpaceXApi]);


  useEffect(() => {
    callSpaceXApi(yearFilter, launchFilter, landingFilter);
  }, [yearFilter, launchFilter, landingFilter, callSpaceXApi]);


  const handleFilterClick = (e) => {   //To handle event deligation
    const { type, value } = e.target.dataset;
    if (type) {
      switch (type) {
        case "launch":
          if (launchFilter !== value) {
            dispatch({ type: actionTypes.UPDATE_LAUNCH_FILTER, data: value });
          }
          else {
            dispatch({ type: actionTypes.UPDATE_LAUNCH_FILTER, data: null });
          }
          break;
        case "landing":
          if (landingFilter !== value) {
            dispatch({ type: actionTypes.UPDATE_LANDING_FILTER, data: value });
          }
          else {
            dispatch({ type: actionTypes.UPDATE_LANDING_FILTER, data: null });
          }
          break;
        default: //year
          if (yearFilter !== value) {
            dispatch({ type: actionTypes.UPDATE_YEAR_FILTER, data: value });
          }
          else {
            dispatch({ type: actionTypes.UPDATE_YEAR_FILTER, data: null });
          }
      }
    }
  }

  return (
    <Fragment>
      <h1 className="title">Space-X Launch Programs</h1>
      <div className="app">
        <div className="filter-constainer" onClick={handleFilterClick}>
          <Filters yearFilter={yearFilter} launchFilter={launchFilter} landingFilter={landingFilter} />
        </div>
        {loading ? <div className="loader"><img src={Loader} alt="loading" /></div> : <div className="cards">
          {flights.map(flight => <FlightCard flight={flight} key={flight.flight_number} />)}
        </div>}
      </div>
      <div className="footer"> Developed by: Mayank Singh</div>
    </Fragment>
  );
}

export default App;
