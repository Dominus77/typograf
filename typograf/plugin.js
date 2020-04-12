tinymce.PluginManager.requireLangPack('typograf','en,ru');
tinymce.PluginManager.add('typograf', function (editor, url) {
    'use strict';

    var scriptLoader = new tinymce.dom.ScriptLoader(),
        tp,
        typo = function () {
            if (tp) {
                editor.setContent(tp.execute(editor.getContent()));
                editor.undoManager.add();
            }
        };

    scriptLoader.add(url + '/dist/typograf.all.min.js');

    scriptLoader.loadQueue(function () {
        tp = new Typograf({
            locale: ['ru', 'en-US'],
            mode: 'name'
        });
    });

    editor.addButton('typograf', {
        text: 'Typography',
        icon: 'blockquote',
        onclick: typo
    });

    editor.addMenuItem('typograf', {
        context: 'format',
        text: 'Typography',
        icon: 'blockquote',
        onclick: typo
    });
});
