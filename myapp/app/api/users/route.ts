import db from '@/app/api/database';

export async function GET(request: Request) {

    try{     
        const [rows] = await db.query("SELECT * FROM pessoa");
        
        return new Response(JSON.stringify(rows),{
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