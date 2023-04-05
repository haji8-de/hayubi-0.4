import { TouchableWithoutFeedback, TextInput, Text, View } from 'react-native'
import CustomModal from '../customModal'
import { styles } from './styles'

const AddTaskModal = ({
  open,
  handleChangeTitle,
  handleChangeDesc,
  task,
  handleCancel,
  handleAddTask
}) => {
  return (
    <CustomModal open={open}>
      <Text style={styles.modalHeading}>Add Task</Text>

      <View style={styles.modalForm}>
        <View style={styles.modalFormGroup}>
          <Text style={styles.modalFormLabel}>Title</Text>
          <TextInput onChangeText={handleChangeTitle} value={task.title} style={styles.modalFormInput} />
        </View>

        <View style={styles.modalFormGroup}>
          <Text style={styles.modalFormLabel}>Description</Text>
          <TextInput onChangeText={handleChangeDesc}
          multiline={true}
          value={task.description} style={styles.modalFormInputMultiline} />
        </View>

        <View style={styles.modalFormGroup}>
          <Text style={styles.modalFormLabel}>editor</Text>
          <TextInput onChangeText={handleChangeDesc} value={task.editor} style={styles.modalFormInput} />
        </View>

        <View style={styles.modalFormActions}>
          <TouchableWithoutFeedback onPress={handleCancel}>
            <View style={[styles.modalFormAction, styles.secondaryButton, { marginRight: 6 }]}>
              <Text style={[styles.modalFormActionText, styles.modalFormActionTextSecondary]}>Cancel</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={handleAddTask}>
            <View style={[styles.modalFormAction, styles.primaryButton, { marginLeft: 6 }]}>
              <Text style={styles.modalFormActionText}>Add</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </CustomModal>
  )
}

export default AddTaskModal
