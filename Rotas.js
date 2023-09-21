import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ListarProdutos } from "./src/Componentes/ListarProdutos"
import { ManterProdutos } from "./src/Componentes/ManterProdutos"

export function Rotas() {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ListarProdutos">
                <Stack.Screen name='ListarProdutos' component={ListarProdutos} options={{ title: 'Cadastro de Produtos' }} />
                <Stack.Screen name='ManterProdutos' component={ManterProdutos} options={{ title: 'Cadastrar/Atualizar Produtos' }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}