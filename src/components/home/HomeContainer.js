import React from 'react';
import Home from "./Home.js";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";

class HomeContainer extends React.Component {
    componentDidMount() {
      this.props.getAuthUserData();
    }

    render() {
        return <Home {...this.props} />
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});


export default connect(mapStateToProps, {getAuthUserData})(HomeContainer);
