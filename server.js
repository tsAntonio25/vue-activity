import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

const groceries = [
    {
        id: 1,
        product: 'Apple'
    },
    {
        id: 2,
        product: 'Milk'
    },
    {
        id: 3,
        product: 'Chicken'
    },
    {
        id: 4,
        product: 'Corned Beef'
    },
    {
        id: 5,
        product: 'Potatoes'
    }
]

app.get('/api/groceries', (req, res) => {
    res.json(groceries)
})


app.listen(PORT, () => {console.log('Listening on port', PORT)})