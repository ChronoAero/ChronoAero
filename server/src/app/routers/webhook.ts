import express, {Request, Response} from 'express';

export const router = express.Router();

router.get('/', (req:Request, res:Response) => {
    res.send('send a server notice about webhook here')
})

router.get('/:id', (req:Request, res:Response) => {
    res.send(req.params.id)
})