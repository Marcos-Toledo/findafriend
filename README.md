## App Find a Friend

## Funcionalidades da Aplicação

- O cadastro de um pet
- A listagem de todos os pets disponíveis para adoção em uma determinada cidade
- Filtragem de pets com base em suas caracterìsticas (como idade, porte, etc.)
- A visualização dos detalhes de um pet específico
- O cadastro de uma ORG (organização)
- O login de uma ORG

## Regras de Negócio

- A informação da cidade é obrigatória para listar os pets
- Uma ORG deve, obrigatoriamente, ter um endereço e um número de WhatsApp
- Todo pet cadastrado precisa estar vinculado a uma ORG
- O contato do usuário interessado em adotar um pet será feito diretamente em a ORG via WhatsApp
- Todos os filtros de caracteristicas do pet, com exceção da cidade, são opcionais
- Para que uma ORG tenha acesso adminstrativo à aplicação, ela deve estar logada

## Rotas

[ ] - Rota de login
[ ] - Rota para cadastrar uma ORG organização que inclua endereço e número de WhatsApp
[ ] - Rota para cadastrar um pet, garantindo que ele seja associado a uma ORG
[ ] - Rota para listar pets, exigindo a cidade como parâmetro obrigatório
[ ] - Rota para visualizar os detalhes de um pet especifico
[ ] - Implementar a funcionalidade de filtros opcionais por caracteristicas dos pets na listagem
[ ] - Garatir que o acesso de adminstrador da ORG seja restrito a usuários logados
[ ] - Aplicar os princípios SOLID durante o desenvolvimento da estrutura da API
[ ] - Criar testes para validar as funcionalidade e regras de negócio
