import React, { useState } from 'react';
import { TextInput, TouchableWithoutFeedback, Keyboard, View, StyleSheet, Text } from 'react-native';
import Modal from 'react-native-modal';
import DropDownPicker from 'react-native-dropdown-picker';

//https://blog.logrocket.com/creating-a-pop-up-modal-in-react-native/
//https://stackoverflow.com/questions/70454197/typeerror-failed-to-construct-text-reactnative

export const TodoFormModal = ({ visible, onCancel, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState(null);

  const dropdownItems = [
    { label: 'Critical', value: 'critical' },
    { label: 'High', value: 'high' },
    { label: 'Medium', value: 'medium' },
    { label: 'Low', value: 'low' }
  ];

  const handlePriorityChange = (item) => {
    console.log(item.value); // Verify that this function is being called and getting the correct value
    setPriority(item.value); // Update the state with the selected value
  };

  const handleSubmit = () => {
    if (!title || !description || !priority) {
      return;
    }
    onSubmit({ title, description, priority });
    setTitle('');
    setDescription('');
    setPriority('');
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Text>I am the modal content!</Text>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default TodoFormModal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
