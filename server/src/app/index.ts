import express from 'express'
import { Request, Response } from 'express'
import { router as webhook } from './routers/webhook';
//Server app

const app = express();

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

app.listen(4201, () => {
    console.log('Server is up on http://localhost:4201');
});