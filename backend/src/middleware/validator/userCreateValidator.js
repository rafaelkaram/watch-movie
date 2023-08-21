const schema = require('../schema/userCreateSchema');

const validate = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(422).json({ error: error.details });
  next();
}

module.exports = validate;
