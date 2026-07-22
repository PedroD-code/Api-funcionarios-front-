"use client"

import { useEffect, useState } from "react"
import api from "../services/api"





export default function Funcionarios(){

    const [funcionarios,setFuncionarios]=useState([])

    async function carregarFuncionarios() {
        
        try {
            const response = await api.get("/funcionarios")
            setFuncionarios(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        carregarFuncionarios()
    },[])


    return(
       <div className="min-h-screen bg-gray-100 p-8">
  <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
    Funcionários
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {funcionarios.map((funcionario) => (
      <div
        key={funcionario.id}
        className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
      >
        <h2 className="text-2xl font-bold text-blue-600">
          {funcionario.nome}
        </h2>

        <div className="mt-4 space-y-2">
          <p className="text-gray-700">
            <span className="font-semibold">Cargo:</span>{" "}
            {funcionario.cargo}
          </p>

          <p className="text-green-600 font-bold text-lg">
            R$ {Number(funcionario.salario).toFixed(2)}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
    )
}