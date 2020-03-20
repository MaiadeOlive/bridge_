# bridge_test_front

## Iniciando o projeto

Na raiz do projeto instale o npm ou o yarn

```
yarn install
```
ou

```
npm install
```

### Subir a aplicação

```
yarn serve
```
ou

```
npm run serve
```

## Calculador

Projeto teste de calculo de divisores e números primos.

A aplicação recebe um numero por input no frontend e envia para o backend para os cálculos, retornando o response com os possíveis divisores e se o número é ou não primo.

### Usando Web

* Adicione o numero ao input e clique em calcular o número, o resultado será exibido no card ao lado.

### Tecnologias

Para esta aplicação utilizei a linguagem JavaScript com o framework Vue e com a biblioteca de componentes Vutify que segue as especificações do MD - Material Design.

Para as requisições http (envio de dados as rotas do backend) utilizei o axios e para a troca de dados entre componentes no front utilizei Vuex com mapGetters e mapActions.

Decidi por estas ferramentas e tecnologias pois tenho mais de familiaridade.