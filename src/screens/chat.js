import { connect } from 'react-redux';
import chatData from '../data/messages';
import styles from '../assets/styles/global.style';

import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import ChatMessage from '../components/ChatMessage';
import InputBox from '../components/InputBox';

const Chat = (props) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const setInitialMessages = () => {
      let messagesFilter = chatData.messages.filter(
        (item) =>
          item.user._id === '5e7d15eba518090f28b5b13a' || item.user._id === 'u2'
      );
      setMessages(messagesFilter);
    };
    setInitialMessages();
  }, []);

  return (
    <View style={[styles.h100, styles.w100]}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <ChatMessage ownerId={props.user._id} message={item} />
        )}
        keyExtractor={(item, index) => index.toString()}
        inverted
      />
      <InputBox userId={props.user._id} />
    </View>
  );
};

const mapStateToProps = (state) => ({ user: state.user });
export default connect(mapStateToProps, null)(Chat);
