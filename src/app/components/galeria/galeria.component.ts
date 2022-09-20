import { Component, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
})
export class GaleriaComponent implements OnInit {

  images = [
    {
        "previewImageSrc": "../../../assets/carrousel/galleria-1.jpg",
        "thumbnailImageSrc":  "../../../assets/carrousel/galleria-1.jpg",
        "alt": "Description for Image 1",
        "title": "Title 1"
    },
    {
        "previewImageSrc":  "../../../assets/carrousel/galleria-2.jpg",
        "thumbnailImageSrc":  "../../../assets/carrousel/galleria-2.jpg",
        "alt": "Description for Image 2",
        "title": "Title 2"
    },
    {
        "previewImageSrc":  "../../../assets/carrousel/galleria-3.jpg",
        "thumbnailImageSrc":  "../../../assets/carrousel/galleria-3.jpg",
        "alt": "Description for Image 3",
        "title": "Title 3"
    },
    {
        "previewImageSrc":  "../../../assets/carrousel/galleria-4.jpg",
        "thumbnailImageSrc":  "../../../assets/carrousel/galleria-4.jpg",
        "alt": "Description for Image 4",
        "title": "Title 4"
    },
    {
        "previewImageSrc":  "../../../assets/carrousel/galleria-5.jpg",
        "thumbnailImageSrc":  "../../../assets/carrousel/galleria-5.jpg",
        "alt": "Description for Image 5",
        "title": "Title 5"
    },
    {
        "previewImageSrc":  "../../../assets/carrousel/galleria-6.jpg",
        "thumbnailImageSrc":  "../../../assets/carrousel/galleria-6.jpg",
        "alt": "Description for Image 6",
        "title": "Title 6"
    },
    {
        "previewImageSrc":  "../../../assets/carrousel/galleria-7.jpg",
        "thumbnailImageSrc":  "../../../assets/carrousel/galleria-7.jpg",
        "alt": "Description for Image 7",
        "title": "Title 7"
    },
    {
        "previewImageSrc":  "../../../assets/carrousel/galleria-8.jpg",
        "thumbnailImageSrc":  "../../../assets/carrousel/galleria-8.jpg",
        "alt": "Description for Image 8",
        "title": "Title 8"
    },
    {
        "previewImageSrc":  "../../../assets/carrousel/galleria-9.jpg",
        "thumbnailImageSrc":  "../../../assets/carrousel/galleria-9.jpg",
        "alt": "Description for Image 9",
        "title": "Title 9"
    },
    {
        "previewImageSrc":  "../../../assets/carrousel/galleria-10.jpg",
        "thumbnailImageSrc":  "../../../assets/carrousel/galleria-10.jpg",
        "alt": "Description for Image 10",
        "title": "Title 10"
    },
    {
        "previewImageSrc":  "../../../assets/carrousel/galleria-11.jpg",
        "thumbnailImageSrc":  "../../../assets/carrousel/galleria-11.jpg",
        "alt": "Description for Image 11",
        "title": "Title 11"
    },
    {
        "previewImageSrc":  "../../../assets/carrousel/galleria-12.jpg",
        "thumbnailImageSrc":  "../../../assets/carrousel/galleria-12.jpg",
        "alt": "Description for Image 12",
        "title": "Title 12"
    },
    {
        "previewImageSrc":  "../../../assets/carrousel/galleria-13.jpg",
        "thumbnailImageSrc":  "../../../assets/carrousel/galleria-13.jpg",
        "alt": "Description for Image 13",
        "title": "Title 13"
    },
    {
        "previewImageSrc":  "../../../assets/carrousel/galleria-14.jpg",
        "thumbnailImageSrc":  "../../../assets/carrousel/galleria-14.jpg",
        "alt": "Description for Image 14",
        "title": "Title 14"
    },
    {
        "previewImageSrc":  "../../../assets/carrousel/galleria-15.jpg",
        "thumbnailImageSrc":  "../../../assets/carrousel/galleria-15.jpg",
        "alt": "Description for Image 15",
        "title": "Title 15"
    }
]

responsiveOptions:any[] = [
  {
      breakpoint: '1024px',
      numVisible: 5
  },
  {
      breakpoint: '768px',
      numVisible: 3
  }
];

  constructor() {}

  ngOnInit(): void {}
}
