import getRandomElements from './getRandomElements';
import Phone from './model/phone';
import TableBuilder from './model/tableBuilder';
import TableNew from './table';
import Table from './table';
import getArrayOfUniqueValues from './utils/getArrayOfUniqueValues';
import * as readline from 'readline';
/*
    Здесь вы можете как угодно эксперементировать с написанным вами кодом;

    ARRAY_OF_UNIQUE_VALUES - массив уникальных значений из N элементов,
    возможно, будет полезно :)

*/

//*********************************************************************

const N = 100;

const ARRAY_OF_UNIQUE_VALUES = getArrayOfUniqueValues(N);
const start = new Date().getTime();
const result = getRandomElements(ARRAY_OF_UNIQUE_VALUES, 5 /*500000*/); //измениено коллочиесвто
const end = new Date().getTime(); //для просмотра на затрату времеени функцией
console.log('Время выполнения :', end - start);
console.log(result);

//*********************************************************************
//
//пример класса ,который не реализует интрефейс IPhone

// class Work {
//   public text: string;
//   public brand: string;

//   constructor(name: string, brand: string) {
//     this.text = name;
//     this.brand = brand;
//   }
//   get GetName(): string {
//     return this.text.toString();
//   }
//   get GetBrand(): string {
//     return this.brand.toString();
//   }
// }

const table = new Table<Phone>();
table.tableBuilder.Add('Iphone', 'Apple'); //метод добавления эл. в массив
table.tableBuilder.Add('Android', 'Samsung');
table.tableBuilder.Add('WindowsTen', 'Microsoft');
table.tableBuilder.Add('WindowsTsssssssssssssssssssen', 'Microsssssoft');
table.print();
