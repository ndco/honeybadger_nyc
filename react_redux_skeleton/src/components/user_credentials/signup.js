import React, { Component } from 'react';
import CredentialsForm from './credentials_form';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../../actions/user-actions';

class Signup extends Component {
    handleSubmit(e) {
        e.preventDefault();

        // this.props.changePage();
    }
    render() {
        return (
            <div>
                <CredentialsForm 
                    handler={this.handleSubmit.bind(this)}
                    action={'/users/signup'}
                />
            </div>
        )
    }
}

const mapStateToPorps = (state) => {
    return {
        user:state.user.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        routerActions: bindActionCreators({ changePage: () => { push('/') }}, dispatch), 
        userActions: bindActionCreators(userActions, dispatch)    
    }
}

export default connect(mapStateToPorps, mapDispatchToProps)(Signup);

