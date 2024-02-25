import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import MainImg from "../../public/ecommerce.jpeg";

export default function Home() {
  return (
    <main className="w-full px-12 py-14 h-full">
      <AspectRatio ratio={3 / 1} className="">
        <Image
          src={MainImg}
          alt="Photo by Drew Beamer"
          fill
          className="object-cover" />
      </AspectRatio>
    </main>
  );
}
