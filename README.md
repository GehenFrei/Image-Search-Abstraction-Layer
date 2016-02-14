# Image-Search-Abstraction-Layer

##Example Usage:
#Search:
https://APP_URL/api/imagesearch/fractals?offset=10
#Example output:
```js
{ "thumbnail": "http://ts3.mm.bing.net/th?id=OIP.M1659b4badb5cbb13d369a8e530e943edo0&pid=15.1", 
"snippet": "Description Fractal Broccoli.jpg", 
"context": "http://en.wikipedia.org/wiki/File:Fractal_Broccoli.jpg", 
"url": "http://upload.wikimedia.org/wikipedia/commons/4/4f/Fractal_Broccoli.jpg" }
```
#Search History
https://APP_URL/api/latest/imagesearch/
#Example output:
```js
{ "term": "lol cat", "when": "2016-02-13T19:49:12.619Z" } 
```