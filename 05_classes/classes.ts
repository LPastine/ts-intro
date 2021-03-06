class Vehicle {
  constructor(public color: string) {}
  protected honk(): void {
    console.log('Beep')
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, public color: string) {
    super(color)
  }
  private drive(): void {
    console.log('Vroom')
  }
  startDrivingProcess(): void {
    this.drive()
    this.honk()
  }
}

const car = new Car(4, 'red')
car.startDrivingProcess()
