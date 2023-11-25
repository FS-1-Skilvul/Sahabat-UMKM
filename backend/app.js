const db = require ('./models')
const express = require ('express')
const app = express ()
const allRoutes = require ('./routes')

app.use(express.json())
app.use(allRoutes)
const PORT =    process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})