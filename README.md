# Site da Marceli Reis

Site de atendimento psicológico online para adultos, com apresentação, TCC, perguntas frequentes e WhatsApp.

## Desenvolvimento

Requer Node.js 22.13 ou superior. Execute `npm ci` e `npm run dev`.

## Cloudflare Pages com GitHub

Crie um projeto **Pages**, conectado ao repositório `ThallesAle/site-da-marceli-psi`:

- Branch de produção: `master`
- Framework preset: `None`
- Build command: `npm run build:pages`
- Build output directory: `dist/client`
- Root directory: raiz do repositório (deixe em branco)
- Variável de ambiente: `NODE_VERSION` = `22.16.0`
- Nome sugerido: `marcelireis` (sujeito à disponibilidade)

Após a primeira publicação, cada push na branch master dispara uma atualização. O painel informa o endereço definitivo. Opcionalmente, configure `SITE_URL` com esse endereço HTTPS ou com o domínio próprio conectado.

O comando `npm run build:pages` gera uma versão estática com todo o conteúdo e as interações das perguntas frequentes, sem depender de login ou serviços do Sites. Publique apenas `dist/client`.

O comando original `npm run build` e a configuração `.openai/hosting.json` foram preservados para a hospedagem anterior.

## Personalizar

- `app/profissional.ts`: dados profissionais e contato.
- `app/page.tsx`: textos, biografia e estrutura.
- `app/faq.tsx`: perguntas frequentes.
- `app/globals.css`: aparência e layout.
- `public/marceli-inicio.png`: foto inicial.
- `public/marceli-sobre-mim.png`: foto da biografia.

A indexação está permitida. O domínio próprio é contratado separadamente; a configuração no Google Search Console deve usar o endereço definitivo.
