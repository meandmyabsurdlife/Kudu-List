import { StyleSheet, View, Text, TouchableWithoutFeedback, } from 'react-native'
import React from 'react'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const TaskCard = ({
  item,
  handleTriggerEdit,
  handleCheck,
  handleDelete
}) => {
  return (
    <View style={styles.itemCard}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={[styles.cardPriority, styles[item.priority]]}>{item.priority}</Text>
      </View> 

      <Text style={styles.cardDescription}>{item.description}</Text>

      <View style={styles.cardFooter}>
        <View style={styles.cardStatus}>
          <Text style={item.done ? styles.taskDone : styles.taskPending}>{item.done ? 'Done' : 'Pending'}</Text>
        </View>

        <View style={styles.cardActions}>
          <TouchableWithoutFeedback onPress={() => handleCheck(item.id)}>
            <View style={styles.cardActionButton}>
              {item.done ? (
                <FontAwesomeIcon name="fa-square-o" size={16} color="red"/>
              ) : (
                <FontAwesomeIcon name="fa-check" size={16} color="blue"/>
              )}
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => handleTriggerEdit(item)}>
            <View style={styles.cardActionButton}>
              <FontAwesomeIcon name="fa-edit" size={16} color="blue"/>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => handleDelete(item.id)}>
            <View style={styles.cardActionButton}>
              <FontAwesomeIcon name="fa-trash" size={16} color="blue"/>
            </View>
          </TouchableWithoutFeedback>

        </View>
      </View>

    </View>
  )
}

export default TaskCard

const styles = StyleSheet.create({
  itemCard: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#FAC846',
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 15,
    //elevation: 5
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  cardTitle: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 24,
  },
  cardPriority: {
    color: '#000',
    fontSize: 20,
    textTransform: 'uppercase'
  },
  cardDescription:{
    color: '#000',
    //fontFamily: fonts.light,
    fontSize: 14,
    marginBottom: 28
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cardStatus:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskDone:{
    color: 'blue',
    //fontFamily: fonts.semiBold,
    fontSize: 14,
    marginLeft: 8,
  },
  taskPending:{
    color: 'red',
    //fontFamily: fonts.semiBold,
    fontSize: 14,
    marginLeft: 8,
  },
  cardActions:{
    marginLeft: 15,
  },
  cardActionButton:{
    width: 16,
    height: 16,
    resizeMode: 'contain'
  },
})