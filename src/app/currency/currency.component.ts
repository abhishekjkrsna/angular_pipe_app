import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-currency',
  standalone: true,
  imports: [CurrencyPipe, FormsModule, MatRadioModule],
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.css'
})
export class CurrencyComponent {
  value: number = 123324234.56;
  currency: 'USD' | 'EUR' | 'GBP' | 'JPY' | 'CHF' | 'INR' | null = null;
}
