import Link from "next/link";
import whatsapp from '../../images/whatsapp.jpg'; 
import facebook from '../../images/facebook.jpg';
import x from '../../images/x.jpg';
import me from '../../images/me.jpg';
import linkin from '../../images/linkedin.jpg';

const Hero = () => {
    return (
        <div>
            <section>
                <h2 className="bg-red-400 font-black text-2xl pl-32 border-6"> About Section</h2>
                <p className="p-9 bg-gradient-to-r from-sky-500 to-pink-500 text-black">
                    <b>Hello, This is Mohammad Onnaib, I am a Computer Science Graduate, working as a CCTV Camera operator in a private Company.</b>
                </p>
                <h2 className="bg-red-400 font-black text-2xl pl-32 border-6"> Contact Us</h2>
                <div className="p-9 bg-sky-500 text-black">
                <div className="flex items-center mt-4">
                        <img 
                            src={me.src} 
                            height="100"
                            width="100" 
                            alt="My Picture" 
                            className="rounded-full border-2 border-white"
                        />
                        <div className="ml-4">
                            <b>Mohammad Onnaib</b>
                        </div>
                    </div>
                    <br/>
                    <div className="flex items-center"> 
                        <img src={whatsapp.src} height="125" width="25" alt="Contact Us"/> 
                        <b className="ml-2">+92-3212107961</b>
                    </div>
                    <br/>
                    <div className="flex items-center"> 
                        <img src={facebook.src} height="125" width="25" alt="Contact Us"/>
                        <Link href="https://www.facebook.com/OnnaibRajChohan" target="_blank" rel="noopener noreferrer">
                            <b className="ml-2">facebook.com/OnnaibRajChohan</b>
                        </Link>
                    </div>
                    <br/>
                    <div className="flex items-center"> 
                        <img src={x.src} height="125" width="25" alt="Contact Us"/>
                        <Link href="https://www.x.com/legendonnaib" target="_blank" rel="noopener noreferrer">
                            <b className="ml-2">www.x.com/legendonnaib</b>
                        </Link>
                    </div>
                    <br/>
                    <div className="flex items-center"> 
                        <img src={linkin.src} height="150" width="25" alt="Contact Us"/>
                        <Link href="https://www.linkedin.com/in/onnaib7/" target="_blank" rel="noopener noreferrer">
                            <b className="ml-2">https://www.linkedin.com/in/onnaib7/</b>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;
