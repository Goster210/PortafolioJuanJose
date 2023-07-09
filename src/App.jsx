import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook, BsLinkedin, BsWhatsapp, BsGithub } from "react-icons/bs";
import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";
import { useState } from "react";
import ContactoApi from "./api/sendMail";

import "./index.css";

function App() {
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  const data = {
    email,
    nombre,
    mensaje,
  };

  const limpiarCampos = () => {
    setEmail("");
    setNombre("");
    setMensaje("");
  };

  const sendEmail = () => {
    alert('Pendiente')
    limpiarCampos();
  };

  return (
    <>
      <main>
        <section
          id="quienSoy"
          class="my-0 flex flex-col lg:flex-row lg:h-[750px]"
        >
          <div
            data-aos="fade-right"
            class="p-4 lg:p-10 lg:w-[80%] lg:h-500px lg:self-center"
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
                href="https://api.whatsapp.com/send?phone=573125880706&text=Hola"
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
            <div class="flex flex-col lg:flex-row">
              <div class="pb-4 lg:pr-4">
                <a href="#contactos">
                  <button class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                    <span class="w-full h-full bg-gradient-to-br from-sky-500 via-sky-700 to-sky-900 group-hover:from-sky-900 group-hover:via-sky-700 group-hover:to-sky-500 absolute"></span>
                    <span class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                      <span class="relative text-white">CONTACTAME</span>
                    </span>
                  </button>
                </a>
              </div>
              <div>
                <a href="JuanJoseRincon.pdf" download="Hoja de Vida - Juan José Rincón">
                  <button class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                    <span class="w-full h-full bg-gradient-to-br from-sky-500 via-sky-700 to-sky-900 group-hover:from-sky-900 group-hover:via-sky-700 group-hover:to-sky-500 absolute"></span>
                    <span class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                      <span class="relative text-white">DESCARGA MI CV</span>
                    </span>
                  </button>
                </a>
              </div>
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
        {/*Tecnologias*/}
        <h2 class="text-3xl text-slate-700 dark:text-white font-bold tracking-widest w-[85%] m-auto text-center pt-8">
          Tecnologias
        </h2>
        <div class="m-4 lg:m-20">
          <section class="grid grid-cols-3 lg:grid-cols-4">
            <div data-aos="zoom-in" class="m-4 lg:mx-20 lg;my-8">
              <img
                class="transition delay-150 hover:scale-125 rounded rounded-lg"
                src="javascriptlogo.png"
              ></img>
            </div>
            <div data-aos="zoom-in" class="m-4 lg:mx-20 lg;my-8">
              <img
                class="transition delay-150 hover:scale-125"
                src="htmllogo.png"
              ></img>
            </div>
            <div data-aos="zoom-in" class="m-4 lg:mx-20 lg;my-8">
              <img
                class="transition delay-150 hover:scale-125"
                src="csslogo.png"
              ></img>
            </div>
            <div data-aos="zoom-in" class="m-4 lg:mx-20 lg;my-8">
              <img
                class="transition delay-150 hover:scale-125 rounded rounded-lg"
                src="typescriptlogo.png"
              ></img>
            </div>
            <div data-aos="zoom-in" class="m-4 lg:mx-20 lg;my-8">
              <img
                class="transition delay-150 hover:scale-125"
                src="angularicono.png"
              ></img>
            </div>
            <div data-aos="zoom-in" class="m-4 lg:mx-20 lg;my-8">
              <img
                class="transition delay-150 hover:scale-125"
                src="reacticono.png"
              ></img>
            </div>
            <div data-aos="zoom-in" class="m-4 lg:mx-20 lg;my-8">
              <img
                class="transition delay-150 hover:scale-125"
                src="javalogo.png"
              ></img>
            </div>

            <div data-aos="zoom-in" class="m-4 lg:mx-20 lg;my-8">
              <img
                class="transition delay-150 hover:scale-125"
                src="csharp.png"
              ></img>
            </div>

            <div data-aos="zoom-in" class="m-4 lg:mx-20 lg;my-8">
              <img
                class="transition delay-150 hover:scale-125"
                src="tailwind.png"
              ></img>
            </div>

            <div data-aos="zoom-in" class="m-4 lg:mx-20 lg;my-8">
              <img
                class="transition delay-150 hover:scale-125"
                src="bootstrapicono.png"
              ></img>
            </div>
          </section>
        </div>
        {/*EXPERIENCIA LABORAL*/}
        <div id="experiencia" class="hidden">
          <div data-aos="fade-up">
            <h2 class="text-3xl text-slate-700 dark:text-white font-bold tracking-widest w-[85%] m-auto text-center pt-8">
              Experiencia Laboral
            </h2>
            <section class="my-12 flex flex-col w-auto m-auto lg:flex-row lg:w-[87%] lg:my-28">
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
            <h3 class="text-3xl text-slate-700 dark:text-white my-5 px-12 font-bold tracking-widest text-center">
              Mis Proyectos
            </h3>

            <section class="my-12 flex flex-col items-center justify-center w-auto m-auto lg:flex-row lg:grid lg:grid-cols-2">
              <div class="border-1 rounded-lg bg-white dark:bg-slate-800 m-5">
                <div class="m-2">
                  <img
                    src="ceiba-sol.png"
                    alt=""
                    class="rounded-[15px] opacity-80 hover:opacity-100 transition delay-50"
                  />
                  <h4 class="font-bold my-2">CEIBA SOL S.A.S.</h4>
                  <article class="flex justify-between grid grid-rows-2 ">
                    <div class="flex flex-wrap">
                      <div>
                        <span class="bg-yellow-300 text-black text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-slate-800 dark:text-yellow-300 border border-yellow-300">
                          Javascript
                        </span>
                      </div>
                      <div>
                        <span class=" bg-[#0ac3b3] text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-slate-800 dark:text-[#0ac3b3] border border-[#0ac3b3]">
                          TailwindCSS
                        </span>
                      </div>
                      <div>
                        <span class="bg-[#62ddfd] text-black text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-slate-800 dark:text-[#62ddfd] border border-[#62ddfd]">
                          React
                        </span>
                      </div>
                      <div>
                        <span class="bg-[#509646] text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-slate-800 dark:text-lime-500 border border-[#509646]">
                          MongoDB
                        </span>
                      </div>
                      <div>
                        <span class="bg-[#90c53f] text-black text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-slate-800 dark:text-[#90c53f] border border-[#90c53f]">
                          NodeJs
                        </span>
                      </div>
                    </div>
                    <div class="flex flex-row ">
                      <a
                        href="https://github.com/CeibaSol/"
                        target="_blank"
                        class="p-1 text-2xl text-slate-600 dark:text-slate-200"
                      >
                        <BiLogoGithub class="transition delay-150 hover:scale-125"></BiLogoGithub>
                      </a>
                      <a
                        href="https://ceiba-sol-fe.vercel.app/"
                        target="_blank"
                        class="p-1 text-2xl text-slate-600 dark:text-slate-200"
                      >
                        <BiLinkExternal class="transition delay-150 hover:scale-125"></BiLinkExternal>
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
                    class="rounded-[15px] opacity-80 hover:opacity-100 transition delay-50"
                  />
                  <h4 class="font-bold my-2">APLICACION CALCULO PRESUPUESTO</h4>
                  <article class="flex justify-between grid grid-rows-2 ">
                    <div class="flex flex-wrap">
                      <div>
                        <span class="bg-[#007acc] text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-slate-800 dark:text-blue-200  border border-[#007acc]">
                          TypeScript
                        </span>
                      </div>
                      <div>
                        <span class="bg-violet-800 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-slate-800 dark:text-violet-300 border border-violet-800">
                          CSS
                        </span>
                      </div>
                      <div>
                        <span class="bg-[#c3002f] text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-slate-800 dark:text-red-200 border border-[#c3002f]">
                          Angular
                        </span>
                      </div>
                    </div>

                    <div class="flex flex-row ">
                      <a
                        href="https://github.com/Goster210/Presupuesto-app"
                        target="_blank"
                        class="p-1 text-2xl text-slate-600 dark:text-slate-200"
                      >
                        <BiLogoGithub class="transition delay-150 hover:scale-125"></BiLogoGithub>
                      </a>
                      <a
                        href="https://presupuesto-app-zeta.vercel.app/"
                        target="_blank"
                        class="p-1 text-2xl text-slate-600 dark:text-slate-200"
                      >
                        <BiLinkExternal class="transition delay-150 hover:scale-125"></BiLinkExternal>
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

            <section class="flex flex-col w-[90%] m-auto">
              <div class="w-[90%] md:max-w-[600px] m-auto">
                <div>
                  <input
                    placeholder="info@ejemplo.com"
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    class="p-3 w-full rounded-lg focus:outline-none focus:ring focus:ring-blue-400 dark:text-black"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div class="py-3">
                  <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    value={nombre}
                    placeholder="Nombre"
                    class="p-3 w-full rounded-lg focus:outline-none focus:ring focus:ring-blue-400 dark:text-black"
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>

                <div>
                  <textarea
                    name="msj"
                    id="msj"
                    value={mensaje}
                    rows="5"
                    placeholder="Mensaje"
                    class="p-3 w-full rounded-lg focus:outline-none focus:ring focus:ring-blue-400 dark:text-black"
                    onChange={(e) => setMensaje(e.target.value)}
                  ></textarea>
                </div>
                <div class="my-3">
                  <button
                    class="bg-sky-600 text-white p-3 w-full rounded-lg text-xl tracking-widest"
                    onClick={() => sendEmail()}
                  >
                    Enviar Mensaje
                  </button>
                </div>
              </div>

              <footer class="text-center mt-12 mb-5">
                <p class="hover:text-sky-500">Juan José Rincón</p>

                {/*REDES SOCIALES*/}
                <div class="text-center flex justify-center py-2 flex flex-row">
                  <a
                    href="https://www.instagram.com/juanjose.rincon/"
                    target="_blank"
                    class="pr-1 text-5xl text-[#E1306C] hover:text-sky-600"
                  >
                    <AiOutlineInstagram class="px-2"></AiOutlineInstagram>
                  </a>
                  <a
                    href="https://www.facebook.com/juanjose.rinconbalaguera"
                    target="_blank"
                    class="pr-1 text-5xl text-[#3b5998] hover:text-sky-300 "
                  >
                    <BsFacebook class="px-2"></BsFacebook>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/juan-jos%C3%A9-rinc%C3%B3n-balaguera-b385a8149/"
                    target="_blank"
                    class="pr-1 text-5xl text-sky-600 hover:text-sky-300 "
                  >
                    <BsLinkedin class="px-2"></BsLinkedin>
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=573125880706&text=Hola"
                    target="_blank"
                    class="pr-1 text-5xl text-[#2BB741] hover:text-sky-600 "
                  >
                    <BsWhatsapp class="px-2"></BsWhatsapp>
                  </a>
                  <a
                    href="https://github.com/goster210"
                    target="_blank"
                    class="pr-1 text-5xl text-violet-500 hover:text-sky-600 "
                  >
                    <BsGithub class="px-2"></BsGithub>
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
