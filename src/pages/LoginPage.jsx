import image_login from '../assets/images/login_page_img.png'
import '../assets/styles/LoginPage.css'
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
                    </div>
                </div>
            </div>

        </>
    )
}

export default LoginPage