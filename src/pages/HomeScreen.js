import React, {useState} from 'react';
import { TouchableOpacity, StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import Styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native'


const Body = Styled.View`
flex:1;
background-color: #333;
justify-content:center

`

const HomeScreen = () =>{

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const navigation = useNavigation()

  const handleContinueClick = ()=>{
    if(username === ''){
        Alert.alert(
            "Opss!!!",
            "Insira um usuário válido.",
        )
        return

    }if(password ===''){
        Alert.alert(
            "Opss!!!",
            "Insira uma senha.",
            )
        return
    }else{
        navigation.navigate('ContinueScreen',{username: username})
    }
  }

  const handleClickRemember = () =>{
      navigation.navigate('RememberScreen')
  }

  const handleRegisterClick = ()=>{
      navigation.navigate('Register')
  }

  return(

  <Body>
    
    <View>
      <Text style={styles.H1}>Olá, seja bem vindo(a)!</Text>
    </View>
    <View>
      <Text style={styles.Small}>Faça o login para entrar na sua conta</Text>
    </View>
    <View>
      <View style={styles.Inputs}>
        <View style={styles.UserView}>
          <Icons name="person" size={20} color="#999"/>
          <Text style={styles.TextEmailView}>Usuário</Text>
        </View>
        <TextInput style={styles.Input}
        value={username} 
        onChangeText={n=>setUsername(n)}/>
      </View>
      <View style={styles.Inputs}>
        <View style={styles.EmailView}>
        <Icon name="form-textbox-password" size={20} color="#999" />
          <Text style={styles.TextEmailView}>Senha</Text>
        </View>
        <TextInput style={styles.Input}
        value={password}
        onChangeText={n=>setPassword(n)}
        secureTextEntry={true}/>
      </View>
      <View style={styles.ForgotPassword}>
        <TouchableOpacity
        onPress={handleClickRemember}>
        <Text style={styles.TextForgotPassword}>Não lembra sua senha?</Text>
        </TouchableOpacity>
        </View>
    </View>
    
    <View style={styles.BtnArea}>
      <TouchableOpacity style={styles.Btn}
      onPress={handleContinueClick}>
        <Text style={styles.TextBtn}>Continue</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.NoHaveAccount}>
      <Text style={styles.TextNoHaveAccount}>Não tem uma conta?</Text>
      <TouchableOpacity
      style={styles.BtnNoHaveAccount}
      onPress={handleRegisterClick}>
        <Text style={styles.TextNoHaveAccountSub}>Registre-se</Text>
      </TouchableOpacity>
    </View>



  </Body>

    
    
  )
}

const styles = StyleSheet.create({
  H1:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:20,
    marginLeft:16
  },
  Small:{
    color:'#999',
    fontSize:14,
    marginTop:8,
    marginLeft:16,
  },
  
  EmailView:{
    width: 80,
    height: 45,
    backgroundColor:'#555',
    alignItems:'center',
    justifyContent:'center',
    borderTopLeftRadius:8,
    borderBottomLeftRadius:8,
    flexDirection:'row'
  },
  TextEmailView:{
    fontSize:14,
    color: '#999',
    marginLeft: 8,
  },
  UserView:{
    width: 80,
    height: 45,
    backgroundColor:'#555',
    alignItems:'center',
    justifyContent:'center',
    borderTopLeftRadius:8,
    borderBottomLeftRadius:8,
    flexDirection:'row',
  },
  Input:{
    width: '76%',
    height:45,
    backgroundColor:'#555',
    borderTopRightRadius:8,
    borderBottomRightRadius:8,
    fontSize:14,
    color:'#fff'
  },
  Inputs:{
    flexDirection:'row',
    justifyContent:'center',
    marginTop:16
  },
  ForgotPassword:{
    alignItems:'flex-end',
    marginTop:16
  },
  TextForgotPassword:{
    paddingRight:14,
    color: '#cacaca'
  },
  BtnArea:{
    alignItems:'center'
  },
  Btn:{
    width: "95%",
    backgroundColor:"#9400d3",
    marginTop:20,
    height: 45,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 8,

  },
  TextBtn:{
    fontSize:16,
    color:'#fff',
    fontWeight:'bold'
  },
  NoHaveAccount:{
    marginTop:36,
    flexDirection:'row',
    justifyContent:'center'
  },
  BtnNoHaveAccount:{
    marginLeft:8,
  },
  TextNoHaveAccount:{
    color:'#fff'
  },
  TextNoHaveAccountSub:{
    textDecorationLine:'underline',
    color:'#fff'
  }

})

export default HomeScreen;