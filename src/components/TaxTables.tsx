import React, { ReactNode } from "react";
import { INSS_TABLE, IRRF_TABLE, SIMPLES_NACIONAL_TABLE } from "@/utils/calculators";
import { GoogleAds } from "./GoogleAds";

const formatCurrency = (value: number) => `R$ ${value.toFixed(2)}`;

const TaxTables = ({children}: {children: ReactNode}) => {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Tabelas de Impostos 2025</h1>
      {children}
      {/* Tabela INSS */}
      <div className="w-full max-w-lg p-4 bg-white rounded shadow-md mb-4">
        <h2 className="text-lg font-semibold mb-2">📌 Tabela INSS 2024</h2>
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

      <div className="bg-gray-400 p-2 mb-4">
        <GoogleAds />
      </div>
      
      {/* Tabela IRRF */}
      <div className="w-full max-w-lg p-4 bg-white rounded shadow-md mb-4">
        <h2 className="text-lg font-semibold mb-2">📌 Tabela IRRF 2024</h2>
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
        <h2 className="text-lg font-semibold mb-2">📌 Tabela Simples Nacional 2024</h2>
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
      {children}
    </div>
  );
};

export default TaxTables;
