const auditService = require('../services/auditService');

class AuditController {
  async getAll(req, res, next) {
    try {
      const audits = await auditService.getAll();
      res.json(audits);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const audit = await auditService.getById(req.params.id);
      res.json(audit);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const audit = await auditService.create(req.body);
      res.status(201).json(audit);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const audit = await auditService.update(req.params.id, req.body);
      res.json(audit);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await auditService.delete(req.params.id);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AuditController();
