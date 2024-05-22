import * as yup from 'yup';

const MIN_LENGTH = {
    name: 3,
    email: 3,
    city: 3,
    country: 3
};

const MAX_LENGTH = {
    name: 20,
    email: 50,
    city: 30,
    country: 15
};

/**
 * Validation schema for adding a new user.
 *
 * @property {object} schema - The schema object for request validation.
 * @property {object} schema.body - The validation schema for the request body.
 * @property {object} schema.body.yupSchema - The Yup validation schema for the body.
 */
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
};

/**
 * Validation schema for updating an existing user.
 *
 * @property {object} schema - The schema object for request validation.
 * @property {object} schema.params - The validation schema for the request parameters.
 * @property {object} schema.params.yupSchema - The Yup validation schema for the parameters.
 * @property {object} schema.body - The validation schema for the request body.
 * @property {object} schema.body.yupSchema - The Yup validation schema for the body.
 */
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
};

/**
 * Validation schema for retrieving a user by their ID.
 *
 * @property {object} schema - The schema object for request validation.
 * @property {object} schema.params - The validation schema for the request parameters.
 * @property {object} schema.params.yupSchema - The Yup validation schema for the parameters.
 */
export const getUser = {
    schema: {
        params: {
            yupSchema: yup.object().shape({
                id: yup.number().required(),
            })
        },
    },
};

/**
 * Validation schema for removing a user by their ID.
 *
 * @property {object} schema - The schema object for request validation.
 * @property {object} schema.params - The validation schema for the request parameters.
 * @property {object} schema.params.yupSchema - The Yup validation schema for the parameters.
 */
export const removeUser = {
    schema: {
        params: {
            yupSchema: yup.object().shape({
                id: yup.number().required(),
            })
        },
    },
};
