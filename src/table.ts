import IPhone from './model/interfaces/IPhone';
import TableBuilder from './model/tableBuilder';
//*********************************************************************
//ООП сделано таким образом чтобы наша таблица рабоатла только с классом который реализует(создержит) интерфейс
class Table<T extends IPhone> {
  tableBuilder: TableBuilder<T>;

  constructor() {
    this.tableBuilder = new TableBuilder();
  }
  //*********************************************************************
  /**
   * метод реализует Повторения
   * @param symbol - что мы хотим повторить
   * @param count - количество повторений
   */
  printRepeat(symbol: string, count: number): string {
    return symbol.repeat(count);
  }
  //*********************************************************************
  /**
   * Реализация выводда таблицы
   * @param maxNameCount - максимально кол. сим. в столдце name
   * @param maxBrandCount - максимально кол. сим. в столдце brand
   * @param ar - тассив данных
   */
  print(): void {
    const ar = this.tableBuilder.GetAll();
    const maxNameCount = Math.max(
      ...ar.map((_, index) => ar[index].GetName.length),
      4
    );
    const maxBrandCount = Math.max(
      ...ar.map((_, index) => ar[index].GetBrand.length),
      5
    );
    // вывод таблицы со всеми предааными занченими
    for (let i = -1; i < ar.length; i++) {
      console.log(
        '\t',
        this.printRepeat('_', 7),
        this.printRepeat('_', maxNameCount + 3),
        this.printRepeat('_', maxBrandCount + 3)
      );
      if (i == -1) {
        console.log(
          '\t| index\t|',
          `name`,
          this.printRepeat(' ', maxNameCount - 4),
          '|',
          `brand`,
          this.printRepeat(' ', maxBrandCount - 5),
          '|'
        );
        continue;
      }
      console.log(
        '\t|',
        `${i}\t|`,
        `${ar[i].GetName}`,
        this.printRepeat(' ', maxNameCount - ar[i].GetName.length),
        '|',
        `${ar[i].GetBrand}`,
        this.printRepeat(' ', maxBrandCount - ar[i].GetBrand.length),
        '|'
      );
    }
  }
}

export default Table;
