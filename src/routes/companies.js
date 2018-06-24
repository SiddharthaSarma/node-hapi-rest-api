import { getAllCompanies } from '../controller/company';
export const companyRoutes = [
  {
    method: 'GET',
    path: '/companies',
    config: {
      response: {
        emptyStatusCode: 204
      }
    },
    async handler(req, res) {
      return new Promise(async resolve => {
        return resolve(await getAllCompanies(req, res));
      });
    }
  }
];
