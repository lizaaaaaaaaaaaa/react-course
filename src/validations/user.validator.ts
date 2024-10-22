import Joi from "joi";

export const userValidator = Joi.object(
    {
        name: Joi.string().pattern(/^[a-zA-Zа-яА-ЯіїєІЇЄґҐ]+(?:\s[a-zA-Zа-яА-ЯіїєІЇЄґҐ]+)*$/)
            .required().messages({
                "string.pattern.base": "firstName must contain only letters and spaces!",
                "any.required": "This field is required!",
                "string.empty": "This filed cannot be empty!"
            }),
        password: Joi.string().min(7).max(16).pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/).required().messages({
            "string.min": "Password must contain at least 7 characters!",
            "string.max": "Password cannot be longer than 16 characters!",
            "string.pattern.base": "Password must contain at least one letter and one number!",
            "any.required": "This field is required!",
            "string.empty": "This filed cannot be empty!"
        }),
        age: Joi.number().min(1).max(120).required().messages({
            "number.min": "You lie!",
            "number.max": "It cannot be real!",
            "any.required": "This field is required!",
            "number.empty": "This filed cannot be empty!"
        })
    }
);