export default  defineEventHandler( async event => {
    const config = useRuntimeConfig(event)
    const {apiKey} = config
    const query = getQuery(event)
    const url = 'https://api.api-ninjas.com/v1/celebrity'

    const data = await $fetch(url, {
        headers: {
            'X-Api-Key': apiKey,
            contentType: 'application/json',
        },
        query
    })
    return data
})