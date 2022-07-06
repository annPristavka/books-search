import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props){
        super(props)
        this.state = { error: null, errorInfo: null }
    }

    componentDidCatch(error, errorInfo){
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {
        if(this.state.error){
            return  this.state.error && this.state.error.toString()
        }

        return this.props.children
    }
}

export default ErrorBoundary