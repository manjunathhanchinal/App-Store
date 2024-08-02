import { useFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';




function AddApp(){
    const navigate = useNavigate();
    const formik = useFormik(
        {
            initialValues: {
                image:'',
                name:'',
                description:'',
                release_date:'',
                version:'',
                ratings:'',
                genre:'',
            },
            validationSchema: Yup.object({
                image: Yup.string().required('Image URL is required'),
                name: Yup.string().required('App name is required'),
                description: Yup.string().min(3,'Description should be atleast 3 characters').required('Description is required'),
                release_date: Yup.date().required('Release date is required'),
                version: Yup.number().min(1,'Version must be greater than 0').required('Seats is required'),
                ratings: Yup.number().min(0,'Enter valid ratings').required('Ratings is required'),
                genre: Yup.string().min(2,'Genre should be atleast 3 characters').required('Genre is required'),


            })
            ,
            onSubmit:(values , {setSubmitting, resetForm , setStatus})=> {
                axios.post('http://localhost:5000/applications',values)
                    .then(response => {
                        setStatus('success');
                        resetForm();
                        navigate('/applicationlist');
                    })
                    .catch(error => {
                        setStatus('error');
                    })
                    .finally(()=>{
                        setSubmitting(false);
                    });
            },
        });




    return (
        <div className='container mt-4'>
            <h2>Add New App</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='image' className='form-label'>Image URL</label>
                    <input
                        id="image"
                        name="image"
                        type="text"
                        className='form-control'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.image}
                        data-testid="image"
                    />


                    {
                        formik.touched.image && formik.errors.image ? <div className='text-danger'>{formik.errors.image}</div>
                        : null


                    }  
                </div>




                <div className='mb-3'>
                    <label htmlFor='name' className='form-label'>Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className='form-control'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        data-testid="name"
                    />


                    {
                        formik.touched.name && formik.errors.name ? <div className='text-danger'>{formik.errors.name}</div>
                        : null


                    }  
                </div>




                <div className='mb-3'>
                    <label htmlFor='description' className='form-label'>Description</label>
                    <input
                        id="description"
                        name="description"
                        type="text"
                        className='form-control'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description}
                        data-testid="description"
                    />


                    {
                        formik.touched.description && formik.errors.description ? <div className='text-danger'>{formik.errors.description}</div>
                        : null


                    }  
                </div>




                <div className='mb-3'>
                    <label htmlFor='release_date' className='form-label'>Release date</label>
                    <input
                        id="release_date"
                        name="release_date"
                        type="date"
                        className='form-control'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}


                        value={formik.values.release_date}
                        data-testid="release_date"
                    />


                    {
                        formik.touched.release_date && formik.errors.release_date ? <div className='text-danger'>{formik.errors.release_date}</div>
                        : null


                    }  
                </div>




                <div className='mb-3'>
                    <label htmlFor='version' className='form-label'>Version</label>
                    <input
                        id="version"
                        name="version"
                        type="number"
                        className='form-control'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.version}
                        data-testid="version"
                    />


                    {
                        formik.touched.version && formik.errors.version ? <div className='text-danger'>{formik.errors.version}</div>
                        : null


                    }  
                </div>




                <div className='mb-3'>
                    <label htmlFor='ratings' className='form-label'>Ratings</label>
                    <input
                        id="ratings"
                        name="ratings"
                        type="number"
                        className='form-control'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.ratings}
                        data-testid="ratings"
                    />


                    {
                        formik.touched.ratings && formik.errors.ratings ? <div className='text-danger'>{formik.errors.ratings}</div>
                        : null


                    }  
                </div>




                <div className='mb-3'>
                    <label htmlFor='genre' className='form-label'>Genre</label>
                    <input
                        id="genre"
                        name="genre"
                        type="text"
                        className='form-control'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.genre}
                        data-testid="genre"
                    />


                    {
                        formik.touched.genre && formik.errors.genre ? <div className='text-danger'>{formik.errors.genre}</div>
                        : null


                    }  
                </div>










                <button  type='submit' className='btn btn-primary' disabled={formik.isSubmitting}>
                    Add
                </button>




                {
                    formik.status && formik.status ===  'success' && (
                        <span data-testid='response' className='text-success' >Success</span>
                    )
                }


                {
                    formik.status && formik.status ===  'error' && (
                        <span data-testid='response' className='text-danger' >Error</span>
                    )


                }




            </form>
        </div>
    )
}


export default AddApp;
