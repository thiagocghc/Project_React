
export default function Pessoas(){
    //recebendo dados da API/Banco
    const lista = [
        {
            id:1,
            nome:"Rafael",
            idade: 26,
            endereco:{
                rua:"Av. Paulista, 999",
                cidade:"SP",
            }
        },
        {
            id:2,
            nome:"Ederson",
            idade: 41,
            endereco:{
                rua:"Av. Mato Grosso, 999",
                cidade:"MS",
            }
        },
         {
            id:3,
            nome:"Thiago",
            idade: 38,
            endereco:{
                rua:"Duque de Caxias, 999",
                cidade:"RJ",
            }
        }
    ];
    
    //Criando um elemento que renderiza os dados, exemplo TR
    return(
        <div>
            {lista.map((item) => (
                <div key={item.id}>
                    {item.id} | {item.nome} | {item.idade} | {item.endereco.rua} | {item.endereco.cidade}
                </div>
            ))}
        </div>
    )
}
