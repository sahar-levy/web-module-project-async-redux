import React from 'react';
import { connect } from 'react-redux';
import PlantForm from './components/PlantForm';
import PlantNames from './components/PlantNames';

function App(props) {
  const { loading, error } = props;

  return (
    <div>
      
      <h1>Botanical and Common Plant Name Generator</h1>

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

export default connect(mapStateToProps, {})(App);