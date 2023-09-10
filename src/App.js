import './App.css';
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import requests from "./api/requests";
import React from "react";
import Row from "./components/Row";
function App() {
  return (
    <div className="App">
        <div>
            <Nav/>
            <Banner/>
            {/*<Row*/}
            {/*    title="NETFLIX _RIGINALS"*/}
            {/*    id="NO"*/}
            {/*    fetchUrl={requests.fetchNetflixOriginals}*/}
            {/*    isLargeRow*/}
            {/*/>*/}

            {/*<Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending}/>*/}
            {/*<Row title="Top Rated" id="TT" fetchUrl={requests.fetchTopRated}/>*/}
            {/*<Row title="Action Movies" id="AM" fetchUrl={requests.fetchActionMovies}/>*/}
            {/*<Row title="Cmoedy Movies" id="CM" fetchUrl={requests.fetchComedyMovies}/>*/}
        </div>
    </div>
  );
}

export default App;
