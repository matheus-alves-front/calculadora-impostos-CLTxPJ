import React from "react";
import { INSS_TABLE, IRRF_TABLE, SIMPLES_NACIONAL_TABLE } from "@/utils/calculators";
import Link from "next/link";

const formatCurrency = (value: number) => `R$ ${value.toFixed(2)}`;

const TaxTables = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Tabelas de Impostos 2025</h1>
      <Link href={'/'} className="p-2 block bg-blue-600/90 rounded text-white mb-4">Ver Calculadora</Link>
      {/* Tabela INSS */}
      <div className="w-full max-w-lg p-4 bg-white rounded shadow-md mb-4">
        <h2 className="text-lg font-semibold mb-2">📌 Tabela INSS 2025</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Faixa Salarial</th>
              <th className="border border-gray-300 p-2">Alíquota</th>
            </tr>
          </thead>
          <tbody>
            {INSS_TABLE.map((row, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 p-2">{formatCurrency(row.min)} - {formatCurrency(row.max)}</td>
                <td className="border border-gray-300 p-2">{(row.rate * 100).toFixed(1)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tabela IRRF */}
      <div className="w-full max-w-lg p-4 bg-white rounded shadow-md mb-4">
        <h2 className="text-lg font-semibold mb-2">📌 Tabela IRRF 2025</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Faixa Salarial</th>
              <th className="border border-gray-300 p-2">Alíquota</th>
              <th className="border border-gray-300 p-2">Dedução</th>
            </tr>
          </thead>
          <tbody>
            {IRRF_TABLE.map((row, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 p-2">{formatCurrency(row.min)} - {formatCurrency(row.max)}</td>
                <td className="border border-gray-300 p-2">{(row.rate * 100).toFixed(1)}%</td>
                <td className="border border-gray-300 p-2">{formatCurrency(row.deduction ?? 0)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tabela Simples Nacional */}
      <div className="w-full max-w-lg p-4 bg-white rounded shadow-md mb-4">
        <h2 className="text-lg font-semibold mb-2">📌 Tabela Simples Nacional 2025</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Receita Bruta Anual</th>
              <th className="border border-gray-300 p-2">Alíquota</th>
              <th className="border border-gray-300 p-2">Parcela Dedutível</th>
            </tr>
          </thead>
          <tbody>
            {SIMPLES_NACIONAL_TABLE.map((row, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 p-2">{formatCurrency(row.min)} - {formatCurrency(row.max)}</td>
                <td className="border border-gray-300 p-2">{(row.rate * 100).toFixed(1)}%</td>
                <td className="border border-gray-300 p-2">{formatCurrency(row.deduction ?? 0)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>Fonte:</p>
      <a className="text-blue-500" href={'https://www.pontotel.com.br/calcular-irrf/#:~:text=Para%20fazer%20esse%20c%C3%A1lculo%20%C3%A9,a%20ser%20deduzida%20do%20imposto.'}>
       https://www.pontotel.com.br/
      </a>

      <Link href={'/'} className="p-2 block bg-blue-600/90 rounded text-white mt-4">Ver Calculadora</Link>
    </div>
  );
};

export default TaxTables;
