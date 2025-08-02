"use client" //TODA PÁGINA QUE HÁ INTERAÇÃO COM O USUÁRIO É CLIENT

import Swal from 'sweetalert2'
import { useRouter } from "next/navigation";
import { useReducer, useState } from "react";
import { userProps } from '@/tipos';


export default function FormularioUser({id,nome="",email="",senha=""} : userProps ){

    //DADOS DO FORMULÁRIO 
    const rota = useRouter()
    const [user_nome,setNome] = useState("")
    const [user_email,setMail] = useState("")
    const [user_senha,setSenha] = useState("")
    const [user_cpf,setCPF] = useState("")
    const [user_fone,setFone] = useState("")

    async function Salvar(event: React.FormEvent<HTMLFormElement>){
        
        event.preventDefault()

        const formulario = {
            nome:user_nome,
            email:user_email,
            senha: user_senha,
            cpf:user_cpf,
            fone:user_fone
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/users`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(formulario)
        })

        const data = await response.json()

        if(data){
             Swal.fire({
                title: 'Cadastro realizado!',
                text: 'O usuário foi cadastrado com sucesso.',
                icon: 'success',
                confirmButtonText: 'Ok',
                timer: 2000,
                timerProgressBar: true,
                didClose: () => rota.push("/")
            });
            
        }
        else{
            Swal.fire({
                title: 'Erro!',
                text: 'Ocorreu um erro ao cadastrar o usuário.',
                icon: 'error',
                confirmButtonText: 'Tentar novamente'
            });
        }

       
        // console.log(nome)
        // console.log(email)
        // console.log(senha)
        // console.log("SALVANDO....")

    }

    return(
        <>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <form onSubmit={Salvar} className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-4">
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
                >
                Cadastrar
                </button>
            </form>

        </div>
        </>
    )
}