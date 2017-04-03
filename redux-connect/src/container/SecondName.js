import React,{PropsType} from 'react'

const secondName = ({secondName}) => (<span>{secondName}</span>);
secondName.propTypes = {
    secondName:PropsType.string.isRequired
}

function mapStateToProps(store){
    return {
        secondName:store.secondName
    }
}

export defautl connect(mapStateToProps)(secondName)
