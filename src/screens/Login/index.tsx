import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 

export function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation<any>();

  function handleLogin() {
    if (!email || !senha) {
      Alert.alert('Atenção', 'Preencha o email e a senha.');
      return;
    }
    navigation.navigate('register');
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/img-sertaocomp-login.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Entrar</Text>

    <View style={styles.inputGroup}>
      <Text style={styles.label}>Digite seu email</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.inputFlex}
          placeholder="escreva aqui seu email"
          placeholderTextColor="#666"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <Image
          source={require('../../../assets/email.png')}
          style={styles.inputIcon}
        />
      </View>
    </View>

    <View style={styles.inputGroup}>
      <Text style={styles.label}>Digite sua senha</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.inputFlex}
          placeholder="escreva aqui sua senha"
          placeholderTextColor="#666"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        <Image
          source={require('../../../assets/lock.png')}
          style={styles.inputIcon}
        />
      </View>
    </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Image
            source={require('../../../assets/User.png')}
            style={{ width: 20, height: 20 }}
          />
          <Text style={styles.buttonText}>Logar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logo: {
    width: 372,
    height: 145,
    marginBottom: 24,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Roboto_700Bold',
    marginBottom: 24,
    alignSelf: 'flex-start',
  },
  inputGroup: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    color: '#ccc',
    fontSize: 13,
    marginBottom: 6,
    fontFamily: 'Roboto_400Regular',
  },
  input: {
    backgroundColor: '#2a2a2a',
    color: '#fff',
    borderRadius: 6,
    padding: 12,
    fontSize: 14,
    fontFamily: 'Roboto_400Regular',
    borderWidth: 1,
    borderColor: '#444',
  },
  button: {
    backgroundColor: '#2ecc40',
    width: '100%',
    padding: 14,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Roboto_700Bold',
    fontSize: 16,
  },
  inputWrapper: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#2a2a2a',
  borderRadius: 6,
  borderWidth: 1,
  borderColor: '#444',
  },
  inputFlex: {
    flex: 1,
    color: '#fff',
    padding: 12,
    fontSize: 14,
    fontFamily: 'Roboto_400Regular',
  },
  inputIcon: {
    width: 18,
    height: 20,
    marginRight: 12,
    tintColor: '#fff',
  },
});