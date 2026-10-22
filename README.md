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
