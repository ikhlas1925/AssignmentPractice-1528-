import * as React from 'react';
import { Image, Text,TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [value, onChangeText] = React.useState('Enter your email');

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <Image style={styles.container,{width: 25, height: 26, marginRight: 24 }} source={require('assets/musicApp_logo.png')} />
          <Typography variant="h6" className={classes.title}>
            The Music App
          </Typography>
        </Toolbar>
      </AppBar>
      <View style={styles.container}>
         <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1.5, }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
      <TouchableOpacity onPress={() => alert('Thank you, check your email')} style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    padding: 8,
    marginTop: 36,
  },
   button: {
    backgroundColor: "#ff4d4d",
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    textAlign: "center",

  }, 
});