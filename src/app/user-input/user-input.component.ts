import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { InvestmentService } from '../services/investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment = '';
  annualInvestment = '';
  expectedReturn = '';
  duration = '';
  investmentSvc = inject(InvestmentService)

  onCalculate() {
    const data = {
      initialInvestment: +this.initialInvestment,
      annualInvestment: +this.annualInvestment,
      expectedReturn: +this.expectedReturn,
      duration: +this.duration
    }
    this.initialInvestment = '';
    this.annualInvestment = '';
    this.expectedReturn = '';
    this.duration = '';
    this.investmentSvc.calculateInvestmentResults(data);
  }

}
