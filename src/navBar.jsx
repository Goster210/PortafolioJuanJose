import React, { useState } from "react";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

export default function NavBar() {
  const [click, setClick] = useState(false);

  const [iconDarkMode, seticonDarkMode] = useState(true);

  const darkMode = () => {
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
        seticonDarkMode(false);
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
        seticonDarkMode(true);
      }
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
        seticonDarkMode(true);
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
        seticonDarkMode(false);
      }
    }
  };

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <header className="border-b-2 border-sky-600">
        <nav class="flex justify-between m-auto md:px-10 text-lg font-medium tracking-widest md:items-center ">
          <a href="">
            <img src="logo.png" alt="" width={100}></img>
          </a>
          {/*version telefono movil*/}
          {click ? (
            <div
              data-aos="fade-left"
              id="menu"
              class="bg-white dark:bg-slate-700 p-7 h-[380px] w-[320px] flex-col items-start justify-around 
            rounded-lg text-dark dark:text-white md:flex md:flex-row md:items-center md:w-full md:py-0 md:h-[50px] md:bg-sky-50
            md:dark:bg-slate-800 md:hidden"
            >
              <ul class="flex h-5/6 flex-col justify-around md:flex-row md:justify-center w-full">
                <li class="md:px-10 md:flex md:items-center hover:text-sky-600">
                  <a href="#quienSoy">¿Quién soy?</a>
                </li>
                {/*
                <li class="hidden md:px-10 md:flex md:items-center hover:text-sky-600">
                  <a href="#experiencia">Experiencia</a>
                </li>
              */}
                <li class="md:px-10 md:flex md:items-center hover:text-sky-600">
                  <a href="#tecnologias">Tecnologías</a>
                </li>
                <li class="md:px-10 md:flex md:items-center hover:text-sky-600">
                  <a href="#proyectos">Proyectos</a>
                </li>
                <li class="md:px-10 md:flex md:items-center hover:text-sky-600">
                  <a href="#contactos">Contacto</a>
                </li>

                <div className="flex flex-row">
                  <div className="pr-2">
                    {iconDarkMode ? (
                      <BsFillSunFill class="text-yellow-500 text-2xl"></BsFillSunFill>
                    ) : (
                      <BsFillMoonFill class="text-sky-600 text-2xl "></BsFillMoonFill>
                    )}
                  </div>

                  <label class="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      onClick={() => darkMode()}
                      class="sr-only peer"
                    ></input>
                    <div class="w-11 h-6 bg-yellow-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 dark:peer-focus:ring-sky-800 rounded-full peer dark:bg-yellow-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-yellow-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-yellow-600 peer-checked:bg-sky-600"></div>
                  </label>
                </div>
              </ul>
            </div>
          ) : (
            <></>
          )}
          {/*version dispositivos con pantalla grande*/}
          <div
            data-aos="fade-left"
            id="menu"
            class="bg-white dark:bg-slate-700 p-7 h-[380px] w-[320px] flex-col items-start justify-around 
            rounded-lg text-dark dark:text-white md:flex md:flex-row md:items-center md:w-full md:py-0 md:h-[50px] md:bg-sky-50
            md:dark:bg-slate-800 hidden md:block"
          >
            <ul class="flex h-5/6 flex-col justify-around md:flex-row md:justify-center w-full">
              <li class="md:px-10 md:flex md:items-center hover:text-sky-600">
                <a href="#quienSoy">¿Quién soy?</a>
              </li>
              {/*
              <li class="hidden md:px-10 md:flex md:items-center hover:text-sky-600">
                <a href="#experiencia">Experiencia</a>
              </li>
          */}
              <li class="md:px-10 md:flex md:items-center hover:text-sky-600">
                <a href="#tecnologias">Tecnologías</a>
              </li>

              <li class="md:px-10 md:flex md:items-center hover:text-sky-600">
                <a href="#proyectos">Proyectos</a>
              </li>
              <li class="md:px-10 md:flex md:items-center hover:text-sky-600">
                <a href="#contactos">Contacto</a>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <div className="flex flex-row">
              <div className="pr-2">
                {iconDarkMode ? (
                  <BsFillSunFill class="text-yellow-500 text-2xl"></BsFillSunFill>
                ) : (
                  <BsFillMoonFill class="text-sky-600 text-2xl "></BsFillMoonFill>
                )}
              </div>

              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  onClick={() => darkMode()}
                  class="sr-only peer"
                ></input>
                <div class="w-11 h-6 bg-yellow-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 dark:peer-focus:ring-sky-800 rounded-full peer dark:bg-yellow-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-yellow-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-yellow-600 peer-checked:bg-sky-600"></div>
              </label>
            </div>
          </div>
          <button
            id="menu-buttom"
            class="absolute top-10 right-4 md:hidden"
            onClick={() => handleClick()}
          >
            {click ? (
              <AiOutlineClose class="w-[20px] h-[20px]"></AiOutlineClose>
            ) : (
              <AiOutlineMenu class="w-[20px] h-[20px]"></AiOutlineMenu>
            )}
          </button>
        </nav>
      </header>
    </>
  );
}
