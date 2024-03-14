import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-string-pipe',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, MatRadioModule, FormsModule],
  templateUrl: './string-pipe.component.html',
  styleUrl: './string-pipe.component.css'
})
export class StringPipeComponent {
  text: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi iure repellat quos modi blanditiis consectetur sed eum molestiae pariatur tenetur sint earum inventore, magni quaerat, atque facilis ut ullam';
  selected: null | string = null;
}
