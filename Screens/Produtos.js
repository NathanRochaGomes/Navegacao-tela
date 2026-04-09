import {View, TextInput, Text, Button} from 'react-native'
import { useState, useEffect } from 'react'
import openDB from '../database/bd'


const  db = openDB();


export default function Produtos() {


    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [produtos, setProdutos] = useState([]);

    const adicionarProdutos = async () => {
        try {
            await db.runAsync('INSERT INTO produtos (name, valor) VALUES (?, ?)', [nome, parseFloat(valor)])
            alert('Produto adicionado com sucesso!')
            setNome('')
            setValor('')
            carregarProtudos()
        } catch (error) {
            console.error('Erro ao adicionar produto:', error)
        }
    }

    const carregarProtudos = async () => {
        try{
            const rows = await db.getAllAsync('Select * from produtos')
            setProdutos(rows)
            console.log(rows)
        } catch (error) {
            console.error('Erro ao carregar produtos:', error)
        }
    }

    useEffect(() => {
        carregarProtudos();
    }, [])
    return(
        <View>
            <Text>Produto</Text>
            <TextInput 
                placeholder="Nome do produto" 
                value={nome}
                onChangeText={setNome}
            />
            <TextInput 
                placeholder='Valor' 
                value={valor}
                onChangeText={setValor}
            />
            <Button title='Adicionar Produto' 
            onPress={adicionarProdutos}
            />

            {produtos.map((produto) => (
                <View key={produto.id}>
                <Text>{produto.name}</Text>
                <Text>{produto.valor}</Text>
                <Button title='Deletar' onPress={() => deletarProduto(produto.id)} />
                </View>
            ))}
        </View>
    )

}