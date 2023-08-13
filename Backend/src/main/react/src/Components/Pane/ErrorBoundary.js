import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false, error: null, errorInfo: null};
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div id="error-div">
          <h1>An error occured creating the table!</h1>
          <h2>Please try refreshing the page or ensuring a stable connection.</h2>
        </div>

      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;