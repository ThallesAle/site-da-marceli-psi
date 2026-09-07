'use client';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
const perguntas = [
  ['Como acontecem as sessões online?', 'Os encontros acontecem por videochamada. No agendamento, combino com você o acesso e envio as orientações para a sessão.'],
  ['Como funciona a primeira sessão?', 'Na primeira sessão, quero conhecer um pouco da sua história e compreender o que motivou sua busca. Também é um momento para você tirar dúvidas e conversarmos sobre como o acompanhamento pode acontecer. Não é necessário preparar um roteiro.'],
  ['O que preciso para o atendimento?', 'Um celular ou computador com câmera e microfone, uma conexão estável e um local reservado em que você possa conversar. Fones de ouvido podem ajudar.'],
  ['Qual é o público atendido?', 'Realizo atendimento psicológico online para adultos, com a abordagem da Terapia Cognitivo-Comportamental (TCC).'],
  ['Como consultar valores e horários?', 'Fale comigo pelo WhatsApp +55 (12) 99222-2869. Por lá, conversamos sobre valores, horários disponíveis e combinamos seu agendamento.'],
];
export function Faq() {
  return <Accordion className="faq-list">{perguntas.map(([pergunta,resposta],i)=><AccordionItem key={pergunta} value={String(i)}><AccordionTrigger className="faq-trigger">{pergunta}</AccordionTrigger><AccordionContent className="faq-answer">{resposta}</AccordionContent></AccordionItem>)}</Accordion>;
}

