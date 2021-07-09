import "./error.css";

const ErrorPage = ({msg}) => (
    <div className="errormsg">Error Occured:{msg}
    <img alt="404" src="./404.png"></img></div>
    
);

export default ErrorPage;