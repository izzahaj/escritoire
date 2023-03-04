import express from "express";
import cors from "cors";
import db from "./models/index.js";
import UserRoutes from "./routes/user.routes.js";
import ProjectRoutes from "./routes/project.routes.js";
import WorkRoutes from "./routes/work.routes.js";
import ChapterRoutes from "./routes/chapter.routes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
})

UserRoutes(app);
ProjectRoutes(app);
WorkRoutes(app);
ChapterRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`)
});
