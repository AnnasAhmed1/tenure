import  { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import * as yup from 'yup';
import { useFormik } from 'formik';

export default function Settings() {
  const filterByCategory = (category: string) => {
    setSelectedCategory(category);
  };
  const [selectedCategory, setSelectedCategory] = useState('accountSetting'); //child
  const [accDivShown, setAccDivShown] = useState(true)
  const [passDivShown, setPassDivShown] = useState(false)
  const [editInfoFormShown, setEditInfoFormShown] = useState(false)
  const [InfoFormShown, setInfoFormShown] = useState(true)
 
  const companySize = [
    { value: 10, label: '1-20' },
    { value: 40, label: '21-40' },
    { value: 60, label: '41-60' },
    { value: 80, label: '61-80' },
    { value: 99, label: '81-99' },
    { value: 110, label: '100+' },
  ];


  let EditInfo = () => {
    setEditInfoFormShown(true)
    setInfoFormShown(false)
  }
  let info = () => {
    setEditInfoFormShown(false)
    setInfoFormShown(true)
  }
  const accSett = () => {
    filterByCategory('accountSetting')
    setAccDivShown(true)
    setPassDivShown(false)

  }
  const passSett = () => {
    filterByCategory('passwordSetting')
    setPassDivShown(true)
    setAccDivShown(false)

  }


  const [typePassword1, setTypePassword1] = useState('password');
  const [typePassword2, setTypePassword2] = useState('password');
  const [typePassword3, setTypePassword3] = useState('password');


  const togglePassword1 = () => {
    setTypePassword1((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };
  const togglePassword2 = () => {
    setTypePassword2((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };
  const togglePassword3 = () => {
    setTypePassword3((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };


  const formik = useFormik({
    initialValues: {
    name:'',
      email: '',
      role: '',
      companyName: '',
      companySize: '',
    },
    validationSchema: yup.object().shape({
      name: yup.string().required('This field is required'),
      email: yup.string().required('This field is required'),
      role: yup.string().required('This field is required'),
      companyName: yup.string().required('This field is required'),
      companySize: yup.string().required('This field is required'),
    }),
    onSubmit: () => {
      info()
    },
  });
  const formik2 = useFormik({
    initialValues: {
    currentPass:'',
      newPass: '',
      rePass: '',

    },
    validationSchema: yup.object().shape({
      currentPass: yup.string().required('This field is required'),
      newPass: yup.string().required('This field is required'),
      rePass: yup.string().required('This field is required'),

    }),
    onSubmit: () => {
      info()
    },
  });
  return (

      <div className='w-full h-min-screen ms-9 h-full '>
        <div className='flex items-center justify-between text-start  mt-5'>
          <h1>Settings</h1>

        </div>
        <div className="flex h-full w-full">
          <div className='h-full mt-6' style={{ boxShadow: 'rgb(197 197 197 / 22%) 12px 3px 10px', width: "100%", minWidth: "250px", maxWidth: "330px" }}>
            <a onClick={accSett} className={`${selectedCategory === 'accountSetting'
              ? 'bg-yellow-400 text-white'
              : 'hover:bg-yellow-400 hover:text-white'
            } mb-2 cursor-pointer py-2 px-3 flex justify-between`} style={{ color: "#5A7894" }}><div className="flex justify-center flex-row "><img src="assets/icons/user.svg" className='mr-2' alt="" />Account Setting </div><img src="assets/icons/chevron_right.svg"  alt="" style={{width: "17px"}} /></a>
            <a onClick={passSett} className={`${selectedCategory === 'passwordSetting'
              ? 'bg-yellow-400 text-white'
              : 'hover:bg-yellow-400 hover:text-white'
            } mb-2 cursor-pointer py-2 px-3 flex justify-between`} style={{ color: "#5A7894" }}><div className="flex justify-center flex-row "><img src="assets/icons/password.svg" className='mr-2' alt="" />Change password </div>  <img src="assets/icons/chevron_right.svg"  alt="" style={{width: "17px"}} /></a>
            <a className={`${selectedCategory === 'customerSupport'
              ? 'bg-yellow-400 text-white'
              : 'hover:bg-yellow-400 hover:text-white'
              } mb-2 cursor-pointer py-2 px-3 flex justify-between`} style={{ color: "#5A7894" }}><div className="flex justify-center flex-row "><img src="assets/icons/contact_support.svg" className='mr-2' alt="" />Contact support </div><img src="assets/icons/chevron_right.svg"  alt="" style={{width: "17px"}} /></a>
          </div>

          {accDivShown && <div className='ml-10 mt-8 w-full' style={{ color: "#5A7894" }}>
            <div className="flex w-11/12 justify-between">
              <h4 className='text-xl text-black'>Account Info</h4>
              <button onClick={EditInfo} className='flex  p-2 rounded-lg' style={{ border: "1px solid #38857b", color: "#38857b", fontWeight: "700" }}><img src="assets/icons/edit.svg" className='mr-2' alt="" />Edit Account Info</button>
            </div>
            {InfoFormShown && <>
            <div className='flex mt-12  w-9/12 justify-between'>
              <div className='flex flex-col'>
                <h6 className='font-bold text-lg text-start'>Full name</h6>
                <p className='text-sm font-bold my-5 text-start'>John Doe</p>
              </div>
              <div className='flex flex-col'>
                <h6 className='font-bold text-lg text-start'>Email</h6>
                <p className='text-sm font-bold my-5'>Johndoe@gmail.com</p>
              </div>
              <div className='flex flex-col'>
                <h6 className='font-bold text-lg text-start'>Role</h6>
                <p className='text-sm font-bold my-5'>Human Resources manager</p>
              </div>
            </div>
              <div className="flex mt-10 justify-between w-5/12 ">
                <div className='flex flex-col'>
                  <h6 className='font-bold text-lg text-start w-1/5'>Company name</h6>
                  <p className='text-sm font-bold my-5 text-start'>Tenure</p>
                </div>
                <div className='flex flex-col ml-8'>
                  <h6 className='font-bold text-lg text-start'>No of Employees</h6>
                  <p className='text-sm font-bold my-5 text-start'>1-20</p>
                </div>
              </div></>}
            {editInfoFormShown && 
            <form className='flex mt-12 justify-between w-5/6' onSubmit={formik.handleSubmit}>
              <div className="flex flex-col w-full text-start" style={{ color: "#25384D" }}>
                <h4 className='mb-4'>Full name</h4>

                <TextField 
                    label="Enter Name" sx={{ marginY: 2 }}
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={{ border: formik.touched.name && formik.errors.name ? '1px solid red' : '' }}
                      >
                      </TextField>
                      {formik.touched.name && formik.errors.name ? (
                        <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">{formik.errors.name}</div>
                    ) : null}
                <h4 className='mb-4'>Email</h4>

                <TextField 
                    label="Enter Name" sx={{ marginY: 2 }}
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={{ border: formik.touched.email && formik.errors.email ? '1px solid red' : '' }}
                      >
                      </TextField>
                      {formik.touched.email && formik.errors.email ? (
                        <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">{formik.errors.email}</div>
                    ) : null}

                <h4 className='mb-4'>Role</h4>

                <TextField 
                    label="Enter Name" sx={{ marginY: 2 }}
                    name="role"
                    value={formik.values.role}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={{ border: formik.touched.role && formik.errors.role ? '1px solid red' : '' }}
                      >
                      </TextField>
                      {formik.touched.role && formik.errors.role ? (
                        <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">{formik.errors.role}</div>
                    ) : null}

                <h4 className='mb-4'>Company Name</h4>

                <TextField 
                    label="Enter Name" sx={{ marginY: 2 }}
                    name="companyName"
                    value={formik.values.companyName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={{ border: formik.touched.companyName && formik.errors.companyName ? '1px solid red' : '' }}
                      >
                      </TextField>
                      {formik.touched.companyName && formik.errors.companyName ? (
                        <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">{formik.errors.companyName}</div>
                    ) : null}

                <h4 className='mb-4'>Company Size</h4>
                <Box sx={{ width: 1 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Company Size</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.companySize}
                      name="companySize" 
                      renderValue={(selected) => selected as string}
                      style={{ border: formik.touched.companySize && formik.errors.companySize ? '1px solid red' : '' }}
                    >

                      {companySize.map((e)=>{
                         return <MenuItem value={e.value}>{e.label}</MenuItem>
                      })}
                     
                    </Select>
                  </FormControl>
                  {formik.touched.companySize && formik.errors.companySize ? (
                          <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">{formik.errors.companySize}</div>
                      ) : null}
                </Box>

                <div className='flex justify-end mt-5'>
                  <button className='p-2 rounded-md cursor-pointer mx-2' onClick={info} style={{ border: "1px solid #38857B", color: "#38857B", fontWeight: "600" }}>Cancel</button>
                  <button type='submit' className='p-2 rounded-md cursor-pointer' style={{ backgroundColor: "#38857B", color: "white", fontWeight: "600" }}>Save changes</button>
                </div>
              </div>

            </form>}
          </div>}
          {passDivShown && 
                      <div className='w-full text-start'>
                      <h1 className='w-11/12 m-auto'>Change Password</h1><div className='flex mt-12 justify-between w-full'>
            <form className="flex flex-col w-11/12 m-auto text-start" style={{ color: "#25384D" }} onSubmit={formik2.handleSubmit}>
            <TextField 
            type={typePassword1} label="Enter Current Password" sx={{ marginTop: 2 }}
            name='currentPass'
            value={formik2.values.currentPass}
            onChange={formik2.handleChange}
            onBlur={formik2.handleBlur}
            style={{ border: formik2.touched.currentPass && formik2.errors.currentPass ? '1px solid red' : '' }}
              >
              </TextField>
              {formik2.touched.currentPass && formik2.errors.currentPass ? (
                <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">{formik2.errors.currentPass}</div>
            ) : null}

              {/* <input type={typePassword} style={{ border: "2px solid #8AAEC9" }} className='my-2 rounded-lg' /> */}
              <button type="button" className='relative w-fit' style={{left:'97%',transform:'translateY(-40px)'}} onClick={togglePassword1}>
                {typePassword1 === 'password' ? (
                  <img alt="eye" src="assets/icons/eye_closed.svg" />
                ) : (
                  <img alt="eye" src="assets/icons/eye_open.svg" />
                )}
              </button>
            
              {/* <input type={typePassword} style={{ border: "2px solid #8AAEC9" }} className='my-2 rounded-lg' /> */}
              <TextField 
              type={typePassword2} label="Enter New Password" sx={{ marginTop: 2 }} 
              name='newPass'
              value={formik2.values.newPass}
              onChange={formik2.handleChange}
              onBlur={formik2.handleBlur}
              style={{ border: formik2.touched.newPass && formik2.errors.newPass ? '1px solid red' : '' }}
                >
                </TextField>
                {formik2.touched.newPass && formik2.errors.newPass ? (
                  <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">{formik2.errors.newPass}</div>
              ) : null}
              <button type="button" className='relative w-fit' style={{left:'97%',transform:'translateY(-40px)'}} onClick={togglePassword2}>
                {typePassword2 === 'password' ? (
                  <img alt="eye" src="assets/icons/eye_closed.svg" />
                ) : (
                  <img alt="eye" src="assets/icons/eye_open.svg" />
                )}
              </button>

              <TextField 
              type={typePassword3} label="Re-enter New Password" sx={{ marginTop: 2 }}
              name='rePass'
              value={formik2.values.rePass}
              onChange={formik2.handleChange}
              onBlur={formik2.handleBlur}
              style={{ border: formik2.touched.rePass && formik2.errors.rePass ? '1px solid red' : '' }}
                >
                </TextField>
                {formik2.touched.rePass && formik2.errors.rePass ? (
                  <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">{formik2.errors.rePass}</div>
              ) : null}
              <button type="button" className='relative w-max' style={{left:'97%',transform:'translateY(-40px)'}} onClick={togglePassword3}>
                {typePassword3 === 'password' ? (
                  <img alt="eye" src="assets/icons/eye_closed.svg" />
                ) : (
                  <img alt="eye" src="assets/icons/eye_open.svg" />
                )}
              </button>

              <div className='flex justify-end mt-5'>
                <button className='p-2 rounded-md cursor-pointer mx-2' onClick={info} style={{ border: "1px solid #38857B", color: "#38857B", fontWeight: "600" }}>Cancel</button>
                <button className='p-2 rounded-md cursor-pointer' onClick={info} style={{ backgroundColor: "#38857B", color: "white", fontWeight: "600" }}>Save changes</button>
              </div>
            </form>

          </div>
          </div>}

        </div>

      </div>

  )
}