import express from "express";
import cors from "cors";
import db from "./models/index.js";
import UserRoutes from "./routes/user.routes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// })
db.sequelize.sync();

UserRoutes(app);
ProjectRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`)
});
