import { Formik, Form} from 'formik';
import { inputs } from '../data/inputs';
import { Button, FormLabel } from '@mui/material';
import {validate}from '../validation/validate';
import { useNavigate } from 'react-router-dom';
import InputField from './InputField';

const Signup = () => {
    const navigate = useNavigate();
    const handleSubmit = () =>{
        navigate('/weather')
    }

    return (
    <Formik
        initialValues={{
            firstName: '',
            lastName: '',
            password: '',
            email: ''
        }}
        onSubmit={handleSubmit}
        validationSchema={validate}
    >
        <Form>
            <FormLabel sx={{fontSize: '24px'}}>Sign up</FormLabel>
            {inputs.map(input => (
                <InputField key={input.id} {...input} />
            ))}
            <Button variant="contained" type='submit' className='submit-button'>Submit</Button>
        </Form>
    </Formik>
  )
}
export default Signup;