export type TaxBracket = { min: number; max: number; rate: number; deduction?: number };

// Tabela INSS 2024
export const INSS_TABLE: TaxBracket[] = [
  { min: 0, max: 1518.00, rate: 0.075 },
  { min: 1518.01, max: 2793.88, rate: 0.09 },
  { min: 2793.89, max: 4190.83, rate: 0.12 },
  { min: 4190.84, max: 8157.41, rate: 0.14 },
];

// Tabela IRRF 2024
export const IRRF_TABLE: TaxBracket[] = [
  { min: 0, max: 2259.20, rate: 0, deduction: 0 },
  { min: 2259.21, max: 2826.65, rate: 0.075, deduction: 169.44 },
  { min: 2826.66, max: 3751.05, rate: 0.15, deduction: 381.44 },
  { min: 3751.06, max: 4664.68, rate: 0.225, deduction: 662.77 },
  { min: 4664.69, max: Infinity, rate: 0.275, deduction: 896.00 },
];

// Tabela Simples Nacional (Anexo III - Serviços)
export const SIMPLES_NACIONAL_TABLE: TaxBracket[] = [
  { min: 0, max: 180000, rate: 0.06, deduction: 0 },
  { min: 180000.01, max: 360000, rate: 0.112, deduction: 9360 },
  { min: 360000.01, max: 720000, rate: 0.135, deduction: 17640 },
  { min: 720000.01, max: 1800000, rate: 0.16, deduction: 35640 },
  { min: 1800000.01, max: 3600000, rate: 0.21, deduction: 125640 },
  { min: 3600000.01, max: 4800000, rate: 0.33, deduction: 648000 },
];

export const getINSS = (salary: number) => {
  let total = 0;
  let lastMax = 0;

  for (const bracket of INSS_TABLE) {
    if (salary > bracket.max) {
      total += (bracket.max - lastMax) * bracket.rate;
      lastMax = bracket.max;
    } else {
      total += (salary - lastMax) * bracket.rate;
      break;
    }
  }
  return total;
};

export const getIRRF = (salary: number) => {
  const baseSalary = salary - getINSS(salary);
  const bracket = IRRF_TABLE.find((b) => baseSalary > b.min && baseSalary <= b.max);
  return bracket ? baseSalary * bracket.rate - (bracket.deduction ?? 0) : 0;
};

export const getPJTaxes = (salary: number) => {
  const annualRevenue = salary * 12;
  const bracket = SIMPLES_NACIONAL_TABLE.find((b) => annualRevenue > b.min && annualRevenue <= b.max);
  return bracket ? (annualRevenue * bracket.rate - (bracket.deduction ?? 0)) / 12 : 0;
};
