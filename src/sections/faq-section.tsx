import { Root, Item, Trigger, Content } from '@radix-ui/react-accordion';

import { motion } from 'motion/react';

import { MinusIcon, PlusIcon } from 'lucide-react';

import { whatsappMessage } from '../utils/whatsapp-message';

export function FAQSection() {
  const faq = [
    {
      id: 'understand',
      question: 'Preciso entender de marketing para aplicar o método?',
      response:
        'Não. O Método Inktensity foi criado justamente para tatuadores que não têm experiência com marketing ou anúncios. Tudo é explicado de forma simples e prática para você aplicar no seu estúdio.',
    },
    {
      id: 'followers',
      question: 'Funciona mesmo se eu tiver poucos seguidores?',
      response:
        'Sim. As estratégias ensinadas no treinamento mostram como atrair pessoas novas para o seu perfil e gerar pedidos de orçamento, mesmo que você tenha poucos seguidores.',
    },
    {
      id: 'ads',
      question: 'Preciso investir em anúncios?',
      response:
        'Os anúncios ajudam a acelerar muito os resultados, mas o método também mostra como melhorar seu Instagram para atrair clientes organicamente. Você decide quando e quanto investir.',
    },
    {
      id: 'time',
      question: 'Em quanto tempo vou ver resultados?',
      response:
        'Isso pode variar de tatuador para tatuador. Alguns alunos começam a receber mais pedidos de orçamento rapidamente após aplicar as estratégias, mas o resultado depende da implementação do que é ensinado no treinamento.',
    },
    {
      id: 'access',
      question: 'Como vou acessar o curso?',
      response:
        'Após a confirmação do pagamento, você receberá um e-mail com os dados de acesso à plataforma do curso. O acesso é imediato.',
    },
    {
      id: 'no_like',
      question: 'E se eu não gostar do treinamento?',
      response:
        'Você tem 7 dias de garantia incondicional. Se dentro desse prazo você achar que o treinamento não é para você, basta solicitar o reembolso e receberá 100% do valor pago.',
    },
    {
      id: 'mobile',
      question: 'Posso assistir pelo celular?',
      response:
        'Sim. O curso pode ser acessado pelo celular, tablet ou computador, de onde você preferir.',
    },
  ];

  const whatsappText = whatsappMessage(
    'Olá! Tenho uma dúvida sobre o Método Inktensity que não encontrei no FAQ. Pode me ajudar?',
  );

  return (
    <div
      id="faq"
      className="mt-16 flex scroll-mt-40 flex-col items-center gap-16 px-4 lg:flex-row"
    >
      <div className="flex flex-1 flex-col gap-2 lg:gap-16">
        <div className="flex flex-col items-center gap-2 lg:items-start">
          <motion.span
            initial={{ filter: 'blur(4px)' }}
            whileInView={{
              filter: 'blur(0px)',
              transition: {
                duration: 1,
              },
            }}
            viewport={{ once: true }}
            className="border-primary/20 before:text-primary w-full max-w-20 rounded-full border bg-[#161616] px-3 py-1 text-center text-xs text-gray-300"
          >
            FAQ
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            viewport={{ once: true }}
            className="text-center text-3xl text-white"
          >
            Perguntas{' '}
            <span className="from-primary bg-linear-to-r to-white bg-clip-text font-medium text-transparent">
              Frequentes
            </span>
          </motion.h2>
        </div>

        <div className="flex flex-col items-center gap-2 lg:items-start">
          <motion.p
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            viewport={{ once: true }}
            className="text-center text-white lg:text-start"
          >
            Ainda está com alguma dúvida antes de começar?
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            viewport={{ once: true }}
            className="text-center text-gray-400 lg:text-start"
          >
            Se sua pergunta não apareceu aqui, pode falar diretamente comigo. Eu
            mesmo vou te responder e te ajudar a entender se o Método Inktensity
            faz sentido para o seu estúdio.
          </motion.p>

          <motion.a
            href={whatsappText}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ filter: 'blur(4px)' }}
            whileInView={{
              filter: 'blur(0px)',
              transition: {
                duration: 1,
              },
            }}
            viewport={{ once: true }}
            whileTap={{ scale: 0.97 }}
            whileHover={{
              scale: 1.02,
            }}
            type="button"
            className="bg-primary mt-2 w-full max-w-120 cursor-pointer rounded-full p-2 text-center text-lg font-medium"
          >
            Fale comigo
          </motion.a>
        </div>
      </div>

      <Root type="multiple" className="w-full flex-1 overflow-hidden">
        {faq.map((f, index) => {
          const delay = index * 0.2;

          return (
            <Item
              asChild
              key={f.id}
              value={f.id}
              className="border-primary/40 data-[state=open]:bg-primary/10 mt-1 flex flex-col gap-2 rounded-lg border px-6 py-3 first:mt-0"
            >
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 1,
                    delay,
                  },
                }}
                viewport={{ once: true }}
              >
                <Trigger
                  asChild
                  className="data-[state=open]:text-primary group flex cursor-pointer items-center justify-between text-start text-white"
                >
                  <div>
                    {f.question}

                    <PlusIcon className="size-4 group-data-[state=open]:hidden" />
                    <MinusIcon className="hidden size-4 group-data-[state=open]:flex" />
                  </div>
                </Trigger>
                <Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-sm text-gray-400">
                  <div>{f.response}</div>
                </Content>
              </motion.div>
            </Item>
          );
        })}
      </Root>
    </div>
  );
}
