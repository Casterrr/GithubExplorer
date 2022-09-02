export {}

type User = {
    name: string
    age: number
    isDev?: boolean
}

const usuario: User = {
    name: '1',
    age: 9,
    isDev: true

}

console.log(usuario.age)