# Lab de RUM para o Datadog

Este repositório contém um ambiente básico para testar a biblioteca de RUM do Datadog

## Como usar

1. Clone o repositório:
```bash
git clone https://github.com/bwsolucoes/RUM-Datadog-JS.git
cd RUM-Datadog-JS
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o ambiente:
```bash
npm run dev
```

Pronto! A aplicação estará rodando localmente e já integrada com o Datadog RUM.

## Configuração do RUM
As configurações da biblioteca RUM estão localizadas no arquivo:
```bash
src/main.js
```
> **Importante:** recomendamos criar uma nova aplicação RUM para seus testes, ao invés de utilizar a que já está configurada no repositório. Isso evita que os dados da sua sessão impactem nos testes de outras pessoas

🔗 Crie sua aplicação aqui:
[Datadog | Manage Applications](https://app.datadoghq.com/rum/list)
