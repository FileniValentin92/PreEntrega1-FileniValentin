const products = [
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img:'#',
        stock: 25,
        description: 'Celular marca Apple'

    },

    {
        id: '2',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img:'#',
        stock: 25,
        description: 'Celular marca Apple'

    },

    {
        id: '3',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img:'#',
        stock: 25,
        description: 'Celular marca Apple'

    },

    {
        id: '4',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img:'#',
        stock: 25,
        description: 'Celular marca Apple'

    },

    {
        id: '5',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img:'#',
        stock: 25,
        description: 'Celular marca Apple'

    },

    {
        id: '6',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img:'#',
        stock: 25,
        description: 'Celular marca Apple'

    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}