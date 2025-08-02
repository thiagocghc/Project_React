"use client" //TODA PÁGINA QUE HÁ INTERAÇÃO COM O USUÁRIO É CLIENT

import { useState } from "react";

export default function FormularioUser(){

    //DADOS DO FORMULÁRIO 

    const [nome,setNome] = useState("")
    const [email,setMail] = useState("")
    const [senha,setSenha] = useState("")
    const [cpf,setCPF] = useState("")
    const [fone,setFone] = useState("")

    async function Salvar(event: React.FormEvent<HTMLFormElement>){
        
        event.preventDefault()

        const formulario = {
            name:nome,
            email:email,
            senha: senha,
            fone:fone,
            cpf:cpf
        }

        const response = await fetch(`http://localhost:3000/api/users`,{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(formulario)
        })

        const data = await response.json()

       
        console.log(nome)
        console.log(email)
        console.log(senha)
        console.log("SALVANDO....")

    }

    return(
        <>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <form className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-4">
                <h2 className="text-2xl font-bold text-center mb-6">Cadastro</h2>

                <input
                type="text"
                name="nome"
                placeholder="Nome completo"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                onChange={(e) => setNome(e.target.value)}
                />

                <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                onChange={(e) => setMail(e.target.value)}
                />

                <input
                type="text"
                name="cpf"
                placeholder="CPF"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                />

                <input
                type="password"
                name="senha"
                placeholder="Senha"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                onChange={(e) => setSenha(e.target.value)}
                />

                <input
                type="text"
                name="fone"
                placeholder="Telefone" 
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                    onChange={(e) => setFone(e.target.value)}
                />

                <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
                onClick={Salvar}
                >
                Cadastrar
                </button>
            </form>
        </div>
        </>
    )
}