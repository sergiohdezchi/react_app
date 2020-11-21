import React, { Component } from 'react'

//const withLoader = (propValue, WrappedComponent) => {
const withLoader = (propValue) => (WrappedComponent) => {
    return class WithLoader extends Component {
        constructor(props) {
            super(props)
        }

        render(){
            return this.props[propValue].length === 0 ? <h1 className='t4'>Cargando...</h1> : <WrappedComponent {...this.props} />
        }
    }
}

export default withLoader