
var PLURAL = require('./routes/PLURAL');
app.get("/PLURAL", PLURAL.list);
app.get("/PLURAL/:id", PLURAL.view);
app.put("/PLURAL/:id", PLURAL.update);
app.post("/PLURAL", PLURAL.create);
app.delete("/PLURAL/:id", PLURAL.delete);

