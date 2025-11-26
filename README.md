# Handlebars Produtos 🛍️

Um pequeno projeto de exemplo que demonstra como criar um catálogo de produtos com Express.js e Handlebars. O objetivo é exemplificar rotas, templates, e uso de assets estáticos (imagens, CSS via CDN).

Projeto de atividade feito para o curso [Node.js do Zero a Maestria com diversos Projetos](https://www.udemy.com/course/nodejs-do-zero-a-maestria-com-diversos-projetos/)

## 🚀 Tecnologias

- Node.js
- Express (v5)
- express-handlebars
- Tailwind CSS (via CDN)
- nodemon (dev)

## 📦 Estrutura do Projeto

```
index.js
package.json
public/
  └─ img/ (imagens dos produtos)
views/
  ├─ 404.handlebars
  ├─ home.handlebars
  ├─ product_details.handlebars
  └─ layouts/
      └─ main.handlebars
```

## ✨ Recursos

- Rotas simples para listar e visualizar detalhes de produtos
- Templates Handlebars com layout principal
- Tailwind CSS via CDN para estilos
- Middleware de exemplo adicionando `user` e `currentYear` como `res.locals` para uso nos templates
- Imagens estáticas em `public/img` com convenção `id-n.webp`

## 🧭 Roteamento

- `/` - Página inicial com lista de produtos
- `/produto/:id` - Página de detalhe do produto (id numérico)
- Rota 404 personalizada quando o produto não for encontrado

## ⚙️ Instalação

Requisitos: Node.js (recomendo v18 ou superior) e npm

```bash
# Clone o repositório
git clone https://github.com/oDevFred/handlebars-produtos.git
cd handlebars-produtos

# Instale dependências
npm install

# Inicie a aplicação
npm start
```

> Observação: o script `start` usa `nodemon` como dev tool (ver `package.json`). Ele chama `nodemon ./index.js localhost 3000`, mas, atualmente, `index.js` escuta a porta 3000 diretamente – então `node index.js` também funciona.

## 📌 Como usar

1. Abra o navegador em `http://localhost:3000` para ver a lista de produtos.
2. Clique em um produto para ver a página de detalhes (ex.: `http://localhost:3000/produto/1`).

## 🛠️ Como adicionar um produto

1. Abra `index.js` e adicione um objeto ao array `products`:

```js
{
  id: 4,
  name: 'Nome do produto',
  price: 999,
  description: 'Descrição do produto',
}
```

2. Adicione as imagens do produto em `public/img` seguindo a convenção de nomes: `4-1.webp`, `4-2.webp`, `4-3.webp`. (O template espera imagens com `-1`, `-2` e `-3`).

3. Acesse `http://localhost:3000/produto/4` para ver o novo produto.

## 💡 Melhorias sugeridas

- Carregar produtos a partir de um banco de dados (SQLite, MongoDB, etc.) ao invés do array em memória
- Usar variáveis de ambiente para definir porta e host
- Implementar um router modular (separar em controllers e rotas)
- Adicionar testes automatizados e pipeline CI
- Internacionalização (i18n) para suportar múltiplos idiomas

## 🧾 Licença

Este projeto está sob a licença ISC.

## 👨‍💻 Contribuição

Pull Requests são bem-vindos. Se tiver sugestões — melhorias de código, novas features, README mais claro — abra uma issue ou PR.

## 📫 Contato

Se quiser falar comigo, abra uma issue no repo ou crie um PR!

---

Feito com ❤️ e Node.js por oDevFred

## 🔧 Personalizações rápidas

- Para alterar o nome exibido no cabeçalho (atualmente `Caio`) edite o middleware em `index.js`: a variável `userName` está definida dentro do middleware (procure por `const userName = 'Caio'`).
- Para usar uma porta diferente, atualize `index.js` para ler `process.env.PORT` ou altere a chamada ao iniciar o servidor.
