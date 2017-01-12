import validation from './../validation';
import validate from 'express-validation';
import Joi from 'joi';

const createValidation = (validation) => {
  for (let key in validation) {
    if (validation.hasOwnProperty(key)) {
      if (typeof validation[key] === 'object') {
        validation[key] = createValidation(validation[key]);
      } else {
        validation[key] = validate(validation[key](Joi));
      }
    }
  }
  return validation;
};

export const validationErrorHandler = function (err, req, res, next) { //eslint-disable-line
  if (err instanceof validate.ValidationError) {
    return res.status(err.status).json(err);
  }

  if (process.env.NODE_ENV !== 'production') {
    return res.status(500).send(err.stack);
  } else {
    return res.status(500);
  }
};

export default createValidation(validation);
