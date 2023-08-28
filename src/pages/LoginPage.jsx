import image_login from '../assets/images/login_page_img.png'
import '../assets/styles/LoginPage.css'
import {SuccessCard, ErrorCard} from '../components/loginPage/Cards.jsx'
function LoginPage (){
    return(
        <>
            <div className="main">
                <div className="login-page">
                    <div className="banner-page">
                        <img src={image_login} alt=""/>
                    </div>
                    <div className="login-control">
                        <h1>checking resume</h1>
                        <button>Login</button>
                        <div className="response-login">
                            {/*<ErrorCard text={"Login error! Wrong mail format"} />*/}
                            <SuccessCard text={"Login Successfully"} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LoginPage