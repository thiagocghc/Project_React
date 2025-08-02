import db from '@/app/api/database';

export async function GET(request: Request, {params} : {params:{id:string}} ) {

    const {id} = params;
    console.log(id)

    try{     
        const [row] = await db.query<any>("SELECT * FROM pessoa WHERE id=?",[id]);
        
        return new Response(JSON.stringify(row[0]),{
            status:200,
            headers:{'Content-Type':'application/json'}
    })
    } 
    catch(error){
        return new Response(JSON.stringify({erro:error}),{
            status:500,
            headers:{'Content-Type':'application/json'}
        })    
    }
    
}


export async function POST(request: Request){

    const {nome,email,senha,fone,cpf } = await request.json();
    //const query = `INSERT INTO pessoa (nome,email) VALUES (${nome},${email}))`; OUTRA FORMA DE FAZER A QUERY

    try{
        const [result] = await db.query("INSERT INTO pessoa (nome,email,senha,cpf,fone) VALUES (?,?,?,?,?)",[nome,email,senha,cpf,fone]);

        return new Response(JSON.stringify(result),{
            status:201,
            headers:{'Content-Type':'application/json'}
        })
    }
    catch(error){

        return new Response(JSON.stringify({erro:error}),{
            status:500,
            headers:{'Content-Type':'application/json'}
        })    

    }

}

