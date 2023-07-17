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