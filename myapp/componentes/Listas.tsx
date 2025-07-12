
export default function ListaFrutas(){

    const lista = [1,2,3,4,5,6,7,8,9,10];

    return(
        <div>
            {lista.map((item) => 
               <li key={item}>
                 {item}
               </li> 
            )}
        </div>
    )

}