const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_USER_SECRET, {
    expiresIn: 18000,
  });
  return token;
};

module.exports = {
  async login(email, password) {
    const user = await User.findOne({ where: { email } });
    if (!user || !bcrypt.compareSync(password, user.password))
      throw { message: "Usuário ou senha inválidos." };

    const token = generateToken(user.id);
    return { user, token };
  },

  async create(userData) {
    const { name, email, password } = userData;

    if (await this.validateEmail(email)) {
      throw { message: "Email já registrado." };
    } else {
      const salt = bcrypt.genSaltSync(12);
      const hash = bcrypt.hashSync(password, salt);
      return await User.create({ name, email, password: hash });
    }
  },

  async find(id) {
    const user = await User.findByPk(id);

    if (user) {
      return user;
    }
    throw { message: "Usuário não encontrado." };
  },

  async update(id, userData) {
    const user = await this.find(id);

    const { name, email, password } = userData;

    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(password, salt);

    await user.update({
      name: name !== user.name ? name : user.name,
      email:
        email !== user.email && !(await this.validateEmail(email))
          ? email
          : user.email,
      password: hash,
      updatedAt: new Date(),
    });
  },

  async delete(id) {
    const user = await this.find(id);
    await user.destroy();
  },

  async validateEmail(email) {
    const user = await User.findOne({ where: { email } });
    return !!user;
  },
};
