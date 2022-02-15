import express from 'express'
import { Request, Response } from 'express'
import path from 'path'

const app = express();

app.use(express.static(path.join(__dirname, '../'))) //remember to remove 'ts' folder from dist since it contains server code

app.get('*', (req:Request, res:Response) => { 
    res.sendFile(path.join(__dirname, '../view/index.html'))
});

app.listen(4200, () => {
    console.log('Server is up on http://localhost:4200')
})