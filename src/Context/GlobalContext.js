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

    return (
        <GlobalContext.Provider
            value={{
                dados, setDados, dadosEndereco, setDadosEndereco
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}