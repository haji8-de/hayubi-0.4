import React from 'react'
import { Image, TouchableWithoutFeedback, Text, View } from 'react-native'
import { styles } from './styles'
const moment = require('moment');

const CommunityCard = ({ item }) => {
  function getDiffDatetime(datetime){
    console.log(datetime)
    let dateOne = moment();
    let dateTwo = moment(datetime);
    const diffDay = dateOne.diff(dateTwo, 'days');
    if(diffDay < 1){
        const diffMin = dateOne.diff(dateTwo, 'minutes');
        return "" + diffMin +"분 전"
    }
    else if(diffDay > 31){
        const diffMin = dateOne.diff(dateTwo, 'months');
        return "" + diffMin +"달 전"
    }

    return "" + diffDay +"시간 전"
  }

  return (
    <View style={styles.itemCard}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={[styles.cardPriority, styles[item.priority]]}>{getDiffDatetime(item.datetime)}</Text>
      </View>

      <Text style={styles.cardDescription}>{item.description}</Text>

      <View style={styles.cardFooter}>
        <View style={styles.cardStatus}>
          <Text style={styles.taskDone}>{item.editor}</Text>
        </View>
      </View>
    </View>
  )
}

export default CommunityCard
