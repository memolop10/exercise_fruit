const fruits = [
    {
        category: 'frutas',
        elements: [
            'platano',
            'manzana',
            'naranja'
        ]
    },
    {
        category: 'verduras',
        elements: [
            'zanahoria',
            'calabaza',
            'lechuga'
        ]
    },
    {
        category:'legumbres',
        elements: [
            'frijol',
            'lenteja',
            'haba'
        ]
    }
]


const reducer = fruits.reduce( (acc,el) => {
 let anidado = el.elements.map( e => `${ el.category } => ${ e }`)
    return [...acc,...anidado]
},[])

console.log(reducer)