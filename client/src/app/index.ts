import express from 'express';
import { Request, Response } from 'express';
import path from 'path';
import csurf from 'csurf';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';

//Temporary development server
const csrfProtection = csurf({ cookie: true })

const app = express();
app.disable('x-powered-by'); 
app.use(cookieParser())
app.use(rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 250, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message: '429 Too Many Requests'
}));
app.use(csrfProtection) 

app.use(express.static(path.join(__dirname, '../../../client/dist')))

app.get('*', (req:Request, res:Response) => { 
    res.sendFile(path.join(__dirname, '../../../client/dist/view/public/index.html'))
});

app.listen(4200, () => {
    console.log('Client is up on http://localhost:4200')
})