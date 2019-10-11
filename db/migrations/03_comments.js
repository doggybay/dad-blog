
exports.up = function(knex) {
  return knex.schema.createTable('comments', function (table) {
    table.increments();
    table.string('name', 255).notNullable();
    table.string('email', 255).notNullable();
    table.string('body', 255).notNullable();
    table.integer('post_id').references('id').inTable('posts').notNullable();
    table.integer('user_id').references('id').inTable('users').notNullable();
    table.date('created_at_date').notNullable();
    table.time('created_at_time').notNullable();
  })

};

exports.down = function(knex) {
  return knex.schema.droptTable("comments");
};



