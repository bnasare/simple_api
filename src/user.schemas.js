import * as yup from 'yup'

const MIN_LENGTH = {
    name: 3,
    email: 3,
    city: 3,
    country: 3
}

const MAX_LENGTH = {
    name: 20,
    email: 50,
    city: 30,
    country: 15
}

export const addUser = {
    schema: {
        body: {
            yupSchema: yup.object().shape({
                name: yup.string().min(MIN_LENGTH.name).max(MAX_LENGTH.name),
                email: yup.string().email().min(MIN_LENGTH.email).max(MAX_LENGTH.email),
                city: yup.string().min(MIN_LENGTH.city).max(MAX_LENGTH.city),
                country: yup.string().min(MIN_LENGTH.country).max(MAX_LENGTH.country),
            })
        },
    },
}

export const updateUser = {
    schema: {
        params: {
            yupSchema: yup.object().shape({
                id: yup.number().required(),
            })
        },
        body: {
            yupSchema: yup.object().shape({
                name: yup.string().min(MIN_LENGTH.name).max(MAX_LENGTH.name),
                email: yup.string().email().min(MIN_LENGTH.email).max(MAX_LENGTH.email),
                city: yup.string().min(MIN_LENGTH.city).max(MAX_LENGTH.city),
                country: yup.string().min(MIN_LENGTH.country).max(MAX_LENGTH.country),
            })
        },
    },
}

export const getUser = {
    schema: {
        params: {
            yupSchema: yup.object().shape({
                id: yup.number().required(),
            })
        },
    },
}

export const removeUser = {
    schema: {
        params: {
            yupSchema: yup.object().shape({
                id: yup.number().required(),
            })
        },
    },
}

