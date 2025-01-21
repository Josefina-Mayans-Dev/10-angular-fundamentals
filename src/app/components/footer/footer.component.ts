import { Component, input } from '@angular/core';

interface SocialLink {
  name: string
  url: string
  iconSrc: string
  ariaLabel: string
}

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public email = input<string>("hello@danielsun.space");

  socialLinks: SocialLink[] = [
    {
      name: "Twitter",
      url: "https://x.com/danielsun_ui",
      iconSrc: "https://framerusercontent.com/images/8yvYtcx3cfJFOTpz7A4hI9AtiI.png",
      ariaLabel: "Twitter",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/daniel.sun_design",
      iconSrc: "https://framerusercontent.com/images/qyHjNFaKZK3J0IgI963dEUUJ4.png",
      ariaLabel: "Instagram",
    },
    {
      name: "Dribbble",
      url: "https://dribbble.com/daniel_sun",
      iconSrc: "https://framerusercontent.com/images/uMA164Althqj1b2vXygS2wyBIgQ.png",
      ariaLabel: "Dribbble",
    },
    {
      name: "Threads",
      url: "https://www.threads.net/@daniel.sun_design",
      iconSrc: "https://framerusercontent.com/images/23QIkTXJxWXuDvTC7jrVLxmu5cA.png",
      ariaLabel: "Threads",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/daniel-sun-47838b209/",
      iconSrc: "https://framerusercontent.com/images/RYuwqCxHlxrSfIOO7JZreY9YX9Q.png",
      ariaLabel: "LinkedIn",
    },
  ]

}
