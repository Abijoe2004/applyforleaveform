import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApplyforleaveComponent } from './applyforleave/applyforleave.component';

@Component({
  selector: 'app-root',
  imports: [ApplyforleaveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'applyforleave';
}
