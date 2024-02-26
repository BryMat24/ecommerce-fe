import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
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
      <Button className="mt-8 opacity-20 hover:opacity-100">Shop Now</Button>
    </main>
  );
}
