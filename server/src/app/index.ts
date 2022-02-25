import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';
import { Request, Response } from 'express';
import { router as webhook } from './routers/webhook';
import { Socket } from 'socket.io';
import csurf from 'csurf';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';

//Server app
const csrfProtection = csurf({ cookie: true });

const app = express();
app.disable('x-powered-by');
const server = http.createServer(app);
export const io : Server = require('socket.io')(server, {
    cors: '*'
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(csrfProtection);
app.use(rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 250, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message: '429 Too Many Requests'
}));


app.use('/webhook', webhook);

app.get('/favicon.ico', (req:Request, res: Response) => {
    res.redirect('https://avatars.githubusercontent.com/u/75560157?v=4');
})

app.get('/', (req:Request, res: Response) => {
    res.send('Send a server notice html here');
});

app.get('*', (req:Request, res:Response) => { 
    res.send('404');
});
 
io.on('connection', (socket :Socket) => {
    socket.join(`webhook/${socket.id}`);
})

server.listen(process.env.PORT || 4201, () => {
    console.log('Server is up on http://localhost:4201');
});