import Link from "next/link";
import Image from "next/image";
import logo from '../public/logo.svg.svg'


export const HeaderLogo = () => {
  return (
    <Link href='/'>
      <div className="items-center hidden lg:flex">
        <Image src={logo} height={28} width={28} alt='logo' />
        <p className="font-semibold text-white text-2xl ml-2.5">
          Finance
        </p>
      </div>
    </Link>
  )
}