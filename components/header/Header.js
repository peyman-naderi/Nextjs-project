import Logo from "./Logo"
import Menu from "./Menu"
import Search from "./SearchHeader"
import ShopHeader from "./ShopHeader"

 export default function Header() {
    return(
        <header className="mx-auto">
            <div
             className="continer justify-between" style={{
                backgroundImage: `url("/bg.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                color: "white",
                }}>
                    
                    <div className="flex justify-between pt-9">
                        <div className="flex items-center ">      
                            <Logo />
                            <Menu />
                        </div>
                        <div className="flex gap-x-3">
                            <Search />
                            <ShopHeader />
                        </div>
                    </div>

                </div>

            
        </header>
    )
}
