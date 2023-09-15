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
        name: 'Pasta',
        description: 'La pasta a la amatriciana es un plato italiano clásico originario de la región de Lacio. Se caracteriza por una salsa sabrosa a base de tomate, panceta o guanciale (similar al tocino) y queso Pecorino. Esta salsa se sirve sobre pasta, generalmente espaguetis, y se destaca por su sabor rico y ligeramente picante.',
        history: 'xxx.',
        category: 'Carbohidratos',
        photo: ''
      },
      {
        id: 2,
        name: '',
        description: '',
        history: '',
        category: '',
        photo: ''
      },
      {
        id: 3,
        name: '',
        description: '',
        history: '',
        category: '',
        photo: ''
      }
]
