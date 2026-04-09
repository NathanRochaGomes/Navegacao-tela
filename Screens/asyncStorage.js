import {Text, View, StyleSheet, TextInput, Button} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { useState, useEffect } from 'react'

export default function AsyncStorageTela() {

    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [nomeSalvo, setNomeSalvo] = useState('')

    //SALVAR NOSSO OBJETO 
    const salvarPessoa = async () => {
        const pessoa ={
            nome : nome,
            senha : senha
        }
        try {
         const value = JSON.stringify(pessoa);
         await AsyncStorage.setItem('@pessoa', value);
         setNome('')
         setSenha('')
         alert('dados salvos')
        }
        catch(e) {
            console.log(e);
        }
    }
    // busca a pessoa salva
    const buscarPessoa = async () => {
        try {
            const value = await AsyncStorage.getItem('@pessoa');

            if (value != null){
                const pessoa = JSON.parse(value)
                setNomeSalvo(pessoa)
            }
        }
        catch(e) {
            console.log(e)
        }
    }

    const removerPessoa  = async () => {
        try{
            await AsyncStorage.removeItem('@pessoa')
            setNomeSalvo('')
        }
        catch(e) {
            console.log(e)
        }
    }

    useEffect(() => {
        buscarPessoa();
    }, [])

    return(
        <View style={styles.container}>
            <Text>TELA NOVA LOGIN</Text>
            <TextInput
            placeholder='Nome'
            value={nome}
            onChangeText={setNome}
            />
            <TextInput
            placeholder='Senha'
            value={senha}
            onChangeText={setSenha}
            secureTextEntry ={true}
            />
            <Button
            title='Salvar dados'
            onPress={salvarPessoa}
            />
            <Button
            title='Buscar dados'
            onPress={buscarPessoa}
            />
            <Button
            title='Remover dados'
            onPress={removerPessoa}
            />
            <Text>nome : {nomeSalvo?.nome}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent : 'center',
        alignItems: 'center'

    }
})