const commentService = require('../services/commentService');

class CommentController {
  async getAll(req, res, next) {
    try {
      const comments = await commentService.getAll();
      res.json(comments);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const comment = await commentService.getById(req.params.id);
      res.json(comment);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const comment = await commentService.create(req.body);
      res.status(201).json(comment);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const comment = await commentService.update(req.params.id, req.body);
      res.json(comment);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await commentService.delete(req.params.id);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CommentController();
