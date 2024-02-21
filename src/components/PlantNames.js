import React from "react";
import { connect } from "react-redux";

const PlantNames = (props) => {
    const { plantNames } = props;

    return (
        plantNames.map(plant => (
            <div key={plant.id}>
              <div>{plant.common_name}</div>
              <div>{plant.scientific_name}</div>
            </div>
        ))
    )
}

const mapStateToProps = state => {
    return {
        plantNames: state.plantNames
    }
}

export default connect(mapStateToProps, {})(PlantNames);