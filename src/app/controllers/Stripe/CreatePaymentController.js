/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import * as Yup from 'yup'
import Stripe from 'stripe'
import 'dotenv/config'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const calculateOrderAmount = (items) => {
  const total = items.reduce(
    (acc, current) => current.price * current.quantity + acc,
    0,
  )

  return total
}

class CreatePaymentIntentController {
  // eslint-disable-next-line consistent-return
  async store(req, res) {
    const schema = Yup.object({
      products: Yup.array()
        .required()
        .of(
          Yup.object({
            id: Yup.number().required(),
            quantity: Yup.number().required(),
            price: Yup.number().required(),
          }),
        ),
    })

    try {
      schema.validateSync(req.body, { abortEarly: false })
    } catch (err) {
      return res.status(400).json({ error: err.errors })
    }

    const { products } = req.body
    const amount = calculateOrderAmount(products)

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'brl',
      automatic_payment_methods: {
        enabled: true,
      },
    })

    res.json({
      clientSecret: paymentIntent.client_secret,
      dpmCheckerLink: `https://dashboard.stripe.com/settings/payment_methods/review?transaction_id=${paymentIntent.id}`,
    })
  }
}

export default new CreatePaymentIntentController()
