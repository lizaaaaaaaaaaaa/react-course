import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import IFormFields from "../models/IFormFields";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../validations/user.validator";
import registerNewUser from "../services/form.api.service";
import styles from "./FormComponent.module.css";

const FormComponent: FC = () => {
    const {handleSubmit, register, formState: {errors, isValid}} = useForm<IFormFields>(
        {mode: "onBlur", resolver: joiResolver(userValidator)}
    );

    const formDataHandler = (formData: IFormFields): void => {
        registerNewUser(formData).then(response => console.log(response))
    }
    return (
        <form onSubmit={handleSubmit(formDataHandler)} className={styles.form}>
            <label>
                <input type="text" placeholder={"Enter name..."} {...register("name")}/>
                <div>{errors.name && errors.name.message}</div>
            </label>
            <label>
                <input type="password" placeholder={"Enter password..."} {...register("password")}/>
                <div>{errors.password && errors.password.message}</div>
            </label>
            <label>
                <input type="number" placeholder={"Enter your age..."} {...register("age")}/>
                <div>{errors.age && errors.age.message}</div>
            </label>
            <button type={"submit"} disabled={!isValid}>Send!</button>
        </form>
    );
};

export default FormComponent;