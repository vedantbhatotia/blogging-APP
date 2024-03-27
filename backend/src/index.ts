// import { PrismaClient } from '@prisma/client/edge'
// import { withAccelerate } from '@prisma/extension-accelerate';
// import{decode,jwt,sign,verify} from 'hono/jwt'
// const secret = "magic"
import { Hono, Next } from 'hono'
import { userRouter } from './routes/user';
import { BlogRouter } from './routes/blog';
const app = new Hono<{
  Bindings:{
    DATABASE_URL:string
  }
}>();
app.route('api/v1/user',userRouter)
app.route('api/v1/blog',BlogRouter)
export default app
