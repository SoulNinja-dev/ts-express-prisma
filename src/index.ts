import express from 'express';
import { config } from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
config({ path: '../.env' });
import user from './routes/user.route';

const app = express();

// Express configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV !== 'production') app.use(morgan('dev'));
else app.use(morgan('combined'));
app.use(cors());

// @route   GET /
// @desc    Test Base API
// @access  Public
app.get('/', (_req, res) => {
	res.send('API up');
});

app.use('/api/user', user);

const port = process.env.PORT || 1717;
app.listen(port, () =>
	console.log(`Server started on port http://localhost:${port}`),
);
