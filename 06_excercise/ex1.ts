let numero: number = 5
let soma: number = 0

const somar = (numero: number, soma: number) => {
  while(numero < 10) {
    soma = soma + numero
    numero = numero + 2
  }
  console.log(soma)
}

// somar(numero, soma)

const question = () => {
  let i: number = 0
  while(i<100) {
    i+=5
    console.log(i)
  }
}

// question()

let x: number = 2
let y: number = 3

const func1 = (x: number, y: number) => {
  const result1 = (x + y / 4) == 0 || (9 / y*2) == 1
  console.log(`First result is: ${result1}`)
  const result2 = (x - y * 0) == 0 && (y+2%3) == 3
  console.log(`Second result is: ${result2}`)
  const result3 = (3.1415 * y-3) > (y*x-7)
  console.log(`Third result is: ${result3}`)
}

// func1(x,y)

let a = 2
const exponential = (a: number): void => {
  while(a < 1000) {
    a = a * 2
  }
  console.log(a)
}

// exponential(a)
