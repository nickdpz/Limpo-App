import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import styles from '../assets/styles/main.style';
import stylesGlobal from '../assets/styles/global.style';
import { logout } from '../redux/actions/user';
import { Avatar, Card, Text, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
const Main = (props) => {
  const navigation = useNavigation();
  const handleNavigation = async () => {
    navigation.navigate('Chat Limpo');
  };

  const getIconUserRole = (role) =>
    role === 'admin'
      ? 'user-secret'
      : role === 'customer'
      ? 'user'
      : role === 'client'
      ? 'user-o'
      : 'user-plus';
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
          <View>
            <Text h4 style={styles.mx2}>
              Hello
            </Text>
            <Text
              h4
              style={[styles.mx2, styles.w200px]}
            >{`${props.user.name} ${props.user.lastName}`}</Text>
          </View>
        </View>
        <View
          style={[
            styles.containerInfo,
            styles.containerJustify,
            stylesGlobal.mt20,
          ]}
        >
          <Text
            h4
            style={[stylesGlobal.textCapitalize, stylesGlobal.colorLimpo]}
          >
            {props.user.role + ' user '}
          </Text>
          <Icon name={getIconUserRole(props.user.role)} type="font-awesome" />
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
