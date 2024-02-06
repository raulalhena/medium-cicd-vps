import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'CI/CD pipeline working in VPS!'
  });
});

app.listen('3000', () => {
  console.log('Server listen in port 3000...');
});
