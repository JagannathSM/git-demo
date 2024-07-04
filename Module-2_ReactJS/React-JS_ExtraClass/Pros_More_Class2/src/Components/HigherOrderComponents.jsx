import React from 'react'

const withToppings = (Component) => {
    return(props) => {
        const toppings = ["chicken","mashmellow"]
        return <Component {...props} toppings={toppings}/>
    }
}

const Pizza = (props)=> {
    return(
        <>
        <h1>Pizza</h1>
        <p>Toppings : {props.toppings}</p>
        </>
    )
}

const HigherOrderComponents = withToppings(Pizza);

export default HigherOrderComponents
