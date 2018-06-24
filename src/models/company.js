import mongoose from 'mongoose';
import { CompanySchema } from '../schema/company';

const Company = mongoose.model('Company', CompanySchema);

export const createCompany = async data => {
  try {
    const company = await Company.create({
      name: 'Sid',
      city: 'sid',
      address: 'hello'
    });
    return company;
  } catch (error) {
    return error;
  }
};

export const getAllCompaniesRecords = async data => {
  let success = true;
  let response = [];
  try {
    const companies = await Company.find({}).exec();
    response = companies;
  } catch (err) {
    success = false;
    response = err;
  } finally {
    return {
      success,
      response
    };
  }
};
