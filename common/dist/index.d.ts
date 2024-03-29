import z from "zod";
export declare const SignUpInput: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
    name: string;
}, {
    username: string;
    password: string;
    name: string;
}>;
export type SignUpInput = z.infer<typeof SignUpInput>;
export declare const SignInInput: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
    name: string;
}, {
    username: string;
    password: string;
    name: string;
}>;
export type SignInInput = z.infer<typeof SignInInput>;
export declare const CreateBlog: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
}, {
    title: string;
    content: string;
}>;
export type CreateBlog = z.infer<typeof CreateBlog>;
export declare const UpdateBlog: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
    id: number;
}, {
    title: string;
    content: string;
    id: number;
}>;
export type UpdateBlog = z.infer<typeof UpdateBlog>;
