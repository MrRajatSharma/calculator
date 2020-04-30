import { connect } from 'react-redux';
import { compose } from 'redux';
import Main from './Main';
import { withRouter } from 'react-router-dom';


const mapDispatchToProps = (dispatch) => ({

});

const mapStateToProps = state => {
  return {
    ...state
  };
} 

const withConnect = connect(mapStateToProps, mapDispatchToProps, withRouter);
export default compose(withConnect)(Main);
export { mapDispatchToProps };
