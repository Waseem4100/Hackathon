import Image from "next/image";
import Orangemodernchair from "@/public/Orangemodernchair.jpg"
import Whitetuftedchair from "@/public/Whitetuftedchair.jpg"
import Grayupholsteredchair from "@/public/Grayupholsteredchair.jpg"
import Vintagewhitechair from "@/public/Vintagewhitechair.jpg"
export default function HotProduct() {
  return (
    <header className="container mx-auto px-4 py-12 lg:py-16">
      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr]">
        <div className="writing-mode-vertical hidden text-xl font-medium tracking-wider text-zinc-900 md:block pt-6">
          EXPLORE NEW AND POPULAR STYLES
        </div>
        <div className="text-xl font-medium tracking-wider text-zinc-900 md:hidden">
          EXPLORE NEW AND POPULAR STYLES
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-[48%]">
            <Image
              src={Orangemodernchair}
              alt="Orange modern chair"
              className="h-full w-full object-cover"
              width={500}
              height={500}
              priority
            />
          </div>
          <div className="grid grid-cols-2 gap-4 w-full md:w-[60%] lg:w-[48%]">
            <div className="aspect-square">
              <Image
                src={Whitetuftedchair}
                alt="White tufted chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src={Grayupholsteredchair}
                alt="Gray upholstered chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src={Vintagewhitechair}
                alt="Vintagewhitechair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src={Vintagewhitechair}
                alt="Vintage white chair duplicate"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}