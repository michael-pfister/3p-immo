import { StateUpdater, useState } from "preact/hooks";
import { animation } from "twind/css";
import { tw } from "twind";

export type NavigationLink = {
  title: string;
  link: string;
};

const navigationLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Projekte",
    link: "/#projects",
  },
  {
    title: "Über uns",
    link: "/#aboutUs",
  },
  {
    title: "Kontakt",
    link: "/#contact",
  },
];

function Drawer(
  { navigationLinks, isMenuOpen, setIsMenuOpen }: {
    navigationLinks: NavigationLink[];
    isMenuOpen: boolean;
    setIsMenuOpen: StateUpdater<boolean>;
  },
) {
  return (
    <div
      class={`${
        isMenuOpen ? "fixed" : "hidden"
      } top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)] z-10`}
    >
      <div
        class={tw`bg-white absolute right-0 w-3/5 h-full p-8 ${
          animation("0.5s ease", {
            "from": { "right": "-60%" },
            "to": { "right": "0px" },
          })
        }`}
      >
        <button
          class="w-full flex justify-end focus:outline-none"
          onClick={() => {
            setIsMenuOpen(false);
          }}
        >
          <img class="w-8" src="/close-svgrepo-com.svg" alt="close" />
        </button>
        <ul class="flex flex-col gap-8 text-xl">
          {navigationLinks.map((link: NavigationLink) => (
            <li>
              <a
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                href={link.link}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function AppBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav class="flex justify-between p-8 items-center">
      <h3 class="text-2xl text-brown">
        <a href="/">3P Immo</a>
      </h3>
      <ul class="hidden md:flex gap-16 text-xl">
        {navigationLinks.map((link: NavigationLink) => (
          <li>
            <a href={link.link}>{link.title}</a>
          </li>
        ))}
      </ul>
      <button
        class="block md:hidden focus:outline-none"
        onClick={() => setIsMenuOpen(true)}
      >
        <img class="w-8" src="/menu-svgrepo-com.svg" alt="menü" />
      </button>
      <Drawer
        navigationLinks={navigationLinks}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </nav>
  );
}
