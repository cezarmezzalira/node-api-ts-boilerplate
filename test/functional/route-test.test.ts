describe('Route functional tests', () => {
  it('should test route', async () => {
    const { body, status } = await global.testRequest.get('/test');
    expect(status).toBe(200);
    expect(body.message).toBe('ok');
  });
});
