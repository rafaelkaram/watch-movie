const Joi = require('joi');

const schema = Joi.object().keys({
  name: Joi.string(),
  email: Joi.string().pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
  password: Joi.string().pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[@$!%*#?&]).{8,}$/).min(8),
});

module.exports = schema;
