import React from 'react';
import { connect } from 'react-redux';
import PlantForm from './components/PlantForm';
import PlantNames from './components/PlantNames';
import { useEffect } from 'react'
import { getPlantNames } from './actions';


function App(props) {
  const { loading, error, getPlantNames } = props;

  useEffect(() => {
    getPlantNames();
  }, []); 

  return (
    <div>
      
      <h1>Plant Species Generator</h1>

      <PlantForm />

      { 
        (error !== '') && <h3>{error}</h3>
      }

      { 
        loading ? <h3>Loading..</h3> : <PlantNames /> 
      };

    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps, { getPlantNames })(App);