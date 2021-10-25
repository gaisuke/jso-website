// import { collection, onSnapshot } from "@firebase/firestore";
// import { useEffect, useState } from "react";
// import db from "../../../config/firebase/firebase";
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "../Dashboard";
import Login from "../Login";
import Register from "../Register";
import { Provider } from 'react-redux';
import { store } from '../../../config/redux'

function App() {
  // const [concerts, setConcerts] = useState([])
  
  // useEffect(
  //   () => 
  //     onSnapshot(collection(db, "concerts"), (snapshot) => 
  //       setConcerts(snapshot.docs.map(doc => doc.data()))
  //     ), 
  //   []
  // );

  // return (
  //   <div className="App">
  //     <h1 className="text-2xl bg-indigo-400 text-center font-extrabold text-yellow-200"> Hallo Gais</h1>
  //     {
  //       concerts.map((concert) => (
  //         <div key={concert.id}>
  //           <h1>{concert.title}</h1>
  //           <p>{concert.details}</p>
  //           <p>{concert.location}</p>
  //         </div>
  //       ))
  //     }
  //   </div>
  // );
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

export default App;
