# Плагин Типографика для TinyMCE 5

Помогает автоматически расставить неразрывные пробелы, исправить мелкие опечатки, привести кавычки к правильному виду,
заменить дефисы на тире в нужных местах и многое другое.

Больше информации: [Типограф на JavaScript](https://github.com/typograf/typograf/)

## Установка

1. Скачать или склонировать проект
2. Положить каталог `typograf` из проекта, в каталог с плагинами (plugins) редактора [TinyMce](https://www.tiny.cloud)
3. Подключить в редакторе плагин `typograf`
4. Вывести кнопку `typograf` на панель инструментов редактора

Пример подключения:
```js
tinymce.init({
  selector: 'textarea',
  plugins: ['typograf'],
  toolbar: 'typograf',
  contextmenu: 'typograf',
})
```

## Лицензия
Лицензия MIT (MIT). Посмотрите пожалуйста [Файл лицензии](https://github.com/Dominus77/typograf/blob/master/LICENSE.md) что бы получить больше информации.
