export interface Receta {
    id: number;
    name: string;
    description: string;
    photo: string;
    preparation: string;
    video: string;
}

export const Recetas:Receta[] = [
    {
        id: 1,
        name: 'Ratatouille',
        description: 'Ratatouille es un plato tradicional provenzal que combina una variedad de verduras.',
        photo: 'https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2140&q=80',
        preparation: `
          La preparación de Ratatouille implica cortar en rodajas finas calabacín, berenjena y tomate.
          1. En un sartén grande, calienta aceite de oliva y saltea cebolla y ajo.
          2. Agrega calabacín y berenjena, y cocina hasta que estén tiernos.
          3. Agrega tomate, pimientos, albahaca y orégano, y cocina unos minutos más.
          4. Coloca las verduras en capas en un molde para hornear y hornea hasta que estén cocidas.
          5. Sirve caliente como acompañamiento o plato principal. ¡Listo para disfrutar!
        `,
        video: './assets/videos/ratatouille.mp4'
      }
]
