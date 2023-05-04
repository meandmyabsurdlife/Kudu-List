import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Platform, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Task from '../components/Task';
import { StatusBar } from 'expo-status-bar';

/*https://www.youtube.com/watch?v=SsMHZtii0w4*/
/*Coding is Our Life TODO List EXPO */

const HomeScreen = () => {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = () => {
        setTaskItems([...taskItems, task])
        setTask(null);
    }

    {/*complete task */}
    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    }
    
    return (
        <View style={styles.container}>
            <StatusBar barStyle={(styles.headerBar)}>

            </StatusBar>


            <View style={styles.taskWrapper}>
                <Text style={styles.sectionTitle}>Today's Tasks</Text>

                <View style={styles.items}>
                    {/*Task list will go here*/}
                    {
                        taskItems.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                                    <Task text={item}/>
                                </TouchableOpacity>
                            )
                            {/*<Task key={index} text={item}/>*/}
                        })
                    }
                </View>
            </View> 

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.writeTaskWrapper}
            >
                <TextInput
                    style={styles.taskInput}
                    placeholder={'Write your task'}
                    value={task}
                    onChangeText={text => setTask(text)}
                />
                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>        

        
    )
}

export default HomeScreen

const styles = StyleSheet.create ({
    headerBar:{
        barstyle: 'light-content',
        backgroundColor: '#FAC846',
    },
    container: {
        flex: 1,
        backgroundColor: 'E8EAED',
      },
    taskWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    items: {
        marginTop: 20,
    },
    writeTaskWrapper:{
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    taskInput: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        width: 250,
        backgroundColor: 'white',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addWrapper: {
        width: 60,
        height: 60,
        borderRadius: 60,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addText: {},
})