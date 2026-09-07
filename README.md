# Site da Marceli Reis

Site de atendimento psicológico online para adultos, com apresentação profissional, abordagem TCC, perguntas frequentes e links de agendamento pelo WhatsApp.

## Executar localmente

Requer Node.js 22.13 ou superior.

```sh
npm ci
npm run dev
```

Abra o endereço local informado no terminal. Para encerrar, pressione Ctrl+C.

## Personalizar

- `app/profissional.ts`: nome, CRP, apresentação, abordagem e WhatsApp (país + DDD + número).
- `app/page.tsx`: conteúdo e estrutura da página.
- `app/faq.tsx`: perguntas frequentes.
- `app/globals.css`: cores, fontes e layout responsivo.
- `public/marceli-reis.jpeg`: foto da profissional.

## Verificar

```sh
npm run build
npx tsc --noEmit
```

## Publicação

O projeto utiliza React, TypeScript e Vinext. O envio para o GitHub armazena o código; não publica o site automaticamente. A hospedagem ainda precisa ser configurada.

A indexação está desativada em `app/layout.tsx` enquanto o site está em preparação. Revise os dados e textos com a profissional e ajuste essa configuração na publicação.
