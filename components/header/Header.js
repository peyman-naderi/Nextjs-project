import Logo from "./Logo"
import Menu from "./Menu"
import Search from "./SearchHeader"
import ShopHeader from "./ShopHeader"
import RegistrationButton from "./RegistrationButton"
import LoginButton from "./LoginButton"

 export default function Header() {
    return(
        <header>
            <div
             className="continer items-center pt-9 px-12 w-full justify-between" style={{
                backgroundImage: `url("/bg.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                color: "white",
                }}>
                    
                    <div className="flex justify-between ">
                        <div className="flex gap-x-16 items-center ">      
                            <Logo />
                            <Menu />
                        </div>
                        <div className="flex items-center">
                            <Search />
                            <ShopHeader />
                            <RegistrationButton />        
                            <LoginButton /> 
                        </div>
                    </div>

                </div>

            
        </header>
    )
}
