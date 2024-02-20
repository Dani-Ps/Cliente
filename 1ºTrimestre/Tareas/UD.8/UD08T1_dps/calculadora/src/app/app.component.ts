import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'calculadora';
  display = '0';
  firstValue: number | null = null;
  action: string | null = null;

  numClick(val: number) {
    if (this.display === '0') {
      this.display = val.toString();
    } else {
      this.display = `${this.display}${val}`;
    }
  }

  oper(action: string) {
    if (this.display !== ' ' && this.display !== '') {
      this.firstValue = parseFloat(this.display);
      this.action = action;

      switch (action) {
        case 'm':
          this.display += ' x ';
          break;
        case 'a':
          this.display += ' + ';
          break;
        case 's':
          this.display += ' - ';
          break;
        default:
          break;
      }
    }
  }

  calculate() {
    if (
      this.firstValue !== null &&
      this.display !== ' ' &&
      this.display !== ''
    ) {
      const a = this.firstValue;
      const b = parseFloat(this.display.split(' ')[2]);
      let result: number;

      switch (this.action) {
        case 'm':
          result = a * b;
          break;
        case 'a':
          result = a + b;
          break;
        case 's':
          result = a - b;
          break;
        default:
          return;
      }

      this.display = result.toString();
      this.firstValue = result;
      this.action = null;
    }
  }

  clearDisplay() {
    this.display = '0';
    this.firstValue = null;
    this.action = null;
  }
}
