const { app } = require("./src/app.js");
const { conn } = require("./src/db.js");
const port = process.env.PORT || 3001;
conn.sync({ alter: true }).then(() => {
  app.listen(port, () => {
    console.log(`%s listening at ${port}`);
  });
});
