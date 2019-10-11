
exports.up = function(knex) {
  return knex.schema.createTable('posts', function (table) {
    
    table.increments();
    table.string('title', 255).notNullable();
    table.string('body', 255).notNullable();
    table.integer('user_id').notNullable().references('id').inTable('users');
    table.date('created_at_date').notNullable();
    table.time('created_at_time').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.droptTable("posts");
};
