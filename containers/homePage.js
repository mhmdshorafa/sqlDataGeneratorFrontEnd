import { connect } from 'react-redux';

import HomePage from '../components/home/homePage';

import { isFileLoading, renderTables } from '../actions';

const mapStateToProps = (store) => ({...store});

export default connect(mapStateToProps, {
  isFileLoading,
  renderTables
})(HomePage);
