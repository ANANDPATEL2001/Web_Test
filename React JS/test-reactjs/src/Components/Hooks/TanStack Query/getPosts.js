import axios from 'axios'

export async function getPosts() {
    // 'axios.get()' method is used to make axios 'get' request from a given 'url' with provided parameter
    // Below parameter is given as '_sort' with value as 'title'
    try {
        const res = await axios
            .get('https://jsonplaceholder.typicode.com/posts')
        console.log(res)
        console.log(res.data)
        return res.data
    } catch (error) {
        return console.log(error)
    }
}

export async function getPostId(id) {
    // 'axios.get()' method is used to make axios 'get' request from a given 'url' with provided parameter
    // Below parameter is given as '_sort' with value as 'title'
    try {
        const res = await axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        console.log(res)
        console.log(res.data)
        return res.data
    } catch (error) {
        return console.log(error)
    }
}

export async function getUser(id) {
    // 'axios.get()' method is used to make axios 'get' request from a given 'url' with provided parameter
    // Below parameter is given as '_sort' with value as 'title'
    try {
        const res = await axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        console.log(res)
        console.log(res.data.id)
        return res.data.id
    } catch (error) {
        return console.log(error)
    }
}

export function createPost({ title, body }) {
    return axios
        .post(`http://localhost:3000/hooks/tanstackQuery/posts`, {
            title,
            body,
            userId: 1,
            id: Date.now(),
        })
        .then(res => {
            console.log(res)
            return res.data
        })
}

export function getPostPaginated({ title, body }) {
    // 'axios.get()' method is used to make axios 'get' request from a given 'url' with provided parameter
    // Below parameter is given as '_sort' with value as 'title'
    return axios
        .get(`http://localhost:3000/hooks/tanstackQuery/posts`, {
            title,
            body,
            userId: 1,
            id: Date.now(),
        })
        .then(res => {
            console.log(res)
            return res.data
        })
}
