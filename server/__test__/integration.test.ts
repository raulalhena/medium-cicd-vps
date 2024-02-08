import request from 'supertest';
import { httpServer } from '../src/app';

describe('Testing API', () => {
  afterAll(() => {
    httpServer.close();
  });

  test('Should response the GET method', async() => {
    const response = await request(httpServer).get('/');
    expect(response.statusCode).toBe(200);
  });

  test('Should resturn the message object', async () => {
    const response = await request(httpServer).get('/');
    const result = JSON.parse(response.text);
    expect(result).toEqual({ message: 'CI/CD pipeline working in VPS!' });
  });
});