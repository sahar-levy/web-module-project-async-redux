import React from 'react';
import { connect } from 'react-redux';
import PlantForm from './components/PlantForm';
import PlantNames from './components/PlantNames';

function App(props) {
  const { loading } = props;

  return (
    <div>
      
      <h1>Botanical and Common Plant Name Generator</h1>

      <PlantForm />

      { loading ? <h3>Loading..</h3> : <PlantNames /> };

    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps, {})(App);