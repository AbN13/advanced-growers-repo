const express = require('express');
const app = express();
const port = 3002; // Use uma porta diferente da porta do front-end React

// Middleware para lidar com JSON
app.use(express.json());

// Dados de exemplo para produtos (serão substituídos por um banco de dados)
const products = [
  { id: 1, name: 'Produto 1 Skank', price: 10, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Produto 2 White Whidow', price: 20, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Produto 3 Gorilla Glu', price: 30, image: 'https://via.placeholder.com/150' },
];

// Dados de exemplo para o carrinho (serão substituídos por uma sessão ou banco de dados)
let cart = [];

// Rota para retornar uma lista de produtos
app.get('/products', (req, res) => {
  res.json(products);
});

// Rota para retornar detalhes de um produto
app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Produto não encontrado');
  }
});

// Rota para adicionar um produto ao carrinho
app.post('/cart', (req, res) => {
  const productId = req.body.productId;
  const product = products.find((p) => p.id === productId);
  if (product) {
    cart.push(product);
    res.status(201).send('Produto adicionado ao carrinho');
  } else {
    res.status(404).send('Produto não encontrado');
  }
});

// Rota para remover um produto do carrinho
app.delete('/cart/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  cart = cart.filter((p) => p.id !== productId);
  res.status(204).send();
});

// Rota para realizar uma compra (simplificada)
app.post('/checkout', (req, res) => {
  res.send('Compra realizada com sucesso!');
  cart = []; // Limpa o carrinho
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor Node.js ouvindo na porta ${port}`);
});