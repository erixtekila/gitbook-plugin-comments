GitBook plugin : Transform comments to notes
==============

This plugin converts markdown comments to notes in the browser.
Markdown comments have the following syntax :

```
<!--- Your comment --->
```

This feature could be usefull for author internal notes.
Or, if one clone some gitbook sources, add its personnal comments without interfering the original text.

You can use install it via NPM:

```bash
$ npm install gitbook-plugin-comments
```

And use it for your book with:

```bash
$ gitbook build ./ --plugins=comments
```