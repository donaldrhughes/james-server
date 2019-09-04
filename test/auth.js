//Dependencies
let expect = require('chai').expect;
let app = require('../server');
let request = require('supertest');

//Set up the data and 
const userCredentials = {
  email: 'test@test.com',
  password: 'Test123!!'
}

//now let's login the user before we run any tests
var authenticatedUser = request.agent(app);
before(function (done) {
  authenticatedUser
    .post('/auth/login')
    .send(userCredentials)
    .end(function (err, response) {
      console.log(response.body)
      // expect(response.statusCode).to.equal(200);
      // expect('Location', '/splash');
      expect(response.body).to.have.property('token');
      if (err) {
        console.log(error)
      }
      done();
    });
});
  //make a POST to the /auth/login route with the email / password.
  //after the POST has completed, make sure the status code is 200 
  //also make sure that the user has been directed to the / route


//   describe('GET /profile', function(done){
// //addresses 1st bullet point: if the user is logged in we should get a 200 status code
//   it('should return a 200 response if the user is logged in', function(done){
//     authenticatedUser.get('/profile')
//     .expect(200, done);
//   });
// //addresses 2nd bullet point: if the user is not logged in we should get a 302 response code and be directed to the /login page
//   it('should return a 302 response and redirect to /login', function(done){
//     request(app).get('/profile')
//     .expect('Location', '/login')
//     .expect(302, done);
//   });
// });