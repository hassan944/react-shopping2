import { useFormik } from "formik";
import * as yup from "yup";
import { string } from "yup/lib/locale";

export function YupValidation(){
       const formik = useFormik({
        initialValues: {
            UserName: '',
            Age: '',
            Mobile: ''
        },
        validationSchema: yup.object({
        UserName: yup.string()
                     .required("User Name Required")
                     .min(4,"Name Too Short..")
                     .max(10,"Name Too long.. "),
          Age : yup.number()
                   .required("Age required"),

           Mobile : yup.string() 
                       .matches(/\+91\d{10}/,"Invalid Mobile")
                       .required("Mobile requried")
        }),
        onSubmit : (values)=>{
            alert(JSON.stringify(values));
        }
       })
    return(
        <div className="conatiner-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h1>Register User</h1>
                <dl>
                    <dt>User Name</dt>
                    <dd><input name="UserName"  {...formik.getFieldProps("UserName")} type="text" /> </dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input name="Age" {...formik.getFieldProps("Age")} type="txet" /> </dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>Mobile</dt>
                    <dd><input name="Mobile" {...formik.getFieldProps("Mobile")} type="text" /> </dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                </dl>
                <button>Register</button>    
            </form>
        </div>
    )
}