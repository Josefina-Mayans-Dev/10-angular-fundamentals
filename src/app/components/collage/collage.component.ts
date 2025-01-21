import { Component, input } from '@angular/core';

interface CollageItem {
  type: "image" | "video"
  src: string
  alt?: string
}

interface CollageRow {
  items: CollageItem[]
}

@Component({
  selector: 'app-collage',
  imports: [],
  templateUrl: './collage.component.html',
  styleUrl: './collage.component.scss'
})
export class CollageComponent {
  public title = input<string>("On a quest to craft something awesome");
  public subtitle = input<string>("to hone my skills or just for fun");

  collageRows: CollageRow[] = [
    {
      items: [
        {
          type: "image",
          src: "https://framerusercontent.com/images/Nwjx3mEoGEPr6Z0ytJSVKttdBM.png?scale-down-to=2048",
          alt: "collage image 1",
        },
        { type: "video", src: "https://framerusercontent.com/assets/xbEd5nQuu7jfqgySKEiWM6qEo.mp4" },
        {
          type: "image",
          src: "https://framerusercontent.com/images/lBIrIxZdsYrBmX6E6fAnq9CE.png",
          alt: "collage image 2",
        },
      ],
    },
    {
      items: [
        {
          type: "image",
          src: "https://framerusercontent.com/images/oAJl5eDWvbfHlPjrwIFb987kAu4.png?scale-down-to=2048",
          alt: "collage image 3",
        },
        {
          type: "image",
          src: "https://framerusercontent.com/images/UaMHiPIlMGHsAEna9IcRYjw7t8.png",
          alt: "collage image 4",
        },
        { type: "video", src: "https://framerusercontent.com/assets/PT6OnNPBZFGXR6G94bjgqLXitE.mp4" },
      ],
    },
    {
      items: [
        { type: "video", src: "https://framerusercontent.com/assets/xOq06kbNR8ICBGBNB7orUoFaHY.mp4" },
        { type: "video", src: "https://framerusercontent.com/assets/QfUAxk804JwLz1jyK0oKMlni7M.mp4" },
        {
          type: "image",
          src: "https://framerusercontent.com/images/xFdANJx6wfkQxFqhvGeNeKKb24.png",
          alt: "collage image 5",
        },
      ],
    },
    {
      items: [
        {
          type: "image",
          src: "https://framerusercontent.com/images/T5ht5TBTRPdFyLvGcg51zTAUQEY.png",
          alt: "collage image 6",
        },
        {
          type: "image",
          src: "https://framerusercontent.com/images/3w2g5AFuxWTbnqNlmwEXsSqDnQ.png?scale-down-to=1024",
          alt: "collage image 7",
        },
        {
          type: "image",
          src: "https://framerusercontent.com/images/48sF0xtesVWYCLTam7FDR3E3jUU.png?scale-down-to=1024",
          alt: "collage image 8",
        },
      ],
    },
  ]

}
