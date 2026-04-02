import { Text, View, StyleSheet, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Button } from "react-native-paper";

export default function Login() {
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [nomeSalvo, setNomeSalvo] = useState("");


    //Salvar dados de pessoas.
    const salvarPessoa = async () => {
        const pessoa = { nome, senha };
        try {
            const value = JSON.stringify(pessoa);
            await AsyncStorage.setItem('@pessoal', value);
            setNome("");
            setSenha('');
            alert("Pessoa salva com sucesso!");
        } catch (error) {
            console.error("Erro ao salvar pessoa:", error);
        }
    };

    //Buscar Pessoa.
    const buscarPessoa = async () => {
        try {
            const value = await AsyncStorage.getItem('@pessoal');
            if (value !== null) {
                const pessoa = JSON.parse(value);
                setNomeSalvo(pessoa.nome);
            }
        } catch (error) {
            console.error("Erro ao buscar pessoa:", error);
        }
    }

    //Deletar dados.
    const deletarDados = async () => {
        try {
            await AsyncStorage.removeItem('@pessoal');
            setNomeSalvo('');
            setNome('');
            setSenha('');
        } catch (error) {
            console.error("Erro ao deletar dados:", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text>TELA LOGIN</Text>
            <TextInput
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                placeholder="Senha"
                value={senha}
                secureTextEntry={true}
                onChangeText={setSenha}
            />
            <Button mode="contained" onPress={buscarPessoa}>Entrar</Button>
            <Button mode="contained" onPress={salvarPessoa}>Cadastrar</Button>
            <Button mode="outlined" onPress={deletarDados}>Remover dados</Button>
            {nomeSalvo ? <Text>Usuário salvo: {nomeSalvo}</Text> : null}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }

});