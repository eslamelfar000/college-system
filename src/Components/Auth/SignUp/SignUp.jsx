import React, { useEffect, useState } from 'react'
import './SignUp.css'
import { useForm } from 'react-hook-form';
import saudi from '../../../assets/saudi-arabia.png'
import { Link, useNavigate } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import { useTranslation } from 'react-i18next';



function SignUp() {

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


    // option function
    const [options, setOptions] = useState([])

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;

        if (selectedValue === 'كلية العلوم الادارية والمالية') {
            setOptions([
                'إدارة الأعمال',
                'تجارة إلكترونية',
                'محاسبة',
                'مالية'
            ])
        } else if (selectedValue === 'كلية الحوسبة المعلوماتية') {
            setOptions([
                'تقنية المعلومات',
                'علوم الحاسب',
                'علوم البيانات'
            ]);
        } else if (selectedValue === 'كلية العلوم الصحية') {
            setOptions([
                'الصحة العامة',
                'المعلوماتية الصحية'
            ]);
        } else if (selectedValue === 'كلية العلوم والدراسات النظرية') {
            setOptions([
                'القانون',
                'إلاعلام الرقمي',
                'اللغة الإنجليزية والترجمة'
            ]);
        } else {
            setOptions([]);
        }
    };


    // form validation
    const { register,
        handleSubmit,
        // reset,
        // formState,
        watch,
        formState: { errors } } = useForm({
            defaultValues: {
                name: '',
                number: '',
                email: '',
                university: '',
                college: '',
                department: '',
                password: '',
                confirm_password: '',

            }
        });
    const password = watch("password", "")


    // sign up function
    const SignUpApiFunc = async (data) => {
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
        <div className='sign-up'>
            <div className="form-cover">

                <div className={`left-side ${i18n.language === 'en' ? 'in-en' : ''}`}>
                    <form action="" onSubmit={handleSubmit(SignUpApiFunc)}>
                        <h2>انشاء حساب جديد</h2>

                        <div className="in-div">
                            <label htmlFor="">{t('name')}<span>*</span></label>
                            <input type="text" name="" id="" placeholder={`${i18n.language === 'en' ? 'name' : 'الاسم'}`}
                                {...register('name', {
                                    required: 'يجب ملئ هذا الحقل',
                                })} />

                            {errors.name ? <p className="in-error">{errors.name?.message}</p> : ''}
                        </div>
                        <div className="in-div">
                            <label htmlFor="">{t('phone')}<span>*</span></label>
                            <div className="in-num">
                                <input type="text" inputMode='numeric' maxLength={9} placeholder={`${i18n.language === 'en' ? 'phone number' : 'رقم الجوال'}`}
                                    {...register('number', {
                                        required: 'يجب ملئ هذا الحقل',
                                        maxLength: {
                                            value: 9,
                                            message: 'يجب ان يكون 9 رقم فقط'
                                        },
                                        pattern: {
                                            value: /^[0-9]*$/,
                                            message: 'يجب إدخال أرقام فقط'
                                        }
                                    })} />
                                {
                                    i18n.language === 'en' ? (
                                        <span>
                                            <img src={saudi} alt="" /> +966
                                        </span>
                                    ) : (
                                        <span>
                                            966+ <img src={saudi} alt="" />
                                        </span>
                                    )
                                }
                            </div>

                            {errors.number ? <p className="in-error">{errors.number?.message}</p> : ''}
                        </div>
                        <div className="in-div">
                            <label htmlFor="">{t('email')}<span>*</span></label>
                            <input type="text" name="" id="" placeholder={`${i18n.language === 'en' ? 'email' : 'البريد الالكتروني'}`}
                                {...register('email', {
                                    required: 'يجب ملئ هذا الحقل',
                                })} />

                            {errors.email ? <p className="in-error">{errors.email?.message}</p> : ''}

                        </div>
                        <div className="in-div">
                            <label htmlFor="">{t('university')}<span>*</span></label>
                            <select
                            // {...register('university', {
                            //     required: 'يجب اختيار الجامعة',
                            //     validate: (value) => value !== 'اختر الجامعة' || "يجب اختيار الجامعة",
                            // },)}
                            >
                                <option hidden>
                                    {i18n.language === 'en' ? (
                                        'select university'
                                    ) : (
                                        'اختر الجامعة'
                                    )}
                                </option>
                                <option value="الجامعة السعودية الالكتورنية">الجامعة السعودية الالكتورنية</option>
                            </select>
                            {errors.university ? <p className="in-error">{errors.university?.message}</p> : ''}
                        </div>
                        <div className="in-div">
                            <label htmlFor="">{t('college')}<span>*</span></label>
                            <select onChange={handleSelectChange}
                            // {...register('college', {
                            //     required: 'يجب اختيار الكلية',
                            //     validate: (value) => value !== 'اختر الكلية' || "يجب اختيار الكلية",
                            // })}
                            >
                                <option hidden>
                                    {i18n.language === 'en' ? (
                                        'select college'
                                    ) : (
                                        'اختر الكلية'
                                    )}
                                </option>
                                <option value="كلية العلوم الادارية والمالية">كلية العلوم الادارية والمالية</option>
                                <option value="كلية الحوسبة المعلوماتية">كلية الحوسبة المعلوماتية</option>
                                <option value="كلية العلوم الصحية">كلية العلوم الصحية</option>
                                <option value="كلية العلوم والدراسات النظرية">كلية العلوم والدراسات النظرية</option>
                            </select>
                            {errors.college ? <p className="in-error">{errors.college?.message}</p> : ''}
                        </div>
                        <div className="in-div">
                            <label htmlFor="">{t('department')}<span>*</span></label>
                            <select
                            // {...register('department', {
                            //     required: 'يجب اختيار التخصص',
                            //     validate: (value) => value !== 'اختر التخصص' || "يجب اختيار التخصص",
                            // })}
                            >
                                <option hidden>
                                    {i18n.language === 'en' ? (
                                        'select department'
                                    ) : (
                                        'اختر التخصص'
                                    )}
                                </option>
                                {options && options.length === 0 ? <option value='' disabled>يجب اختبار الكلية اولا</option> : ''}
                                {options.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                            {errors.department ? <p className="in-error">{errors.department?.message}</p> : ''}
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
                        <div className="in-div">
                            <label htmlFor="">{t('confirm')}<span>*</span></label>
                            <input type={passType} name="" id="" placeholder={`${i18n.language === 'en' ? 'confirm password' : 'تأكيد كلمة السر'}`}
                                {...register('confirm_password', {
                                    required: 'يجب ملئ هذا الحقل',
                                    minLength: {
                                        value: 8,
                                        message: 'يجب ادخال علي الاقل 8 قيم'
                                    },
                                    validate: (value) => value === password || "يجب أن تكون كلمة السر متطابقة",
                                })} />
                            {errors.confirm_password ? <p className="in-error">{errors.confirm_password?.message}</p> : ''}

                        </div>


                        <div className="sub">
                            <button type='submit'>{loading ? <HashLoader color="#ffffff" size={40} /> : `${t('sign-up')}`}</button>
                        </div>


                        <div className="to-login">
                            <span>{t('have-account')}</span>
                            <Link to={"/login"}>{t('login')}</Link>
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

export default SignUp
