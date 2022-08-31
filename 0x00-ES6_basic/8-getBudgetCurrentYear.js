function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    income: [`income-${getCurrentYear()}`],
    gdp: [`gdp-${getCurrentYear()}`],
    capita: [`capita-${getCurrentYear()}`],
  };

  return budget;
}
