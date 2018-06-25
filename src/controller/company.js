import {
  createCompany,
  getAllCompaniesRecords,
  getCompany
} from '../models/company';

export const getAllCompanies = async (req, res) => {
  const { success, response } = await getAllCompaniesRecords();
  if (success) {
    return res.response(response).code(200);
  } else {
    return res.response(respose).code(400);
  }
};
export const getCompanyById = async (req, res) => {
  const { success, response } = await getCompany(req.params.id);
  if (success) {
    return res.response(response).code(200);
  } else {
    return res.response(respose).code(400);
  }
};
