import Layout from '../components/Layout';
import SigninComponent from '../components/auth/SigninComponent';

const Signin = () => {
    return (
        <Layout>
            <h2 className="text-center pt-4 pb-4"> Sign in </h2>
            <div className = "col-md-8 offset-md-2">
            <SigninComponent />
            </div>
        </Layout>
    );
};

export default Signin;