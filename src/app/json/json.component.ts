import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-json',
  standalone: true,
  imports: [JsonPipe, FormsModule, MatRadioModule],
  templateUrl: './json.component.html',
  styleUrl: './json.component.css'
})
export class JsonComponent {

  default: Object = { foo: 'bar', baz: 'qux', nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] } };
  object = this.default;
  normalOrJson: 'normal' | 'json' = 'normal';
  reset() {
    this.object = this.default;
  }
}
