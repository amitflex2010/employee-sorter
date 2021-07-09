import "./error.css";

const ErrorPage = ({msg}) => (
    <div className="errormsg">Error Occured:{msg}
    <img src="./404.png"></img></div>
    
);

export default ErrorPage;