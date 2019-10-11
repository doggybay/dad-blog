
exports.up = function(knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('name', 255).notNullable();
    table.string('email', 255);
    table.string('website', 255).notNullable();
    table.string('password', 255).notNullable();
    table.date('created_at').notNullable();
    
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
