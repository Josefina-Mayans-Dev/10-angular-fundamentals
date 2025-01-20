import { Component, input } from '@angular/core';

@Component({
  selector: 'app-work',
  imports: [],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {
  public workItems = [
          { companyName: 'Ruby', logo:"ruby-logo.avif", logoDescription:"Ruby company logo", workDescription:"Reimagining website for B2B banking solution with a mature look and feel to meet modern e-commerce needs.", image1:"ruby-1.avif", image2:"ruby-2.avif", imageDescription:"Ruby corporate image" },
          { companyName: 'Stimulate', logo:"stimulate-logo.webp", logoDescription:"Stimulate company logo", workDescription:"New vibrant brand for a full-cycle marketing agency enhancing retention revenue for online retailers.", image1:"stimulate-2.avif", image2:"stimulate-1.avif", imageDescription:"Stimulate corporate image" },
          { companyName: 'Quantia', logo:"quantia-logo.webp", logoDescription:"Quantia company logo", workDescription:"Creating a credible digital presence with a new website and marketing for a security-focused Web3 platform.", image1:"quantia-1.avif", image2:"quantia-2.avif", imageDescription:"Quantia corporate image" },
          { companyName: 'Reward Point', logo:"rewardPoint-logo.avif", logoDescription:"Reward Point company logo", workDescription:"Brand sprint showcasing a logo and dynamic illustrations for a B2B/B2C solution revolutionizing the cash-back process.", image1:"rewardPoint-2.avif", image2:"rewardPoint-1.avif", imageDescription:"Reward Point corporate image" },
          { companyName: 'Memex', logo:"memex-logo.avif", logoDescription:"Memex company logo", workDescription:"Vizualizing thinkers journey for a note-taking tool through a new website, mobile app, and browser extension.", image1:"memex-1.avif", image2:"memex-2.avif", imageDescription:"Memex corporate image" },
          { companyName: 'Deepengine', logo:"deepengine-logo.avif", logoDescription:"Deepengine comapny logo", workDescription:"", image1:"deepengine-2.avif", image2:"deepengine-1.avif", imageDescription:"Deepengine corporate image" }
  ];
}
