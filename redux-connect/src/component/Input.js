import React,{PropTypes} from 'react'

const Input = ({handleChange}) => <input onChange={handleChange} />

Input.propTypes = {
    handleChange:PropTypes.func.isRequired
}
export default Input
