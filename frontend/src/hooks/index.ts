import { useEffect, useState } from "react";
import axios from "axios";
const backend_url = "https://backend.vedantbhatotia.workers.dev";
interface Blog {
    author: {
        name: string;
    };
    title: string;
    content: string;
   
}
function useBlogs() {
    const [blogs, setBlogs] = useState<Blog []>([]);
    async function getResponse() {
        try {
            const res = await axios.get(`${backend_url}/api/v1/blog/bulk`);
            setBlogs(res.data);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    }

    useEffect(() => {
        getResponse();
    }, []);
    return blogs
}

export default useBlogs;
