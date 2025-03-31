import { blogPosts, photos, categories } from "@/lib/schema"
import type { BlogPost, Photo, Category } from "@/lib/schema"

// Update the mock blog posts with more complete content and reading time
const mockBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Jak jsem objevila svou vášeň pro fotografii",
    slug: "jak-jsem-objevila-svou-vasen-pro-fotografii",
    content: `
     <p>Fotografie pro mě začala jako koníček, ale rychle se proměnila v něco mnohem víc. Vše začalo, když jsem dostala svůj první fotoaparát jako dárek k narozeninám od rodičů. Byl to jednoduchý kompakt, nic profesionálního, ale otevřel mi úplně nový svět.</p>
     
     <h2>První kroky</h2>
     <p>Pamatuji si, jak jsem poprvé vyrazila do ulic Jihlavy a začala fotit vše, co mě zaujalo. Neměla jsem žádné zkušenosti, jen nadšení a touhu zachytit svět kolem sebe. Moje první fotografie byly technicky nedokonalé – rozmazané, špatně komponované, s nevyváženou expozicí. Ale i přes všechny nedostatky jsem cítila, že jsem našla něco, co mě skutečně naplňuje.</p>
     
     <p>Postupně jsem začala experimentovat s různými žánry. Nejdříve to byly krajiny a architektura – statické objekty, které mi dávaly dostatek času na přemýšlení o kompozici. Později jsem se odvážila i k portrétům, nejprve jsem fotila své přátele a rodinu.</p>
     
     <h2>Studium a inspirace</h2>
     <p>Jako studentka jsem měla možnost experimentovat s různými styly a technikami. Inspiraci jsem nacházela všude - v knihách, na výstavách, ale hlavně v každodenním životě. Začala jsem sledovat práce známých fotografů jako Annie Leibovitz, Richard Avedon nebo Henri Cartier-Bresson. Každý z nich měl svůj jedinečný styl a přístup, který mě inspiroval k hledání vlastního výrazu.</p>
     
     <p>Zlomový moment přišel, když jsem se přihlásila na fotografický workshop. Tam jsem se naučila nejen technické základy, ale především jsem pochopila, že fotografie je o vidění světa jinak – o zachycení okamžiků, emocí a příběhů, které by jinak zůstaly nepovšimnuty.</p>
     
     <h2>Nalezení vlastního stylu</h2>
     <p>Postupně jsem si začala uvědomovat, že mě nejvíce přitahuje portrétní a módní fotografie. Fascinuje mě možnost zachytit osobnost člověka, jeho emoce a příběh v jediném snímku. Každý portrét je pro mě výzvou – jak nejlépe vystihnout podstatu fotografovaného?</p>
     
     <p>Fotografie se pro mě stala způsobem, jak vyjádřit své pocity a vidění světa. Je to jako psát deník, ale místo slov používám obrazy. Každá fotografie je částí mého příběhu, mého pohledu na svět.</p>
     
     <h2>Cesta pokračuje</h2>
     <p>I když už dnes fotím profesionálně, stále se učím a objevuji nové možnosti. Fotografie je nekonečná cesta, na které potkávám inspirativní lidi, navštěvuji nová místa a především – neustále rostu jako fotografka i jako člověk.</p>
     
     <p>Pokud také hledáte svou vášeň, mám pro vás jednu radu: zkoušejte nové věci, nebojte se experimentovat a hlavně – následujte to, co vám přináší radost. Možná, stejně jako já, objevíte něco, co vám změní život.</p>
   `,
    excerpt:
      "Moje cesta od prvního fotoaparátu k vášni, která formuje můj život a kreativní vyjádření. Příběh o objevování, učení a nalezení vlastního fotografického stylu.",
    coverImageUrl: "/placeholder.svg?height=600&width=1200&text=Moje+fotografická+cesta",
    published: true,
    createdAt: "2024-05-15T10:00:00Z",
    updatedAt: "2024-05-15T10:00:00Z",
    readingTime: "5 min",
    category: "Osobní",
    tags: ["fotografie", "inspirace", "začátky", "osobní příběh"],
  },
  {
    id: 2,
    title: "Kreativní blok a jak ho překonat",
    slug: "kreativni-blok-a-jak-ho-prekonat",
    content: `
     <p>Každý kreativní člověk se občas setká s tvůrčím blokem. Ty chvíle, kdy inspirace nepřichází a nic nefunguje tak, jak by mělo. Jako fotografka jsem si tímto obdobím prošla několikrát a ráda bych se s vámi podělila o své zkušenosti a tipy, jak kreativní blok překonat.</p>
     
     <h2>Moje zkušenost</h2>
     <p>Minulý měsíc jsem prožívala období, kdy jsem nedokázala vytvořit nic, s čím bych byla spokojená. Každá fotografie se zdála plochá, bez života a příběhu. Čím více jsem se snažila vytvořit něco výjimečného, tím více mě frustrace svazovala. Začala jsem pochybovat o svých schopnostech a dokonce i o tom, zda je fotografie skutečně moje cesta.</p>
     
     <p>Tento pocit znají všichni tvůrčí lidé – spisovatelé, malíři, hudebníci i fotografové. Je to jako narazit na neviditelnou zeď, která vás odděluje od vaší kreativity.</p>
     
     <h2>Co mi pomohlo</h2>
     <p>Místo abych se snažila tento blok překonat silou, rozhodla jsem se udělat krok zpět. Odložila jsem fotoaparát a začala jsem více pozorovat svět kolem sebe. Navštívila jsem galerie, četla knihy o fotografii a hlavně - dala jsem si čas.</p>
     
     <p>Zjistila jsem, že kreativní blok často přichází, když se příliš soustředíme na výsledek a zapomínáme na radost z procesu tvorby. Když jsem přestala na sebe vyvíjet tlak a začala fotit jen pro radost, bez očekávání dokonalých výsledků, inspirace se pomalu začala vracet.</p>
     
     <p>Někdy potřebujeme vypnout, abychom se mohli znovu naladit. Kreativita není něco, co můžeme vynutit, ale spíše něco, co musíme nechat přirozeně plynout.</p>
     
     <h2>Tipy pro vás</h2>
     <p>Pokud se také potýkáte s kreativním blokem, zde je několik tipů, které mi pomohly:</p>
     
     <ol>
       <li><strong>Změňte prostředí</strong> - Někdy stačí vyjet z města do přírody nebo naopak z venkova do rušných ulic. Nové prostředí přináší nové podněty a inspiraci.</li>
       <li><strong>Experimentujte s novými technikami</strong> - Pokud obvykle fotíte portréty, zkuste krajinu. Pokud používáte přirozené světlo, experimentujte s bleskem. Nové přístupy mohou oživit vaši kreativitu.</li>
       <li><strong>Inspirujte se u jiných umělců</strong> - Navštivte výstavy, prohlížejte knihy nebo online galerie. Nejde o kopírování, ale o nalezení nových perspektiv.</li>
       <li><strong>Dejte si pauzu</strong> - Někdy je nejlepší strategií prostě na chvíli přestat. Věnujte se jiným koníčkům, odpočívejte, naplňte svou kreativní studnu.</li>
       <li><strong>Začněte osobním projektem</strong> - Fotografujte něco, co vás skutečně zajímá, bez ohledu na to, zda to bude mít komerční úspěch. Vášeň je nejlepším palivem pro kreativitu.</li>
       <li><strong>Najděte si kreativní komunitu</strong> - Sdílení zkušeností s ostatními tvůrci může přinést novou inspiraci a motivaci.</li>
     </ol>
     
     <h2>Přijměte kreativní blok jako součást procesu</h2>
     <p>Nakonec jsem pochopila, že kreativní blok není selhání, ale přirozená součást tvůrčího procesu. Je to čas, kdy naše podvědomí zpracovává nové podněty a připravuje půdu pro nové nápady.</p>
     
     <p>Pokud právě procházíte obdobím kreativního bloku, buďte k sobě laskaví. Dejte si čas, který potřebujete, a věřte, že inspirace se vrátí – možná silnější než kdy předtím.</p>
     
     <p>A pamatujte, že i největší umělci a fotografové měli období, kdy se cítili ztraceni. Je to součást cesty, ne její konec.</p>
   `,
    excerpt:
      "Každý tvůrce se občas potýká s kreativním blokem. Sdílím své zkušenosti a praktické tipy, jak toto náročné období překonat a znovu najít inspiraci a radost z tvorby.",
    coverImageUrl: "/placeholder.svg?height=600&width=1200&text=Kreativní+blok",
    published: true,
    createdAt: "2024-06-22T14:30:00Z",
    updatedAt: "2024-06-22T14:30:00Z",
    readingTime: "7 min",
    category: "Kreativita",
    tags: ["kreativita", "inspirace", "překonání bloků", "tipy"],
  },
  {
    id: 3,
    title: "Moje oblíbené fotografické lokace v Jihlavě",
    slug: "moje-oblibene-fotograficke-lokace-v-jihlave",
    content: `
     <p>Jihlava nabízí překvapivě mnoho krásných míst pro fotografování. Ať už hledáte historickou architekturu, přírodní scenérie nebo industriální prostory, v našem městě najdete vše. Jako fotografka, která v Jihlavě žije a tvoří, bych se s vámi ráda podělila o svá oblíbená místa, která stojí za to navštívit s fotoaparátem.</p>
     
     <h2>Historické centrum</h2>
     <p>Náměstí a přilehlé uličky jsou plné detailů, které stojí za zachycení. Obzvlášť v ranních hodinách, kdy jsou ulice prázdné, můžete objevit kouzlo starobylé architektury. Mým oblíbeným místem je Masarykovo náměstí za úsvitu, kdy první paprsky slunce osvětlují historické fasády domů a vytvářejí magickou atmosféru.</p>
     
     <p>Tip: Nezapomeňte se podívat nahoru! Mnoho zajímavých architektonických detailů se nachází nad úrovní očí – ozdobné římsy, sochy a reliéfy, které běžně přehlédneme.</p>
     
     <h2>Park Gustava Mahlera</h2>
     <p>Tento park je ideální pro portrétní fotografii. Kombinace zeleně, zajímavých soch a měnícího se světla vytváří dokonalé pozadí pro kreativní portréty. V různých ročních obdobích nabízí park odlišnou atmosféru – od svěží jarní zeleně přes barevné podzimní listí až po minimalistickou zimní scenérii.</p>
     
     <p>Nejlepší čas pro fotografování je pozdní odpoledne, kdy měkké světlo prochází mezi stromy a vytváří zajímavé světelné vzory.</p>
     
     <h2>Řeka Jihlava</h2>
     <p>Okolí řeky nabízí nejen přírodní scenérie, ale i zajímavé mosty a industriální prvky. Při západu slunce zde vznikají magické fotografie s nádhernými odrazy na vodní hladině. Mým oblíbeným úsekem je část mezi Starými Horami a Helenínem, kde řeka vytváří několik malebných zákoutí.</p>
     
     <p>Pro nejlepší výsledky doporučuji přijít hodinu před západem slunce a zůstat až do modré hodinky – období krátce po západu slunce, kdy obloha získává hluboký modrý odstín.</p>
     
     <h2>Industriální zóna Hruškové Dvory</h2>
     <p>Pro milovníky industriální fotografie nabízí tato oblast zajímavé kompozice a textury. Staré tovární budovy, rezavé konstrukce a opuštěné prostory vytvářejí surové, ale vizuálně působivé prostředí. Toto místo je ideální pro experimentování s kontrasty, stíny a perspektivou.</p>
     
     <p>Upozornění: Při fotografování v této oblasti dbejte na svou bezpečnost a respektujte soukromý majetek.</p>
     
     <h2>Zoologická zahrada Jihlava</h2>
     <p>Pro milovníky wildlife fotografie je jihlavská zoo skvělým místem k procvičení fotografických dovedností. Výběhy jsou navrženy tak, aby umožňovaly dobré pozorování zvířat, a tedy i jejich fotografování. Nejlepší světelné podmínky jsou obvykle dopoledne nebo pozdě odpoledne.</p>
     
     <p>Tip: Vezměte si teleobjektiv s ohniskovou vzdáleností alespoň 200mm pro detailní záběry zvířat.</p>
     
     <h2>Sezónní místa</h2>
     <p>Kromě stálých lokací stojí za zmínku i místa, která jsou fotograficky zajímavá jen v určitém období:</p>
     <ul>
       <li><strong>Řepková pole</strong> - V květnu zaplní okolí Jihlavy zářivě žlutá řepková pole, která vytvářejí úchvatné barevné kontrasty s modrou oblohou.</li>
       <li><strong>Vánoční trhy</strong> - Masarykovo náměstí během adventu nabízí nespočet příležitostí pro zachycení sváteční atmosféry.</li>
       <li><strong>Jihlavské podzemí</strong> - Unikátní prostory s fascinujícími světelnými podmínkami, ideální pro experimentování s dlouhou expozicí.</li>
     </ul>
     
     <h2>Závěrem</h2>
     <p>Každé místo má své kouzlo v různých ročních obdobích a denních dobách. Doporučuji experimentovat a navštěvovat stejná místa opakovaně - pokaždé objevíte něco nového. Fotografie je o vidění světa jinak, o nalézání krásy v běžných věcech kolem nás.</p>
     
     <p>A nezapomeňte – nejlepší fotoaparát je ten, který máte právě u sebe. Ať už používáte profesionální zrcadlovku nebo smartphone, důležitější než technika je váš pohled na svět.</p>     
     
   `,
    excerpt:
      "Prozkoumejte se mnou nejlepší místa pro fotografování v Jihlavě a okolí. Od historického centra po skryté přírodní zákoutí – průvodce lokacemi, které nabízejí jedinečné fotografické příležitosti v každém ročním období.",
    coverImageUrl: "/placeholder.svg?height=600&width=1200&text=Fotografické+lokace+v+Jihlavě",
    published: true,
    createdAt: "2024-07-10T09:15:00Z",
    updatedAt: "2024-07-10T09:15:00Z",
    readingTime: "8 min",
    category: "Průvodce",
    tags: ["lokace", "Jihlava", "tipy", "průvodce", "městská fotografie"],
  },
  {
    id: 4,
    title: "Jak vybrat první fotoaparát: Průvodce pro začínající fotografy",
    slug: "jak-vybrat-prvni-fotoaparat-pruvodce-pro-zacinajici-fotografy",
    content: `
     <p>Rozhodli jste se ponořit do světa fotografie a stojíte před důležitou otázkou: Jaký fotoaparát si vybrat? Jako studentka fotografie, která prošla stejnou cestou, vám ráda poradím, jak se v této džungli zorientovat a vybrat zařízení, které bude nejlépe odpovídat vašim potřebám a rozpočtu.</p>
     
     <h2>Nejdůležitější otázka: K čemu budete fotoaparát používat?</h2>
     <p>Než se ponoříte do technických specifikací a recenzí, položte si základní otázku: Co chcete fotografovat? Portrétní fotografie má jiné nároky než krajinářská, sportovní fotografie vyžaduje jiné funkce než makro. Vaše odpověď výrazně zúží výběr a pomůže vám soustředit se na skutečně důležité parametry.</p>
     
     <h2>Typy fotoaparátů</h2>
     
     <h3>Kompaktní fotoaparáty</h3>
     <p><strong>Výhody:</strong> Malé rozměry, jednoduché ovládání, nižší cena.<br>
     <strong>Nevýhody:</strong> Omezené možnosti manuálního nastavení, menší snímač (horší kvalita v horších světelných podmínkách).<br>
     <strong>Ideální pro:</strong> Začátečníky, cestování nalehko, každodenní fotografování.</p>
     
     <h3>Bezzrcadlovky</h3>
     <p><strong>Výhody:</strong> Kompaktnější než zrcadlovky, výměnné objektivy, plnohodnotné manuální ovládání, často lepší video funkce.<br>
     <strong>Nevýhody:</strong> Kratší výdrž baterie, vyšší cena.<br>
     <strong>Ideální pro:</strong> Vážnější zájemce o fotografii, kteří ocení kompaktní rozměry, videografy.</p>
     
     <h3>Digitální zrcadlovky (DSLR)</h3>
     <p><strong>Výhody:</strong> Výměnné objektivy, optický hledáček, dlouhá výdrž baterie, rozsáhlý ekosystém objektivů a příslušenství.<br>
     <strong>Nevýhody:</strong> Větší rozměry a hmotnost, hlučnější provoz.<br>
     <strong>Ideální pro:</strong> Fotografy, kteří preferují optický hledáček a delší výdrž baterie.</p>
     
     <h2>Klíčové parametry, na které se zaměřit</h2>
     
     <h3>Velikost snímače</h3>
     <p>Čím větší snímač, tím lepší kvalita obrazu, zejména za zhoršených světelných podmínek. Běžné velikosti od nejmenších po největší: 1/2.3", 1", Micro Four Thirds, APS-C, Full Frame.</p>
     
     <h3>Rozlišení (megapixely)</h3>
     <p>Nenechte se zmást marketingem – více megapixelů neznamená automaticky lepší kvalitu. Pro běžné použití je 16-24 MP naprosto dostačující. Vyšší rozlišení oceníte pouze při tisku ve velkých formátech nebo při potřebě výrazného ořezu.</p>
     
     <h3>Objektivy</h3>
     <p>U fotoaparátů s výměnnými objektivy je důležité zvážit dostupnost a cenu objektivů, které budete potřebovat. Základní kit objektiv je dobrý na start, ale časem budete chtít rozšířit svůj arzenál.</p>
     
     <h3>Ergonomie a ovládání</h3>
     <p>Často opomíjený, ale velmi důležitý faktor. Fotoaparát by vám měl "padnout do ruky" a jeho ovládání by mělo být intuitivní. Vždy si fotoaparát před koupí vyzkoušejte.</p>
     
     <h2>Můj osobní tip pro začátečníky</h2>
     <p>Jako studentka s omezeným rozpočtem jsem začínala s entry-level zrcadlovkou, která mi poskytla dobrý poměr cena/výkon a možnost učit se fotografické základy. Dnes bych ale začínajícím fotografům doporučila spíše bezzrcadlovku střední třídy, která nabízí kompaktnější rozměry při zachování všech důležitých funkcí.</p>
     
     <p>Konkrétní modely se rychle mění, ale obecně platí, že značky jako Canon, Nikon, Sony, Fujifilm nebo Olympus nabízejí kvalitní fotoaparáty pro začátečníky i pokročilé.</p>
     
     <h2>Nový nebo použitý?</h2>
     <p>Nebojte se zvážit i koupi použitého fotoaparátu. Mnoho fotografů pravidelně obměňuje svou techniku, a tak můžete získat kvalitní zařízení za zlomek původní ceny. Jen si dejte pozor na stav a počet expozic (něco jako "kilometry" u auta).</p>
     
     <h2>Závěrem</h2>
     <p>Pamatujte, že fotoaparát je jen nástroj. I ten nejdražší model vám nezaručí skvělé fotografie, pokud nebudete rozumět základům kompozice, expozice a práce se světlem. Investujte čas do učení a praxe – to je mnohem důležitější než nejnovější technologie.</p>
     
     <p>A nejdůležitější rada na závěr: Vyberte si fotoaparát, který vám bude dělat radost a se kterým budete chtít fotit každý den. Protože nejlepší fotoaparát je ten, který máte u sebe, když se naskytne příležitost zachytit jedinečný okamžik.</p>
   `,
    excerpt:
      "Stojíte před koupí svého prvního fotoaparátu? Tento průvodce vám pomůže zorientovat se v nabídce a vybrat zařízení, které bude nejlépe odpovídat vašim potřebám, ambicím a rozpočtu.",
    coverImageUrl: "/placeholder.svg?height=600&width=1200&text=Výběr+fotoaparátu",
    published: true,
    createdAt: "2024-08-05T11:20:00Z",
    updatedAt: "2024-08-05T11:20:00Z",
    readingTime: "10 min",
    category: "Vybavení",
    tags: ["fotoaparáty", "vybavení", "průvodce", "začátečníci", "nákupní rady"],
  },
  {
    id: 5,
    title: "5 tipů pro lepší portrétní fotografie",
    slug: "5-tipu-pro-lepsi-portretni-fotografie",
    content: `
     <p>Portrétní fotografie je jedním z nejkrásnějších, ale také nejnáročnějších fotografických žánrů. Zachytit osobnost, emoce a příběh člověka v jediném snímku vyžaduje nejen technické dovednosti, ale i schopnost komunikace a empatie. Jako fotografka, která se specializuje na portréty, bych se s vámi ráda podělila o pět tipů, které vám pomohou posunout vaše portrétní fotografie na vyšší úroveň.</p>
     
     <h2>1. Navažte spojení s fotografovaným</h2>
     <p>Nejdůležitějším aspektem portrétní fotografie není technika ani vybavení, ale vztah mezi fotografem a fotografovaným. Věnujte čas tomu, abyste svůj model poznali a vytvořili atmosféru důvěry. Mluvte s ním, vysvětlete mu svou vizi a průběžně ukazujte výsledky. Čím uvolněnější a přirozenější bude váš model, tím autentičtější budou vaše fotografie.</p>
     
     <p>Tip: Před samotným focením si s modelem chvíli povídejte o běžných věcech. Zajímejte se o jeho koníčky, práci nebo cokoliv, co ho baví. Tato neformální konverzace pomůže prolomit ledy a vytvoří příjemnější atmosféru.</p>
     
     <h2>2. Pracujte se světlem</h2>
     <p>Světlo je základním stavebním kamenem každé fotografie, a u portrétů to platí dvojnásob. Naučte se rozpoznávat kvalitu světla a jeho vliv na tvář. Měkké, rozptýlené světlo (například v zamračený den nebo ve stínu) je obvykle lichotivější pro většinu portrétů, zatímco tvrdé přímé světlo může zdůraznit texturu a vytvořit dramatický efekt.</p>
     
     <p>Pro začátek doporučuji experimentovat s přirozeným světlem. Zlatá hodinka (hodina po východu a před západem slunce) poskytuje nádherné, měkké světlo s teplým nádechem, které je ideální pro portréty.</p>
     
     <p>Tip: Vyzkoušejte fotografování u okna. Okno funguje jako obrovský softbox, který vytváří krásné směrové, ale rozptýlené světlo. Umístěte model bokem k oknu a sledujte, jak světlo modeluje tvář.</p>
     
     <h2>3. Věnujte pozornost kompozici a pozadí</h2>
     <p>Dobrý portrét není jen o tváři, ale o celkové kompozici snímku. Zjednodušte pozadí, aby neodvádělo pozornost od hlavního subjektu. Využívejte pravidlo třetin, vedoucí linie a další kompoziční principy k vytvoření vizuálně přitažlivých snímků.</p>
     
     <p>Nezapomínejte také na prostor pro pohled – je dobré ponechat více místa ve směru, kam se model dívá, což vytváří přirozenější a vyváženější kompozici.</p>
     
     <p>Tip: Experimentujte s hloubkou ostrosti. Malá hloubka ostrosti (nízké clonové číslo jako f/1.8 nebo f/2.8) rozostří pozadí a zdůrazní objekt. To je zvláště užitečné, když nemůžete najít ideální pozadí.</p>
     
     <h2>4. Zachyťte autentické emoce</h2>
     <p>Nejpůsobivější portréty zachycují skutečné emoce a osobnost fotografovaného. Místo pouhého "řekni sýr" se snažte vyvolat autentické reakce. Vyprávějte vtipy, požádejte model, aby zavřel oči a pak je otevřel, nebo mu řekněte, ať si představí konkrétní situaci nebo vzpomínku.</p>
     
     <p>Buďte připraveni zachytit prchavé okamžiky – často ty nejlepší výrazy trvají jen zlomek sekundy, zejména u dětí.</p>
     
     <p>Tip: Fotografujte v sériích. Některé z nejlepších portrétů vznikají mezi "oficiálními" pózami, když se model uvolní nebo se spontánně zasměje.</p>
     
     <h2>5. Experimentujte s různými úhly a perspektivami</h2>
     <p>Neomezujte se na fotografování z úrovně očí. Změna úhlu může dramaticky změnit charakter portrétu. Fotografování z mírného nadhledu může být lichotivé pro většinu lidí, zatímco pohled zdola může vytvořit dojem síly a autority.</p>
     
     <p>Nebojte se přiblížit se a zachytit detaily – oči, ruce nebo jiné charakteristické rysy mohou vyprávět silný příběh.</p>
     
     <p>Tip: Během jednoho focení vyzkoušejte alespoň tři různé perspektivy: klasický portrét z úrovně očí, detail (například jen oči nebo polovinu tváře) a širší záběr zahrnující prostředí.</p>
     
     <h2>Bonus tip: Naučte se základy retušování</h2>
     <p>I když je důležité zachytit co nejlepší snímek přímo ve fotoaparátu, základní postprodukce může vaše portréty posunout na profesionální úroveň. Naučte se upravovat expozici, kontrast a barvy. U portrétů může být užitečné zjemnit pleť a zvýraznit oči, ale pozor na přehnanou retušování, které může působit nepřirozeně.</p>
     
     <h2>Závěrem</h2>
     <p>Portrétní fotografie je nekonečná cesta učení a experimentování. Každý člověk je jedinečný a zaslouží si individuální přístup. Nebojte se porušovat pravidla a hledat vlastní styl.</p>
     
     <p>A pamatujte – nejdůležitější je, aby se váš model cítil dobře a aby výsledné fotografie zachytily jeho skutečnou podstatu. Když se vám to podaří, vytvoříte nejen krásný obraz, ale i cennou vzpomínku.</p>
     
     <p>Máte své osvědčené tipy pro portrétní fotografii? Podělte se o ně v komentářích!</p>
   `,
    excerpt:
      "Objevte pět osvědčených tipů, které vám pomohou vytvářet působivější a emotivnější portrétní fotografie. Od navázání spojení s fotografovaným po práci se světlem a kompozicí.",
    coverImageUrl: "/placeholder.svg?height=600&width=1200&text=Portrétní+fotografie",
    published: true,
    createdAt: "2024-09-18T16:45:00Z",
    updatedAt: "2024-09-18T16:45:00Z",
    readingTime: "6 min",
    category: "Techniky",
    tags: ["portréty", "techniky", "tipy", "světlo", "kompozice"],
  },
]

// Mock data for categories
const mockCategories: Category[] = [
  {
    id: 1,
    name: "Portréty",
    slug: "portraits",
    description: "Portrétní fotografie",
    createdAt: "2023-01-01T00:00:00Z",
  },
  {
    id: 2,
    name: "Módní",
    slug: "fashion",
    description: "Módní fotografie",
    createdAt: "2023-01-01T00:00:00Z",
  },
  {
    id: 3,
    name: "Kreativní",
    slug: "creative",
    description: "Kreativní fotografie",
    createdAt: "2023-01-01T00:00:00Z",
  },
  // Add new categories
  {
    id: 4,
    name: "Svatební",
    slug: "wedding",
    description: "Svatební fotografie",
    createdAt: "2023-01-01T00:00:00Z",
  },
  {
    id: 5,
    name: "Rodinné",
    slug: "family",
    description: "Rodinné fotografie",
    createdAt: "2023-01-01T00:00:00Z",
  },
  {
    id: 6,
    name: "Boudoir",
    slug: "boudoir",
    description: "Boudoir fotografie",
    createdAt: "2023-01-01T00:00:00Z",
  },
  {
    id: 7,
    name: "Krajina",
    slug: "landscape",
    description: "Krajinářská fotografie",
    createdAt: "2023-01-01T00:00:00Z",
  },
  {
    id: 8,
    name: "Pouliční",
    slug: "street",
    description: "Pouliční fotografie",
    createdAt: "2023-01-01T00:00:00Z",
  },
  {
    id: 9,
    name: "Architektura",
    slug: "architecture",
    description: "Architektonická fotografie",
    createdAt: "2023-01-01T00:00:00Z",
  },
  {
    id: 10,
    name: "Produktové",
    slug: "product",
    description: "Produktová fotografie",
    createdAt: "2023-01-01T00:00:00Z",
  },
  {
    id: 11,
    name: "Události",
    slug: "event",
    description: "Fotografie událostí",
    createdAt: "2023-01-01T00:00:00Z",
  },
  {
    id: 12,
    name: "Cestovní",
    slug: "travel",
    description: "Cestovní fotografie",
    createdAt: "2023-01-01T00:00:00Z",
  },
  {
    id: 13,
    name: "Černobílé",
    slug: "blackandwhite",
    description: "Černobílá fotografie",
    createdAt: "2023-01-01T00:00:00Z",
  },
  {
    id: 14,
    name: "Konceptuální",
    slug: "conceptual",
    description: "Konceptuální fotografie",
    createdAt: "2023-01-01T00:00:00Z",
  },
]

// Mock data for photos
const mockPhotos: Photo[] = [
  {
    id: 1,
    title: "Portrait Study",
    description: "A studio portrait with dramatic lighting",
    categoryId: 1,
    aspectRatio: "portrait",
    imageUrl: "/placeholder.svg?height=800&width=600&text=Portrait+Study",
    thumbnailUrl: "/placeholder.svg?height=400&width=300&text=Portrait+Study",
    uploadKey: "mock-key-1",
    featured: true,
    tags: ["portrait", "studio", "dramatic"],
    createdAt: "2023-03-10T09:00:00Z",
    updatedAt: "2023-03-10T09:00:00Z",
  },
  {
    id: 2,
    title: "Fashion Editorial",
    description: "Fashion shoot for summer collection",
    categoryId: 2,
    aspectRatio: "landscape",
    imageUrl: "/placeholder.svg?height=600&width=900&text=Fashion+Editorial",
    thumbnailUrl: "/placeholder.svg?height=300&width=450&text=Fashion+Editorial",
    uploadKey: "mock-key-2",
    featured: true,
    tags: ["fashion", "editorial", "summer"],
    createdAt: "2023-04-15T11:30:00Z",
    updatedAt: "2023-04-15T11:30:00Z",
  },
  {
    id: 3,
    title: "Creative Portrait",
    description: "Artistic portrait with creative lighting",
    categoryId: 3,
    aspectRatio: "square",
    imageUrl: "/placeholder.svg?height=800&width=800&text=Creative+Portrait",
    thumbnailUrl: "/placeholder.svg?height=400&width=400&text=Creative+Portrait",
    uploadKey: "mock-key-3",
    featured: false,
    tags: ["creative", "portrait", "artistic"],
    createdAt: "2023-05-20T14:00:00Z",
    updatedAt: "2023-05-20T14:00:00Z",
  },
  {
    id: 4,
    title: "Urban Fashion",
    description: "Street style fashion photography",
    categoryId: 2,
    aspectRatio: "portrait",
    imageUrl: "/placeholder.svg?height=900&width=600&text=Urban+Fashion",
    thumbnailUrl: "/placeholder.svg?height=450&width=300&text=Urban+Fashion",
    uploadKey: "mock-key-4",
    featured: false,
    tags: ["fashion", "urban", "street"],
    createdAt: "2023-06-05T10:30:00Z",
    updatedAt: "2023-06-05T10:30:00Z",
  },
]

// Create a mock database implementation that mimics the drizzle API
export const mockDb = {
  select: () => ({
    from: (table: any) => {
      // Create a query builder object that supports method chaining
      const queryBuilder = {
        // Base data based on the table
        _data:
          table === blogPosts
            ? [...mockBlogPosts]
            : table === categories
              ? [...mockCategories]
              : table === photos
                ? [...mockPhotos]
                : [],

        // Where clause implementation
        where: function (condition: any) {
          if (table === blogPosts) {
            // Filter blog posts (e.g., by published status)
            this._data = this._data.filter((post) => {
              // Handle eq(blogPosts.published, true)
              if (condition.value === true && condition.column === "published") {
                return post.published === true
              }
              // Handle eq(blogPosts.slug, slug)
              if (condition.column === "slug") {
                return post.slug === condition.value
              }
              return true
            })
          } else if (table === photos) {
            // Filter photos
            this._data = this._data.filter((photo) => {
              // Handle eq(photos.id, id)
              if (condition.column === "id") {
                return photo.id === condition.value
              }
              // Handle eq(photos.featured, true)
              if (condition.column === "featured") {
                return photo.featured === condition.value
              }
              // Handle eq(photos.categoryId, categoryId)
              if (condition.column === "categoryId") {
                return photo.categoryId === condition.value
              }
              // Handle eq(photos.aspectRatio, aspectRatio)
              if (condition.column === "aspectRatio") {
                return photo.aspectRatio === condition.value
              }
              return true
            })
          }
          // Return this same object to allow chaining
          return this
        },

        // OrderBy implementation
        orderBy: function () {
          // In a real implementation, we would sort the data here
          // For now, just return the filtered data
          return this._data
        },

        // Limit implementation - not used directly, handled in the repository
        limit: function () {
          return this
        },

        // Offset implementation - not used directly, handled in the repository
        offset: function () {
          return this
        },
      }

      return queryBuilder
    },
  }),
  query: {
    blogPosts: {
      findFirst: async ({ where }: any) => {
        if (where) {
          return (
            mockBlogPosts.find((post) => {
              if (where.id && post.id !== where.id) return false
              if (where.slug && post.slug !== where.slug) return false
              return true
            }) || null
          )
        }
        return mockBlogPosts[0] || null
      },
    },
  },
  insert: (table: any) => ({
    values: (data: any) => ({
      returning: () => {
        if (table === blogPosts) {
          const newPost = {
            ...data,
            id: Date.now(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          }
          mockBlogPosts.push(newPost as any)
          return Promise.resolve([newPost])
        }
        if (table === photos) {
          const newPhoto = {
            ...data,
            id: Date.now(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          }
          mockPhotos.push(newPhoto as any)
          return Promise.resolve([newPhoto])
        }
        return Promise.resolve([data])
      },
    }),
  }),
  update: (table: any) => ({
    set: (data: any) => ({
      where: (condition: any) => ({
        returning: () => {
          if (table === blogPosts) {
            const index = mockBlogPosts.findIndex((post) => post.id === condition.id)
            if (index !== -1) {
              mockBlogPosts[index] = { ...mockBlogPosts[index], ...data, updatedAt: new Date().toISOString() }
              return Promise.resolve([mockBlogPosts[index]])
            }
          }
          if (table === photos) {
            const index = mockPhotos.findIndex((photo) => photo.id === condition.id)
            if (index !== -1) {
              mockPhotos[index] = { ...mockPhotos[index], ...data, updatedAt: new Date().toISOString() }
              return Promise.resolve([mockPhotos[index]])
            }
          }
          return Promise.resolve([])
        },
      }),
    }),
  }),
  delete: (table: any) => ({
    where: (condition: any) => {
      if (table === blogPosts) {
        const index = mockBlogPosts.findIndex((post) => post.id === condition.id)
        if (index !== -1) {
          mockBlogPosts.splice(index, 1)
        }
      }
      if (table === photos) {
        const index = mockPhotos.findIndex((photo) => photo.id === condition.id)
        if (index !== -1) {
          mockPhotos.splice(index, 1)
        }
      }
      return Promise.resolve()
    },
  }),
}

// Helper function to get the appropriate database instance
export function getDb() {
  // If the real db is not available, use the mock db
  try {
    const { db } = require("./db")
    if (!db) throw new Error("Real database not available")
    return db
  } catch (error) {
    console.log("Using mock database")
    return mockDb
  }
}

