const documentService = require('../services/documentService');

class DocumentController {
  async getAll(req, res, next) {
    try {
      const documents = await documentService.getAll();
      res.json(documents);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const document = await documentService.getById(req.params.id);
      res.json(document);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const document = await documentService.create(req.body);
      res.status(201).json(document);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const document = await documentService.update(req.params.id, req.body);
      res.json(document);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await documentService.delete(req.params.id);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new DocumentController();
