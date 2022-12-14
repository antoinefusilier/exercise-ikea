# ikea
Subject 2 - 3td sem of NodeJS
# Front for Subject 2 of 3td course of nodejs



## Installating et running

- Install prerequisites Boostrap 5

``` bash

npm install bootstrap bootstrap-icons

```
Adding bootstrap in angular.json

Add in styles and scripts into "projects->architect->build" AND "projects->architect->serve" AND "projects->architect->test" 
``` json
"styles": [
  "node_modules/bootstrap/scss/bootstrap.scss",
  "node_modules/bootstrap-icons/font/bootstrap-icons.css",
  "src/styles.scss"
],
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]
``` 
- Install jQuery

``` bash

npm install jquery

```
Adding jQuery in angular.json

Add in scripts into "projects->architect->build" AND "projects->architect->serve" AND "projects->architect->test" 
``` json
"scripts": [
  // ...
  "node_modules/jquery/dist/jquery.min.js"
  // ...
]

```	

Other prerequisites are installed by npm install

npm install : install all dependencies
``` bash
npm install typescript body-parser raw-body express content-disposition cookie-signature destroy etag mine mime-types parseurl send serve-static --save
```

- typescript
- body-parser
- raw-body
- express
- content-disposition
- cookie-signature
- destroy
- etag
- mime-types
- parseurl
- send
- serve-static


#### Install of home(public) module garded 

``` bash
ng g m home --flat false --module app --route home --routing true --routing-scope Child
```

#### Install of admin(dashboard) module garded 

``` bash
ng g m admin --flat false --module app --route admin --routing true --routing-scope Child
```

Les module site et dashboard soit être disolable, afin qu'il puisse premièrement être partager séparément ex: librairie , secondement que si l'un est en maintenant ou erreur le second restera fonctionnel. Donc les modules rooting ne doivent pas être en root.


#### Install of Auth module garded 

``` bash
ng g m auth --flat false --module app --route auth --routing true --routing-scope Child
```

Le module auth 



