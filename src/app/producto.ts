export interface Producto {
    id: number;
    name: string;
    description: string;
    history: string;
    category: string;
    photo: string;
}

export const Productos:Producto[] = [
    {
        id: 1,
        name: 'Queso Brie',
        description: 'El queso Brie es un queso de pasta blanda y corteza comestible, conocido por su textura cremosa y sabor suave. Tiene un aroma distintivo y una textura sedosa que se intensifican a medida que el queso madura.',
        history: 'El queso Brie tiene una larga historia en Francia y es uno de los quesos más antiguos de la región de Île-de-France. Se cree que su origen se remonta a la época medieval. A lo largo de los siglos, el queso Brie ha sido apreciado por su sabor delicado y se ha convertido en un emblema de la tradición quesera francesa.',
        category: 'Productos lácteos y quesos.',
        photo: 'https://s1.ppllstatics.com/diariovasco/www/multimedia/2023/04/27/brie-cheese-R7OwrZaSYtc4LgVDsFRrVTP-1200x840@DiarioVasco.jpg'
      },
      {
        id: 2,
        name: 'Baguette',
        description: 'La baguette es un pan alargado y crujiente por fuera, pero tierno por dentro. Su forma característica es una de las señas de identidad de la panadería francesa. Es un acompañamiento común en muchas comidas francesas.',
        history: 'La baguette se popularizó en el siglo XIX, aunque panes similares ya se consumían en Francia desde hace siglos. La versión alargada de la baguette se convirtió en un ícono parisino y pronto se extendió por todo el país.',
        category: 'Panadería y productos de pan.',
        photo: 'https://images.pexels.com/photos/1387070/pexels-photo-1387070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
]
