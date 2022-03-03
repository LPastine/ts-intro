const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

// Type alias
type Drink = [string, boolean, number]

// A tuple is an array that has a consistent ordering elements inside of it
const pepsi: [string, boolean, number] = ['brown', true, 40]
const sprite: Drink = ['clear', true, 40]
const tea: Drink = ['brown', false, 0]
