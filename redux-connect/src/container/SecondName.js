import React,{PropTypes,Component} from 'react'
import { connect } from 'react-redux'
function info(msg,color='green'){
    console.log('%c'+msg,'color:'+color);
}
class SecondName extends Component{
    componentWillReceiveProps(){
        info('secondname received props')
    }

    static propTypes = {
        secondName:PropTypes.string.isRequired
    }
    render(){
        return (<p>secondName:<span>{this.props.secondName}</span></p>)
    }
}
function mapStateToProps(store){
    return {
        secondName:store.secondName
    }
}

export default connect(mapStateToProps)(SecondName)
