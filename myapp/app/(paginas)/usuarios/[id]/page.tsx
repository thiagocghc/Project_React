import Loading from "@/app/loading";
import Posts from "@/componentes/posts";
import { Suspense } from "react";

export default async function User( {params}: {params: Promise<{id:string}> } ){

    const {id} = await params;

    return(

        <>
        <Suspense fallback={<Loading/>}>
            <Posts id={id} />
        </Suspense>
        </>
    )
}