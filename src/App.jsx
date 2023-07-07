import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook, BsLinkedin, BsWhatsapp, BsGithub } from "react-icons/bs";

import "./index.css";

function App() {
  return (
    <>
      <main>
        <section
          id="quienSoy"
          class="my-0 flex flex-col lg:flex-row lg:h-[750px]"
        >
          <div
            data-aos="fade-right"
            class="p-10 lg:w-[80%] lg:h-500px lg:self-center"
          >
            <h1 class="text-sky-600 dark:text-sky-300 text-2xl font-bold tracking-widest leadinf-10">
              HOLA, SOY
            </h1>
            <p class="py-2 text-3xl font-blod text-slate-600 dark:text-slate-300 escrituraEfecto">
              Juan José Rincón
            </p>
            <p class="text-3xl font-bold text-slate-500 datk:text-slate-600">
              Me gusta desarrollar aplicaciones para mejorar y aplicar mis
              conocimientos
            </p>
            <p class="mt-5 text-lg ">
              Actualmente estudio Ingenieria de sistemas y computacion, estoy
              terminando mi carrera, me gusta el desarollar aplicaciones de todo
              tipo.
            </p>
            {/*REDES SOCIALES*/}
            <div class="py-6 flex flex-row ">
              <a
                href="https://www.instagram.com/juanjose.rincon/"
                target="_blank"
                class="pr-1 text-4xl hover:text-sky-600 animate-bounce"
              >
                <AiOutlineInstagram class="px-2"></AiOutlineInstagram>
              </a>
              <a
                href="https://www.facebook.com/juanjose.rinconbalaguera"
                target="_blank"
                class="pr-1 text-4xl hover:text-sky-600 animate-bounce"
              >
                <BsFacebook class="px-2"></BsFacebook>
              </a>
              <a
                href="https://www.linkedin.com/in/juan-jos%C3%A9-rinc%C3%B3n-balaguera-b385a8149/"
                target="_blank"
                class="pr-1 text-4xl hover:text-sky-600 animate-bounce"
              >
                <BsLinkedin class="px-2"></BsLinkedin>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=573125880706&text=Hola,%Juan%Jose"
                target="_blank"
                class="pr-1 text-4xl hover:text-sky-600 animate-bounce"
              >
                <BsWhatsapp class="px-2"></BsWhatsapp>
              </a>
              <a
                href="https://github.com/goster210"
                target="_blank"
                class="pr-1 text-4xl hover:text-sky-600 animate-bounce"
              >
                <BsGithub class="px-2"></BsGithub>
              </a>
            </div>
            <div>
              <a href="#contactos">
                <button class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                  <span class="w-full h-full bg-gradient-to-br from-sky-500 via-sky-700 to-sky-900 group-hover:from-sky-900 group-hover:via-sky-700 group-hover:to-sky-500 absolute"></span>
                  <span class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                    <span class="relative text-white">CONTACTAME</span>
                  </span>
                </button>
              </a>
            </div>
          </div>
          {/*IMAGEN*/}
          <div
            data-aos="zoom-in"
            class="w-full h-full flex justify-center items-center"
          >
            <div
              class="w-[300px] h-[300px] m-auto bg-[url('./img/fotoperfil.jpg')] bg-cover rounded-full lg:w-[480px] lg:h-[480px]
            lg:bg-center lg:bg-no-repeat lg:bg[lenght:617px_840px] border-4 border-sky-600 hover:animate-pulse"
            ></div>
          </div>
        </section>
        {/*EXPERIENCIA LABORAL*/}
        <div id="experiencia">
          <div data-aos="fade-up">
            <h2 class="text-3xl text-slate-700 dark:text-white font-bold tracking-widest w-[85%] m-auto text-center pt-8">
              Experiencia Laboral
            </h2>
            <section class="my-12 flex flex-col w-[84%] m-auto lg:flex-row lg:w-[87%] lg:my-28">
              <div class="flex justify-between lg:flex-col lg:w-[20%]">
                <button
                  type="button"
                  id="link1"
                  data-id="job1"
                  class="border-b-2 hover:dark:bg-slate-700 w-full px-4 py-1 hover:bg-white focus:bg-white focus:border-sky-500 focus:dark:bg-slate-700 lg:border-l-2 lg:border-b-0 lg:h-full lg:text-left border-sky-500 bg-white dark:bg-slate-700"
                >
                  Intelio
                </button>
                <button
                  type="button"
                  data-id="job2"
                  class="border-b-2 hover:dark:bg-slate-700 w-full px-4 py-1 hover:bg-white focus:bg-white focus:border-sky-500 focus:dark:bg-slate-700 lg:border-l-2 lg:border-b-0 lg:h-full lg:text-left"
                >
                  ExpertD.
                </button>
                <button
                  type="button"
                  data-id="job3"
                  class="border-b-2 hover:dark:bg-slate-700 w-full px-4 py-1 hover:bg-white focus:bg-white focus:border-sky-500 focus:dark:bg-slate-700 lg:border-l-2 lg:border-b-0 lg:h-full lg:text-left"
                >
                  ArtWeb
                </button>
                <button
                  type="button"
                  data-id="job4"
                  class="border-b-2 hover:dark:bg-slate-700 w-full px-4 py-1 hover:bg-white focus:bg-white focus:border-sky-500 focus:dark:bg-slate-700 lg:border-l-2 lg:border-b-0 lg:h-full lg:text-left"
                >
                  CreativeTech
                </button>
              </div>

              <div class="my-5 lg:px-10 lg:my-0 lg:max-w-[800px]">
                <article id="job1">
                  <h3>
                    Ingeniero de Software
                    <span class="text-sky-500 font-bold text-lg">@Intelio</span>
                  </h3>
                  <h4 class="text-sm pb-5">Junio 2020 - Presente</h4>
                  <ul>
                    <li class="flex items-center py-2">
                      <span class="pr-2 text-sky-500 font-black">&#9655;</span>
                      <p class="text-stone-900 dark:text-cyan-50 font-normal px-5">
                        He desarrollado aplicaciones modernas, eficientes y
                        fácil de mantener tanto para clientes internos como para
                        clientes externos.
                      </p>
                    </li>
                    <li class="flex items-center py-2">
                      <span class="pr-2 text-sky-500 font-black">&#9655;</span>
                      <p class="text-stone-900 dark:text-cyan-50 font-normal px-5">
                        He trabajado con varias tecnologías WEB modernas
                        incluyendo React, TypeScript, Express JS y PostgreSQL.
                      </p>
                    </li>
                    <li class="flex items-center py-2">
                      <span class="pr-2 text-sky-500 font-black">&#9655;</span>
                      <p class="text-stone-900 dark:text-cyan-50 font-normal px-5">
                        He brindado apoyo técnico para nuestros clientes durante
                        el lanzamiento de plataformas digitales.
                      </p>
                    </li>
                  </ul>
                </article>

                <article id="job2" class="hidden">
                  <h3>
                    Ingeniero Front-End
                    <span class="text-sky-500 font-bold text-lg">@ExpertD</span>
                  </h3>
                  <h4 class="text-sm pb-5">Junio 2018 - Junio 2020</h4>
                  <ul>
                    <li class="flex items-center py-2">
                      <span class="pr-2 text-sky-500 font-black">&#9655;</span>
                      <p class="text-stone-900 dark:text-cyan-50 font-normal px-5">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Consectetur, deserunt. Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Consectetur, deserunt.
                      </p>
                    </li>
                    <li class="flex items-center py-2">
                      <span class="pr-2 text-sky-500 font-black">&#9655;</span>
                      <p class="text-stone-900 dark:text-cyan-50 font-normal px-5">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Consectetur, deserunt. Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Consectetur, deserunt.
                      </p>
                    </li>
                    <li class="flex items-center py-2">
                      <span class="pr-2 text-sky-500 font-black">&#9655;</span>
                      <p class="text-stone-900 dark:text-cyan-50 font-normal px-5">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Consectetur, deserunt. Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Consectetur, deserunt.
                      </p>
                    </li>
                  </ul>
                </article>

                <article id="job3" class="hidden">
                  <h3>
                    Desarrollador WEB
                    <span class="text-sky-500 font-bold text-lg">@ArtWeb</span>
                  </h3>
                  <h4 class="text-sm pb-5">Junio 2017 - Junio 2018</h4>
                  <ul>
                    <li class="flex items-center py-2">
                      <span class="pr-2 text-sky-500 font-black">&#9655;</span>
                      <p class="text-stone-900 dark:text-cyan-50 font-normal px-5">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Consectetur, deserunt. Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Consectetur, deserunt.
                      </p>
                    </li>
                    <li class="flex items-center py-2">
                      <span class="pr-2 text-sky-500 font-black">&#9655;</span>
                      <p class="text-stone-900 dark:text-cyan-50 font-normal px-5">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Consectetur, deserunt. Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Consectetur, deserunt.
                      </p>
                    </li>
                    <li class="flex items-center py-2">
                      <span class="pr-2 text-sky-500 font-black">&#9655;</span>
                      <p class="text-stone-900 dark:text-cyan-50 font-normal px-5">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Consectetur, deserunt. Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Consectetur, deserunt.
                      </p>
                    </li>
                  </ul>
                </article>

                <article id="job4" class="hidden">
                  <h3>
                    Ingeniero Front-End
                    <span class="text-sky-500 font-bold text-lg">
                      @CreativeTech
                    </span>
                  </h3>
                  <h4 class="text-sm pb-5">Enero 2017 - Junio 2017</h4>
                  <ul>
                    <li class="flex items-center py-2">
                      <span class="pr-2 text-sky-500 font-black">&#9655;</span>
                      <p class="text-stone-900 dark:text-cyan-50 font-normal px-5">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Consectetur, deserunt. Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Consectetur, deserunt.
                      </p>
                    </li>
                    <li class="flex items-center py-2">
                      <span class="pr-2 text-sky-500 font-black">&#9655;</span>
                      <p class="text-stone-900 dark:text-cyan-50 font-normal px-5">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Consectetur, deserunt. Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Consectetur, deserunt.
                      </p>
                    </li>
                    <li class="flex items-center py-2">
                      <span class="pr-2 text-sky-500 font-black">&#9655;</span>
                      <p class="text-stone-900 dark:text-cyan-50 font-normal px-5">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Consectetur, deserunt. Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Consectetur, deserunt.
                      </p>
                    </li>
                  </ul>
                </article>
              </div>
            </section>
          </div>
        </div>
        {/*#4 SECCION PROYECTOS*/}
        <div id="proyectos">
          <div data-aos="fade-up">
            <h3 class="text-3xl text-slate-700 dark:text-white my-5 px-12 font-bold tracking-widest md:text-center">
              Mis Proyectos
            </h3>

            <section class="my-12 flex flex-col items-center justify-center w-[90%] m-auto lg:flex-row lg:grid lg:grid-cols-2">
              <div class="border-1 rounded-lg bg-white dark:bg-slate-800 m-5">
                <div class="m-2">
                  <img
                    src="ceiba-sol.png"
                    alt=""
                    class="opacity-80 hover:opacity-100"
                  />
                  <h4 class="font-bold my-2">CEIBA SOL S.A.S.</h4>
                  <article class="flex justify-between grid grid-rows-2">
                    <div class="flex flex-nowrap items-center">
                      <span class="bg-[#f7e018] rounded-lg px-2 mr-2 text-slate-900">
                        Javascript
                      </span>
                      <span class="bg-[#0ac3b3] rounded-lg px-2 mr-2 text-slate-100">
                        TailwindCSS
                      </span>

                      <span class="bg-[#62ddfd] rounded-lg px-2 mr-2 text-slate-900">
                        React
                      </span>
                      <span class="bg-[#509646] rounded-lg px-2 mr-2 text-slate-100">
                        MongoDB
                      </span>
                      <span class="bg-[#90c53f] rounded-lg px-2 mr-2 text-slate-900">
                        NodeJs
                      </span>
                    </div>
                    <div class="text-xl text-slate-600 dark:text-slate-200 pr-2 flex flex-nowrap">
                      <a href="https://github.com/CeibaSol/" target="_blank">
                        <i class="bi bi-github px-2"></i>
                      </a>
                      <a
                        href="https://ceiba-sol-fe.vercel.app/"
                        target="_blank"
                      >
                        <i class="bi bi-eye px-2"></i>
                      </a>
                    </div>
                  </article>
                </div>
              </div>

              <div class="border-1 rounded-lg bg-white dark:bg-slate-800 m-5">
                <div class="m-2">
                  <img
                    src="app-presupuesto.png"
                    alt=""
                    class="opacity-80 hover:opacity-100"
                  />
                  <h4 class="font-bold my-2">APLICACION CALCULO PRESUPUESTO</h4>
                  <article class="flex justify-between grid grid-rows-2">
                    <div class="flex flex-nowrap items-center">
                      <span class="bg-[#007acc] rounded-lg px-2 mr-2 text-slate-100">
                        TypeScript
                      </span>
                      <span class="bg-violet-800 rounded-lg px-2 mr-2 text-slate-100">
                        CSS
                      </span>

                      <span class="bg-[#c3002f] rounded-lg px-2 mr-2 text-slate-100">
                        Angular
                      </span>
                    </div>
                    <div class="text-xl text-slate-600 dark:text-slate-200 pr-2 flex flex-nowrap">
                      <a href="https://github.com/CeibaSol/" target="_blank">
                        <i class="bi bi-github px-2"></i>
                      </a>
                      <a
                        href="https://ceiba-sol-fe.vercel.app/"
                        target="_blank"
                      >
                        <i class="bi bi-eye px-2"></i>
                      </a>
                    </div>
                  </article>
                </div>
              </div>

              <div class="border-1 rounded-lg bg-white dark:bg-slate-800 m-5">
                <div class="m-2">
                  <img
                    src="icono.png"
                    alt=""
                    class="opacity-80 hover:opacity-100"
                  />
                  <h4 class="font-bold my-2">ARTWEB - UI DESIGN</h4>
                  <article class="flex justify-between grid grid-rows-2">
                    <div class="flex flex-nowrap items-center">
                      <span class="bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">
                        HTML
                      </span>
                      <span class="bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">
                        SASS
                      </span>
                      <span class="bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">
                        JS
                      </span>
                    </div>
                    <div class="text-xl text-slate-600 dark:text-slate-200 pr-2 flex flex-nowrap">
                      <a href="">
                        <i class="bi bi-github px-2"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-eye px-2"></i>
                      </a>
                    </div>
                  </article>
                </div>
              </div>
            </section>
          </div>
        </div>
        {/*#4 SECCION CONTACTOS*/}
        <div id="contactos">
          <div data-aos="fade-up">
            <h3 class="text-3xl text-slate-700 dark:text-white mt-12 mb-10 px-10 font-bold tracking-widest text-center">
              Contáctame
            </h3>

            <section class="flex flex-col w-[90%] m-auto" id="contacto">
              <form action="" class="w-[90%] md:max-w-[600px] m-auto">
                <div>
                  <input
                    placeholder="info@ejemplo.com"
                    type="email"
                    name="email"
                    id="email"
                    class="p-3 w-full rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                  />
                </div>

                <div class="py-3">
                  <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    placeholder="Nombre"
                    class="p-3 w-full rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                  />
                </div>

                <div>
                  <textarea
                    name="msj"
                    id="msj"
                    rows="5"
                    placeholder="Mensaje"
                    class="p-3 w-full rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                  ></textarea>
                </div>
                <div class="my-3">
                  <button class="bg-sky-600 text-white p-3 w-full rounded-lg text-xl tracking-widest">
                    Enviar Mensaje
                  </button>
                </div>
              </form>

              <footer class="text-center mt-12 mb-5">
                <p class="hover:text-sky-500">Juan José Rincón</p>
                <div class="my-2">
                  <a href="">
                    <i class="bi bi-twitter hover:text-sky-500 px-2"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-instagram hover:text-sky-500 px-2"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-linkedin hover:text-sky-500 px-2"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-github hover:text-sky-500 px-2"></i>
                  </a>
                </div>
              </footer>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
export default App;