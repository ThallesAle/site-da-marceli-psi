'use client';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
const perguntas = [
  ['Como acontecem as sessões online?', 'Os encontros acontecem por videochamada. O link e as orientações de acesso serão combinados com a Marceli no agendamento.'],
  ['Como funciona a primeira sessão?', 'É um momento para compartilhar o que motivou sua busca, tirar dúvidas e conversar sobre como o acompanhamento pode acontecer. Não é necessário preparar um roteiro.'],
  ['O que preciso para o atendimento?', 'Um celular ou computador com câmera e microfone, uma conexão estável e um local reservado em que você possa conversar. Fones de ouvido podem ajudar.'],
  ['Qual é o público atendido?', 'A Marceli realiza atendimento psicológico online para adultos, com a abordagem da Terapia Cognitivo-Comportamental (TCC).'],
  ['Como consultar valores e horários?', 'Entre em contato pelo WhatsApp +55 (12) 99222-2869 para consultar valores, horários disponíveis e combinar o agendamento.'],
];
export function Faq() {
  return <Accordion className="faq-list">{perguntas.map(([pergunta,resposta],i)=><AccordionItem key={pergunta} value={String(i)}><AccordionTrigger className="faq-trigger">{pergunta}</AccordionTrigger><AccordionContent className="faq-answer">{resposta}</AccordionContent></AccordionItem>)}</Accordion>;
}
