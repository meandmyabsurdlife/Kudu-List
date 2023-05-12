// from todoform
<TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />
        <Dropdown
          data={dropdownItems}
          placeholder="Select priority"
          defaultValue={priority}
          containerStyle={{ height: 40, marginVertical: 10 }}
          itemStyle={{ justifyContent: 'flex-start' }}
          dropDownStyle={{ backgroundColor: '#fafafa' }}
          onChange={handlePriorityChange}
        />
        <View style={styles.buttonContainer}>
          <Button title="Cancel" onPress={onCancel} />
          <Button title="Submit" onPress={handleSubmit} />
        </View>