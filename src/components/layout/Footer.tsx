import { footerBg, logo } from "@/assets/images";
import { ChevronsLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TitleSection from "../shared/TitleSection";
import CourseCard from "../shared/CourseCard";

function Footer() {
  return (
    <>
      <footer style={{ backgroundImage: `url(${footerBg.src})` }} className="py-4 mt-12 bg-center lg:max-w-7xl w-full  mx-auto font-ar-medium rounded-lg overflow-hidden">
        <div className="container grid lg:grid-cols-3 gap-y-4">
          <div className="">
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
            <p className="">منصة مستر محمد فاروق</p>
            <ul className="navbar-nav icons-social flex-row">
              <li className=" d-flex align-items-center justify-content-center">
                <a className=" justify-content-center" href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li className=" d-flex align-items-center justify-content-center">
                <a className=" justify-content-center" href="#">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
              <li className=" d-flex align-items-center justify-content-center">
                <a className=" justify-content-center" href="#">
                  <i className="fa-brands fa-telegram"></i>
                </a>
              </li>
              <li className=" d-flex align-items-center justify-content-center">
                <a className=" justify-content-center" href="#">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <p className="text-lg mb-3 border-b-2 border-primary border-dashed inline-block pb-1">تواصل مع المستر</p>
            <ul className="space-y-2">
              <li className="">
                <Link className="flex items-center gap-x-1" href="#">
                  <ChevronsLeft className="size-4" />
                  <span>المسلة - ش جمال عبدالناصر</span>
                </Link>
              </li>
              <li className="">
                <Link className="flex items-center gap-x-1" href="#">
                  <ChevronsLeft className="size-4" />
                  <span>01115003800</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <p className="mb-1">تصميم وتطوير</p>
            <Link href="/">VTS</Link> لخدمات تكنولوجيا المعلومات
          </div>
          {/* <div className="row align-items-start">
          <div className="col-lg-3 col-12">
            <div className="right mb-xl-0 mb-3">
              <a href="#" className="logo">
                <img src="assets/imgs/logo.png" alt="" />
              </a>
              <p className="ar-medium">منصة مستر محمد فاروق</p>
              <ul className="navbar-nav icons-social flex-row">
                <li className=" d-flex align-items-center justify-content-center">
                  <a className=" justify-content-center" href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li className=" d-flex align-items-center justify-content-center">
                  <a className=" justify-content-center" href="#">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
                <li className=" d-flex align-items-center justify-content-center">
                  <a className=" justify-content-center" href="#">
                    <i className="fa-brands fa-telegram"></i>
                  </a>
                </li>
                <li className=" d-flex align-items-center justify-content-center">
                  <a className=" justify-content-center" href="#">
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        
       
        </div> */}
        </div>
      </footer>
    </>
  );
}

export default Footer;
