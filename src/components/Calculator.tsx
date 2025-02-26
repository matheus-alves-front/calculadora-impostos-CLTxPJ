"use client"
import React, { useState } from "react";
import TaxTables from "./TaxTables";
import { getINSS, getIRRF, getPJTaxes } from "@/utils/calculators";
import Image from "next/image";
import { GoogleAds } from "./GoogleAds";

const SalaryCalculator: React.FC = () => {
  const [salary, setSalary] = useState<number | string>("");
  const [isTaxTables, setIsTaxTables] = useState(false)

  const parsedSalary = typeof salary === "string" ? parseFloat(salary) || 0 : salary;

  const inss = getINSS(parsedSalary);
  const irrf = getIRRF(parsedSalary);
  const pjTaxes = getPJTaxes(parsedSalary);
  const netCLT = parsedSalary - inss - irrf;
  const netPJ = parsedSalary - pjTaxes;

  if (isTaxTables) return (
    <>
      <TaxTables>
        <button onClick={() => setIsTaxTables(!isTaxTables)} className="p-2 bg-blue-600/90 rounded text-white mb-4">Voltar para a calculadora</button>
      </TaxTables>
    </>
  )

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Calculadora CLT vs PJ</h1>
      <Image 
        src={'/haddad.webp'} 
        className="rounded-full mb-4"
        width={150} 
        height={150} 
        alt="Fernando Haddad"
      />
      <input
        type="number"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        placeholder="Digite seu salário bruto"
        className="p-2 border border-gray-300 rounded mb-4 w-64 text-center"
      />
      <div className="bg-gray-400 p-2 mb-4">
        <GoogleAds />
      </div>

        <div className="w-full max-w-md p-4 bg-white rounded shadow-md">
          <h2 className="text-lg font-semibold mb-2">Resultados:</h2>
          
          <div className="mb-4">
            <h3 className="font-medium">🔵 CLT</h3>
            <p>Salário Bruto: <strong>R$ {parsedSalary.toFixed(2)}</strong></p>
            <p>INSS: <strong>-R$ {inss.toFixed(2)}</strong></p>
            <p>IRRF: <strong>-R$ {irrf.toFixed(2)}</strong></p>
            <p><strong>Salário Líquido: R$ {netCLT.toFixed(2)}</strong></p>
          </div>

          <div>
            <h3 className="font-medium">🟢 PJ</h3>
            <p>Salário Bruto: <strong>R$ {parsedSalary.toFixed(2)}</strong></p>
            <p>Simples Nacional: <strong>-R$ {pjTaxes.toFixed(2)}</strong></p>
            <p><strong>Salário Líquido: R$ {netPJ.toFixed(2)}</strong></p>
          </div>
        </div>

      <button onClick={() => setIsTaxTables(!isTaxTables)} className="p-2 bg-blue-600/90 rounded text-white mt-4">Ver tabelas de impostos</button>
    </div>
  );
};

export default SalaryCalculator;
