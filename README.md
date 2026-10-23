# GiraClima — jogos do clima de Campinas

Dois jogos educativos para crianças de 8 a 12 anos, com a identidade visual do GiraClima.

- **Memória do clima:** seis pares de cuidado e efeito. As cartas de um par têm imagens e textos diferentes. Cada acerto mostra uma explicação; tentativas incorretas podem ser refeitas sem limite.
- **Velha do clima:** duas crianças compartilham a tela, como Sol e Chuva. Respondem a uma pergunta antes de marcar a casa; erros oferecem uma dica e nova tentativa. Vitória e empate têm encerramento e reinício.

## Executar
Requer Node.js 20 ou superior, sem dependências de aplicação.

```sh
npm start
```

Porta padrão 3000, configurável por `PORT`. O GitHub Pages publica a raiz da branch `main`: https://danimaciel.github.io/climeta/ . Recursos com caminhos relativos, sem fontes ou serviços externos obrigatórios. Não há coleta de dados nem persistência de partidas.

## Validar

```sh
npm test
```

Testes cobrem pares, embaralhamento, linhas vencedoras, empate e conteúdo das perguntas. A interface também foi verificada em Chromium headless: memória completa, tentativa incorreta, vitória e reinício da velha, dicas, troca de jogo e largura de celular (375 px), sem erros JavaScript.

## Conteúdo e histórico
Temas adaptados dos materiais PESCO fornecidos pelo usuário; referências e limites no rodapé do site. Revisão com educadores e observação de crianças durante o evento são recomendadas para ajustar dificuldade e clareza.

Roleta, livro de TV e missão da escola foram retirados da versão publicada. As versões anteriores permanecem no histórico Git, sem links ou arquivos dessas experiências no site atual.
