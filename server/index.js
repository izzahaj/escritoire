import express from 'express';
import cors from 'cors';
import db from './models/index';
import UserRoutes from './routes/user.routes';
import ProjectRoutes from './routes/project.routes';
import WorkRoutes from './routes/work.routes';
import ChapterRoutes from './routes/chapter.routes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and re-sync db.');
});

UserRoutes(app);
ProjectRoutes(app);
WorkRoutes(app);
ChapterRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`);
});
