import React from "react";
import NetNodeImg from "../../img/netnode.png"
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import LoyaltyIcon from '@material-ui/icons/Loyalty';



const StackData = {
    id: 'stack',
    lightBg: true,
    ligthText: false,
    topLine: 'Stacks',
    headLine: 'Stacks tecnológicos prueba prueba prueba prueba stacks prueba',
    description: 'La programación es el proceso utilizado para idear y ordenar las acciones necesarias para realizar un proyecto, preparar ciertas máquinas o aparatos para que  empiecen a funcionar en el momento y en la forma deseados o elaborar programas para su empleo en computadoras.1​    En la actualidad, la noción de programación se encuentra muy asociada a la creación de aplicaciones de informática y videojuegos. En este sentido, es el proceso por el cual una persona desarrolla un programa, valiéndose de una herramienta que le permita escribir el código (el cual puede estar en uno o varios lenguajes, como C++, Java y Python, entre otros) y de otra que sea capaz de “traducirlo” a lo que se conoce como lenguaje de máquina, que puede "comprender" el microprocesador.2​',
    imgStart: false,
    img: NetNodeImg,
    alt: 'stack',
    primary: true,
    darkText: true,
    children: (<>
        <section id="skills">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <AccountBalanceWalletIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Skills &amp; Technologies
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
                        ipsa delectus eum quo voluptas aspernatur accusantium distinctio
                        possimus est.
                </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {["REACT", "REACT", "REACT", "REACT", "REACT",].map((skill) => (
                        <div key={skill} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <LoyaltyIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                                <span className="title-font font-medium text-white">
                                    {skill}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    </>)
}

export default StackData;