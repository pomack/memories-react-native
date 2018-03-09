import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export class MemoryBox extends Component {
    render() {
        return (
            <View style={style.memory_container}>
                <View style={style.memory_header}><Text>{this.props.name}</Text></View>
                <View style={style.memory_description}><Text>{this.props.description}</Text></View>
            </View>
        );
    }
}

export class Memories extends Component {
    render() {
        return (
            <View style={style.memories_container}>
                <View style={style.memories_row}>
                    <MemoryBox name="1 week ago" description="Stuff"/>
                    <MemoryBox name="1 month ago" description="More Stuff"/>
                </View>
                <View style={style.memories_row}>
                    <MemoryBox name="3 months ago" description="Whatever"/>
                    <MemoryBox name="1 year ago" description="Uh huh"/>
                </View>
            </View>
        ); 
    }
}

const style = StyleSheet.create({
    memory_header: {
        backgroundColor: 'yellow',
        borderBottomWidth: 2, 
        borderStyle: "solid",
        borderBottomColor: "black",
        alignItems: "center",
    },
    memory_description: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
    memory_container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "black", 
    },
    memories_container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
    memories_row: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    memories_container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    }
})
