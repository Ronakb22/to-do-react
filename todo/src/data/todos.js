import { v4 as uuid } from 'uuid';

export const myTodos = [
    {
        id: uuid(),
        name: 'Complete React',
        completed: false,
    },
    {
        id: uuid(),
        name: 'Complete Project',
        completed: false
    },
    {
        id: uuid(),
        name: 'Upload Project',
        completed: false
    }
]
