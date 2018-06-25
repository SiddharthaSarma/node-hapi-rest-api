import { getAllCompanies, getCompanyById } from '../controller/company';

export const companyRoutes = [
  {
    method: 'GET',
    path: '/companies',
    config: {
      description: 'Get companies',
      notes: 'Get the list of companies',
      tags: ['api'],
      async handler(req, res) {
        return new Promise(async resolve => {
          return resolve(await getAllCompanies(req, res));
        });
      }
    }
  },
  {
    method: 'GET',
    path: '/companies/{id}',
    config: {
      description: 'Get seleted company',
      notes: 'Get a particular company',
      tags: ['api'],
      async handler(req, res) {
        return new Promise(async resolve => {
          return resolve(await getCompanyById(req, res));
        });
      }
    }
  }
];
