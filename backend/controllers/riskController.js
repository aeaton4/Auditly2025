const riskService = require('../services/riskService');

class RiskController {
  async getAll(req, res, next) {
    try {
      const risks = await riskService.getAll();
      res.json(risks);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const risk = await riskService.getById(req.params.id);
      res.json(risk);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const risk = await riskService.create(req.body);
      res.status(201).json(risk);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const risk = await riskService.update(req.params.id, req.body);
      res.json(risk);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await riskService.delete(req.params.id);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new RiskController();
