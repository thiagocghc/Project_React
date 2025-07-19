import Product from "@/componentes/Product";

//PROPRIEDADES DOS DADOS RECEBIDOS PELA API
type propsProd = {
    id:number,
    title:string,
    image:string,
    price:string,
    description:string
}

export default async function Home(){

    const response = await fetch('https://fakestoreapi.com/products');
    const data : propsProd[] = await response.json()
    console.log(data)

    return(
        <>
        <div className="p-5 bg-gray-100 gap-2 flex flex-wrap">
                {data.map((prod) => (
                           
                 <div className="shadow-md" key={prod.id}>

                    <Product titulo={prod.title.split(" ")[0]} imagem={prod.image} descricao={prod.description.slice(0, 100)}  />                   

                </div>
            ))}
        </div>
        </>
    )
}