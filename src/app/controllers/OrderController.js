import * as Yup from 'yup'
import Order from '../schemas/Order'

class OrderController {
  async store(request, response) {
    const schema = Yup.object({
      name: Yup.string().required(),
    })

    try {
      schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

    const { name } = request.body

    const order = {
      user: {
        id: request.userId,
        name: request.userName,
      },
    }

    return response.status(201).json(order)
  }

  async index(request, response) {
    const products = await Product.findAll({
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name'],
        },
      ],
    })

    return response.json(products)
  }
}

export default new OrderController()
