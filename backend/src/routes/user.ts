import { Hono, Next } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate';
import{decode,jwt,sign,verify} from 'hono/jwt'
export const userRouter = new Hono<{
    Bindings:{
      DATABASE_URL:string
    }
  }>();
const secret = "magic"
const authMiddleware = async (c:any, next:Next) => {
    const token:string = c.req.headers['authorization'];
    if (!token) {
      return c.json({ error: 'Unauthorized' }).status(401);
    }
    try {
      const decodedToken = await verify(token, secret);
      if(!decodedToken){
        return c.text("unauthorized request");
      }else{
        c.set("userId",decodedToken.id)
        await next();
      }
    } catch (error) {
      return c.json({ error: 'Invalid token' }).status(401);
    }
  };
  userRouter.post('/signup',async(c)=>{
    const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const existing_user = await prisma.user.findUnique({
      where:{
        email:body.email,
        name:body.name
      }
    })
    if(existing_user){
      return c.text("user already exists sign in ")
    }else{
      const user = await prisma.user.create({
        data:{
          email:body.email,
          name:body.name,
          password:body.password
        }
      })
      const token = await sign(user.id,secret);
      return c.json(token);
    }
  })
  
  
  
  userRouter.post('/signin',async (c)=>{
    const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const existing_user = await prisma.user.findUnique({
      where:{
        email:body.email,
        name:body.name,
        password:body.password
      }
    })
    if(existing_user){
      const token = await sign(existing_user.id,secret);
      return c.json(token);
    }else{
      return c.text("user not found sign up ")
    }
  })