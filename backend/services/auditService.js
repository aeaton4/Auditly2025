const { Audit, User, Finding, Risk, Document } = require('../models');

class AuditService {
  async getAll() {
    return await Audit.findAll({
      include: [
        { model: User, as: 'assignedUser', attributes: ['id', 'username', 'firstName', 'lastName'] }
      ]
    });
  }

  async getById(id) {
    const audit = await Audit.findByPk(id, {
      include: [
        { model: User, as: 'assignedUser', attributes: ['id', 'username', 'firstName', 'lastName'] },
        { model: Finding, as: 'findings' },
        { model: Risk, as: 'risks' },
        { model: Document, as: 'documents' }
      ]
    });
    if (!audit) {
      throw new Error('Audit not found');
    }
    return audit;
  }

  async create(auditData) {
    return await Audit.create(auditData);
  }

  async update(id, auditData) {
    const audit = await this.getById(id);
    return await audit.update(auditData);
  }

  async delete(id) {
    const audit = await this.getById(id);
    await audit.destroy();
    return { message: 'Audit deleted successfully' };
  }
}

module.exports = new AuditService();
