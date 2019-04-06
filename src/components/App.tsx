import * as React from "react";

export interface AppProps { compiler: string; framework: string; }

export class App extends React.Component<AppProps, {}> {
  render() {
      return <h1>Hello {this.props.compiler} and {this.props.framework}!</h1>;
  }
}