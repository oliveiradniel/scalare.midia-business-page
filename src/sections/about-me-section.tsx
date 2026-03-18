import { motion } from 'motion/react';

import avatarImage from '../assets/images/avatar.png';

export function AboutMeSection() {
  return (
    <div id="about-me" className="mt-16 scroll-mt-40 px-4">
      <div className="flex flex-col items-center justify-center gap-16 overflow-hidden lg:flex-row">
        <div>
          <motion.img
            initial={{ opacity: 0, scale: 1.4 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 1,
              },
            }}
            viewport={{ amount: 0.1, once: true }}
            src={avatarImage}
            alt="Rafael Souza - Gestor de Tráfego"
            className="h-auto w-120"
          />
        </div>

        <div className="flex flex-col items-center gap-4 lg:items-start">
          <motion.span
            initial={{ filter: 'blur(4px)' }}
            whileInView={{
              filter: 'blur(0px)',
              transition: {
                duration: 1,
              },
            }}
            viewport={{ once: true }}
            className="border-primary/20 before:text-primary w-full max-w-26 rounded-full border bg-[#161616] px-3 py-1 text-center text-xs text-gray-300"
          >
            Sobre mim
          </motion.span>

          <div className="flex w-full max-w-160 flex-col gap-8 text-center text-gray-400 lg:text-start">
            <motion.p
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
              viewport={{ once: true }}
            >
              Nos últimos anos, mergulhei profundamente nos estudos e na prática
              do marketing digital com o objetivo de ajudar empresas e
              profissionais autônomos a conquistarem mais espaço na internet.
              Durante essa jornada, busquei entender não apenas como funcionam
              as ferramentas de anúncios, mas principalmente como transformar
              estratégias digitais em resultados concretos para negócios que
              desejam crescer e alcançar mais pessoas.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 80 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 0.2 },
              }}
              viewport={{ once: true }}
            >
              Ao longo de mais de três anos atuando como gestor de tráfego, tive
              a oportunidade de trabalhar com diferentes perfis de clientes,
              ajudando empresas e autônomos a aumentarem sua visibilidade e
              atraírem novos clientes através da internet. Essa experiência
              prática mostrou que muitos profissionais talentosos deixam de
              crescer simplesmente por não saberem como se posicionar ou atrair
              clientes no ambiente digital.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 80 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 0.4 },
              }}
              viewport={{ once: true }}
            >
              Foi justamente a partir dessa realidade que criei o Método
              Inktensity, pensado especialmente para tatuadores que não possuem
              conhecimento em marketing, mas querem se posicionar melhor e
              atrair mais clientes. O método reúne estratégias práticas de
              posicionamento no Instagram, criação de anúncios simples e
              eficientes e técnicas para fechar mais vendas, permitindo que
              tatuadores transformem seu perfil em uma verdadeira máquina de
              gerar pedidos de orçamento.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
