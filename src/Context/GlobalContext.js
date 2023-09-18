import { createContext, useState } from "react";

export const GlobalContext = createContext({})

export function InfoProvider({ children }) {
    
    const [dados, setDados] = useState({
        nome: '',
        email: '',
        cel: '',
        cpf: '',
        senha: '',
        confirmaSenha: ''
    })

    const [dadosEndereco, setDadosEndereco] = useState({
        cep: '',
        cidade: '',
        estado: '',
        rua: '',
        bairro: '',
        numero: '',
        complemento: ''
    })

    const [dadosCartao, setDadosCartao] = useState({
        numero: '',
        titular: '',
        validade: '',
        cvc: ''
    })

    const value = {
        dados, 
        setDados, 
        dadosEndereco, 
        setDadosEndereco,
        dadosCartao,
        setDadosCartao
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}