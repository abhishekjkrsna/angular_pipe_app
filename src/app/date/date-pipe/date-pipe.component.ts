import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-date-pipe',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './date-pipe.component.html',
  styleUrl: './date-pipe.component.css'
})
export class DatePipeComponent {
  dateObj: number = Date.now();
}
