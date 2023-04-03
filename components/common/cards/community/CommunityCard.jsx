import React from 'react'
import { Image, TouchableWithoutFeedback, Text, View } from 'react-native'
import { styles } from './styles'

const CommunityCard = ({ item }) => {
  return (
    <View style={styles.itemCard}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={[styles.cardPriority, styles[item.priority]]}>{item.priority}</Text>
      </View>

      <Text style={styles.cardDescription}>{item.description}</Text>

      <View style={styles.cardFooter}>
        <View style={styles.cardStatus}>
          <Image
            style={styles.cardActionIcon}
            source={item.done ? require('../../../../assets/todo/done.png') : require('../../../../assets/todo/pending.png')}
          />
          <Text style={item.done ? styles.taskDone : styles.taskPending}>{item.done ? 'Done' : 'Pending'}</Text>
        </View>
      </View>
    </View>
  )
}

export default CommunityCard
