const request = require('supertest');
const app = require('../server/index');

describe('API Health Check', () => {
  test('GET /api/health should return OK status', async () => {
    const response = await request(app)
      .get('/api/health')
      .expect(200);

    expect(response.body).toHaveProperty('status', 'OK');
    expect(response.body).toHaveProperty('message', 'WDP301 Assistants API is running');
    expect(response.body).toHaveProperty('timestamp');
  });

  test('GET / should return welcome message', async () => {
    const response = await request(app)
      .get('/')
      .expect(200);

    expect(response.body).toHaveProperty('message', 'Welcome to WDP301 Assistants API');
    expect(response.body).toHaveProperty('version', '1.0.0');
  });

  test('GET /nonexistent should return 404', async () => {
    const response = await request(app)
      .get('/nonexistent')
      .expect(404);

    expect(response.body).toHaveProperty('success', false);
    expect(response.body).toHaveProperty('message', 'API endpoint not found');
  });
});

describe('Authentication Endpoints', () => {
  test('POST /api/v1/auth/register should validate required fields', async () => {
    const response = await request(app)
      .post('/api/v1/auth/register')
      .send({})
      .expect(400);

    expect(response.body).toHaveProperty('success', false);
  });

  test('POST /api/v1/auth/login should validate required fields', async () => {
    const response = await request(app)
      .post('/api/v1/auth/login')
      .send({})
      .expect(400);

    expect(response.body).toHaveProperty('success', false);
  });
});

describe('Product Endpoints', () => {
  test('GET /api/v1/products should return products list', async () => {
    const response = await request(app)
      .get('/api/v1/products')
      .expect(200);

    expect(response.body).toHaveProperty('success', true);
    expect(response.body).toHaveProperty('data');
    expect(Array.isArray(response.body.data)).toBe(true);
  });
});