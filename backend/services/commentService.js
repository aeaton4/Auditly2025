const { Comment, User, Audit, Finding } = require('../models');

class CommentService {
  async getAll() {
    return await Comment.findAll({
      include: [
        { model: User, as: 'user', attributes: ['id', 'username', 'firstName', 'lastName'] },
        { model: Audit, as: 'audit', attributes: ['id', 'title'] },
        { model: Finding, as: 'finding', attributes: ['id', 'title'] }
      ]
    });
  }

  async getById(id) {
    const comment = await Comment.findByPk(id, {
      include: [
        { model: User, as: 'user', attributes: ['id', 'username', 'firstName', 'lastName'] },
        { model: Audit, as: 'audit', attributes: ['id', 'title'] },
        { model: Finding, as: 'finding', attributes: ['id', 'title'] }
      ]
    });
    if (!comment) {
      throw new Error('Comment not found');
    }
    return comment;
  }

  async create(commentData) {
    return await Comment.create(commentData);
  }

  async update(id, commentData) {
    const comment = await this.getById(id);
    return await comment.update(commentData);
  }

  async delete(id) {
    const comment = await this.getById(id);
    await comment.destroy();
    return { message: 'Comment deleted successfully' };
  }
}

module.exports = new CommentService();
