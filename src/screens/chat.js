import { connect } from 'react-redux';
import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
export const Chat = (props) => {
  const [state, setState] = useState({
    message: '',
  });

  const handleMessage = (event) => {
    setState({ ...state, message: event.nativeEvent.text });
  };
  return (
    <View>
      <Text>Hello {props.user.userName}</Text>
      <TextInput
        name="message"
        placeholder="Message"
        onChange={handleMessage}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps, null)(Chat);
