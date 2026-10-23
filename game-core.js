(function(root){
'use strict';
const pairs=[
{id:'tree',a:['🌳','Árvore'],b:['🌤️','Sombra e frescor'],text:'As árvores fazem sombra e liberam vapor de água pelas folhas. Isso ajuda a refrescar o entorno. Na vida real, precisam de espaço, tempo para crescer e cuidado.'},
{id:'garden',a:['🌼','Jardim'],b:['💧','Água entra no solo'],text:'No solo permeável do jardim, parte da água da chuva consegue entrar na terra. No concreto, mais água escorre pela superfície. Jardins ajudam, mas não resolvem sozinhos os alagamentos.'},
{id:'straw',a:['🌾','Palha sobre a terra'],b:['🌱','Umidade protegida'],text:'A palha cobre o solo, reduz a perda de água por evaporação e protege contra o impacto da chuva. Isso ajuda as plantas e a conservação da terra.'},
{id:'bin',a:['🗑️','Lixo no lugar certo'],b:['🌧️','Menos lixo nos bueiros'],text:'A chuva pode levar o lixo das ruas até os bueiros. Descartar corretamente os resíduos ajuda a evitar entupimentos. A cidade também precisa de limpeza e boa drenagem.'},
{id:'bottle',a:['🚰','Beber água'],b:['🧒','Cuidar do corpo no calor'],text:'Em dias quentes, beba água ao longo do dia e faça pausas em locais frescos. Se sentir tontura ou mal-estar, procure um adulto.'},
{id:'river',a:['🏞️','Vegetação na margem'],b:['🟤','Menos solo levado ao rio'],text:'Raízes e vegetação ajudam a segurar a terra das margens. Assim, menos solo é levado para o rio pela chuva. Cidade e campo precisam cuidar dessa proteção.'}
];
const questions=[
{q:'Uma rua com árvores pode ficar mais agradável no calor. Por quê?',options:['As árvores fazem sombra e liberam vapor de água.','As árvores fazem o sol desaparecer.'],correct:0,icon:'🌳',text:pairs[0].text},
{q:'“Hoje está chovendo em Campinas.” Isso descreve…',options:['O clima de muitos anos.','O tempo de hoje.'],correct:1,icon:'🌧️',text:'Tempo é a condição da atmosfera em um momento. Clima é o conjunto de padrões observado ao longo de muitos anos, geralmente pelo menos 30.'},
{q:'Qual superfície permite que mais água entre no solo?',options:['Um jardim com solo permeável.','Uma área coberta de concreto.'],correct:0,icon:'💧',text:pairs[1].text},
{q:'O que pode ajudar a proteger o solo de uma plantação?',options:['Deixar a terra sempre descoberta.','Cobrir o solo com palha.'],correct:1,icon:'🌾',text:pairs[2].text},
{q:'O que fazer ao encontrar uma rua alagada?',options:['Ficar longe e procurar um adulto em local seguro.','Entrar na água para descobrir a profundidade.'],correct:0,icon:'🛑',text:'Não atravesse alagamentos. A água pode esconder buracos, correntezas e sujeira que causa doenças. Procure um adulto responsável em um local seguro.'},
{q:'No calor, os animais de criação também precisam…',options:['Ficar sempre expostos ao sol.','Ter acesso a água e sombra.'],correct:1,icon:'🐄',text:'Os animais também podem sofrer com o calor. Água e sombra, junto com o manejo adequado, ajudam a cuidar da saúde deles.'},
{q:'Em Campinas, o verão costuma ser…',options:['Quente e chuvoso.','Sempre frio e sem chuva.'],correct:0,icon:'☀️',text:'Em Campinas, o verão costuma ser quente e chuvoso, e o inverno é mais seco. Isso não significa que todos os dias da estação sejam iguais.'},
{q:'Jogar lixo na rua pode piorar alagamentos?',options:['Não, o lixo desaparece com a chuva.','Sim, pode entupir bueiros.'],correct:1,icon:'🗑️',text:pairs[3].text},
{q:'Chuva demais pode prejudicar uma plantação?',options:['Sim, pode encharcar o solo e danificar plantas.','Não, quanto mais chuva, sempre melhor.'],correct:0,icon:'🌱',text:'As plantas precisam de água, mas o excesso pode dificultar a chegada de oxigênio às raízes. Chuvas fortes também podem levar embora parte do solo.'}
];
function shuffle(items,random=Math.random){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function memoryDeck(){return shuffle(pairs.flatMap(p=>['a','b'].map(side=>({pair:p.id,side,icon:p[side][0],label:p[side][1]}))));}
function outcome(board){const lines=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(const line of lines){if(board[line[0]]&&line.every(i=>board[i]===board[line[0]]))return {winner:board[line[0]],line};}return board.every(Boolean)?{draw:true}:null;}
const api={pairs,questions,shuffle,memoryDeck,outcome};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.Clima=api;
})(globalThis);
