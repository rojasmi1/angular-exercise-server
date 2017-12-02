import * as chai from 'chai';
import * as chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import app from '../../src/app';
import '../../src/env';

const expect = chai.expect;
chai.use(chaiHttp);

describe('User API', () => {
  describe('/GET /users/:username/details', () => {
    it('should return an user when username "rojasmi" is searched for', (done) => {
      chai.request(app)
      .get('/users/rojasmi1/details')
      .end((err, res) => {
        expect(err).to.be.a('null');
        expect(res).to.have.status(200);
        const user = res.body;
        expect(user.userName).to.be.equal('rojasmi1');
        done();
      });
    });
    it('should return a 404 when username "ronald" is searched for', (done) => {
      chai.request(app)
      .get('/users/ronald/details')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
    });
  });
});
