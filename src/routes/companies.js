import { getAllCompanies } from '../controller/company';

export const companyRoutes = [
  {
    method: 'GET',
    path: '/companies',
    config: {
      description: 'Get companies',
      notes: 'Get the list of companies',
      tags: ['api'], // ADD THIS TAG
      async handler(req, res) {
        return new Promise(async resolve => {
          return resolve(await getAllCompanies(req, res));
        });
      },
      response: {
        emptyStatusCode: 204
      }
    }
  }
];
