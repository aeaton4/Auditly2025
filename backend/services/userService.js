const { User } = require('../models');

class UserService {
  async getAll() {
    return await User.findAll({
      attributes: { exclude: [] }
    });
  }

  async getById(id) {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  async create(userData) {
    return await User.create(userData);
  }

  async update(id, userData) {
    const user = await this.getById(id);
    return await user.update(userData);
  }

  async delete(id) {
    const user = await this.getById(id);
    await user.destroy();
    return { message: 'User deleted successfully' };
  }
}

module.exports = new UserService();
