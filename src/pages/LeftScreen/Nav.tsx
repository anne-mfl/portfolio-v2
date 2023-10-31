import { useLayoutEffect, useState, useEffect } from "react";
import clsx from "clsx";
import * as Scroll from 'react-scroll'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import logo from 'assets/logo03sec.gif'

// helpers
const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.substr(1);

const clamp = (value: number) => Math.max(0, value);

const isBetween = (value: number, floor: number, ceil: number, zIndex: number) =>
  value >= floor && value <= ceil

// hooks
const useScrollspy = (ids: string[], offset: number = 0) => {
  const [activeId, setActiveId] = useState("");
  const [activeCeiling, setActiveCeiling] = useState(0)

  useLayoutEffect(() => {
    const listener = () => {
      const scroll = window.pageYOffset;

      const position = ids.map((id) => {
        const element = document.getElementById(id);
        if (!element) return { id, top: -1, bottom: -1 }
        const rect = element.getBoundingClientRect();
        const top = clamp(rect.top + scroll - offset);
        const bottom = clamp(rect.bottom + scroll - offset);
        const zIndex = parseInt(element.style.zIndex)
        return { id, top, bottom, zIndex };
      }).filter(({ top, bottom, zIndex }) => isBetween(scroll, top, bottom, zIndex)).sort((a, b) => b.zIndex - a.zIndex)[0]

      setActiveId(position?.id || "");
      setActiveCeiling(position?.top || 0);
    };

    listener();

    window.addEventListener("resize", listener);
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("resize", listener);
      window.removeEventListener("scroll", listener);
    };
  }, [ids, offset, activeId, setActiveId]);

  return { activeId, activeCeiling };
};

const useSetTop = (ids: any) => {
  const [ceil, setCeil] = useState<any>({
    about: 0,
    experience: 0,
    projects: 0,
    contact: 0
  })
  // console.log(ceil)

  useLayoutEffect(() => {
    ids.map((id: any) => {
      let getElemDistance = (elem) => {
        let location = 0;
        if (elem.offsetParent) {
          do {
            location += elem.offsetTop;
            elem = elem.offsetParent;
          } while (elem);
        }
        return location >= 0 ? location : 0;
      };
      setCeil((ceil: any) => ({ ...ceil, [id]: getElemDistance(document.getElementById(id)) }))
    })
  }, [])

  return ceil
}

// components
export default function App() {

  let scroll = Scroll.animateScroll
  let scroller = Scroll.scroller

  const ids = ["about", "experience", "projects", "contact"];
  const { activeId } = useScrollspy(ids, 54); // 54 is navigation height
  const ceil = useSetTop(ids)
  // console.log(ceil)

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (mobileMenuOpen) { document.body.style.overflow = 'hidden' }
    else { document.body.style.overflow = 'unset' }
  }, [mobileMenuOpen])

  return (
    <nav className='h-5/6 max-xl:h-screen'>

      <div className='h-2/5 flex items-end max-xl:h-full max-xl:items-center'>
        <img
          src={logo}
          alt='anne lee logo'
          className='w-96 cursor-pointer max-sm:w-full max-sm:px-12'
          onClick={() => scroll.scrollToTop()}
        />
      </div>

      <ul className='menu h-3/5 flex items-center max-xl:hidden '>
        <div>
          {ids.map((id) => (
            <li key={`menu-item-${id}`} className="leading-10 text-lg font-normal">
              <p
                className={clsx(
                  "font-light hover:text-darkYellow menu-link cursor-pointer",
                  id === activeId && "text-darkYellow"
                )}
                onClick={() => scroll.scrollTo(ceil[id], { duration: 100 })}
              >
                {capitalize(id)}
              </p>
            </li>
          ))}
        </div>
      </ul>

      {/* ↓↓↓↓↓↓mobile nav↓↓↓↓↓↓ */}

      <div
        className='invisible max-xl:visible hamburger-menu max-xl:fixed z-[60] right-12 max-sm:right-6 top-10 max-sm:top-6'
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <div className={mobileMenuOpen ? 'bar-top-changed' : 'bar-top'}></div>
        <div className={mobileMenuOpen ? 'bar-middle-changed' : 'bar-middle'}></div>
        <div className={mobileMenuOpen ? 'bar-bottom-changed' : 'bar-bottom'}></div>
      </div>


      <div className={`hidden max-xl:block fixed right-0 top-0 w-screen 
            ${mobileMenuOpen ? 'bg-black/50 z-50' : ''} 
            `}>
        <div className={`relative w-7/12  bg-stone-300 ml-auto
              ${mobileMenuOpen ? `duration-500` : 'duration-500 translate-x-full'}
              `}>
          <ul className='flex flex-col items-center justify-center h-screen'>
            {ids.map((id) => (
              <li key={`menu-item-${id}`} className="py-3 text-lg" onClick={() => setMobileMenuOpen(false)}>
                <p
                  className={clsx(
                    "font-light hover:text-darkYellow menu-link cursor-pointer",
                    id === activeId && "text-darkYellow"
                  )}
                  onClick={() => scroll.scrollTo(ceil[id], { duration: 100 })}
                >{capitalize(id)}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ */}

    </nav >
  );
}
