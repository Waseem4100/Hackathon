import React from "react";
import Image from "next/image";
import Logo3 from "@/public/Logo3.png"
import Logo4 from "@/public/Logo4.png"
import Logo5 from "@/public/Logo5.png"
import Logo6 from "@/public/Logo6.png"
import Logo7 from "@/public/Logo7.png"
import Logo8 from "@/public/Logo8.png"
import Logo9 from "@/public/Logo9.png"

const CompanyLogo = () => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-20 pt-14 px-4">
      <div className="flex justify-center items-center">
        <Image src={Logo3} alt="Zaphier Logo" width={85} height={87} />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={Logo4}
          alt="Pipe Drive Logo"
          width={107}
          height={109}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={Logo5}
          alt="Cib Bank Logo"
          width={135}
          height={139}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={Logo6}
          alt="Company 4 Logo"
          width={63}
          height={65}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={Logo7}
          alt="Burnt Toast Logo"
          width={98}
          height={101}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={Logo8}
          alt="Panda Doc Logo"
          width={113}
          height={115}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image src={Logo9} alt="Moz Logo" width={84} height={87} />
      </div>
    </div>
  );
};

export default CompanyLogo;