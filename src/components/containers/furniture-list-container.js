import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchFurniture, furnitureAddedToCart } from '../../actions';
import { compose } from '../../utils';
import { withErrorBoundry, withFurnitureStoreService } from '../hoc';
import FurnitureList from '../furniture-list';
import LoadingIcon from '../loading-icon';
import ErrorMessage from '../error-message';

class FurnitureListContainer extends Component {

  componentDidMount() {
    const { fetchFurniture } = this.props;
    fetchFurniture();
  }

  render() {
    const { furnitureList: { furniture, loading, error } } = this.props;
    const { furnitureAddedToCart } = this.props

    if (loading) {
      return <LoadingIcon />
    }

    if (error) {
      console.log(error);
      return <ErrorMessage />
    } 
    
    return <FurnitureList furniture={furniture} furnitureAddedToCart={furnitureAddedToCart}/>
  }
}

const mapStateToProps = ({ furnitureList }) => {
  return { furnitureList };
};

const mapDispatchToProps = (dispatch, { furnitureStoreService }) => {
  return {
    fetchFurniture: () => fetchFurniture(dispatch, furnitureStoreService),
    furnitureAddedToCart: (furnitureId) => dispatch(furnitureAddedToCart(furnitureId)) 
  };
};

export default compose(
  withErrorBoundry,
  withFurnitureStoreService,
  connect(mapStateToProps, mapDispatchToProps)
)(FurnitureListContainer);