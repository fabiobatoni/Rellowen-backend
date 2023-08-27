exports.up = knex => knex.schema.createTable("convidados", table => {
  table.increments("id")
  table.text("name");
  table.text("qtdPessoas");
  table.text("cidade");
  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("update_at").default(knex.fn.now());
});


exports.down = knex => knex.schema.dropTable("convidados");
