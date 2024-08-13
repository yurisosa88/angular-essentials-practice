import { Component, Input } from '@angular/core';
import { InvestmentResult } from '../models/investment.interface';
import { CurrencyPipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [DecimalPipe,CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  @Input({required:true}) dataInvestmentTable!: InvestmentResult;
}
