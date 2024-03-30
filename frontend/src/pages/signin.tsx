import Quote from "../components/quote"
import Auth from "../components/auth"
function SignIn(){
    return <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <Auth type = "signin"/>
            </div>
            <div className="hidden lg:block">
                <Quote />
            </div>
        </div>
    </div>
}
export default SignIn