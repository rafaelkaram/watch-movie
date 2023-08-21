const UserService = require("../service/UserService");

module.exports = {
  async create(req, res) {
    try {
      const user = await UserService.create(req.body);
      return res.status(201).json(user);
    } catch (error) {
      res.status(400).json(error);
    }
  },

  async find(req, res) {
    try {
      const { id } = req.params;
      const user = await UserService.find(id);
      return res.status(200).json(user);
    } catch (error) {
      res.status(400).json(error);
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      await UserService.update(id, req.body);
      return res.status(204).send();
    } catch (error) {
      res.status(400).json(error);
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      await UserService.delete(id);
      return res.status(204).send();
    } catch (error) {
      res.status(400).json(error);
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const { user, token } = await UserService.login(email, password);

      return res.status(200).json({ user, token });
    } catch (error) {
      res.status(400).json(error);
    }
  },
};
