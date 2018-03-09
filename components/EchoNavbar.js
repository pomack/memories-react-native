import React, {Component} from 'react';
import { AppRegistry, ToolbarAndroid } from 'react-native';

export default class EchoNavbar extends Component {
  render() {
    return (
      <ToolbarAndroid
        // logo={require("./logo.png")},
        title="Echo"
        actions={[{
            title: "Memories",
            // icon: require("./memories.png"),
            show: "always",
        }, {
            title: "History",
            // icon: require("./history.png"),
            show: "always",
        }, {
            title: "Journal",
            // icon: require("./journal.png"),
            show: "always",
        }]}
        onActionSelected={this.onActionSelected}
      />
    );
  }
  onActionSelected(position) {
    switch(position) {
        case 0:
            this.props.onViewSelected('memories');
            break;
        case 1:
            this.props.onViewSelected('history');
            break;
        case 2:
            this.props.onViewSelected('journal');
            break;
    }
  }
}
// skip this line if using Create React Native App
AppRegistry.registerComponent('EchoReact', () => EchoNavbar);
