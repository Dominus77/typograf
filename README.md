# Плагин Типографика для TinyMCE 4

> Так же доступна [версия плагина для TinyMCE 5](https://github.com/Dominus77/typograf/tree/tinymce5)

Помогает автоматически расставить неразрывные пробелы, исправить мелкие опечатки, привести кавычки к правильному виду,
заменить дефисы на тире в нужных местах и многое другое.

Больше информации: [Типограф на JavaScript](https://github.com/typograf/typograf)

## Установка

1. Скачать или склонировать проект
2. Положить каталог `typograf` из проекта, в каталог с плагинами (plugins) редактора [TinyMce](https://www.tiny.cloud)
3. Подключить в редакторе плагин `typograf`

Пример подключения:
```js
tinymce.init({
  selector: 'textarea',
  plugins: 'typograf',
  toolbar: 'typograf',
  contextmenu: 'typograf',  
});
```
Пример настройки плагина:
```js
tinymce.init({
    //...
    typograf: {
        locale: ['ru', 'en-US'],
        // HTML-сущности
        htmlEntity: {
            type: 'name',
            onlyInvisible: true
        },
        // Включение правил
        enableRule: [
            //'ru/money/ruble',
            //'ru/money/*',
            //'ru/symbols/NN',
            //'ru/optalign/*'
        ],
        // Отключение правил
        disableRule: [
            //'ru/money/ruble',
            //'ru/money/*',
            //'ru/symbols/NN'
        ],
        // Изменение настроек у правил
        // Название правила, название настройки, значение
        setSetting: [
            // Неразрывный пробел перед последним словом в предложении, не более 5 символов
            ['common/nbsp/beforeShortLastWord', 'lengthLastWord', 5],
            // Вложенные кавычки тоже «ёлочки» для русской типографики
            ['common/punctuation/quote', 'ru', {left: '«', right: '»', removeDuplicateQuotes: true}],
            // Неразрывный пробел после короткого слова, не более 3 символов
            ['common/nbsp/afterShortWord', 'lengthShortWord', 5]
        ],
        // Добавить простое правило
        // Типографический смайлик
        addRule: [
            {
                name: 'common/other/typographicSmiley',
                handler: function (text) {
                    return text.replace(/:-\)/g, ':—)');
                }
            },
        ],
        // Отключение типографирования в участках текста
        addSafeTag: [
            // Отключить типографирование внутри тега <no-typography>
            ['<no-typography>', '</no-typography>'],
            // Отключить типографирование внутри управляющих конструкций какого-нибудь шаблонизатора
            ['\\{\\{', '\\}\\}'], // {{...}}
            ['\\[\\[', '\\]\\]'], // [[...]]
            // Отключить типографирование внутри PHP-кода
            ['<\\?php', '\\?>']
        ]
    },
    //...
});
```
## Лицензия
Лицензия MIT (MIT). Посмотрите пожалуйста [Файл лицензии](https://github.com/Dominus77/typograf/blob/master/LICENSE.md) что бы получить больше информации.
