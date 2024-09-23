import * as Yup from 'yup'
import jwt from 'jsonwebtoken'
import User from '../models/User'
import authConfig from '../../config/auth'

class SessionController {
  async store(request, response) {
    const schema = Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
    })

    const isValid = await schema.isValid(request.body)

    const wrongUserOrPassword = () =>
      response
        .status(401)
        .json({ error: 'Make sure your username or password are correct' })

    if (!isValid) {
      return wrongUserOrPassword()
    }

    const { email, password } = request.body

    const user = await User.findOne({ where: { email } })

    if (!user) {
      return wrongUserOrPassword()
    }

    const isSamePassword = await user.checkPassword(password)

    if (!isSamePassword) {
      return wrongUserOrPassword()
    }
    return response.status(201).json({
      id: user.id,
      name: user.name,
      email,
      admin: user.admin,
      token: jwt.sign({ id: user.id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    })
  }
}

export default new SessionController()
