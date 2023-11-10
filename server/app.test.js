const request = require('supertest');
const app = require('./src/app'); // Import your Express app

describe('Testing API endpoints', () => {
  it('should retrieve planets successfully', async () => {
    const response = await request(app).get('/planets');

    expect(response.status).toBe(200);
    // Add more assertions to validate the response body as needed
  });

  it('should retrieve the root endpoint successfully', async () => {
    const response = await request(app).get('/');

    expect(response.status).toBe(200);
    // Add more assertions to validate the response body as needed
  });

  it('should retrieve launches successfully', async () => {
    const response = await request(app).get('/launches');

    expect(response.status).toBe(200);
    // Add more assertions to validate the response body as needed
  });

  it('should create a new launch successfully', async () => {
    const response = await request(app)
      .post('/launches')
      .send({ mission: 'Mission 1', rocket: 'Rocket 1',launchDate: new Date('December 27, 2024'),customer: ['Herta', 'Asta'],
      upcoming: true,
      success: true, target: 'Target 1' });



    expect(response.status).toBe(201);
    // Add more assertions to validate the response body as needed
  });

  it('should delete a launch successfully', async () => {
    const response = await request(app).delete('/launches/100');

    expect(response.status).toBe(200);
    // Add more assertions to validate the response body as needed
  });

  // Add more test scenarios as needed
});