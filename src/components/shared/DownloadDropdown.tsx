import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function DownloadDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className=" mb-3
 bg-[linear-gradient(45deg,var(--color-primary),rgba(0,0,0,0.3))]

    text-white
  
    text-sm
   rounded-[10px]
   !ring-0
    shadow-[0_4px_15px_var(--color-primary)]
    transition-all duration-300
    
  "
        >
          تحميل مشغل الفيديوهات
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 text-start">
        <DropdownMenuItem asChild className="flex gap-3 flex-row-reverse cursor-pointer">
          <a href="https://vts-co.com/VeduPlayer/VtsVeduPlayer.exe" download target="_blank" rel="noopener noreferrer" className="w-full">
            <div className="size-9 rounded-lg bg-[#0475cd] flex items-center justify-center">
              <svg className="size-5" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>windows [#ffffff]</title> <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    {" "}
                    <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -7439.000000)" fill="#ffffff">
                      {" "}
                      <g id="icons" transform="translate(56.000000, 160.000000)">
                        {" "}
                        <path
                          d="M13.1458647,7289.43426 C13.1508772,7291.43316 13.1568922,7294.82929 13.1619048,7297.46884 C16.7759398,7297.95757 20.3899749,7298.4613 23.997995,7299 C23.997995,7295.84873 24.002005,7292.71146 23.997995,7289.71311 C20.3809524,7289.71311 16.7649123,7289.43426 13.1458647,7289.43426 M4,7289.43526 L4,7296.22153 C6.72581454,7296.58933 9.45162907,7296.94113 12.1724311,7297.34291 C12.1774436,7294.71736 12.1704261,7292.0908 12.1704261,7289.46524 C9.44661654,7289.47024 6.72380952,7289.42627 4,7289.43526 M4,7281.84344 L4,7288.61071 C6.72581454,7288.61771 9.45162907,7288.57673 12.1774436,7288.57973 C12.1754386,7285.96017 12.1754386,7283.34361 12.1724311,7280.72405 C9.44461153,7281.06486 6.71679198,7281.42567 4,7281.84344 M24,7288.47179 C20.3879699,7288.48578 16.7759398,7288.54075 13.1619048,7288.55175 C13.1598997,7285.88921 13.1598997,7283.22967 13.1619048,7280.56914 C16.7689223,7280.01844 20.3839599,7279.50072 23.997995,7279 C24,7282.15826 23.997995,7285.31353 24,7288.47179"
                          id="windows-[#ffffff]"
                        >
                          {" "}
                        </path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
            <span>Windows</span>
          </a>
        </DropdownMenuItem>

        <DropdownMenuItem asChild className="flex gap-3 flex-row-reverse cursor-pointer">
          <a href="https://vts-co.com/VeduPlayer/VtsVeduPlayerMobile.apk" download target="_blank" rel="noopener noreferrer">
            <div className="size-9 rounded-lg bg-[#38ce7d] flex items-center justify-center">
              <svg className="size-5" fill="#ffffff" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M207.05811,88.666q-1.10724-1.103-2.24146-2.16895l24.84009-24.84033a7.99984,7.99984,0,0,0-11.31348-11.31348L192.3728,76.3135a111.42105,111.42105,0,0,0-128.55444.19092L37.65674,50.34328A7.99984,7.99984,0,0,0,26.34326,61.65676L51.40283,86.71633A113.38256,113.38256,0,0,0,16,169.12893V192a16.01833,16.01833,0,0,0,16,16H224a16.01833,16.01833,0,0,0,16-16V168A111.25215,111.25215,0,0,0,207.05811,88.666ZM92,168a12,12,0,1,1,12-12A12,12,0,0,1,92,168Zm72,0a12,12,0,1,1,12-12A12,12,0,0,1,164,168Z"></path>{" "}
                </g>
              </svg>
            </div>
            <span>Android 5.0+</span>
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
