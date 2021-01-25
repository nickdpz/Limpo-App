import React from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';
import styles from '../assets/styles/chatMessages.style';

const ChatMessage = (props) => {
  const { message, ownerId } = props;

  const isMyMessage = () => {
    return message.user._id === ownerId;
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.messageBox,
          isMyMessage() ? styles.messageOwn : styles.messageOther,
        ]}
      >
        {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
        <Text style={styles.message}>{message.content}</Text>
        <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
      </View>
    </View>
  );
};

export default ChatMessage;
