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
        name: '',
        description: '',
        photo: '',
        preparation: `
          La preparación de Ratatouille implica cortar en rodajas finas calabacín, berenjena y tomate.
          1. 
          2. 
          3. 
          4. 
          5. 
        `,
        video: ''
      }
]
