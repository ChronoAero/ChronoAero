import express from 'express'
import { Request, Response } from 'express'
import path from 'path'

//Temporary development server

const app = express();

app.use(express.static(path.join(__dirname, '../../../client/dist')))

app.get('*', (req:Request, res:Response) => { 
    res.sendFile(path.join(__dirname, '../../../client/dist/view/index.html'))
});

app.listen(4200, () => {
    console.log('Client is up on http://localhost:4200')
})