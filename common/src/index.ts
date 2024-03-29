import z, { TypeOf } from "zod"
export const SignUpInput = z.object({
    username:z.string().email(),
    password:z.string().min(3),
    name:z.string()
})
export type SignUpInput = z.infer<typeof SignUpInput>
export const SignInInput = z.object({
    username:z.string().email(),
    password:z.string().min(3),
    name:z.string()
})
export type SignInInput = z.infer<typeof SignInInput>
export const CreateBlog = z.object({
    title:z.string(),
    content:z.string()
})
export type CreateBlog = z.infer<typeof CreateBlog>
export const UpdateBlog = z.object({
    title:z.string(),
    content:z.string(),
    id:z.number()
})
export type UpdateBlog = z.infer<typeof UpdateBlog>