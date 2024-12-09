import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";


const Header = () => {
  return (
    <div className="w-full bg-[#F0F2F3] pt-[20px] pb-[20px] h-[203px]">
 


      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-3">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_890)">
<path d="M39.9938 19.7464C39.9286 18.4433 39.3566 17.2173 38.3999 16.3301C37.4432 15.4429 36.1776 14.9649 34.8732 14.9979C33.5689 15.031 32.3292 15.5727 31.4187 16.5072C30.5082 17.4418 29.9991 18.6952 30 20V28.3333C30 27.8913 29.8244 27.4674 29.5119 27.1548C29.1993 26.8422 28.7754 26.6667 28.3334 26.6667H11.6667C11.2247 26.6667 10.8007 26.8422 10.4882 27.1548C10.1756 27.4674 10 27.8913 10 28.3333V20C9.99996 19.0833 9.74791 18.1843 9.27143 17.4013C8.79495 16.6182 8.11237 15.9812 7.2983 15.5598C6.48422 15.1385 5.56999 14.949 4.65552 15.0122C3.74105 15.0754 2.86154 15.3887 2.11312 15.9179C1.3647 16.4472 0.776167 17.172 0.411857 18.0131C0.0475467 18.8543 -0.0785237 19.7794 0.0474254 20.6873C0.173374 21.5953 0.546496 22.4511 1.12601 23.1614C1.70552 23.8716 2.46912 24.4088 3.33334 24.7144V33.3333C3.33334 33.7753 3.50893 34.1993 3.8215 34.5118C4.13406 34.8244 4.55798 35 5.00001 35H6.66668V38.3333H10V35H30V38.3333H33.3334V35H35C35.4421 35 35.866 34.8244 36.1786 34.5118C36.4911 34.1993 36.6667 33.7753 36.6667 33.3333V24.7144C37.6824 24.3551 38.5549 23.6775 39.1544 22.7823C39.7539 21.8872 40.0483 20.8224 39.9938 19.7464Z" fill="#029FAE"/>
<path d="M11.6667 20V25H28.3334V20C28.3353 18.5224 28.8271 17.0872 29.7319 15.919C30.6367 14.7508 31.9033 13.9157 33.3334 13.5443V9.99996C33.3309 7.79058 32.4522 5.67241 30.8899 4.11014C29.3276 2.54788 27.2095 1.66911 25.0001 1.66663H15.0001C12.7907 1.66911 10.6725 2.54788 9.11026 4.11014C7.548 5.67241 6.66923 7.79058 6.66675 9.99996V13.5443C8.09689 13.9157 9.3635 14.7508 10.2683 15.919C11.173 17.0872 11.6649 18.5224 11.6667 20ZM23.3334 8.33329C23.663 8.33329 23.9853 8.43104 24.2594 8.61418C24.5334 8.79731 24.7471 9.05761 24.8732 9.36215C24.9994 9.6667 25.0324 10.0018 24.9681 10.3251C24.9037 10.6484 24.745 10.9454 24.5119 11.1785C24.2788 11.4116 23.9819 11.5703 23.6586 11.6346C23.3353 11.6989 23.0001 11.6659 22.6956 11.5398C22.3911 11.4136 22.1308 11.2 21.9476 10.9259C21.7645 10.6518 21.6667 10.3296 21.6667 9.99996C21.6667 9.55793 21.8423 9.13401 22.1549 8.82145C22.4675 8.50889 22.8914 8.33329 23.3334 8.33329ZM23.3334 13.3333C23.663 13.3333 23.9853 13.431 24.2594 13.6142C24.5334 13.7973 24.7471 14.0576 24.8732 14.3622C24.9994 14.6667 25.0324 15.0018 24.9681 15.3251C24.9037 15.6484 24.745 15.9454 24.5119 16.1785C24.2788 16.4116 23.9819 16.5703 23.6586 16.6346C23.3353 16.6989 23.0001 16.6659 22.6956 16.5398C22.3911 16.4136 22.1308 16.2 21.9476 15.9259C21.7645 15.6518 21.6667 15.3296 21.6667 15C21.6667 14.5579 21.8423 14.134 22.1549 13.8214C22.4675 13.5089 22.8914 13.3333 23.3334 13.3333ZM16.6667 8.33329C16.9964 8.33329 17.3186 8.43104 17.5927 8.61418C17.8668 8.79731 18.0804 9.05761 18.2065 9.36215C18.3327 9.6667 18.3657 10.0018 18.3014 10.3251C18.2371 10.6484 18.0783 10.9454 17.8453 11.1785C17.6122 11.4116 17.3152 11.5703 16.9919 11.6346C16.6686 11.6989 16.3335 11.6659 16.0289 11.5398C15.7244 11.4136 15.4641 11.2 15.281 10.9259C15.0978 10.6518 15.0001 10.3296 15.0001 9.99996C15.0001 9.55793 15.1757 9.13401 15.4882 8.82145C15.8008 8.50889 16.2247 8.33329 16.6667 8.33329ZM16.6667 13.3333C16.9964 13.3333 17.3186 13.431 17.5927 13.6142C17.8668 13.7973 18.0804 14.0576 18.2065 14.3622C18.3327 14.6667 18.3657 15.0018 18.3014 15.3251C18.2371 15.6484 18.0783 15.9454 17.8453 16.1785C17.6122 16.4116 17.3152 16.5703 16.9919 16.6346C16.6686 16.6989 16.3335 16.6659 16.0289 16.5398C15.7244 16.4136 15.4641 16.2 15.281 15.9259C15.0978 15.6518 15.0001 15.3296 15.0001 15C15.0001 14.5579 15.1757 14.134 15.4882 13.8214C15.8008 13.5089 16.2247 13.3333 16.6667 13.3333Z" fill="#029FAE"/>
</g>
<defs>
<clipPath id="clip0_1_890">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>
            </svg>

          <h2 className="text-[26px] font-medium">Comforty</h2>
        </div>
        <Link href="/cart">
          <button className="flex items-center space-x-2 bg-white py-2 px-4 rounded-md mr-3">
            <FaShoppingCart className="text-xl" />
            <span className="hidden sm:inline">Cart</span>
            <div className="flex items-center justify-center w-6 h-6 bg-[#007580] text-white text-sm rounded-full">
              2
            </div>
          </button>
        </Link>
       
      </div>


      <Navbar />
   
    </div>
  );
};

export default Header;