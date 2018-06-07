import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getUser} from '../../ducks/user';

class Private extends Component {
    componentDidMount() {
        this.props.getUser();
    }
    
    bankBalance() {
        return "$" + Math.floor((Math.random() + 1) * 1000) + ".00";
    }

    render() {
        console.log('props: ', this.props)
        let { user_name, picture, auth_id } = this.props.user;
        return (
            <div>
            <h2>Account Information:</h2>
            <hr />
            {user_name ? (
              <div>
                <img src={picture} alt="" />
                <p>Account Name: {user_name}</p>
                <p>Account Number: {auth_id}</p>
                <p>Balance: {this.bankBalance()}</p>
              </div>
            ) : (
              <p>Please login</p>
            )}
            <a href="http://localhost:3330/auth/logout">
              <button type="" className="">
                logout
              </button>
            </a>
          </div>
        )
    }
}

function mapStateToProps(state){
    console.log('redux store state: ', state)
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {getUser})(Private);