"use client"
import Button from "@/componentes/Button";
import Componente from "@/componentes/Componente";
import Image from "next/image";

function ola(){
  console.log("CLICOUUU");
  alert("Oi")
}

export default function Home() {
  return (
     <Button color="azul" texto="CLICK" funcao={ola}></Button>
  );
}
