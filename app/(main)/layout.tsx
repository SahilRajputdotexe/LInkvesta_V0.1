
import Footer from "@/components/Footer";
import { NavbarComponent } from "../../components/Navbar";

const MainLayout= async(
    {children}: {children: React.ReactNode}
    ) => {
    return (
        
        <div className=" bg-gradient-to-t from-black via-black to-black">
            <div className="flex flex-col   ">
                <NavbarComponent/>
            </div>
            <main className="py-[40px] w-full">
                {children}
            </main>
            
            <Footer/>
        </div>
        
    )
    }

export default MainLayout;