/**
 * свойства интерфейса которое он должен реализовать
 * @param name - св. название телефона
 * @param brand - св. навзавние компании
 */

interface IPhone {
  name: string;
  brand: string;

  get GetName(): string;
  get GetBrand(): string;
}
export default IPhone;
