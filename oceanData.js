const oceanData = {
  pacific: {
    id: 'pacific',
    name: 'Oceano Pacífico',
    subtitle: 'O maior e mais profundo oceano do planeta',
    area: '165,2 milhões km²',
    maxDepth: '11.034 metros',
    avgTemp: '4.0°C',
    volume: '710M km³',
    description: 'O Oceano Pacífico é o maior e mais profundo dos cinco oceanos da Terra, cobrindo cerca de um terço da superfície do planeta. Ele se estende da costa oeste das Américas até a costa leste da Ásia e da Oceania, conectando diversos continentes, culturas e ecossistemas.',
    heroImage: 'https://services.meteored.com/img/article/o-oceano-atlantico-esta-a-aumentar-ou-a-diminuir-geologia-placas-tectonicas-1708586204079_1280.jpg',

    characteristics: [
      'É maior que toda a área terrestre combinada.',
      'Possui diversas fossas submarinas e cadeias montanhosas submersas.',
      'Frequentemente afetado por terremotos, erupções e tsunamis, especialmente nas bordas continentais.'
    ],

    marineLife: [
      'Lar de uma enorme diversidade de vida marinha, incluindo peixes, mamíferos, corais e invertebrados.',
      'Importante rota migratória para várias espécies marinhas, como baleias e tartarugas.'
    ],

    countries: [
      'Países Americanos: </br>América do Norte: Canadá, Estados Unidos, México. </br>América Central: Guatemala, Honduras, El Salvador, Nicarágua, Costa Rica, Panamá.	</br>América do Sul: Colômbia, Equador, Peru, Chile. ',
      'Países Asíaticos: </br>	Rússia, China, Coreia do Norte, Coreia do Sul, Japão, Filipinas, Vietnã, Malásia, Tailândia, Brunei, Indonésia e Singapura. ',
      'Países Oceânicos: </br>	Austrália, Nova Zelândia, Papua-Nova Guiné, Ilhas Salomão, Vanuatu, Fiji, Kiribati, Nauru, Tuvalu, Samoa, Tonga, Estados Federados da Micronésia, Palau, Ilhas Marshall e Timor-Leste.'
    ],

    rivers: [
      'Países Americanos:</br>América do Norte: Rio Columbia (EUA/Canadá), Rio Fraser (Canadá), Rio Sacramento (EUA, Califórnia), Rio Colorado (EUA, deságua no Golfo da Califórnia), Rio Tijuana (EUA/México), Rio Yukon (EUA/Canadá, deságua no Mar de Bering, que é parte do Pacífico)</br>América Central e Caribe: Rio Ulúa (Honduras), Rio Lempa (Honduras/El Salvador), Rio Tempisque (Costa Rica)</br>América do Sul (Costa do Pacífico): Rio Maipo (Chile), Rio Bio Bio (Chile), Rio Itata (Chile), Rio San Juan (Costa Rica/Nicarágua), Rio Patuca (Honduras, deságua em área próxima ao Pacífico), Rio Guayas (Equador), Rio Tumbes (Peru/Equador), Rio Patate (Equador).',
      'Países Asíaticos:</br>Regiões Costeiras do Pacífico: Rio Yangtzé (extremo leste, China), Rio Mekong (deságua no Mar da China Meridional, parte do Pacífico), Rio Amarelo (China, deságua no Mar da China Oriental), Rio Fuji (Japão), Rio Han (Coreia do Sul).',
      'Países Oceânicos:</br>Rio Sepik (Papua Nova Guiné), Rio Fly (Papua Nova Guiné), Rio Waikato (Nova Zelândia).'
    ],

    animals: {
      endangered: [
        { name: 'Foca-monge-do-havaí', img: 'https://blogdopescador.com/wp-content/uploads/2022/11/alimentacao-da-foca-monge-do-havai-.jpg', summary: 'A foca-monge-do-havaí (Neomonachus schauinslandi) é uma espécie de mamífero marinho pinípede que habita as águas quentes do arquipélago havaiano, no Oceano Pacífico. Ela é a única espécie de foca tropical remanescente no mundo e está atualmente ameaçada de extinção, com uma população estimada em cerca de 1.500 indivíduos. Essa foca vive principalmente nas áreas costeiras e ilhas do Havaí, incluindo ilhas remotas e áreas protegidas.' },
        { name: 'Lontra-marinha', img: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Sea_otter_cropped.jpg', summary: 'A lontra-marinha (Enhydra lutris) é um mamífero marinho que habita as áreas costeiras do Oceano Pacífico Norte, desde a costa leste da Rússia, passando pelo Alasca, até o norte da Califórnia, nos Estados Unidos. Ela prefere regiões costeiras rochosas, bancos de areia e pradarias marinhas que oferecem abrigos e abundância de alimento. A lontra-marinha é notável por sua pelagem densa e impermeável, a mais espessa no reino animal, que a isola do frio das águas profundas onde vive. Embora possa andar na terra, a maior parte da vida passa nadando em águas rasas, geralmente até 100 metros de profundidade, onde busca alimento. ' },
        { name: 'Raia-Diabo', img: 'https://content.nationalgeographic.pt/medio/import/attachment/revistas/221/RaiasDiabo/r6.jpg', summary: 'A raia-diabo, também conhecida como jamanta (Mobula mobular), é uma espécie de raia de grande porte, que habita as águas tropicais e temperadas dos oceanos Atlântico, Pacífico e Índico, incluindo o Mar Mediterrâneo e o Oceano Atlântico Oriental. Ela vive desde águas costeiras rasas até profundidades que podem alcançar vários milhares de metros, mas é mais comum ser encontrada na zona nerítica, em profundidades próximas de até 50 metros, podendo realizar migrações longas em busca de alimento.' }
      ],
      important: [
        { name: 'Enguia-Lobo', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Wolf_eel.png/1200px-Wolf_eel.png', summary: 'Os peixes-lobo, conhecidos também como enguias-lobo, são peixes marinhos que vivem em águas frias e preferem habitats bentônicos, ou seja, próximos ou no fundo do mar. Eles costumam habitar fundos rochosos, afloramentos, cavernas e fendas, que lhes oferecem abrigo e proteção. Sua distribuição inclui os oceanos Atlântico Norte e Pacífico Norte, abrangendo áreas próximas à costa norte-americana, Europa, Rússia, além do Japão e da costa oeste da América do Norte. A profundidade em que vivem varia geralmente de cerca de 20 a 500 metros, em águas frias próximas ao ponto de congelamento.' },
        { name: 'Bacalhau-Do-Pacífico', img: 'https://www.estadao.com.br/resizer/v2/JFLCGOBJJRKIPCZ22XPF74XDEE.jpg?auth=3206cbf5fceccaa9c942c7d5208f22ce86c68d0149ed7c5715173761f726b312', summary: 'O bacalhau-do-pacífico (Pacific Cod, Gadus macrocephalus) é uma espécie demersal encontrada no Oceano Pacífico Norte, com ampla distribuição desde a costa da Califórnia até o Mar de Bering, Golfo do Alasca, Ilhas Aleutas, e também na costa asiática até o Mar Amarelo. Ele habita predominantemente o fundo do oceano, geralmente em profundidades variando de próximo à costa até cerca de 500 metros, com registro de ocorrência até aproximadamente 900 metros. Durante o inverno, a espécie é encontrada geralmente em águas mais profundas na borda da plataforma continental (de 90 a 240 metros), enquanto no verão pode migrar para águas mais rasas. ' },
        { name: 'Leão-Marinho-De-Steller', img: 'https://st.depositphotos.com/1923173/1908/i/450/depositphotos_19086117-stock-photo-canadian-stellar-sea-lion-sitting.jpg', summary: 'O leão-marinho-de-steller (Eumetopias jubatus) é o maior dos leões-marinhos e habita o norte do Oceano Pacífico, com presença desde as Ilhas Curilas e o Mar de Okhotsk, na Rússia, até o Golfo do Alasca e ao sul até a Ilha Año Nuevo, na Califórnia. No verão, tendem a migrar um pouco para o sul, incluindo colônias consistentes ao redor de Hokkaido, Japão, no inverno e primavera. Também já foram vistos vagantes no Mar Amarelo e ao longo das costas da península da Coreia e da China. ' }
      ],
      rare: [
        { name: 'Lula-Lanterna', img: 'https://newsdeeply-app.s3.amazonaws.com/20180712041025/nd_squid_7.png', summary: 'A lula-lanterna ou firefly squid (Watasenia scintillans) é uma espécie marinha encontrada principalmente no Oceano Pacífico, especialmente nas águas ao redor do Japão, incluindo a Baía de Toyama, onde se formam grandes cardumes durante a estação reprodutiva. Ela vive em profundidades de aproximadamente 200 a 400 metros durante o dia, mas sobe até a superfície à noite para caçar suas presas. Essa subida vertical faz parte de seu comportamento migratório diário.' },
        { name: 'Big Red Jellyfish', img: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Tiburonia_granrojo-_noaa_expl0827.jpg', summary: 'A Big Red Jellyfish, ou Tiburonia granrojo, é uma espécie de água-viva de grande porte encontrada principalmente no Oceano Pacífico Norte, em áreas como a costa da Califórnia, México, Havaí e Japão. Essa água-viva habita profundidades profundas, geralmente entre 600 a 1.500 metros, vivendo na zona batial do oceano, caracterizada por pouca luz, temperaturas baixas e altas pressões.' },
        { name: 'Peixe Olho-de-Barril', img: 'https://s2.glbimg.com/kIKpOHEN_1nd5vge4VEPJrAc2-w=/e.glbimg.com/og/ed/f/original/2021/12/11/macropinna_microstoma_01-web.jpg', summary: 'O Peixe Olho-de-Barril (Macropinna microstoma) é uma espécie abissal encontrada nas profundezas do Oceano Pacífico, geralmente entre 600 e 800 metros. Notável por sua cabeça transparente e olhos tubulares que podem girar dentro do crânio, ele permanece imóvel por longos períodos, observando o ambiente em busca de presas. Assim como a lula-lanterna, realiza movimentos verticais sutis para se alimentar, aproveitando correntes profundas ricas em nutrientes.' }
      ],
      popular: [
        { name: 'Orca', img: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Killerwhales_jumping.jpg', summary: 'A Orca (Orcinus orca), também conhecida como baleia-assassina, é um dos predadores mais inteligentes e versáteis do Pacífico. Presente em diversas regiões, do Alasca à Patagônia, forma grupos sociais complexos chamados de “pods”, que cooperam na caça e na proteção dos filhotes. Embora não realize migrações verticais como a lula-lanterna, a orca percorre grandes distâncias horizontais, seguindo cardumes e rotas migratórias de presas como focas e salmões.' },
        { name: 'Baleia Jubarte', img: 'https://revistapesquisa.fapesp.br/wp-content/uploads/2022/01/SITE_BaleiasJubarte-0-1140.jpg', summary: 'A Baleia-Jubarte (Megaptera novaeangliae) é famosa por suas longas migrações entre áreas de alimentação em águas frias e zonas de reprodução em regiões tropicais do Pacífico. Durante essas viagens, que podem ultrapassar 8.000 km, ela realiza saltos acrobáticos e emite cantos complexos que se propagam por quilômetros. Diferente da lula-lanterna, sua movimentação é sazonal e horizontal, mas igualmente estratégica para sobrevivência e reprodução.' },
        { name: 'Arraia-Manta', img: 'https://www.mantasdobrasil.org.br/images/Noticias/BLANCHE-by-Leo-Francini.JPG', summary: 'A Arraia-Manta (Mobula birostris), uma das maiores espécies de raias do mundo, habita águas tropicais e subtropicais do Pacífico. Com envergadura que pode ultrapassar 7 metros, ela realiza migrações amplas em busca de plâncton, seu principal alimento. Embora não habite profundidades extremas como a lula-lanterna, também apresenta comportamento migratório, cruzando vastas áreas oceânicas e aproveitando correntes ricas em nutrientes.' }
      ]
    },

    temperature: {
      'Primavera': 'Regiões tropicais: 27°C a 30°C</br>Regiões temperadas: 14°C a 21°C</br>Regiões polares: 0°C a 4°C',
      'Verão': 'Regiões tropicais: 28°C a 32°C</br>Regiões temperadas: 20°C a 27°C</br>Regiões polares: 1°C a 6°C',
      'Outono': 'Regiões tropicais: 26°C a 29°C</br>Regiões temperadas: 15°C a 22°C</br>Regiões polares: 0°C a 4°C',
      'Inverno': 'Regiões tropicais: 24°C a 28°C</br>Regiões temperadas: 10°C a 18°C</br>Regiões polares: -2°C a 3°C'
    },

    // Pacífico: El Niño / La Niña
    elNino: 'O fenômeno El Niño-Oscilação Sul (ENOS), conhecido simplesmente como El Niño, tem duas fases principais: uma quente (El Niño) e outra fria (La Niña). Essas fases acontecem por alterações na temperatura das águas do Oceano Pacífico Tropical e nas áreas de pressão do ar naquela região, o que muda a circulação do ar e afeta o clima em muitas partes do mundo. </br></br> Existem cerca de 20 regiões no mundo onde o clima é diretamente influenciado pelo ENOS. Os impactos mais fortes acontecem em países próximos ao Equador, como os da América Central e do Sul, Caribe, Sudeste Asiático e partes do leste e sul da África. </br></br> Na fase El Niño, os ventos ficam mais fracos, a água quente volta para as Américas e menos água fria sobe na região.</br></br> Esta fase geralmente ocorre a cada 2 a 7 anos, quando os ventos alísios enfraquecem ou até mudam de direção. Normalmente, esses ventos levam a água quente para Ásia e Austrália, mas, no El Niño, ela fica presa perto da América do Sul, trazendo mais calor e chuvas abundantes para a região. </br></br>A ocorrência deste fenômeno observado pela primeira vez no Peru, em 1600. Pescadores notaram o aquecimento das águas perto do Natal e, por isso, deram o nome El Niño (referência ao “Menino Jesus”).',
    laNina: 'Recentemente, o mundo passou por um período de La Niña, que provocou queda nas temperaturas e chuvas fortes em lugares como Canadá e Austrália. Durante a La Niña, os ventos que sopram sobre o Pacífico são mais fortes, empurrando a água quente para a Ásia e fazendo com que a água fria venha à superfície perto das Américas.</br></br> A La Niña acontece a cada 3 a 5 anos, quando os ventos ficam ainda mais fortes. Isso faz com que a água quente vá para Austrália e Sudeste Asiático, aumentando as chuvas lá, enquanto áreas das Américas podem ter secas e incêndios. O nordeste dos EUA e Canadá, por outro lado, costumam ficar mais úmidos e frios durante esta ocorrência. ',

    currents: [
      'As correntes marítimas do Oceano Pacífico são movimentos contínuos e direcionados das águas do oceano, que influenciam o clima, a vida marinha e a navegação. Elas são causadas por ventos, rotação da Terra, diferenças de temperatura e salinidade, e a forma do fundo oceânico.</br></br>Entre as correntes mais importantes do Pacífico está a Corrente de Humboldt, também conhecida como Corrente do Peru. Trata-se da mais fria corrente marítima de superfície do mundo, com temperaturas cerca de 8ºC abaixo da média oceânica. Ela nasce próxima à Antártida e segue no sentido norte ao longo da costa ocidental da América do Sul, influenciando diretamente países como o Chile e o Peru. Sua baixa temperatura contribui para a formação de desertos, como o de Atacama, e sua dinâmica traz grandes quantidades de plâncton à superfície por meio do fenômeno da ressurgência oceânica, favorecendo a pesca na região.</br ></br >As correntes marítimas do Pacífico, assim como as do planeta, podem ser classificadas em correntes quentes e correntes frias. Correntes quentes, geralmente superficiais, emergem das regiões equatoriais e seguem em direção às regiões temperadas e polares, enquanto as correntes frias originam-se nas regiões polares e avançam em direção ao equador. Essa movimentação da água influencia o equilíbrio térmico do planeta, o clima das regiões costeiras e a biodiversidade marinha.</br ></br >Além da Corrente de Humboldt, o Pacífico conta com outras correntes significativas, como a Corrente de Kuroshio (ou Corrente do Japão), uma corrente quente que transporta águas quentes da região equatorial em direção às latitudes temperadas do Pacífico Norte. Essas correntes participam da circulação oceânica global, contribuindo para a redistribuição de calor entre diferentes regiões do mundo.</br ></br >Esses fluxos contínuos de água no Pacífico não só influenciam o clima regional, moderando temperaturas e umidades, mas também têm impacto sobre atividades econômicas e ambientais, como a pesca, agricultura e ecossistemas. Contudo, a interferência humana pode causar desequilíbrios, ameaçando a saúde desses sistemas e a vida marinha que deles depende. '
    ],

    funFacts: [
      'Povos polinésios cruzavam o Pacífico há milhares de anos usando apenas estrelas e correntes marítimas. Sem mapas, sem bússolas — só pura sabedoria tradicional',
      'As águas do Pacífico são tão vastas que, se você pudesse viajar de um lado ao outro, passaria por 25 fusos horários diferentes.',
      'Este oceano é tão profundo que se você colocasse o Monte Everest dentro dele, a montanha ainda ficaria submersa por mais de 2 km de água.',
      'O Pacífico é o oceano mais antigo da Terra, com uma idade estimada em cerca de 200 milhões de anos.'

    ],

    historicalFacts: [
      'O Oceano Pacífico, o maior e mais profundo do planeta, exerce um papel fundamental na história da navegação e da exploração marítima. Desde os tempos pré-históricos, o homem buscou formas de interagir com o ambiente marinho, mas foram os polinésios que se destacaram como os primeiros verdadeiros navegadores marítimos. Eles exploraram vastas áreas do Pacífico, colonizando milhares de ilhas, empregando técnicas de navegação baseadas na observação da natureza muito antes do uso de instrumentos modernos.</br></br>É provável que os primeiros humanos tenham desenvolvido formas primitivas de explorar o ambiente marinho. No entanto, os registros mais antigos dessas atividades datam aproximadamente de 4.000 a.C., no Egito, associados à civilização que se consolidava ao longo do Rio Nilo e que, posteriormente, avançou para o Mar Mediterrâneo, por volta de 3.000 a.C. Apesar desses exemplos significativos, acredita-se que os primeiros verdadeiros navegadores tenham sido os polinésios.</br></br>Os polinésios possuíam uma habilidade excepcional para desbravar os mares, tendo colonizado mais de dez mil ilhas do Oceano Pacífico. Eles navegavam utilizando canoas, sem auxílio de instrumentos de navegação modernos, orientando-se pela posição das estrelas e pela observação das correntes marítimas, ventos e outras características ambientais, como padrões das ondas, o voo de aves migratórias, as cores das nuvens e da água, e até mesmo a fumaça de vulcões como referência geográfica. Esses conhecimentos eram transmitidos pelas gerações e organizados em mapas rudimentares confeccionados com conchas, cordas e gravetos.</br></br>Essa habilidade dos polinésios em navegar o Pacífico é registrada desde 4.000 a.C. até 1.000 d.C., quando alcançaram inicialmente as ilhas Salomão e Samoa e, posteriormente, locais distantes como as ilhas do Taiti, de Páscoa e do Havaí, situadas a mais de 2.500 milhas náuticas (aproximadamente 4.600 km) de seus locais de origem.</br></br>Já ao final da Idade Média, iniciaram-se as chamadas “grandes navegações”, motivadas por interesses políticos, econômicos e religiosos. Os europeus ocidentais desenvolveram grande habilidade na navegação, aventurando-se a cruzar o Oceano Atlântico e, durante os séculos XV e XVI, alcançaram também o Oceano Pacífico, marcando uma nova fase na exploração marítima que ampliaria significativamente o conhecimento geográfico e comercial sobre o mundo.'
    ],

    otherInfo: [

    ],

    sources: [
      'https://www.greenme.com.br/informarse/animais/95015-peixe-olho-de-barril-incrivel-rara-especie/',
      'https://marsemfim.com.br/descoberto-o-misterio-do-peixe-com-cabeca-transparente/',
      'https://revistagalileu.globo.com/Sociedade/Curiosidade/noticia/2021/12/macropinna-microstoma-veja-imagens-raras-do-peixe-de-cabeca-transparente.html',
      'https://pt.wikipedia.org/wiki/Peixe_olho-de-barril',
      'https://pt.wikipedia.org/wiki/Orca',
      'https://www.nationalgeographicbrasil.com/animais/2025/07/superpoderes-das-orcas-da-caca-em-grupo-a-ecolocalizacao-os-5-dados-da-maior-predadora-dos-mares',
      'https://www.peritoanimal.com.br/tipos-de-orcas-25316.html',
      'https://www.baleiajubarte.org.br/a-baleia-jubarte',
      'https://pt.wikipedia.org/wiki/Baleia-jubarte',
      'https://maestrovirtuale.com/baleia-jubarte-caracteristicas-habitat-reproducao-comportamento',
      'https://www.bioicos.org.br/post/animais-curiosos-arraia-jamanta-a-gigante-voadora',
      'http://olharoceanografico.com/arraias-jamantas-as-gigantes-gentis-dos-oceanos/',
      'https://pt.wikipedia.org/wiki/Jamanta',
      'https://brasilescola.uol.com.br/geografia/oceano-pacifico.htm',
      'https://www.noaa.gov/ocean',
      'https://100-facts.com/pt/25-fatos-interessantes-sobre-o-oceano-pacifico/',
      'https://coisasinteressantes.com.br/curiosidades-oceano-pacifico/',
      'https://brasilescola.uol.com.br/geografia/oceano-pacifico.htm',
    ]
  },

  atlantic: {
    id: 'atlantic',
    name: 'Oceano Atlântico',
    subtitle: 'O segundo maior oceano, conectando continentes',
    area: '106,4 milhões km²',
    maxDepth: '8.486 metros',
    avgTemp: '3.9°C',
    volume: '310M km³',
    description: 'O Oceano Atlântico é o segundo maior oceano do mundo, separando a Europa e África das Américas.',
    heroImage: 'https://humanidades.com/wp-content/uploads/2018/11/oceano-atlantico-2-e1583035071197-800x400.jpg',

    characteristics: [
      'Forma distintiva em "S" que separa o continente americano da Europa e África',
      'Contém a corrente do Golfo (Gulf Stream)',
      'Abriga a Cordilheira Mesoatlântica',
      'Águas contêm rotas marítimas movimentadas'
    ],

    marineLife: [
      'Rotas migratórias para baleias e golfinhos',
      'Diversas espécies de peixes como atum e salmão',
      'Rica biodiversidade desde plâncton até baleias azuis',
      'Ecossistemas de recifes de coral tropicais'
    ],

    countries: [
      'Países Americanos: </br>América do Norte: Canadá, Estados Unidos, Groenlândia, México. </br>América Central e Caribe: Belize, Costa Rica, Guatemala, Honduras, Nicarágua, Panamá, Antígua e Barbuda, Bahamas, Barbados, Colômbia, Cuba, Haiti, Jamaica, Porto Rico, República Dominicana, Trinidad e Tobago, e diversas ilhas menores. </br>América do Sul: Argentina, Brasil, Chile, Colômbia, Guiana, Guiana Francesa, Suriname, Uruguai, Venezuela.',
      'Países Africanos: </br>África do Sul, Angola, Cabo Verde, Camarões, Costa do Marfim, Gabão, Gâmbia, Gana, Guiné, Guiné-Bissau, Guiné Equatorial, Libéria, Marrocos, Mauritânia, Namíbia, Nigéria, República Democrática do Congo, República do Congo, Saara Ocidental (reivindicado pelo Marrocos), São Tomé e Príncipe, Senegal, Serra Leoa, Togo.',
      'Países Europeus: </br>Albânia, Alemanha, Bélgica, Bósnia e Herzegovina, Chipre, Croácia, Dinamarca, Eslovênia, Espanha, Finlândia, França, Guernsey, Gibraltar, Grécia, Ilha de Man, Irlanda, Islândia, Itália, Letônia, Lituânia, Malta, Mônaco, Montenegro, Noruega, Países Baixos, Polônia, Portugal, Reino Unido, Rússia, Suécia, Turquia.'
    ],

    rivers: [
      'Países Americanos:</br>América do Norte: Rio São Lourenço (Canadá/EUA), Rio Hudson (EUA), Rio Delaware (EUA), Rio Potomac (EUA), Rio Savannah (EUA), Rio Mississippi (EUA), Rio São João (EUA/Flórida), Rio San Juan (Porto Rico).</br>América Central e Caribe: Rio Motagua (Guatemala/Honduras), Rio Patuca (Honduras), Rio Coco (Nicarágua/Honduras), Rio San Juan (Nicarágua/Costa Rica), Rio Chagres (Panamá), Rio Artibonite (Haiti/República Dominicana), Rio Cauto (Cuba), Rio Orinoco (Venezuela).</br>América do Sul (Costa Atlântica): Rio Amazonas (Brasil/Peru/Colômbia), Rio Tocantins (Brasil), Rio São Francisco (Brasil), Rio Paraná (Brasil/Paraguai/Argentina), Rio Paraguai (Brasil/Bolívia/Paraguai/Argentina), Rio Madeira (Brasil/Bolívia), Rio Negro (Brasil/Colômbia/Venezuela), Rio Magdalena (Colômbia), Rio Essequibo (Guiana), Rio São Luís (Brasil), Rio Parnaíba (Brasil), Rio Uruguay (Brasil/Argentina/Uruguai).',
      'Países Africanos:</br>Costa Atlântica: Rio Congo (República Democrática do Congo/República do Congo), Rio Níger (Nigéria/Mali/Níger), Rio Senegal (Senegal/Mauritânia), Rio Gâmbia (Gâmbia/Senegal/Guiné), Rio Volta (Gana/Burkina Faso), Rio Ogooué (Gabão), Rio Cuanza (Angola), Rio Orange (África do Sul/Namíbia), Rio São Francisco (Angola), Rio Geba (Guiné-Bissau).',
      'Países Europeus:</br>Costa Atlântica: Rio Tejo (Espanha/Portugal), Rio Douro (Espanha/Portugal), Rio Minho (Espanha/Portugal), Rio Guadiana (Espanha/Portugal), Rio Sena (França), Rio Loire (França), Rio Garona (França/Espanha), Rio Reno (Suíça/Alemanha/Países Baixos), Rio Elba (República Tcheca/Alemanha), Rio Tâmisa (Reino Unido), Rio Clyde (Reino Unido), Rio Shannon (Irlanda).'

    ],

    animals: {
      endangered: [
        { 
          name: 'Tartaruga-de-pente (Eretmochelys imbricata)',
          img: 'https://www.tamar.org.br/fotos/DN09_D_331.jpg',
          summary: 'A tartaruga-de-pente (Eretmochelys imbricata), também conhecida como tartaruga-legítima, é uma espécie de tartaruga marinha criticamente ameaçada de extinção, encontrada em recifes de corais e águas costeiras rasas de regiões tropicais e, ocasionalmente, subtropicais nos oceanos Atlântico, Índico e Pacífico. Ela pode atingir até 114 cm de comprimento da carapaça e pesar cerca de 80 a 150 kg. '
        },
        {
          name: 'Peixe-boi (Trichechus spp.)',
          img: 'https://ampa.org.br/wp-content/uploads/2020/03/Peixe-boi-tratada-3-2_Easy-Resize.com_Easy-Resize.com_.jpg',
          summary: 'O peixe-boi é um mamífero aquático de grande porte que vive tanto em água doce quanto salgada, sendo conhecido principalmente o peixe-boi da Amazônia, que habita rios e lagos da bacia amazônica, e o peixe-boi marinho, encontrado em águas costeiras rasas do Oceano Atlântico, desde o litoral dos Estados Unidos até o norte do Brasil. Eles possuem corpo robusto, pele grossa e enrugada, com pelos esparsos e nadadeiras peitorais que ajudam na locomoção.'
        }
      ],
      important: [
        { 
          name: 'Atum-azul (Thunnus thynnus)', 
          img: 'https://marsemfim.com.br/wp-content/uploads/2023/11/atum-azul-copiar.jpg', 
          summary: 'O atum-azul é um dos peixes mais emblemáticos e importantes do Atlântico, especialmente pelo seu papel na pesca e na cadeia alimentar marinha. É um predador ágil, capaz de nadar grandes distâncias, alimentando-se de peixes menores e cefalópodes, como lulas. Habita áreas temperadas e tropicais do Atlântico, migrando sazonalmente em busca de alimento e locais de reprodução. Sua reprodução ocorre em águas mais quentes, onde fêmeas podem liberar milhões de ovos em uma única temporada. Além de ser essencial para o equilíbrio dos ecossistemas, tem grande valor econômico, o que também aumenta a pressão sobre sua população.' 
        },
        { 
          name: 'Golfinho-comum (Delphinus delphis)', 
          img: 'https://naturdata.com/images/species/7000/resize_1288482282.jpg', 
          summary: 'O golfinho-comum é outro habitante marcante do Atlântico, conhecido por sua inteligência e sociabilidade. Vive em grupos, chamados de cardumes ou “pods”, que podem chegar a centenas de indivíduos. Alimenta-se principalmente de peixes e lulas, caçando de forma cooperativa. Seu habitat se estende tanto por águas costeiras quanto oceânicas, adaptando-se a diferentes ambientes marinhos. Na reprodução, após um período de gestação de cerca de 12 meses, nasce um único filhote que recebe cuidados intensivos da mãe e do grupo. Por seu comportamento lúdico e importância cultural, o golfinho é também um símbolo da conexão entre seres humanos e o mar.' 
        }

      ],
      rare: [
        { 
          name: 'Antropora gemarita', 
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Antropora_nr._granulifera_%28YPM_IZ_089197%29_003.jpeg/1200px-Antropora_nr._granulifera_%28YPM_IZ_089197%29_003.jpeg', 
          summary: 'Descoberta recentemente no Atlântico Nordeste, essa espécie microscópica de briozoário vive em águas profundas entre 300 e 500 metros. Forma colônias que lembram musgos marinhos e se alimenta de partículas suspensas. Sua descoberta revela o quanto ainda há para explorar nos ecossistemas submarinos e destaca a importância da pesquisa científica em regiões pouco conhecidas.' 
        },
        { 
          name: 'Epizoanthus martinsae', 
          img: 'https://conteudo.imguol.com.br/c/noticias/89/2020/12/28/epizoanthus-martinsae-vive-em-corais-negros-em-profundidades-de-quase-400-metros-1609195138013_v2_900x506.png', 
          summary: 'Esse pequeno cnidário foi encontrado nos Açores, vivendo sobre corais negros a cerca de 360 metros de profundidade. Adaptado a temperaturas entre 13°C e 15°C, forma comunidades bentônicas essenciais para o equilíbrio ecológico das águas profundas. Nomeado em homenagem à pesquisadora Helen Martins, é uma das espécies que podem estar ameaçadas pelas mudanças climáticas e pela acidificação dos oceanos.' 
        }
        
      ],
      popular: [
        { 
          name: 'Baleia-jubarte (Megaptera novaeangliae)', 
          img: 'https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/nationalgeographic_2709882.webp?w=1600&h=1067', 
          summary: 'Grande cetáceo do Atlântico, famoso por seus saltos acrobáticos e cantos longos que podem durar até 20 minutos. Mede até 16 metros e pesa cerca de 30 a 40 toneladas. Possui nadadeiras peitorais muito longas e coloração preta e branca. Migra entre águas frias ricas em alimento no verão e águas tropicais no inverno para reprodução. Alimenta-se de krill e pequenos peixes usando a técnica de “rede de bolhas”. Já foi intensamente caçada, mas hoje é protegida, embora ainda enfrente ameaças como colisões com navios e poluição sonora.'
        },
        { 
          name: 'Tubarão-branco (Carcharodon carcharias)', 
          img: 'https://static.todamateria.com.br/upload/tu/ba/tubaraobranco-cke.jpg', 
          summary: 'Predador de topo encontrado em várias regiões do Atlântico, especialmente em áreas costeiras ricas em mamíferos marinhos. Pode ultrapassar 6 metros e pesar mais de 2 toneladas. Possui sentidos aguçados, como olfato apurado e detecção de campos elétricos. Migra sazonalmente em busca de alimento e locais de reprodução. Apesar da fama de perigoso, ataques a humanos são raros. Tem papel ecológico vital no controle de populações de presas. Enfrenta ameaças como pesca acidental, caça ilegal e declínio de presas, sendo protegido em diversas regiões.'
        }
      ]
    },

    temperature: {
      'Verão': 'Regiões tropicais: 27°C a 30°C</br>Regiões temperadas: 18°C a 24°C</br>Regiões polares: 0°C a 5°C',
      'Outono': 'Regiões tropicais: 26°C a 28°C</br>Regiões temperadas: 15°C a 20°C</br>Regiões polares: -1°C a 3°C',
      'Inverno': 'Regiões tropicais: 25°C a 27°C</br>Regiões temperadas: 10°C a 16°C</br>Regiões polares: -2°C a 1°C',
      'Primavera': 'Regiões tropicais: 26°C a 29°C</br>Regiões temperadas: 14°C a 20°C</br>Regiões polares: -1°C a 4°C'

    },

    currents: [
      'As correntes do Oceano Atlântico exercem papel fundamental na regulação climática global. </br></br> Uma das mais importantes é a Corrente do Golfo, quente e poderosa, que se origina no Golfo do México e flui para o nordeste em direção à Europa, transportando grandes volumes de água quente e garantindo temperaturas mais amenas na Europa Ocidental. </br></br> No Atlântico Sul, destaca-se a Corrente do Brasil, quente, que flui para o sul acompanhando a costa leste da América do Sul, contrastando com a Corrente das Guianas, também quente, que se desloca para o norte. </br></br> Na costa sudoeste da África, a Corrente de Benguela, fria, flui de sul para norte, promovendo ressurgências ricas em nutrientes e tornando a região uma das áreas de pesca mais produtivas do planeta. </br></br> As correntes do Atlântico podem ser classificadas em quentes, originadas nas regiões equatoriais e direcionadas para áreas temperadas ou polares, e frias, que partem das altas latitudes rumo ao equador, ajudando a manter o equilíbrio térmico do planeta. </br></br> Outro exemplo é a Corrente das Canárias, fria, que segue para o sul ao longo da costa noroeste da África, favorecendo formações desérticas como o Saara. </br></br> A movimentação das águas do Atlântico integra a circulação termoalina global, ou “correia transportadora oceânica”, redistribuindo calor e nutrientes e influenciando ecossistemas, padrões climáticos e fenômenos extremos como furacões no Caribe e no Golfo do México.'

    ],

    funFacts: [
      '🌍 É o segundo maior oceano do planeta, cobrindo cerca de 20% da superfície da Terra',
      '🏔 Possui a maior cadeia de montanhas do mundo, a Dorsal Meso Atlântica, submersa no fundo do oceano, em constante expansão, fazendo o Atlântico crescer cerca de 2 a 10 cm por ano',
      '🌀 Apresenta a Corrente do Golfo, considerada a mais longa e uma das mais poderosas do mundo, com papel vital na regulação climática global',
      '🧭 É onde se encontra o Triângulo das Bermudas, região misteriosa localizada entre Miami, Bermudas e Porto Rico, associada a desaparecimentos inexplicáveis',
      '🐟 40% dos peixes do mundo são pescados no Atlântico, incluindo bacalhau, atum, sardinha, linguado e camarões, além de crustáceos e moluscos raros'

    ],

    historicalFacts: [
      'O Oceano Atlântico tem uma importância ambiental fundamental, servindo de habitat para diversas espécies de animais e plantas. </br></br> Além disso, suas correntes marinhas influenciam o clima global, transportando ventos, umidade e chuva para várias regiões do mundo. </br></br> Economicamente, o Atlântico é crucial por ser uma rota comercial entre continentes, como Europa e América, e por ser fonte de recursos naturais, incluindo a pesca e a extração de petróleo. </br></br>Os fenícios, uma civilização que habitava o litoral do atual Síria, Líbano e norte de Israel, foram notáveis navegadores entre 1500 e 300 a.C. </br></br>Eles desenvolveram avançadas tecnologias navais, como galés e birremes, e estabeleceram rotas comerciais pelo Mediterrâneo, chegando até a Espanha. Existem indícios de que os fenícios navegaram até a Irlanda e possivelmente circunavegaram a África por volta de 700-600 a.C. Embora navegassem principalmente com referências em terra, foram provavelmente os primeiros a realizar travessias marítimas no Mediterrâneo, utilizando a Estrela Polar para orientação.</br></br> Por volta de 400 a.C., já se entendia a relação entre as fases da Lua e as marés. Heródoto descreveu a regularidade das marés no Golfo Pérsico, observou a deposição de sedimentos no Delta do Nilo e foi o primeiro a usar o termo “Atlântico” para nomear o oceano a oeste.</br></br> Durante a Era Helênica, por volta de 325 a.C., o explorador Píteas, natural da atual Marselha, navegou pelo Atlântico rumo ao norte, alcançando a Escócia e possivelmente o Mar Báltico. Relatou a Ilha de Thule, que hoje pode ser a Noruega ou Islândia, além de eventos como o Sol da meia-noite e a aurora boreal. Utilizava navegação astronômica com o Sol, as estrelas e a Estrela Polar, além de relacionar as fases da Lua com os estados das marés.</br></br> Após as Guerras Púnicas, os romanos dominaram o Mediterrâneo, promovendo avanços na navegação. Herdeiros dos conhecimentos helênicos, aprimoraram embarcações, técnicas de navegação e métodos de pesca e conservação, focando na aplicação prática da ciência.</br></br> Com a queda do Império Romano, a Europa entrou na Idade Média, um período em que muito do conhecimento antigo foi perdido ou esquecido. Os trabalhos de Ptolomeu sobreviveram graças aos estados islâmicos, que guardaram versões gregas e árabes dessas obras, que foram reintroduzidas na Europa só a partir do século XIII. Durante esse tempo, o comércio europeu declinou e a navegação passou a ser dominada pelos povos árabes, com poucos avanços europeus até o Renascimento. Entre 500 e 1450 d.C., os escandinavos, conhecidos como vikings, destacaram-se como grandes navegadores do Atlântico. </br></br>Entre os séculos IX e XII, expandiram sua influência pelo Oceano Atlântico, alcançando a Groenlândia e estabelecendo colônias temporárias em Terra Nova, no Canadá. Para navegação, usavam a altura da Estrela do Norte e cálculos do Sol conforme a época do ano. No final da Idade Média, iniciaram-se as Grandes Navegações, um processo que durou cerca de cem anos e exigiu grande avanço tecnológico, recursos e sacrifício humano. O desafio inicial foi superar o Cabo Bojador, na costa africana, considerado uma barreira quase impenetrável. Alguns venezianos desapareceram tentando a travessia, mas liderados pelo infante D. Henrique, os portugueses desenvolveram a caravela, um navio com velas latinas adaptadas para o oceano, e Gil Eanes realizou a primeira passagem bem-sucedida pelo cabo, navegando estrategicamente para superar as difíceis condições. Isso abriu caminho para a exploração mais ao sul e a cruzada pelo Atlântico até alcançar o Oceano Pacífico nos séculos XV e XVI. </br></br>A navegação atlântica era temida e chamada de Mar Tenebroso, fortemente influenciada pelas crenças da Igreja Católica sobre monstros marinhos. Durante a Segunda Guerra Mundial, avanços tecnológicos possibilitaram o mapeamento do fundo do Atlântico para facilitar o deslocamento de submarinos militares. Esse esforço descobriu extensas cadeias de montanhas subaquáticas, as dorsais meso-oceânicas. Estudos das idades das rochas revelaram que as mais novas estão próximas dessas dorsais, enquanto as pedras perto dos continentes são mais antigas.'
    ],

    otherInfo: [
      
    ],

    sources: [
      { title: 'Fonte Exemplo Atlântico', url: 'https://example.com/atlantic' },
      'https://example.com/atlantic-2'
    ]
  },

  indian: {
    id: 'indian',
    name: 'Oceano Índico',
    subtitle: 'O terceiro maior oceano, conhecido por suas águas quentes',
    area: '70,6 milhões km²',
    maxDepth: '7.725 metros',
    avgTemp: '17°C',
    volume: '292M km³',
    description: 'Exemplo: descrição geral do Oceano Índico.',
    heroImage: 'https://placehold.co/1200x600/png?text=Índico',

    characteristics: [
      'Exemplo1: característica A do Índico',
      'Exemplo2: característica B do Índico'
    ],

    marineLife: [
      'Exemplo1: vida marinha A no Índico',
      'Exemplo2: vida marinha B no Índico'
    ],

    countries: [
      'Exemplo1: País A',
      'Exemplo2: País B'
    ],

    rivers: [
      'Exemplo1: Rio A',
      'Exemplo2: Rio B'
    ],

    animals: {
      endangered: [
        { name: 'Exemplo Extinto 1', img: 'https://placehold.co/400x250/png?text=Animal+1', summary: 'exemplo1' }
      ],
      important: [
        { name: 'Exemplo Importante 1', img: 'https://placehold.co/400x250/png?text=Animal+2', summary: 'exemplo1' }
      ],
      rare: [
        { name: 'Exemplo Raro 1', img: 'https://placehold.co/400x250/png?text=Animal+3', summary: 'exemplo1' }
      ],
      popular: [
        { name: 'Exemplo Popular 1', img: 'https://placehold.co/400x250/png?text=Animal+4', summary: 'exemplo1' }
      ]
    },

    temperature: {
      'Primavera': 'exemplo1',
      'Verão': 'exemplo2',
      'Outono': 'exemplo3',
      'Inverno': 'exemplo4'
    },

    currents: [
      'Exemplo1: Corrente A',
      'Exemplo2: Corrente B'
    ],

    funFacts: [
      'Exemplo1: curiosidade A sobre o Índico',
      'Exemplo2: curiosidade B sobre o Índico'
    ],

    historicalFacts: [
      'Exemplo1: fato histórico A do Índico',
      'Exemplo2: fato histórico B do Índico'
    ],

    otherInfo: [
      'Exemplo1: nota adicional sobre o Índico'
    ],

    sources: [
      'https://example.com/indian-1',
      { title: 'Indico - fonte exemplo', url: 'https://example.com/indian-2' }
    ]
  },

  arctic: {
    id: 'arctic',
    name: 'Oceano Glacial Ártico',
    subtitle: 'O menor oceano, caracterizado por águas geladas',
    area: '14,1 milhões km²',
    maxDepth: '5.450 metros',
    avgTemp: '-1.8°C',
    volume: '18M km³',
    description: 'Exemplo: descrição geral do Oceano Glacial Ártico.',
    heroImage: 'https://placehold.co/1200x600/png?text=Ártico',

    characteristics: [
      'Exemplo1: característica A do Ártico',
      'Exemplo2: característica B do Ártico'
    ],

    marineLife: [
      'Exemplo1: vida marinha A no Ártico',
      'Exemplo2: vida marinha B no Ártico'
    ],

    countries: [
      'Exemplo1: País A',
      'Exemplo2: País B'
    ],

    rivers: [
      'Exemplo1: Rio A',
      'Exemplo2: Rio B'
    ],

    animals: {
      endangered: [
        { name: 'Exemplo Extinto 1', img: 'https://placehold.co/400x250/png?text=Animal+1', summary: 'exemplo1' }
      ],
      important: [
        { name: 'Exemplo Importante 1', img: 'https://placehold.co/400x250/png?text=Animal+2', summary: 'exemplo1' }
      ],
      rare: [
        { name: 'Exemplo Raro 1', img: 'https://placehold.co/400x250/png?text=Animal+3', summary: 'exemplo1' }
      ],
      popular: [
        { name: 'Exemplo Popular 1', img: 'https://placehold.co/400x250/png?text=Animal+4', summary: 'exemplo1' }
      ]
    },

    temperature: {
      'Primavera': 'exemplo1',
      'Verão': 'exemplo2',
      'Outono': 'exemplo3',
      'Inverno': 'exemplo4'
    },

    currents: [
      'Exemplo1: Corrente A',
      'Exemplo2: Corrente B'
    ],

    funFacts: [
      'Exemplo1: curiosidade A sobre o Ártico',
      'Exemplo2: curiosidade B sobre o Ártico'
    ],

    historicalFacts: [
      'Exemplo1: fato histórico A do Ártico',
      'Exemplo2: fato histórico B do Ártico'
    ],

    otherInfo: 'Exemplo: notas adicionais sobre o Ártico',

    sources: [
      'https://example.com/arctic-1'
    ]
  },

  southern: {
    id: 'southern',
    name: 'Oceano Austral',
    subtitle: 'O oceano que circunda a Antártida',
    area: '20,3 milhões km²',
    maxDepth: '7.235 metros',
    avgTemp: '-1.0°C',
    volume: '71M km³',
    description: 'Exemplo: descrição geral do Oceano Austral.',
    heroImage: 'https://placehold.co/1200x600/png?text=Austral',

    characteristics: [
      'Exemplo1: característica A do Austral',
      'Exemplo2: característica B do Austral'
    ],

    marineLife: [
      'Exemplo1: vida marinha A no Austral',
      'Exemplo2: vida marinha B no Austral'
    ],

    countries: [
      'Exemplo1: País A'
    ],

    rivers: [
      'Exemplo1: Rio A'
    ],

    animals: {
      endangered: [
        { name: 'Exemplo Extinto 1', img: 'https://placehold.co/400x250/png?text=Animal+1', summary: 'exemplo1' }
      ],
      important: [
        { name: 'Exemplo Importante 1', img: 'https://placehold.co/400x250/png?text=Animal+2', summary: 'exemplo1' }
      ],
      rare: [
        { name: 'Exemplo Raro 1', img: 'https://placehold.co/400x250/png?text=Animal+3', summary: 'exemplo1' }
      ],
      popular: [
        { name: 'Exemplo Popular 1', img: 'https://placehold.co/400x250/png?text=Animal+4', summary: 'exemplo1' }
      ]
    },

    temperature: {
      'Primavera': 'exemplo1',
      'Verão': 'exemplo2',
      'Outono': 'exemplo3',
      'Inverno': 'exemplo4'
    },

    currents: [
      'Exemplo1: Corrente A'
    ],

    funFacts: [
      'Exemplo1: curiosidade A sobre o Austral'
    ],

    historicalFacts: [
      'Exemplo1: fato histórico A do Austral'
    ],

    otherInfo: [
      'Exemplo1: informação extra sobre o Austral'
    ],

    sources: [
      { title: 'Austral - fonte exemplo', url: 'https://example.com/southern' },
      'https://example.com/southern-2'
    ]
  }
};

module.exports = oceanData;
