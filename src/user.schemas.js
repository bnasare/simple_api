import * as yup from 'yup'

export const addUserSchema = {
    schema: {
        body: {
            yupSchema: yup.object().shape({
                name: yup.string(),
                email: yup.string().email(),
                city: yup.string(),
                country: yup.string()
            })
        },
    },
}

export const updateUserSchema = {
    schema: {
        body: {
            yupSchema: yup.object().shape({
                name: yup.string(),
                email: yup.string().email(),
                city: yup.string(),
                country: yup.string()
            })
        },
    },
}
