import { Component } from '@angular/core';
import { CtaButtonComponent } from '../cta-button/cta-button.component';

@Component({
  selector: 'app-chat',
  imports: [CtaButtonComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  clickCount = 0

  handleButtonClick() {
    this.clickCount++
    console.log(`Button has been clicked ${this.clickCount} times.`)
  }

}
