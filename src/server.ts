import express from "express";
import { categoriesRoutes } from "./routes/categories.routes";
import { specificationRoutes } from "./routes/Specifications.routes";

const app = express();

app.use(express.json());
app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationRoutes);

app.get("/", (req, res) => {
    return res.json({ message: "Hello World" });
});

app.listen(3333, () => console.log("server is running"));