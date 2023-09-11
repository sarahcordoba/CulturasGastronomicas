export interface Restaurante {
    id: number;
    name: string;
    city: string;
    country: string;
    michelinStars: number;
    michelinDate: string;
}

export const Restaurantes:Restaurante[] =
[
    {
        id: 1,
        name: 'L\'Arpège',
        city: 'Paris',
        country: 'France',
        michelinStars: 3,
        michelinDate: '2021'
      },
      {
        id: 2,
        name: 'Le Comptoir du Relais',
        city: 'Paris',
        country: 'France',
        michelinStars: 1,
        michelinDate: '2021'
      }
]