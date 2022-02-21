import express from 'express'
import { Request, Response } from 'express'
import path from 'path'
import csurf from 'csurf'
import cookieParser from 'cookie-parser'

//Temporary development server
export const csrfProtection = csurf({ cookie: true })

const app = express();
app.disable('x-powered-by');
app.use(cookieParser())
app.use(require('express-limit').limit({
    max:    5,       
    period: 60 * 1000 
}))
app.use(csrfProtection)

app.use(express.static(path.join(__dirname, '../../../client/dist')))

app.get('*', (req:Request, res:Response) => { 
    res.sendFile(path.join(__dirname, '../../../client/dist/view/index.html'))
});

app.listen(4200, () => {
    console.log('Client is up on http://localhost:4200')
})