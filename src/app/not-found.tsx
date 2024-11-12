import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import notFoundImg from "@/assets/not-found/not-found.png";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-[72px] lg:py-[105px] text-center">
      <div className="flex flex-col justify-center items-center space-y-6 max-md:mx-auto md:max-w-[586px]">
        <Image
          src={notFoundImg}
          alt="not-found"
          placeholder="blur"
          className="pointer-events-none"
        />

        <h1 className="text-2xl xl:text-4xl 2xl:text-5xl font-bold text-transparent bg-clip-text bg-primary-gradient">
          Oops! We can&apos;t <br className="max-md:hidden" />
          find that page.
        </h1>

        <p className="text-transparent bg-clip-text bg-primary-gradient ">
          You can return to our homepage, or you can try searching for the
          content you are seeking by clicking here.
        </p>

        <Button asChild className="w-fit">
          <Link href="/">Go to home</Link>
        </Button>
      </div>
    </div>
  );
}
