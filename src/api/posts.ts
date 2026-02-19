import axios from 'axios';

// Define Post type
type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
};

// Create axios instance (optional, but good practice)
const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

// Fetch all posts
export const fetchPosts = async (): Promise<Post[]> => {
    const response = await api.get<Post[]>('/posts?_limit=10');
    return response.data;
};

// Fetch single post
export const fetchPostById = async (postId: string): Promise<Post> => {
    const response = await api.get<Post>(`/posts/${postId}`);
    return response.data;
};
