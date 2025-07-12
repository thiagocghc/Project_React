//CARRGANDO CONTAINERS CONDICIONAL
export default function Index(){
    const estaLogado = true

    return(
        <div>
            {estaLogado ? 
            <div> <p> DATA CONTAINER </p> </div>  
            :            
            <div> <p> NO DATA  </p> </div> 
            }
        </div>
    )
}