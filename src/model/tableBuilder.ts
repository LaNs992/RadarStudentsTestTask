import Phone from './phone';
import IPhone from './interfaces/IPhone';

/**
 * Методы и классы искользуются для занесении в массив значений
 * @param TableBuilder - класс,который наследуется от класса IPhone
 * @param devices - переменная с типом array эл. которого являются обьекты типа TabPh
 * @param entity - переменная , которая принимает в себя создание нового обьекта Phone, в которое передается значение
 * @param TabPh - создали параметр который должен представлять такой параметр IPhone
 * @param Add -добавление в массив
 *
 */

class TableBuilder<TabPh extends IPhone> {
  private devices: Array<TabPh> = [];
  private i = 0;
  public Add(name: string, brand: string) {
    let entity = new Phone(name, brand);
    this.devices[this.i++] = entity as TabPh;
    return this.devices;
  }
  public GetAll() {
    return this.devices;
  }
}

export default TableBuilder;
