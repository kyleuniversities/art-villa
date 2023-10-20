const { Model } = require('objection');

module.exports = class Post extends Model {
  static get tableName() {
    return 'post';
  }
};
