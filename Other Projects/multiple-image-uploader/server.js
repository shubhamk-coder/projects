import express from "express";
import path from "path";
import hbs from "express-handlebars";

const app = express();
const port = 3000;
const __dirname = path.resolve();
app.use(express.json());

//Serving static files
app.use(express.static(path.join(__dirname, "public")));

//setup view engine
app.set("view engine", "hbs");
app.engine(
  "hbs",
  hbs.engine({
    extname: "hbs",
    defaultView: "default",
    layoutDir: path.join(__dirname, "views"),
    partialDir: path.join(__dirname, "views/partials"),
  })
);

//rotes
app.get("/", (req, res) => {
  res.render("main");
});

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
