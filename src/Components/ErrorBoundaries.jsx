import React, { Component } from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMsg: "" };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorMsg: error });
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          {/* <h1>We are under maintenance...</h1> */}
          <p>{this.state.errorMsg}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
