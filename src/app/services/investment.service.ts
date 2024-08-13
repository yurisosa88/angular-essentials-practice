import { Injectable } from "@angular/core";
import { InvestmentData, InvestmentResult } from "../models/investment.interface";

@Injectable({providedIn:'root'})
export class InvestmentService {
    annualData: InvestmentResult[] = [];

    calculateInvestmentResults(investmentData: InvestmentData):void {
      const { initialInvestment, expectedReturn, duration, annualInvestment } = investmentData;
        let investmentValue = initialInvestment;
        let annualData: InvestmentResult[] = [];
        for (let i = 0; i < duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (expectedReturn / 100);
            investmentValue += interestEarnedInYear + investmentData.annualInvestment;
            const totalInterest =
              investmentValue - annualInvestment * year - initialInvestment;
              annualData.push({
              year: year,
              interest: interestEarnedInYear,
              valueEndOfYear: investmentValue,
              annualInvestment: annualInvestment,
              totalInterest: totalInterest,
              totalAmountInvested: initialInvestment + annualInvestment * year,
            });
          }
          
         this.annualData = annualData;
    }


}