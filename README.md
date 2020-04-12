# Плагин Типографика для TinyMCE

Помогает автоматически расставить неразрывные пробелы, исправить мелкие опечатки, привести кавычки к правильному виду,
заменить дефисы на тире в нужных местах и многое другое.

Больше информации: [Типограф на JavaScript](https://github.com/typograf/typograf/)

## Установка

1. Склонировать проект:
```
git clone https://github.com/Dominus77/typograf.git typograf
```
2. Положить typograf в каталог с плагинами (plugins) редактора [TinyMce](https://www.tiny.cloud/docs)
3. Подключить в редакторе плагин
4. Вывести кнопку на панель инструментов редактора

Пример подключения:
```js
tinymce.init({
  selector: 'textarea',
  plugins: ['typograf'],
  toolbar: 'typograf'
})
```

## Лицензия
Лицензия MIT (MIT). Посмотрите пожалуйста [Файл лицензии](https://github.com/Dominus77/typograf/blob/master/LICENSE.md) что бы получить больше информации.
