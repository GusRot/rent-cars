###  Version README [English](./README-en.md) 
<div style="display: flex; gap:1rem;">
<a href="#">
<img alt="Repository size" src="https://img.shields.io/github/repo-size/GusRot/rent-cars">
</a>
<a href="#">
<img alt="GitHub language count" src="https://img.shields.io/github/languages/count/GusRot/rent-cars?color=%2304D361">
</a>
<a href="#">
<img alt="Wakatime" src="https://wakatime.com/badge/user/04f1420e-9d57-410a-bdc7-d768fb237a52/project/e72e91e1-02ec-4ef5-b90a-eb294ecefce5.svg">
</a>
<a href="https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt" target="blank">
<img alt="LicenseMIT" src="https://badgen.net/github/license/micromatch/micromatch">
</a>
</div>

# 📝 O Projeto

### Outras bibliotecas utilizadas

- `jest`  `tsyringe`  `uuid`  `typeorm`  `swagger-ui-express` `multer` `csv-parse` `bcryptjs` `jsonwebtoken`
- Para acessar a documentação com todas as rotas disponíveis e intruções de uso acesse `/api-docs`, após iniciar a aplicação

# Desenvolvimento

**RF** => Requisitos Funcionais
**RNF** => Requisitos não Funcionais
**RN** => Regras de Negócio

## *Cadastro de usuário*

**RF**
Deve ser possível cadastrar um novo usuário.
Deve ser possível cadastrar uma imagem do avatar ao usuário, após o cadastro

**RNF**
O usuário deve ser cadastrado com todos os dados necessários utilizando o `typeorm` para as devidas validações.
O cadastro do avatar deve ser realizado utilizando o multer para o upload dos arquivos.
A criptografia da senha deve ser realizada utilizando bcryptjs.
Cada usuário deve possuir um id único gerado pelo uuid.

**RN**
Não deve ser possível cadastrar um usuário com mesmo e-mail ou username.
Ao usuário substituir a imagem do avatar, deve ser excluído a informação sobre a imagem anterior do banco de dados.
## *Cadastro de carro*

**RF**
Deve ser possível cadastrar um novo carro.
Deve ser possível cadastrar novos carros através de um arquivo .csv.

**RNF**
Utilizar o multer para o upload dos arquivos.
Os arquivos devem estar no formato de acordo com o testUpload.csv disponibilizado na raiz do projeto

**RN**
Não deve ser possível cadastrar um novo carro com placa já existente.
O carro deve ser cadastrado com disponibilidade, por padrão.
Apenas um usuário administrador tem permissão para realizar cadastro.

## *Listagem de carros*

**RF**
Deve ser possível listar todos os carros disponíveis.
Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
Deve ser possível listar todos os carros disponíveis pelo nome da marca.
Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RNF**
O carro deve ser cadastrado com todos os dados necessários utilizando o `typeorm` para as devidas validações.
Cada carro deve possuir um id único gerado pelo uuid.

**RN**
O usuário não precisa estar logado no sistema para realizar a listagem.

## *Cadastro de Especificações no Carro*

**RF**
Deve ser possível cadastrar uma especificação para um carro.

**RN**
Não deve ser possível cadastrar uma especificação para um carro não existente.
Não deve ser possível cadastrar uma especificação já existente para um carro.
Apenas um usuário administrador tem permissão para realizar cadastro.

## *Cadastro de Imagens do Carro*

**RF**
Deve ser possível cadastrar a imagem do carro.

**RNF**
Utilizar o multer para o upload dos arquivos.

**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
Apenas um usuário administrador tem permissão para realizar cadastro.

## *Aluguel*

**RF**
Deve ser possível cadastrar um aluguel.

**RN**
O aluguel deve ter duração mínima de 24 horas.
Não deve ser possível cadastrar um aluguel caso já exista um aberto para o mesmo usuário.
Não deve ser possível cadastrar um aluguel caso já exista um aberto para o mesmo carro.
O usuário deve estar logado na aplicação.

### Available Scripts you can run

`yarn install`
`yarn start`
`yarn build`
`yarn test`