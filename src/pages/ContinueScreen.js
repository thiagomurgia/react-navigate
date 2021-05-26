import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import Styled from 'styled-components/native'
import WelcomeSVG from '../assets/svg/welcome1.svg'
import { useRoute } from '@react-navigation/native'


const Body = Styled.View`
flex:1;
background-color: #333;
align-items:center;
justify-content:center

`
function ContinueScreen () {

    const route = useRoute()
    const username = route.params.username //pegando u username de homescreen

    return (
    <Body>
        <View>
            <Text style={styles.H1}>Olá, {username}!</Text>
            <Text style={styles.H1}> Seja bem vindo(a)</Text>
        </View>
        <View style={styles.BodyWelcome}>

        </View>
        <WelcomeSVG style={styles.SVGWelcome} width="70%" height="70%" />    
        
    </Body>
            
    )
}

const styles = StyleSheet.create({
    H1:{
        fontSize:25,
        color: '#fff',
        textAlign:'center'

    },

    SVGWelcome:{
        marginTop:-100
    }
    })

export default ContinueScreen