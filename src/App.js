import React, { Component } from 'react';
import MapContainer from './components/MapContainer';
import QuakeContainer from './components/QuakeContainer';
import axios from 'axios';



class App extends Component {
  state ={
    results: []
  }

  // getQuake = (e) => {
  //   e.preventDefault();
  //   axios.get("https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=6")
  //   .then( ({ data }) => {
  //     this.setState({ results: data.features })
  //   })
  // }

  componentDidMount() {
    fetch("https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=6")
    .then(res => res.json())
    .then((data) => {
      // console.log(data)
      this.setState({ results: data.features })
    })
  }

  render() {
    let { results } = this.state;
    
    return (
      <div className="app">
        <div className="mapContainer">
          <MapContainer />
        </div>
        <div className="quakeContainer">
          <form onSubmit={this.getQuake}>
            <input type="submit" value="Get Quakes" />
          </form>
          <h1>Earthquakes from the past week: </h1>
          <QuakeContainer results={ results } />
        </div>
      </div>
    );
  }
}

export default App;
