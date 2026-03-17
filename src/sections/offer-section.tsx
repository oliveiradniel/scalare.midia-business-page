import offerImage from '../assets/images/offer.svg';
import sealImage from '../assets/images/seal.svg';
import checkBoxImage from '../assets/images/check-box.svg';
import arrowCircleImage from '../assets/images/arrow-square.svg';

export function OfferSection() {
  const advantages = [
    'Curso completo passo a passo',
    'Estratégias específicas para tatuadores',
    'Atualizações futuras incluídas',
    'Acesso imediato após a compra',
  ];

  return (
    <div className="flex flex-col items-center px-4">
      <div className="bg-primary/40 my-8 h-[0.6px] w-full mask-x-from-90%" />

      <small className="text-center text-gray-400 before:mr-2 before:content-['['] after:ml-2 after:content-[']']">
        NÃO PERCA MAIS TEMPO E DINHEIRO!
      </small>

      <h2 className="mt-4 text-3xl text-white">
        Quanto valer ter{' '}
        <span className="from-primary bg-linear-to-r to-white bg-clip-text font-medium text-transparent">
          clientes chegando todos os dias
        </span>
        ?
      </h2>

      <p className="mt-4 max-w-200 text-center text-gray-400">
        Uma única tatuagem que você fechar já pode pagar esse treinamento
        inteiro. Agora imagine aprender um método que pode te ajudar a gerar
        pedidos de orçamento constantemente usando Instagram e anúncios simples.
      </p>

      <div className="mt-16 flex w-full max-w-260 flex-col justify-between gap-16 lg:flex-row">
        <div className="border-primary/40 rounded-lg border">
          <div className="flex flex-col gap-4 p-4">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-white/90 p-2">
                <img
                  aria-hidden="true"
                  src={offerImage}
                  alt=""
                  className="size-12"
                />
              </div>

              <div>
                <h3 className="text-primary">
                  Acesso completo ao método{' '}
                  <i className="font-playfair text-lg font-medium">
                    Inktensity
                  </i>
                </h3>

                <span className="text-gray-400">Vitalício</span>
              </div>
            </div>

            <div>
              <span className="text-gray-400">De</span>{' '}
              <strong className="from-primary bg-linear-to-r to-white bg-clip-text text-2xl font-bold text-transparent line-through">
                R$ 497,00
              </strong>{' '}
              <span className="text-sm font-normal text-gray-400">/anual</span>
            </div>
          </div>

          <div className="bg-primary/20 h-[0.3px] w-full" />

          <div className="flex flex-col p-4">
            <div className="mb-2">
              <span className="text-gray-400">Por</span>{' '}
              <strong className="from-primary bg-linear-to-r to-white bg-clip-text text-2xl font-bold text-transparent">
                R$ 147,00
              </strong>{' '}
              <span className="text-sm font-normal text-gray-400">
                /uma única vez
              </span>
            </div>

            <span className="mb-4 text-gray-400">
              Ou 12x de <strong>R$ 15,20</strong>
            </span>

            <ul className="mb-4 flex flex-col gap-3">
              {advantages.map((advantage, index) => (
                <li
                  key={`advantage-${index}`}
                  className="flex items-center gap-2"
                >
                  <img
                    aria-hidden="true"
                    src={checkBoxImage}
                    alt=""
                    className="size-6"
                  />

                  <span className="text-white">{advantage}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="bg-primary flex cursor-pointer items-center justify-center rounded-lg px-2 py-1 text-lg font-bold"
            >
              <span className="flex-1">Quero testar agora!</span>
              <img
                aria-hidden="true"
                src={arrowCircleImage}
                alt=""
                className="size-10"
              />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-center text-gray-400">
            Você pode testar, assistir as aulas e testar o método.
          </p>

          <p className="mt-2 text-center text-gray-400">
            Se acha que não valeu a pena, basta pedir reembolso dentro de{' '}
            <strong className="text-primary">7 dias</strong>.
          </p>

          <img
            aria-hidden="true"
            src={sealImage}
            alt=""
            className="mt-16 size-80"
          />
        </div>
      </div>
    </div>
  );
}
