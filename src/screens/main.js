import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import styles from '../assets/styles/main.style';
import { logout } from '../redux/actions/user';
import { Avatar, Card, Text, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
const Main = (props) => {
  const navigation = useNavigation();
  const handleNavigation = async () => {
    navigation.navigate('Chat Limpo');
  };
  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.containerInfo}>
          <Avatar
            rounded
            source={{
              uri: 'https://randomuser.me/api/portraits/men/41.jpg',
            }}
            size="large"
          />
          <Text
            h3
            style={styles.mx2}
          >{`Hello ${props.user.name} ${props.user.lastName}`}</Text>
        </View>
      </Card>
      <View style={[styles.my, styles.containerInfo, styles.containerJustify]}>
        <Text h5>Talk with limpo bot </Text>
        <Icon
          raised
          onPress={handleNavigation}
          name="envelope-square"
          type="font-awesome"
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(Main);
