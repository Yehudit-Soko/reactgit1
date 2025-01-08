import { useNavigate } from "react-router-dom";
function Contact() {
    const navigate = useNavigate();
    const navigateToThank = () => {
        navigate('/ThankYou');
    }
    return (<>
        <h1>Contact us</h1>
        <button onClick={navigateToThank}> navigate to Thank</button>
    </>);
}
export default Contact;