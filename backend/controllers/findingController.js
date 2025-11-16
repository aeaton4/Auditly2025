const findingService = require('../services/findingService');

class FindingController {
  async getAll(req, res, next) {
    try {
      const findings = await findingService.getAll();
      res.json(findings);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const finding = await findingService.getById(req.params.id);
      res.json(finding);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const finding = await findingService.create(req.body);
      res.status(201).json(finding);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const finding = await findingService.update(req.params.id, req.body);
      res.json(finding);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await findingService.delete(req.params.id);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new FindingController();
