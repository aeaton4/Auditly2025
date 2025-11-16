const { Risk, Audit } = require('../models');

class RiskService {
  async getAll() {
    return await Risk.findAll({
      include: [
        { model: Audit, as: 'audit', attributes: ['id', 'title'] }
      ]
    });
  }

  async getById(id) {
    const risk = await Risk.findByPk(id, {
      include: [
        { model: Audit, as: 'audit', attributes: ['id', 'title'] }
      ]
    });
    if (!risk) {
      throw new Error('Risk not found');
    }
    return risk;
  }

  async create(riskData) {
    return await Risk.create(riskData);
  }

  async update(id, riskData) {
    const risk = await this.getById(id);
    return await risk.update(riskData);
  }

  async delete(id) {
    const risk = await this.getById(id);
    await risk.destroy();
    return { message: 'Risk deleted successfully' };
  }
}

module.exports = new RiskService();
