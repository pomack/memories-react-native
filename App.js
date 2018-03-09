import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Memories } from './components/Memories';
import { History } from './components/History';
import { Journal } from './components/Journal';
import { ToolbarAndroid } from 'react-native-gesture-handler';

const TOOLBAR_ACTIONS = [{
  title: "Memories",
  viewName: "memories",
  // icon: require("./memories.png"),
  show: "always",
  showWithText: true,
}, {
  title: "History",
  viewName: "history",
  // icon: require("./history.png"),
  show: "always",
  showWithText: true,
}, {
  title: "Journal",
  viewName: "journal",
  // icon: require("./journal.png"),
  show: "always",
  showWithText: true,
}];


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mainView: "memories",
    };
    this.handleToolbarActionSelected = this.handleToolbarActionSelected.bind(this);
  }

  render() {
    let mainView;
    switch(this.state.mainView) {
      case "history":
        mainView = <History/>;
        break;
      case "journal":
        mainView = <Journal/>;
        break;
      case "memories":
      default:
        mainView = <Memories/>;
        break;
    }
    return ( 
      <View style={styles.container}>
        <ToolbarAndroid
          title="Echo"
          actions={TOOLBAR_ACTIONS}
          onActionSelected={this.handleToolbarActionSelected}
          style={styles.toolbar}
        />
        {mainView}
      </View> 
    );
  }

  handleToolbarActionSelected(position) {
    this.showView(TOOLBAR_ACTIONS[position].viewName);
  }

  showView(view) {
    switch(view) {
      case 'history':
        this.showHistory();
        break;
      case 'journal':
        this.showJournal();
        break;
      case 'memories':
      default:
        this.showMemories();
        break;
    }
  }

  showMemories() {
    this.setState({
      mainView: "memories"
    });
  }
  showHistory() {
    this.setState({
      mainView: "history"
    });
  }
  showJournal() {
    this.setState({
      mainView: "journal"
    });
  }
}

const styles = StyleSheet.create({
  toolbar: {
    flex: 0,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: "100%",
    marginTop: 20, 
    minHeight: 50,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});
