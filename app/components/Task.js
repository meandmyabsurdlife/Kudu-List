import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Task = (props) => {
    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    }

    return (
        <View style={styles.taskItem}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.checklistSquare}/>
                {/*<View style={styles.checklistSquare}></View>*/}
                <Text style={styles.itemText}>{props.text}</Text>
            </View>

            <View style={styles.circular}>

            </View>

            
        </View>
    )
}

export default Task

const styles = StyleSheet.create({
    taskItem: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    checklistSquare: {
        width: 24,
        height: 24,
        backgroundColor: '#FAC846',
        opacity: 0.8,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#FAC846',
        borderWidth: 2,
        borderRadius: 5,
    },

})