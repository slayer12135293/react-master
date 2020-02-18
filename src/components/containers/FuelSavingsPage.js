import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/fuelSavingsActions'
import FuelSavingsForm from '../FuelSavingsForm'

export class FuelSavingsPage extends React.Component {
  saveFuelSavings = () => {
      const { saveFuelSavings, fuelSavings } = this.props
      saveFuelSavings(fuelSavings)

  }

  calculateFuelSavings = e => {
      const { calculateFuelSavings, fuelSavings  } = this.props
      calculateFuelSavings(fuelSavings, e.target.name, e.target.value)
  }

  render() {
      return (
          <FuelSavingsForm
              onSaveClick={this.saveFuelSavings}
              onChange={this.calculateFuelSavings}
              fuelSavings={this.props.fuelSavings}
          />
      )
  }
}

FuelSavingsPage.propTypes = {
    fuelSavings: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    fuelSavings: state.fuelSavings,  
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        actions, 
        dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FuelSavingsPage)
