const { Document, Audit } = require('../models');

class DocumentService {
  async getAll() {
    return await Document.findAll({
      include: [
        { model: Audit, as: 'audit', attributes: ['id', 'title'] }
      ]
    });
  }

  async getById(id) {
    const document = await Document.findByPk(id, {
      include: [
        { model: Audit, as: 'audit', attributes: ['id', 'title'] }
      ]
    });
    if (!document) {
      throw new Error('Document not found');
    }
    return document;
  }

  async create(documentData) {
    return await Document.create(documentData);
  }

  async update(id, documentData) {
    const document = await this.getById(id);
    return await document.update(documentData);
  }

  async delete(id) {
    const document = await this.getById(id);
    await document.destroy();
    return { message: 'Document deleted successfully' };
  }
}

module.exports = new DocumentService();
