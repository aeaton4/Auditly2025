const { Finding, Audit } = require('../models');

class FindingService {
  async getAll() {
    return await Finding.findAll({
      include: [
        { model: Audit, as: 'audit', attributes: ['id', 'title'] }
      ]
    });
  }

  async getById(id) {
    const finding = await Finding.findByPk(id, {
      include: [
        { model: Audit, as: 'audit', attributes: ['id', 'title'] }
      ]
    });
    if (!finding) {
      throw new Error('Finding not found');
    }
    return finding;
  }

  async create(findingData) {
    return await Finding.create(findingData);
  }

  async update(id, findingData) {
    const finding = await this.getById(id);
    return await finding.update(findingData);
  }

  async delete(id) {
    const finding = await this.getById(id);
    await finding.destroy();
    return { message: 'Finding deleted successfully' };
  }
}

module.exports = new FindingService();
