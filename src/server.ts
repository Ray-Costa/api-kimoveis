import app from './app';
import {AppDataSource} from './data-source';

const PORT: number = 3000;
const runningMsg: string = `Server running on http://localhost:${PORT}`;

AppDataSource.initialize().then(() => {

app.listen(PORT, async () => {
  console.log('Database connected')
  console.log(runningMsg)
})
}).catch(err => {
  console.log(err)
})

