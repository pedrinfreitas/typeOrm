# TypeORM

![N|Solid](https://miro.medium.com/max/1478/1*lUb7UWFAy6btSU6odHgKKw.png)



### Migration

Ter instalado o typeorm globalmente com:
```sh
npm i -g typeorm
```
Ou rodar com usar :
```sh
npx typeorm <params>
```

Para criar:
```sh
typeorm migration:create -n nomeDaMigration
```
Para executar:
```sh
typeorm migration:run
```

Para reverter
```sh
typeorm migration:revert
```
