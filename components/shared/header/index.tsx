// import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          {/* xiên vào giữa đấy */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.svg" // Đảm bảo đường dẫn đúng
              alt={`${APP_NAME} logo`}
              height={48}
              width={48}
              priority={true}
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className="space-x-2 ">
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
