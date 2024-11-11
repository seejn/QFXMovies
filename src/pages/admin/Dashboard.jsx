import Layout from "../../layouts/Admin/Layout";
const Dashboard = ()  => {
    return (
        <>
            <Layout>
                <h2 className="text-3xl font-semibold">Welcome to the Admin Dashboard</h2>
                <p className="mt-4">Use the sidebar to navigate between sections.</p>
            </Layout>
        </>
    );
}

export default Dashboard;