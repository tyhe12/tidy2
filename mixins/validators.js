import { required, email, min } from 'vee-validate/dist/rules'
import { extend, setInteractionMode } from 'vee-validate'

setInteractionMode('eager')

extend('required', {
    ...required,
    message: '{_field_} can not be empty'
})

extend('password', {
    ...min,
    message: 'Passwod has to be at least 8 characters'
})

extend('confirm', {
    params: ['target'],
    validate(value, { target }) {
        return value === target
    },
    message: 'Password confirmation does not match'
})

extend('checked', {
    ...required,
    message: '{_field_} has to be checked'
})

extend('agreed', {
    ...required,
    message: 'Please agree to {_field_}'
})

extend('email', {
    ...email,
    message: 'Email must be valid'
})
