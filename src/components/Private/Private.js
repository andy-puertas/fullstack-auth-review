import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getUser} from '../../ducks/user';

class Private extends Component {
    componentDidMount() {

    }

    render() {
        console.log('props: ', this.props)
        return (
            <div>
                <h2>Private</h2>
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