import * as Yup from 'yup';

export default async function validateLogin(data, formRef) {
  try {
    const schema = Yup.object().shape({
      username: Yup.string()
        .min(3, 'Usuario Invalido')
        .required('O preenchimento do usuario é obrigatório.'),
      password: Yup.string()
        .min(3, 'Senha Invalida')
        .required('O preenchimento da senha é obrigatório.'),
    });

    await schema.validate(data, {
      abortEarly: false,
    });
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      const validationErrors = {};

      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });

      return validationErrors;
    }
  }
}
