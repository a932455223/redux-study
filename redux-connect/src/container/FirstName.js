import React,{PropsType} from 'react'

const firstName = ({firstName}) => (<span>{firstName}</span>);
firstName.propTypes = {
    firstName:PropsType.string.isRequired
}

function mapStateToProps(store){
    return {
        firstName:store.firstName
    }
}

export defautl connect(mapStateToProps)(firstName)
