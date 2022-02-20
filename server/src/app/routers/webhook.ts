import express, {Request, Response} from 'express';
import { io } from '..';

interface ReqData{
    method: string
    headers: any
    body: any
}

//http connection
export const router = express.Router();

router.get('/', (req:Request, res:Response) => {
    res.send('send a server notice about webhook here')
})

router.all('/:id', (req:Request, res:Response) => {
    res.send(`${req.method}: ${req.params.id}`)
    const reqData:ReqData = {
        method: req.method,
        headers: req.headers,
        body: req.body
    }
    console.log('ok');
    io.to(`webhook/${req.params.id}`).emit('webhook/request_data', reqData);
})

//websocket (TCP-IP) connection