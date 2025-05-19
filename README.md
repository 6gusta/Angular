# Sistema de Adoção de Pets - Frontend Angular

Projeto frontend desenvolvido em Angular (versão 19.2.8), que implementa uma SPA para adoção de pets. A aplicação consome uma API RESTful para operações de cadastro, edição, visualização e autenticação.

---

## Funcionalidades

- Autenticação de usuários com rotas protegidas.
- Cadastro, edição e visualização detalhada dos pets.
- Filtros por localização, espécie, porte e idade.
- Formulários reativos com validação robusta.
- Navegação responsiva para desktop e dispositivos móveis.
- Feedback visual para melhor interação.

---

## Tecnologias

- Angular 15+
- TypeScript
- RxJS
- Angular Router
- Angular Reactive Forms
- HTML5 e CSS3 responsivo

---

## Estrutura do Projeto

- `src/app/components` — Componentes reutilizáveis.
- `src/app/pages` — Páginas principais.
- `src/app/services` — Serviços para API.
- `src/app/models` — Modelos TypeScript.
- `src/assets` — Recursos estáticos.

---

## Como rodar

### Pré-requisitos

- Node.js (v14+)
- Angular CLI (`npm install -g @angular/cli`)

### Passos

```bash
git clone https://github.com/6gusta/Angulardo.git
cd Angulardo
npm install
ng serve --open
