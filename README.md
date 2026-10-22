# GiraClima
Roleta educativa para crianças de 8 a 12 anos, sobre clima, cidade e campo em Campinas. São 12 perguntas em quatro temas, sem pontuação.

## Executar
Requer Node.js 20 ou superior. Sem dependências de aplicação.

```sh
cd /workspace/climeta
npm start
```

O servidor usa a porta 3000 (ou `PORT`). Acesse a aplicação pelo encaminhamento de portas da sua ferramenta. As fontes externas são opcionais e possuem alternativas locais.

## Estado
Primeiro protótipo funcional. As ilustrações são esquemáticas e precisam de revisão visual e pedagógica. Fontes e limites da consulta estão no rodapé da aplicação. Nenhuma informação pessoal é coletada e o progresso fica apenas na sessão da página.

## GitHub Pages
O site é estático; não precisa do servidor Node.js no Pages. Em Settings → Pages, selecione Deploy from a branch, branch `main`, pasta `/ (root)` e Save. Os caminhos dos recursos são relativos para funcionar em `/climeta/`.

## Livro para TV
Abra `tv.html` no navegador (também funciona diretamente como arquivo offline). São 16 telas em loop automático; padrão de 25 segundos por tela, ajustável para 20 ou 35. Espaço pausa; setas navegam; botão Tela cheia ou F11. Mova o mouse para exibir os controles. Use “Baixar offline” para salvar o HTML completo, com imagens incorporadas. A apresentação não tem áudio e usa fontes locais. Conecte um computador à TV por HDMI e desative a suspensão automática para o evento.

Narrativa e quatro ilustrações aproveitadas do livro Jequi fornecido pelo usuário; texto adaptado ao GiraClima. Conceitos apoiados na apresentação e na nota técnica fornecidas anteriormente. A tela sobre mudança climática explicita a contribuição humana; a tela sobre El Niño evita tratar projeções como certeza local. O PDF integral do plano climático municipal não foi consultado. Teste visual em TV real ainda necessário.
