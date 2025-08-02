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
    

    // const users = [
    //     {id:1, nome:"Thiago"},
    //     {id:2, name:"João"},
    //     {id:3, name:"Tonho"},
    //     {id:4, name:"Chico"},
    //     {id:5, name:"Tadeu"},
    // ]

}