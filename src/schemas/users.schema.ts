import * as z from 'zod'
import * as yup from 'yup'
import zxcvbn from 'zxcvbn'

const userSchema = z.object({
    id: z.string(),
    name: z.string().min(3).max(120, 'O nome deve ter no máximo 120 caracteres.'),
    email: z.string().email('O email deve ser um formato válido.'),
    cellphone: z.string().min(10).max(12,'O numero deve ter no máximo 12 caracteres.'),
    password: z.string().refine((value) => {
      const { score } = zxcvbn(value);
      return score >= 5;
    }, {
      message: 'A senha deve ter uma força maior.',
    }),
    profileImage: z.string().refine((value) => yup.string().url().isValidSync(value) && /\.(jpg|jpeg|png|gif)$/i.test(value), 'A imagem de perfil deve ser uma URL válida de uma imagem.'),
    createAt: z.date()
})

const userSchemaRequest = userSchema.omit({
    id: true,
    createAt: true
})

const userSchemaResponse = userSchema.omit({
    password: true
})

const multiUsersSchemaResponse = userSchemaResponse.array()

const updateUserSchema = userSchemaRequest.partial()

export { userSchema, userSchemaRequest, userSchemaResponse, multiUsersSchemaResponse, updateUserSchema }