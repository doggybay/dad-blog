
exports.up = function(knex) {
  return knex.schema.createTable('posts', function (table) {
    
    table.increments();
    table.string('title', 255).notNullable();
    table.text('body').notNullable();
    table.integer('user_id').notNullable().references('id').inTable('users');
    table.string('created_at').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("posts");
};
