import { collection, onSnapshot } from "@firebase/firestore";
import { useEffect, useState } from "react";
import db from "../../../config/firebase/firebase";

function App() {
  const [concerts, setConcerts] = useState([])
  
  useEffect(
    () => 
      onSnapshot(collection(db, "concerts"), (snapshot) => 
        setConcerts(snapshot.docs.map(doc => doc.data()))
      ), 
    []
  );

  return (
    <div className="App">
      <h1 className="text-2xl bg-indigo-400 text-center font-extrabold text-yellow-200"> Hallo Gais</h1>
      {
        concerts.map((concert) => (
          <div key={concert.id}>
            <h1>{concert.title}</h1>
            <p>{concert.details}</p>
            <p>{concert.location}</p>
          </div>
        ))
      }
    </div>
  );
}

export default App;
