const { env: { PORT } } = process

module.exports = async function () {
    return `Heroku server is running on port ${PORT} `
}