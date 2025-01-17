const request = require('supertest');
const { app, server } = require('../server'); // Import both the app and server

describe('GET /', () => {
  afterAll(() => {
    // Close the server after all tests
    server.close();
  });

  it('should return "Hello, World!"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });
});
