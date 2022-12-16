import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";


export function ValidationComponent(){
    const [cityError, setCityError] = useState('');
    function CityChange(e){
       if(e.target.value=="-1"){
        setCityError("Please Select Your City");
       } else {
        setCityError("");
       }
    }
    return(
        <div className="container-fluid">
            <Formik
              initialValues={
                {
                    UserName: '',
                    Age: '',
                    Mobile: '',
                    City: ''
                }
              }
              validationSchema= {
                yup.object({
                    UserName: yup.string().required("User Name Required").min(4,"Name too short").max(10,"Name too Long"),
                    Age: yup.number().required("Age Required"),
                    Mobile: yup.string().matches(/\+91\d{10}/,"Invalid Mobile").required("Mobile Required"),

                })
              }
              onSubmit = {
                (values)=> {
                    alert(JSON.stringify(values));
                }
              }
            >
                {
                    <Form>
                        <h2>Register New User</h2>
                        <dl>
                            <dt>User Name</dt>
                            <dd><Field type="text" name="UserName" /></dd>
                            <dd className="text-danger"><ErrorMessage name="UserName" /></dd>
                            <dt>Age</dt>
                            <dd><Field type="text" name="Age" /></dd>
                            <dd className="text-danger"><ErrorMessage name="Age"/></dd>
                            <dt>Mobile</dt>
                            <dd><Field type="text" name="Mobile" /></dd>
                            <dd className="text-danger"><ErrorMessage name="Mobile"/></dd>
                            <dt>City</dt>
                            <dd>
                                <select onChange={CityChange} name="City">
                                    <option value="-1">Select Your City</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Hyd">Hyd</option>
                                </select>
                            </dd>
                            <dd className="text-danger">{cityError}</dd>
                        </dl>
                        <button>Register</button>
                    </Form>
                }

            </Formik>
        </div>
    )
}