import { Component, output } from '@angular/core';

@Component({
  selector: 'app-cta-button',
  imports: [],
  templateUrl: './cta-button.component.html',
  styleUrl: './cta-button.component.scss'
})
export class CtaButtonComponent {
  public buttonClick = output<void>();

  onButtonClick() {
    this.buttonClick.emit();
  }

}
