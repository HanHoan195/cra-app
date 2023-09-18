import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const registerSchema = yup.object({
    username: yup.string()
        .required("Username không được để trống!")
        .min(5, "Tên từ 5 ký tự")
        .max(30, "Tên không được vượt quá 30 ký tự"),
    email: yup.string()
        .required()
        .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Email không hợp lệ"),
    password: yup.string()
        .required("Mật khẩu không được để trống")
        .min(8),
    confirmPassword: yup.string()
        .required()
        .min(8)
        .oneOf([yup.ref("password")], "Password không trùng khớp"),
    age: yup.number()
        .required()
        .positive()
        .max(40)
        .typeError("quá tuổi rồi") //ngoại lệ
})

const Register = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(registerSchema)
    })

    const handleRegister = (values) => {
        console.log(values);
    }


    return (
        <div className="container d-flex justify-content-center mt-3">
            <div className="row col-md-6 rounded">
                <h3 className="fw-bolder text-center-mt-5">Register</h3>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <div className="form-group mb-3">
                        <label className="label-form mt-1">User Name</label>
                        <input type="text" className="form-control" {...register('username')} />
                        <span className="text-danger" >{errors?.username?.message}</span>
                    </div>
                    <div className="form-group mb-3">
                        <label className="label-form mt-1">Email</label>
                        <input type="email" className="form-control"  {...register('email')} />
                        <span className="text-danger" >{errors?.email?.message}</span>
                    </div>
                    <div className="form-group mb-3">
                        <label className="label-form mt-1">Age</label>
                        <input type="text" className="form-control"  {...register('age')} />
                        <span className="text-danger" >{errors?.age?.message}</span>
                    </div>
                    <div className="form-group mb-3" >
                        <label className="label-form mt-1">Password</label>
                        <input type="password" className="form-control" {...register('password')} />
                        <span className="text-danger" >{errors?.password?.message}</span>
                    </div>
                    <div className="form-group mb-3">
                        <label className="label-form mt-1">Confirm Password</label>
                        <input type="password" className="form-control"  {...register('confirmPassword')} />
                        <span className="text-danger" >{errors?.confirmPassword?.message}</span>
                    </div>
                    <div className="form-group mb3 d-flex justify-content-center">
                        <button type="submit" className="btn btn-outline-primary me-2">Register</button>
                        <button type="submit" className="btn btn-outline-danger"
                            onClick={() => reset()}
                        >Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;