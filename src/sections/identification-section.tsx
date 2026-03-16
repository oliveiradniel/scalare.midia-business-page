import errorBox from '../assets/images/error-box.svg';

export function IdentificationSection() {
  const challenges = [
    {
      id: 'agenda',
      label: 'Semanas com agenda cheia e outras vazias',
    },
    {
      id: 'indication',
      label: 'Depender apenas de indicação',
    },
    {
      id: 'clients',
      label: 'Postar no Instagram e não aparecer cliente',
    },
    {
      id: 'pricing',
      label: 'Clientes que acham caro ou pedem desconto o tempo todo',
    },
    {
      id: 'competition',
      label: 'Muitos tatuadores na cidade disputando os mesmos clientes',
    },
    {
      id: 'authority',
      label: 'Ter um bom trabalho mas pouca autoridade online',
    },
    {
      id: 'lead_quality',
      label: 'Receber muitas mensagens, mas poucas virarem agendamento',
    },
    {
      id: 'time_marketing',
      label: 'Não ter tempo ou estratégia para divulgar o trabalho',
    },
    {
      id: 'others',
      label: 'Entre outros...',
    },
  ];

  return (
    <div className="px-4">
      <h2 className="text-primary mx-auto w-full max-w-200 text-center text-3xl">
        Você tem algum desses{' '}
        <i className="font-playfair font-bold">desafios</i> atualmente como
        tatuador?
      </h2>

      <div className="bg-background border-primary/20 mx-auto mt-12 flex w-full max-w-220 flex-col gap-4 rounded-lg border p-8 md:flex-row">
        <ul className="flex flex-col gap-3">
          {challenges.slice(0, 5).map((challenge) => (
            <li className="flex items-start gap-2">
              <img src={errorBox} alt="" className="size-8" />
              <span className="text-lg text-white">{challenge.label}</span>
            </li>
          ))}
        </ul>

        <ul className="flex flex-col gap-3">
          {challenges.slice(5, 9).map((challenge) => (
            <li className="flex items-start gap-2">
              <img src={errorBox} alt="" className="size-8" />
              <span className="text-lg text-white">{challenge.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-16 flex max-w-220 flex-col items-center gap-8 sm:flex-row">
        <h3 className="text-2xl font-medium text-white">
          Se sim, fique tranquilo!
        </h3>

        <p className="flex-1 text-gray-400">
          Isso acontece por que a maioria dos tatuadores não sabe usar o
          Instagram de forma estratégica. No meu curso você aprende desde{' '}
          <i className="text-primary font-playfair font-medium">
            organização do seu perfil a como gerar urgência
          </i>{' '}
          para fechar uma tatuagem com o <strong>preço que você merece</strong>.
        </p>
      </div>

      <div className="bg-primary/40 my-8 h-[0.5px] w-full" />
    </div>
  );
}
