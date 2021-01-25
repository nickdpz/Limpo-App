import React, { useState } from 'react';
import { View, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from '../assets/styles/inputBox.style';
import stylesGlobal from '../assets/styles/global.style';

const InputBox = (props) => {
  const { userId } = props;

  const [message, setMessage] = useState('');
  const onSendPress = async () => {
    console.log(message);
    console.log(userId);
    setMessage('');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}
      style={stylesGlobal.w100}
    >
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <TextInput
            placeholder={'Type a message'}
            style={styles.textInput}
            multiline
            value={message}
            onChangeText={setMessage}
          />
        </View>
        <View style={styles.buttonContainer}>
          {!message ? (
            <Icon name="paper-plane" type="font-awesome" />
          ) : (
            <Icon
              raised
              onPress={onSendPress}
              name="paper-plane"
              color="#37a726"
              type="font-awesome"
            />
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default InputBox;
