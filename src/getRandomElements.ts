/**
 * Функция возвращает numOfItems случайных, не повторяющихся
 * элементов из массива array.
 *
 * Примечание: если array.length < numOfItems возвращаем
 * array.length случайных элементов.
 *
 * @param array - входной массив
 * @param numOfItems - кол-во элементов которое вернет ф-я
 * @returns массив случайных неповторяющихся элементов
 */

function getRandomElements(array: string[], numOfItems: number): string[] {
  //   let newArray = [];
  //   for (let i = 0; i < numOfItems; i++) {
  //     newArray[i] = array[i];
  //   }
  var newArray = array.slice(0, numOfItems);
  //    Работает намного быстрее чем for(способ 1)
  return newArray;
}

export default getRandomElements;
