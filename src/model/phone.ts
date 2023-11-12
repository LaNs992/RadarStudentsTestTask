import IPhone from './interfaces/IPhone';

/**
 * реализция интерфейса (возможна только с заданными значениями)
 * @param name - св. название телефона
 * @param brand - св. навзавние компании
 * @param constructor - выполняет начальную инициализацию обьектов name и brand
 */

class Phone implements IPhone {
  public name: string;
  public brand: string;

  constructor(name: string, brand: string) {
    this.name = name;
    this.brand = brand;
  }
  get GetName(): string {
    return this.name.toString();
  }
  get GetBrand(): string {
    return this.brand.toString();
  }
}

export default Phone;
