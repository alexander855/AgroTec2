import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import roles from '../helpers/roles'

const schema = yup.object().shape({
    name: yup
    .string("el nombre debe ser un texto")
    .required("Debes ingresar un Nombre")
    .min(6, "La contraseña debe tener almenos 6 caracteres"),
    email: yup
    .string("El email debe ser un texto")
    .required("Debes ingresar un correo electronico")
    .email("Debe ingresar un correo electronico valido"),
    role: yup
    .string("El rol debe ser un texto")
    //.required("Debes ingresar un rol valido")
    .oneOf(Object.keys(roles), "El rol no es valido, elija otro")
})

export default yupResolver(schema)