import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import moment from 'moment';
import styles from '../assets/styles/inputBox.style';
import stylesGlobal from '../assets/styles/global.style';
import { setMessage } from '../redux/actions/messages';

const InputBox = (props) => {
  const { userId, userName } = props;
  const [messageCurrent, setCurrentMessage] = useState('');
  const onSendPress = async () => {
    props.setMessage(messageCurrent, moment().format(), userId, userName);
    setCurrentMessage('');
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
            value={messageCurrent}
            onChangeText={setCurrentMessage}
          />
        </View>
        <View style={styles.buttonContainer}>
          {!messageCurrent ? (
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
const mapDispatchToProps = { setMessage };

export default connect(null, mapDispatchToProps)(InputBox);
