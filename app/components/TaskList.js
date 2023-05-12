import { FlatList, Text, View, Image } from 'react-native'
import { StyleSheet } from 'react-native';

import TaskCard from './TaskCard'

const TasksList = ({ tasks, flatListRef, triggerEditTask, handleCheck, handleDelete }) => {
    const renderItem = ({ item }) => (
      <TaskCard item={item} handleTriggerEdit={triggerEditTask} handleCheck={handleCheck} handleDelete={handleDelete} />
    )

    return (
        <View style={styles.listContainer}>
          {tasks.length === 0 ? (
            <View style={styles.noContentContainer}>
              <Text style={styles.noContentText}>No tasks</Text>
            </View>
          ) : (
            <FlatList
              ref={flatListRef}
              data={tasks}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      )
    }
    
export default TasksList

const styles = StyleSheet.create({
  listContainer:{
    flex: 1,
  },
  noContentContainer:{
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noContentText:{
    color: '#FAC846',
    fontSize: 30,
  },
})
    