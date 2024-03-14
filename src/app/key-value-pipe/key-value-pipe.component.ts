import { JsonPipe, KeyValuePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-key-value-pipe',
  standalone: true,
  imports: [KeyValuePipe, JsonPipe],
  templateUrl: './key-value-pipe.component.html',
  styleUrl: './key-value-pipe.component.css'
})
export class KeyValuePipeComponent {
  object: { [key: number]: string } = { 2: 'foo', 1: 'bar' };
  map = new Map([
    [2, 'foo'],
    [1, 'bar'],
  ]);

}
