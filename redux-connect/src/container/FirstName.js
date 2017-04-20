import React,{PropTypes,Component} from 'react'
import { connect } from 'react-redux'
function info(msg,color='green'){
    console.log('%c'+msg,'color:'+color);
}

class FirstName extends Component{
    static propTypes = {
        firstName:PropTypes.string.isRequired
    }

    componentWillReceiveProps(){
        info('firstName received props')
    }

    render(){
        return (<p>firstName:<span>{this.props.firstName}</span> <span>age:{this.props.age}</span></p>)
    }
}

function mapStateToProps(store){
    return {
        firstName:store.firstName
    }
}

export default connect(mapStateToProps)(FirstName)
