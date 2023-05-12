import React, { useState, useRef } from 'react';
import { View, Text, Button, KeyboardAvoidingView, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import TodoFormModal from '../components/TodoFormModal';
import TasksList from '../components/TaskList';

const TodoFormScreen = () => {

  //const flatListRef = useRef(null);
  const flatListRef = useRef();

  const tasks = [
    { id: 1, title: 'Task 1', description:'any', priority: 'Critical' },
    { id: 2, title: 'Task 2', description:'any', priority: 'Critical' },
    { id: 3, title: 'Task 3', description:'any', priority: 'Critical' },
  ];

  const [isformVisible, setFormVisible] = useState(false);

  const handleAddTask = () => {
    setFormVisible(true);
  };

  const triggerEditTask = task => {
    setTaskToEdit(task)
    setEditModalVisible(true)
  }

  const handleCheck = id => {
    dispatch(toggleDone(id))
  }
  
  const handleDelete = id => {
    return Alert.alert('Delete task', 'Are you sure you want to delete this task?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: () => deleteTask(id) }
    ])
  }

  const handleSaveTodo = (todo) => {
    console.log(todo);
    setFormVisible(false);
  };

  return (
    <View style={styles.container}>

      <View style={styles.taskWrapper}>
        <TasksList
          tasks={tasks}
          flatListRef={flatListRef}
          triggerEditTask={triggerEditTask}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      </View>

      <KeyboardAvoidingView style={styles.iconContainer}>

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Icon name="plus" size={30} color="#000000"/>
          </View>
        </TouchableOpacity>

        <TodoFormModal
          visible={isformVisible}
          onCancel={() => setFormVisible(false)}
          onSave={handleSaveTodo}
        />

      </KeyboardAvoidingView>

    </View>
  );
};

export default TodoFormScreen;

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
  iconContainer : {
      paddingHorizontal: 20,

  },
  addWrapper: {
      width: 60,
      height: 60,
      borderRadius: 60,
      backgroundColor: '#FAC846',
      alignItems: 'center',
      justifyContent: 'center',
  },
})
