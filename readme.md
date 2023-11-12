# Тестовое задание
## Введение  
Выполнять тестовое задание вы будете в данном шаблоне проекта, 
который можно скачать либо используя кнопки выше, либо [вот так](https://github.com/ImAllergicToFish/RadarStudentsTestTask/archive/refs/heads/master.zip).
Проект написан на языке TypeScript, который исполняется с помощью NodeJS.  

Для подготовки к работе вам следует: 
1. Установить на ваш ПК NodeJS;
2. Скачать/склонировать проект, распаковать (если требуется) и зайти в папку проекта;
3. Перед началом работы **из папки проекта** в терминале запустить команду `npm install`;
4. Для запуска самого проекта следует использовать команду `npm start` в терминале. 

**P.S.**  
Обязательно в ходе выполнения заданий загляните в файл index.ts, если стеснялись это сделать :) Он является "входной" точкой 
для выполнения программы. Также предупреждаю, что как только вы впервые запустите проект, в нем появится папка "dist", в которой будет находиться скомпилированный js код (мы пишем код на typescript, который лишь компилируется в js и не исполняется сам по себе). Заходить в папку "dist", а особенно пытаться что-то в ней менять,
или писать код **категорически не следует**.

---
## Задания
### 1. Получение случайного списка уникальных элементов из массива  

В проекте вы можете найти файл "getRandomElements.ts", в котором вам нужно реализовать функцию:
```
 getRandomElements(array: string[], numOfItems: number): string[]
```
Функция принимает в себя массив уникальных элементов `array: string[]`, а также 
`numOfItems: number` - кол-во элементов выходного массива. Результат выполнения ф-ии - массив 
случайных, **не повторяющихся элементов**, полученных из входного массива. 
**Важные замечания**:  
* если `numOfItems > array.length` - то ф-я возвращает массив длинной `array.length`; 
* важно, чтобы каждый элемент из входного массива мог попасть в результирующий массив 
примерно с одинаковой вероятность. Т.е. при повторных использованиях этой ф-ии, некоторые эл-ты не должны попадать в выборку чаще/реже других. 

### 2. Таблица  

В проекте также можно найти файл "table.ts". Ваша задача - реализовать класс 
для построения таблиц. Единственный обязательный критерий, чтобы у него был 
реализован метод `print(): void`, осуществляющий красивый (на сколько это возможно) 
вывод таблицы в терминал. В остальном, вы вольны делать всё что хотите: 
реализовывать необходимые приватные/публичные поля для заполнения таблицы пользователем, геттеры,
возможно какие-то базовые классы  от которых вы будете наследоваться. Одним словом, ~~развлекайтесь~~ продемонстрируйте свои знания ООП :)

### 3. Задание с письменным ответом  

Ответ на данное задание можно поместить текстовым файлом любого формата в ваш проект. 
Представьте что у вас есть функция `getRandomNumber(a, b)`, которая возвращает случайное 
число в интервале [a, b]. Порассуждайте, как бы могло выглядеть тестирование на то, 
что функция действительно возвращает рандомные значения.

