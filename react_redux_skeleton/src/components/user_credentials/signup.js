import React, { Component } from 'react';
import CredentialsForm from './credentials_form';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as userActions from '../../actions/user-actions';

class Signup extends Component {
    formHandler(values) {
        this.props.userActions.createUser(values);
    }

    render() {
        return (
            <div>
                <CredentialsForm
                    formHandler={this.formHandler.bind(this)}
                />
            </div>
        )
    }
}

<<<<<<< HEAD
const mapStateToPorps = (state) => {
    return {
        user:state.user.user
=======
const mapStateToProps = (state) => {
    return {
        user: state.user.user
>>>>>>> 0848b8195237e9c77802fd421a98b8060feb1fbb
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
<<<<<<< HEAD
        routerActions: bindActionCreators({ changePage: () => { push('/') }}, dispatch), 
        userActions: bindActionCreators(userActions, dispatch)    
    }
}

export default connect(mapStateToPorps, mapDispatchToProps)(Signup);

=======
        routerActions: bindActionCreators({ changePage: () => { push('/') }}, dispatch),
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
>>>>>>> 0848b8195237e9c77802fd421a98b8060feb1fbb
