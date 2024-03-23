import { useState, Fragment } from "react";
import { Menu, MenuItem } from "./navbar-menu";
import { cn } from "../../utils/cn";
import { logo } from "../assets/";
import { navigation } from "../constants";
import { HamburgerMenu } from "./design/header";
import Button from "./button";
import MenuSvg from "../assets/svg/MenuSvg";

const Header = ({ className }: { className?: string }) => {
  const [_, setActive] = useState<string | null>(null);
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };

  return (
    <>
      {/* mobile menu */}
      <div
        className={`fixed lg:hidden top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
          openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
        }`}
      >
        <div className="flex justify-between items-center py-4 px-2">
          <a className="block" href="#hero">
            <img src={logo} width={40} height={40} alt="Stunning" />
          </a>

          <Button className="lg:hidden" px="px-2" onClick={toggleNavigation}>
            <MenuSvg openNavigation={openNavigation} />
          </Button>
        </div>

        <nav>
          <div className={`${openNavigation ? "flex h-[100vh]" : "hidden"}`}>
            <div className="relative z-2 flex flex-col items-center m-auto space-y-10">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  // onClick={handleClick}
                  className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 
                 
                lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                >
                  {item.title}
                </a>
              ))}
            </div>
            <HamburgerMenu />
          </div>
        </nav>
      </div>

      {/* desktop menu */}
      <div
        className={cn(
          "hidden lg:block fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
          className
        )}
      >
        <Menu setActive={setActive}>
          {navigation.map((nav, index) => (
            <Fragment key={nav.id}>
              <MenuItem
                setActive={setActive}
                active={null}
                item={nav.title}
                url={nav.url}
              />
              {index === 1 && (
                <a href="#hero">
                  <div className="flex justify-center items-center">
                    <img src={logo} width={50} alt="logo" />
                  </div>
                </a>
              )}
            </Fragment>
          ))}
        </Menu>
      </div>
    </>
  );
};

export default Header;
