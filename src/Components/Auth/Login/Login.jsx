import React, { useEffect, useState } from 'react'
import './Login.css'
import { useForm } from 'react-hook-form';
import saudi from '../../../assets/saudi-arabia.png'
import { Link, useNavigate } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import { useTranslation } from 'react-i18next';


function Login() {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const { t, i18n } = useTranslation();


    // show pass function
    const [passType, setPassType] = useState("password");
    const togglePassword = () => {
        if (passType === "password") {
            setPassType("text");
            return;
        }
        setPassType("password");
    };




    // form validation
    const { register,
        handleSubmit,
        // reset,
        // formState,
        watch,
        formState: { errors } } = useForm({
            defaultValues: {
                email: '',
                password: '',
            }
        });
    const password = watch("password", "")


    // sign up function
    const loginApiFunc = async (data) => {
        setLoading(true);
        try {
            const response = await fetch('register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const res = await response.json()

            if (response.ok) {
                setLoading(false);
                navigate('/login')

            } else if (response.status === 400) {
                setLoading(false);
            }
            else {
                setLoading(false)
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    return (
        <div className='sign-up login'>
            <div className="form-cover">

                <div className={`left-side ${i18n.language === 'en' ? 'in-en' : ''}`}>
                    <form action="" onSubmit={handleSubmit(loginApiFunc)}>
                        <h2>{t('login')}</h2>

                        <div className={`in-div`}>
                            <label htmlFor="">{t('email')}<span>*</span></label>
                            <input type="text" name="" id="" placeholder={`${i18n.language === 'en' ? 'email' : 'البريد الالكتروني'}`}
                                {...register('email', {
                                    required: 'يجب ملئ هذا الحقل',
                                })} />

                            {errors.email ? <p className="in-error">{errors.email?.message}</p> : ''}

                        </div>

                        <div className="in-div">
                            <label htmlFor="">{t('password')}<span>*</span></label>
                            <div className="pass-in">
                                <input type={passType} name="" id="" placeholder={`${i18n.language === 'en' ? 'password' : 'كلمة السر'}`}
                                    {...register('password', {
                                        required: 'يجب ملئ هذا الحقل',
                                        minLength: {
                                            value: 8,
                                            message: 'يجب ادخال علي الاقل 8 قيم'
                                        }
                                    })} />
                                {passType === "password" ? (
                                    <i className="bi bi-eye pass-icon" onClick={togglePassword}></i>
                                ) : (
                                    <i className="bi bi-eye-slash" onClick={togglePassword}></i>
                                )}
                            </div>
                            {errors.password ? <p className="in-error">{errors.password?.message}</p> : ''}
                        </div>

                        <div className="sub">
                            <button type='submit'>{loading ? <HashLoader color="#ffffff" size={40} /> : `${t('login')}`}</button>
                        </div>


                        <div className="to-login">
                            <span>{t('no-account')}</span>
                            <Link to={"/sign-up"}>{t('sign-up')}</Link>
                        </div>
                    </form>
                </div>

                <div className="right-side">
                    <h2>Logo</h2>
                    <p>welcom to my website</p>
                </div>
            </div>
        </div>
    )
}

export default Login
