const userService = require('../services/userService');

class UserController {
  async getAll(req, res, next) {
    try {
      const users = await userService.getAll();
      res.json(users);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const user = await userService.getById(req.params.id);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const user = await userService.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const user = await userService.update(req.params.id, req.body);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await userService.delete(req.params.id);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
