
import { getMessage, httpServer } from '../app';

describe('sum module', () => {
  afterAll(async () => {
    // Después de la ejecución de todos los tests se cierra la instanacia del servidor.
    await httpServer.close();
  });

  test('should return the string "CI/CD pipeline working in VPS!"', () => {
    expect(getMessage()).toBe('CI/CD pipeline working in VPS!');
  });
});