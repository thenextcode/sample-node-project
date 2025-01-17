const request = require('supertest');
const { app, startServer, stopServer } = require('../server'); // Import app and control functions

describe('GET /', () => {
  let server; // Hold the server instance for testing

  // Start the server before running the tests
  beforeAll(() => {
    server = startServer();
  });

  // Close the server after all tests are done
  afterAll(() => {
    stopServer();
  });

  it('should return "Hello, World!"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });
});
