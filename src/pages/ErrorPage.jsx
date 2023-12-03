import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className="w-[100vw] h-[100vh] flex items-center justify-center">
            <div className="spacy-y-6">
                <h2 className="font-bold text-2xl text-center my-3">404 Not Found!</h2>
                <button onClick={() => navigate("/")} className="btn btn-primary">Back To Home Page</button>
            </div>
        </div>
    );
};

export default ErrorPage;