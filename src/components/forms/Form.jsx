const FormView = ({children, submitText, handleSubmit, setShowForm}) => {
    return (
        <>
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                    <h3 className="text-2xl font-semibold mb-4">
                        Add New City
                    </h3>
                    <form onSubmit={handleSubmit}>
                        {children}
                        <div className="flex justify-end">
                            <button
                                type="button"
                                onClick={() => setShowForm(false)}
                                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                            >
                                {submitText}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
export default FormView;
