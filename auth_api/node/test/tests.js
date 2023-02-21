import chai from 'chai';
import { loginFunction } from '../services/login'
import { protectFunction } from '../services/protected'

const expect = chai.expect;

describe('loginFunction()', function () {
  it('Test login', async function () {
    expect("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4ifQ.StuYX978pQGnCeeaj2E1yBYwQvZIodyDTCJWXdsxBGI").to.be.equal(await loginFunction("admin", "secret"));
  });

  it('Invalid Login', async function () {
    expect(null).to.be.equal(await loginFunction("admon", "secre"));
  });
});

describe('protectFunction()', function () {
  it('Test protected', function () {
    expect('You are under protected data').to.be.equal(protectFunction(["Bearer", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4ifQ.StuYX978pQGnCeeaj2E1yBYwQvZIodyDTCJWXdsxBGI"]));
  });
  it('Test protected', function () {
    expect('invalid access').to.be.equal(protectFunction(["Pearer", "birriapiOiJIxzI1NiIsInascCI6IkpXVCJ9.ayJyb2xlIwaluigiwaaifQ.ctuYX978pQGnCeeaj2E1yBYwQvZIodyDTCJWXdsxBGI"]));
  });
});