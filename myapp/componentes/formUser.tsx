"use client" //TODA PÁGINA QUE HÁ INTERAÇÃO COM O USUÁRIO É CLIENT

import Swal from 'sweetalert2'
import { useRouter } from "next/navigation";
import { useReducer, useState } from "react";
import { userProps } from '@/tipos';
import Button from './Button';
import { headers } from 'next/headers';


export default function FormularioUser({id,nome="",email="",senha="",cpf="",fone=""} : userProps ){

    //DADOS DO FORMULÁRIO 
    const rota = useRouter()

    const [showModal, setShowModal] = useState(false);

    //Caso o ID venha pela ROTA, req /user/1 recebe 
    //Dessa forma consigo usar o mesmo form para cadastro e edição!!
    const [user_id,setUserId] = useState<number | undefined>(id)

    const [user_nome,setNome] = useState(nome)
    const [user_email,setMail] = useState(email)
    const [user_senha,setSenha] = useState(senha)
    const [user_cpf,setCPF] = useState(cpf)
    const [user_fone,setFone] = useState(fone)

    async function Deletar(){
        try{
            //DELETAR PESSOA
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/users`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({id:user_id})
            })

            const data = await response.json()

        if(data){
             Swal.fire({
                title: 'Deletado!!!!!',
                text: 'O usuário foi deletado com sucesso.',
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

       

        }catch(error){
            console.log(error)
        }
    }

    async function Salvar(event: React.FormEvent<HTMLFormElement>){
        
        event.preventDefault();

        console.log("Id Recebido: ",user_id);

        const formulario = {
            id:user_id,
            nome:user_nome,
            email:user_email,
            senha: user_senha,
            cpf:user_cpf,
            fone:user_fone
        }

        //DEFININDO SE SERÁ CADASTRO OU EDIÇÃO
        const metodo = user_id ? "PUT" : "POST";

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/users`,{
            method: metodo,
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
                value={user_nome}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                onChange={(e) => setNome(e.target.value)}
                />

                <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={user_email}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                onChange={(e) => setMail(e.target.value)}
                />

                <input
                type="text"
                name="cpf"
                placeholder="CPF"
                value={user_cpf}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                onChange={(e) => setCPF(e.target.value)}
                />

                <input
                type="password"
                name="senha"
                placeholder="Senha"
                 value={user_senha}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                onChange={(e) => setSenha(e.target.value)}
                />

                <input
                type="text"
                name="fone"
                 value={user_fone}
                placeholder="Telefone" 
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                onChange={(e) => setFone(e.target.value)}
                />

            
                {
                    user_id 
                    ?  <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"> Editar Usuário </button>
                    :  <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"> Cadastrar Usuário </button>
                }

            </form>

            <div>
                  {
                    user_id && <button onClick={Deletar} className="w-full bg-red-500 border-r-red-500 text-white py-2 rounded-md transition duration-200"> Excluir Usuário </button>
                  }
            </div>

        </div>
        </>
    )
}