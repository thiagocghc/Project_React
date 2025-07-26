type postsProps = {
    id: number,
    image: string,
    description: string,
    title: string
};

export default async function Posts({id}:{id:string}){
    //Simulando lentidao
    //await new Promise( (resolve)=> setTimeout(resolve,4000));

    const resposta = await fetch(`https://fakestoreapi.com/products/${id}`)
    const dados: postsProps = await resposta.json()
    console.log(dados);

    return(
        <>
        <div className="p-4">
           <h2> {dados.title} </h2>
           <img src={dados.image} alt="" />

           <p>{dados.description}</p>

        </div>
        </>
    )

}