import Layout from '../components/Layout'
import SignupComponent from '../components/auth/SignupComponent';
import Link from 'next/link';

const Signup = () => {
    return (
        <Layout>
            <h2 className="text-center pt-4 pb-4"> Signup page </h2>
            <div className = "col-md-8 offset-md-2">
            <SignupComponent />
            </div>
        </Layout>
    );
};

export default Signup;

//using Link componet to avoid reload page, give much better user experience