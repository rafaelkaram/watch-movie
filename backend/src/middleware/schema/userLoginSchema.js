const Joi = require('joi');

const schema = Joi.object().keys({
  email: Joi.string().pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).required(),
  password: Joi.string().pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[@$!%*#?&]).{8,}$/).min(8).required(),
});

module.exports = schema;
