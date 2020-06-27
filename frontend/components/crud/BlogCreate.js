import Link from 'next/link';
import { useEffect, useState } from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import { getCookie, isAuth } from '../../actions/auth';
import { getCategories } from '../../actions/category';
import { getTags } from '../../actions/tag';
import { createBlog } from '../../actions/blog';
const ReactQuill = dynamic(()=> import('react-quill'), {ssr:false});
import '../../node_modules/react-quill/dist/quill.snow.css';

const CreateBlog = ({router}) => {
    //create state
    const [body, setBody] = useState({});
    const [values, setValues] = useState({
        error: '',
        sizeError:'',
        success: '',
        formData: '',
        title: '',
        hidePublishButton: false
    });

    //ddestructure
    const {error, sizeError, success, formData, title, hidePublishButton} = values;


    const publishBlog = (e) => {
        e.preventDefault();
        console.log('Ready to publish blog');
    };

    const handleChange = name => e => {
        console.log(e.target.value);
    };

    const handleBody = e => {
        console.log(e);
    };


    const createBlogForm =() => {
        return (
            <form onSubmit={publishBlog}>
                <div className = "form-group">
                    <lable className = "text-muted"> Title</lable>
                    <input type="text" className="form-control" value = {title} onChange={handleChange('title')}/>
                </div>

                <div className = "form-group">
                    <ReactQuill value = {body} placeholder="Write something amazing..." onChange={handleBody}/>
                </div>

                <div>
                    <button type="submit" className="btn btn-primary">
                        publish
                    </button>
                </div>

            </form>
        );
    };


    return (
        <div>
            {createBlogForm()}
        </div>
    );
};

export default withRouter(CreateBlog);