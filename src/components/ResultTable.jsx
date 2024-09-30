import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

const ResultTable = ({ userInputs }) => {
  const results = calculateInvestmentResults(userInputs);

  const initialInvestment =
    parseFloat(results[0].valueEndOfYear) -
    parseFloat(results[0].interest) -
    parseFloat(results[0].annualInvestment);
  console.log(initialInvestment);
  return (
    <table id="result">
      <thead>
        <tr>
          <th> Year</th>
          <th> Investment Value </th>
          <th> Interest (Year)</th>
          <th> Total Interest</th>
          <th> Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((data) => {
          const totalInvestment = parseFloat(
            data.valueEndOfYear -
              data.annualInvestment * data.year -
              initialInvestment
          );
          const totalAmountInvested=data.valueEndOfYear-totalInvestment;

          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(totalInvestment)}</td>

              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ResultTable;
