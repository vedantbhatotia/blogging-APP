import React from 'react';

interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string
}

export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate,

}: BlogCardProps) => {
    return (
        <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
            <div className="flex">
                <Avatar name={authorName} />
                <div className="font-extralight pl-2 text-sm flex justify-center flex-col">{authorName}</div>
                <div className="flex justify-center flex-col pl-2 flex justify-center flex-col">
                    <Circle />
                </div>
                <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
                    {publishedDate}
                </div>
            </div>
            <div className="flex items-center">
                {/* Blog Info */}
                <div className="flex flex-col flex-grow">
                    <div className="text-xl font-semibold">{title}</div>
                    <div className="text-md font-thin">{content.slice(0, 100) + "..."}</div>
                    <div className="text-slate-500 text-sm font-thin pt-2">
                        {`${Math.ceil(content.length / 100)} minute(s) read`}
                    </div>
                    
                </div>
                <img src={"https://cdn4.vectorstock.com/i/1000x1000/41/78/blog-writing-chalk-white-icon-on-black-background-vector-39924178.jpg"} alt="Blog" className="w-40 h-20 object-cover rounded-md ml-4" />
            </div>
        </div>
    );
};

export function Avatar({ name }: { name: string }) {
    return (
        <div className="relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full w-10 h-10">
            <span className="text-md font-extralight text-gray-600 dark:text-gray-300">
                {name[0]}
            </span>
        </div>
    );
}
export function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-500">

    </div>
}