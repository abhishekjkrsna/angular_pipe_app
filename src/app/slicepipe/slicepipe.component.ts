import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slicepipe',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './slicepipe.component.html',
  styleUrl: './slicepipe.component.css'
})
export class SlicepipeComponent {
  str: string = 'abcdefghij';
}
