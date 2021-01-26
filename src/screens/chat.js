import { connect } from 'react-redux';
import styles from '../assets/styles/global.style';

import React, { useEffect, useRef } from 'react';
import { FlatList, View } from 'react-native';
import ChatMessage from '../components/ChatMessage';
import InputBox from '../components/InputBox';

const Chat = ({ user, messages }) => {
  const flatListRef = useRef(null);
  useEffect(() => {
    const setInitialMessages = () => {
      flatListRef.current.scrollToEnd();
    };
    setInitialMessages();
  }, [messages]);

  return (
    <View style={[styles.h100, styles.w100]}>
      <FlatList
        ref={flatListRef}
        data={messages.messages}
        renderItem={({ item }) => (
          <ChatMessage ownerId={user._id} message={item} />
        )}
        keyExtractor={(item) => item._id}
      />
      <InputBox userId={user._id} userName={user.name} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  messages: state.messages,
});
export default connect(mapStateToProps, null)(Chat);
