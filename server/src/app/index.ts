import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';
import { Request, Response } from 'express';
import { router as webhook } from './routers/webhook';
import { Socket } from 'socket.io';
import csurf from 'csurf'
import cookieParser from 'cookie-parser'

//Server app
export const csrfProtection = csurf({ cookie: true })


const app = express();
app.use(cookieParser());
app.disable('x-powered-by');
const server = http.createServer(app);
export const io : Server = require('socket.io')(server, {
    cors: '*'
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(require('express-limit').limit({
    max:    5,       
    period: 60 * 1000 
}))
app.use(csrfProtection)

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

server.listen(4201, () => {
    console.log('Server is up on http://localhost:4201');
});