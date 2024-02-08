import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

export const getMessage = (): string => {
  return 'CI/CD pipeline working in VPS!';
};

app.get('/', (req, res) => {
  res.status(200).json({
    message: getMessage()
  });
});

// Guardamos la instancia del servidor http creado por app.listen() para
// poder cerrar el servidor al realizar los tests
export const httpServer = app.listen('3000', () => {
  console.log('Server listen in port 3000...');
});
