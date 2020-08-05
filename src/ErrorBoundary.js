import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = null;
    }

    static getDerivedStateFromError(error) {
        return error;
    }

    componentDidCatch(error, info) {
        console.log(`ERRO! ${error} | ${info}`);
    }

    render() {
        if (this.error) {
            return (
                <p>ERRO: {this.error}</p>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;