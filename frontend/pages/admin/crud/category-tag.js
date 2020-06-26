import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import Link from 'next/link'

const CategoryTag = () => {
    return (
        <Layout>
            <Admin className = "container-fluid">
                <div className = "row">
                    <div className="col-md-12 pt-5 pb-5">
                        <h2> Manage Category and Tags </h2> 
                    </div>
                    <div className="col-md-4">
                        <p>Categories</p>
                    </div>
                    <div className="col-md-8">
                        <p>Tag</p>
                    </div>
                </div>
            </Admin>
        </Layout>
    );
};

export default CategoryTag;