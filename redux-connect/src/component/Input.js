import React,{PropTypes,Component} from 'react'
export default class Input extends Component{
    static propTypes = {
        handleChange:PropTypes.func.isRequired
    }
    render(){
        const { handleChange,placeholder='',text='' } = this.props
        return (
               <p>
                <label>{text}:</label><input placeholder={placeholder} onChange={(e)=>{ handleChange(e.target.value)}} />
               </p>)
    }
}
