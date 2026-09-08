import { ArrowUpRight, Video, MessageCircle, Heart, Brain, Footprints } from 'lucide-react';
import { profissional as p } from './profissional';
import { Faq } from './faq';

export default function Home() {
  const contato = `https://wa.me/${p.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Olá, Marceli! Gostaria de saber mais sobre o atendimento psicológico online e consultar os horários disponíveis.')}`;
  return <>
    <a className="skip" href="#conteudo">Pular para o conteúdo</a>
    <header className="header"><div className="wrap header-inner"><a className="brand" href="#inicio">{p.nome}<small>PSICÓLOGA · CRP {p.crp}</small></a><nav aria-label="Navegação principal"><a href="#sobre">Sobre</a><a href="#atendimento">Atendimento</a><a href="#abordagem">Abordagem</a><a className="cta nav-contact" href={contato} target="_blank" rel="noopener noreferrer">Agendar</a></nav></div></header>
    <main id="conteudo">
      <section className="hero wrap" id="inicio" aria-labelledby="titulo"><figure className="portrait"><img src="/marceli-inicio.png?v=2" alt="Marceli Reis, psicóloga" width="1066" height="1600" fetchPriority="high"/></figure><div className="hero-copy"><p className="eyebrow">CRP {p.crp}</p><h1 id="titulo">{p.nome}</h1><p className="subtitle">Psicóloga Clínica</p><p className="intro">Ofereço um espaço para falar sobre você, com escuta e acolhimento. Atendo adultos com a Terapia Cognitivo-Comportamental (TCC).</p><a className="cta" href={contato} target="_blank" rel="noopener noreferrer">Agendar Consulta</a><p className="note">Atendimento online para adultos. Consulte a disponibilidade.</p></div></section>
      <section className="about-band" id="acolhimento"><div className="reading section"><h2>Sua história merece<br/>tempo e atenção.</h2><div className="accent-line"/><p>Em meio às responsabilidades do dia a dia, pode ser difícil encontrar um momento para olhar para si. A terapia pode ser esse espaço de conversa sobre o que você sente, vive e deseja compreender.</p><p>{p.apresentacao}</p><p>Se você tem dúvidas sobre como começar, podemos conversar sobre o atendimento e os próximos passos.</p><a className="text-link" href={contato} target="_blank" rel="noopener noreferrer">Vamos conversar <ArrowUpRight size={18}/></a></div></section>
      <section className="wrap section" id="atendimento"><div className="section-heading"><p className="eyebrow">ATENDIMENTO</p><h2>Cuidado que cabe na sua rotina.</h2><p>Atendimento psicológico online para adultos.</p></div><div className="online-card"><div className="icon"><Video size={28} strokeWidth={1.5}/></div><div><h3>Um encontro, onde você estiver.</h3><p>As sessões acontecem por videochamada. Para o atendimento, peço apenas que você tenha uma conexão estável e esteja em um lugar reservado, onde possa conversar com tranquilidade.</p><p>No primeiro contato, converso com você sobre os horários, valores e orientações para o nosso encontro.</p><a className="text-link" href={contato} target="_blank" rel="noopener noreferrer">Consultar disponibilidade <ArrowUpRight size={18}/></a></div></div></section>
      <section className="approach-band" id="abordagem"><div className="wrap section"><div className="section-heading"><p className="eyebrow">ABORDAGEM</p><h2>Terapia Cognitivo-Comportamental</h2><p>Um olhar para pensamentos, emoções e comportamentos,<br className="desktop-break"/> considerando suas experiências e seu contexto.</p></div><div className="cards">{[{Icon:Brain,title:'Pensamentos',text:'Um espaço para observar como você interpreta as situações e os significados que atribui a elas.'},{Icon:Heart,title:'Emoções',text:'Uma oportunidade para reconhecer o que você sente e conversar sobre suas experiências emocionais.'},{Icon:Footprints,title:'Comportamentos',text:'Um convite para olhar para suas ações, escolhas e hábitos no cotidiano.'}].map(({Icon,title,text})=><article key={title}><div className="icon"><Icon size={26} strokeWidth={1.5}/></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="about-band" id="sobre" aria-labelledby="sobre-titulo">
        <div className="wrap section biography-layout"><figure className="biography-photo"><img src="/marceli-sobre-mim.png" alt="Marceli dos Reis Oliveira sorrindo, sentada em uma poltrona e segurando uma caneca" width="1152" height="1600" loading="lazy"/></figure><div className="biography-text">
          <h2 id="sobre-titulo">Sobre mim</h2>
          <div className="accent-line"/>
          <p>Olá, eu sou Marceli dos Reis Oliveira, psicóloga, e acredito que cuidar da saúde mental também é aprender a olhar para si com mais acolhimento, compreensão e respeito.</p>
          <p>Atuo na Psicologia há 4 anos, acompanhando pessoas que chegam à terapia com diferentes demandas, como ansiedade, depressão, sobrecarga emocional, dificuldades nos relacionamentos, autoestima e desafios do dia a dia.</p>
          <p>Minha atuação é baseada na Terapia Cognitivo-Comportamental (TCC), uma abordagem da Psicologia fundamentada cientificamente, que busca compreender a relação entre pensamentos, emoções e comportamentos e, a partir disso, construir estratégias que possam contribuir para mudanças reais e possíveis na vida cotidiana.</p>
          <p>Ao longo desses anos, tenho aprendido que cada pessoa chega à terapia com uma história única. Por isso, acredito em um processo construído de forma individualizada, respeitando o momento, as necessidades e os limites de cada pessoa.</p>
          <p>Meu objetivo é oferecer um espaço seguro, acolhedor e sem julgamentos, onde você possa falar sobre o que sente, compreender melhor o que está acontecendo e desenvolver recursos para lidar com aquilo que hoje parece difícil.</p>
          <p>A psicoterapia não precisa ser sobre mudar quem você é. Pode ser sobre se conhecer melhor, compreender seus sentimentos e pensamentos e construir novas formas de se relacionar consigo mesma, com os outros e com a própria vida.</p>
          <p>Se você sente que está na hora de olhar para si com mais cuidado, a terapia pode ser um primeiro passo.</p>
        </div>
        </div>
      </section>
      <section className="reading section" id="duvidas"><div className="section-heading"><p className="eyebrow">PERGUNTAS FREQUENTES</p><h2>Antes do primeiro encontro.</h2><p>Algumas informações para ajudar você a começar.</p></div><Faq/></section>
      <section className="contact"><div className="wrap contact-inner"><div><p className="eyebrow">VAMOS CONVERSAR</p><h2>O primeiro passo pode<br/>ser uma conversa.</h2><p>Fale comigo para tirar suas dúvidas e combinarmos um horário.</p></div><div className="contact-action"><a className="cta light" href={contato} target="_blank" rel="noopener noreferrer"><MessageCircle size={20}/> Conversar pelo WhatsApp</a><a className="phone" href={contato} target="_blank" rel="noopener noreferrer">+55 (12) 99222-2869</a></div></div></section>
    </main>
    <footer className="wrap footer"><div><a className="brand" href="#inicio">{p.nome}</a><p>Psicóloga · CRP {p.crp}<br/>Atendimento online para adultos</p></div><nav aria-label="Navegação do rodapé"><a href="#sobre">Sobre mim</a><a href="#atendimento">Atendimento</a><a href="#abordagem">Abordagem</a></nav><p>© {new Date().getFullYear()} Marceli Reis</p></footer>
    <a className="floating-contact" href={contato} target="_blank" rel="noopener noreferrer" aria-label="Conversar com Marceli Reis pelo WhatsApp"><MessageCircle size={28} strokeWidth={1.8}/></a>
  </>;
}







