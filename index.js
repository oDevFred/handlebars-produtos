//@note Importando modulos
const express = require('express');
const exphbs = require('express-handlebars');

//@note Criando o app
const app = express();

//@note Configurando Handlebars como engine de visualização
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

//@note Definindo pasta public como estática
app.use(express.static('public'));

//@note Middleware para deixar o nome do usuário e o ano do footer em todas as páginas
app.use((req, res, next) => {
  const userName = 'Caio';

  res.locals.user = userName;
  res.locals.currentYear = new Date().getFullYear();

  next();
});

//@note Criando a array dos produtos
const products = [
  {
    id: 1,
    name: 'Placa de vídeo RTX 5090',
    price: 20000,
    description: 'A melhor placa de vídeo da atualidade',
  },
  {
    id: 2,
    name: 'Processador Ryzen 9 9900X3D',
    price: 4000,
    description: 'O melhor processador da atualidade',
  },
  {
    id: 3,
    name: 'Placa-mãe SUS TUF Gaming B650M-E',
    price: 1200,
    description: 'A melhor placa mãe da atualidade',
  },
];

//@note Rota dos produtos
app.get('/produto/:id', (req, res) => {
  //@note Definindo variável do id do produto
  const productId = parseInt(req.params.id);
  //@note Atribuindo de fato o id do produto no produto
  const product = products.find((p) => p.id === productId);

  //@note Se não achar o produto, retorne á página de 404
  if (!product) {
    return res.status(404).render('404', {
      titlePage: 'Erro 404',
      title: 'Produto não encontrado',
      message: `O produto com ID ${productId} não existe no catálogo`,
    });
  }

  //@note Renderiza a página dos produtos
  res.render('product_details', {
    titlePage: product.name,
    title: `Detalhes de ${product.name}`,
    product: product,
  });
});

//@note Rota da home
app.get('/', (req, res) => {
  res.render('home', { titlePage: 'Home', products });
});

//@note Pegando a porta
app.listen(3000, () => {
  console.log('App rodando em http://localhost:3000');
});
