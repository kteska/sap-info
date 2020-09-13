import axios from 'axios'
const http = axios.create({
    baseURL: 'http://srv03.mikr.us:20119/API'
})


export const getArt = async (url) => {
    let result = false
    try {
        result = await http.get(url)
        result = result.data
    } catch (error) {
        result = error.message.data
    }
    return result
}