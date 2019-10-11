
exports.up = function(knex) {
  return knex.schema.createTable('comments', function (table) {
    table.increments();
    table.text('body').notNullable();
    table.integer('post_id').references('id').inTable('posts').notNullable();
    table.integer('user_id').references('id').inTable('users').notNullable();
    table.string('created_at').notNullable();
  })

};

exports.down = function(knex) {
  return knex.schema.dropTable("comments");
};



