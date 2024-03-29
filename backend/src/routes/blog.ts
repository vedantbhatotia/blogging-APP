import { Hono, Next } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate';
import{decode,jwt,sign,verify} from 'hono/jwt'
export const BlogRouter = new Hono<{
    Bindings:{
      DATABASE_URL:string
    },
    Variables:{
        userId:string
    }
  }>();
const secret = "magic"
const authMiddleware = async (c: any,next:Next) => {
    try {
        const token: string = c.req.header("Authorization");
        if (token !== null || token !== undefined) {
          const decode = await verify(token, secret);
          if (decode) {
            c.set('userId', decode);
            await next();
          } else {
            return c.body("you are unauthroized user sorry", 401);
          }
        } else {
          return c.body("you are unauthroized user", 401);
        }
      } catch (error) {
        return c.body("unauthroized ", 401);
      }
};
BlogRouter.post('/', authMiddleware,async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	const userId = c.get('userId');
	const body = await c.req.json();
	const post = await prisma.post.create({
		data: {
			title: body.title,
			content: body.content,
			authorId: Number(userId)
		}
	});
	return c.json({
		id: post.id
	});
});

BlogRouter.put('/',authMiddleware, async (c) => {
	const userId = Number(c.get('userId'));
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	const body = await c.req.json();
	console.log(body);
	console.log(userId);
	const blog = await prisma.post.update({
		where: {
			id: Number(body.id),
			authorId: userId
		},
		data: {
			title: body.title,
			content: body.content
		}
	});
	// console.log(blog);
	return c.text('updated post');
});
BlogRouter.get('/bulk',async (c)=>{
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
    const blogs = await prisma.post.findMany();
    return c.json(
        blogs
    )
})
BlogRouter.get('/:id',authMiddleware, async (c) => {
	const id = Number(c.req.param('id'));
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	
	const post = await prisma.post.findUnique({
		where: {
			id:id
		}
	});

	return c.json(post);
})
