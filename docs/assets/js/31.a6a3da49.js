(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{508:function(e,t,r){"use strict";r.r(t);var a=r(45),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"les-enjeux"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#les-enjeux"}},[e._v("#")]),e._v(" Les enjeux")]),e._v(" "),r("h2",{attrs:{id:"les-enjeux-de-l-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#les-enjeux-de-l-api"}},[e._v("#")]),e._v(" Les enjeux de l'API")]),e._v(" "),r("ul",[r("li",[e._v("Adhésion à la "),r("a",{attrs:{href:"https://www.w3.org/TR/scxml/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spécification SCXML de la W3C"),r("OutboundLink")],1),e._v(" et le formalisme original des statecharts de David Harel")]),e._v(" "),r("li",[e._v("Promouvoir une architecture basée sur les événements "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Actor_model",target:"_blank",rel:"noopener noreferrer"}},[e._v("Actor model"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Compatibilité avec tous les frameworks et plateformes")]),e._v(" "),r("li",[e._v("Possibilité de sérialiser complètement les définitions de machine en JSON (et SCXML)")]),e._v(" "),r("li",[e._v("API "),r("code",[e._v("createMachine(...)")]),e._v(" pure et fonctionnelle")]),e._v(" "),r("li",[e._v("Zéro dépendances")])]),e._v(" "),r("h2",{attrs:{id:"choisir-xstate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#choisir-xstate"}},[e._v("#")]),e._v(" Choisir XState")]),e._v(" "),r("p",[e._v("Si vous décidez d'utiliser XState, "),r("a",{attrs:{href:"https://github.com/CodeCatalyst",target:"_blank",rel:"noopener noreferrer"}},[e._v("John Yanarella"),r("OutboundLink")],1),e._v(" a très bien résumé ses raisons (liens et accent mis sur moi):")]),e._v(" "),r("blockquote",[r("p",[e._v("Lorsque j'ai fait ce même choix quant à savoir si j'utilisais et défendais l'utilisation de XState là où je travaillais, les choses qui m'ont marqué étaient :")]),e._v(" "),r("ol",[r("li",[e._v("L'"),r("strong",[e._v("engagement à comprendre l'état de la technique pertinent")]),e._v(" et à éclairer la mise en œuvre sur la base d'articles de recherche existants ("),r("a",{attrs:{href:"https://www.sciencedirect.com/science/article/pii/0167642387900359/pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("article original sur les statecharts"),r("OutboundLink")],1),e._v(" par Harel), Livres (Horrocks' "),r("a",{attrs:{href:"https://www.amazon.com/Constructing-User-Interface-Statecharts-Horrocks/dp/0201342782/ref=sr_1_3?ie=UTF8&qid=1548690916&sr=8-3&keywords=statecharts",target:"_blank",rel:"noopener noreferrer"}},[e._v('"Constructing the User Interface with Statecharts"'),r("OutboundLink")],1),e._v("), et les standards ("),r("a",{attrs:{href:"https://www.w3.org/TR/scxml/",target:"_blank",rel:"noopener noreferrer"}},[e._v("W3C's SCXML"),r("OutboundLink")],1),e._v(").")])]),e._v(" "),r("p",[e._v("La plupart des autres bibliothèques que j'ai examinées en cours de route sont des projets qui s'arrêtent au point d'implémenter de simples machines à états finis. (Si c'est tout ce dont vous avez besoin - et c'est peut-être le cas - David n'a pas tardé à souligner le peu de lignes qu'il faut pour lancer la vôtre.). Leur portée était raccourcie, car elles ne traitaient pas des limitations ultérieures qui peuvent être surmontées via un diagramme d'état.")]),e._v(" "),r("p",[e._v("XState repose sur de bonnes bases en adoptant "),r("a",{attrs:{href:"https://www.w3.org/TR/scxml/",target:"_blank",rel:"noopener noreferrer"}},[e._v("la spécification SCXML du W3C"),r("OutboundLink")],1),e._v(" - il bénéficie des recherches de ce groupe de travail sur les cas extrêmes.")]),e._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[e._v("C'est un "),r("strong",[e._v('refuge du "syndrome de l\'objet brillant"')]),e._v(" consistant à adopter la dernière \"bibliothèque de gestion d'état\" du mois. Il implémente fidèlement un formalisme vieux de plus de 30 ans. Vous finissez par mettre votre logique la plus importante dans quelque chose que vous pouvez emporter avec vous dans n'importe quel framework d'interface utilisateur (et potentiellement dans d'autres implémentations dans d'autres langages). C'est une bibliothèque sans dépendance.")])]),e._v(" "),r("p",[e._v("Le monde du développement Front est le Far West, et il pourrait apprendre de ce que d'autres disciplines d'ingénierie ont connu et employé pendant des années.")]),e._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[r("p",[e._v("Il a "),r("strong",[e._v("passé un seuil critique de maturité")]),e._v(" depuis la version 4, notamment depuis l'introduction du "),r("a",{attrs:{href:"https://statecharts.github.io/xstate-viz",target:"_blank",rel:"noopener noreferrer"}},[e._v("visualiseur"),r("OutboundLink")],1),e._v(". Et ce n'est que la partie émergée de l'iceberg de ce qu'il pourrait accomplir ensuite, car lui (et [sa communauté] (https://github.com/statelyai/xstate/discussions)) ont introduit des outils qui tirent parti de la façon dont un diagramme d'état peut être visualisé, analysé et testé.")])]),e._v(" "),r("li",[r("p",[e._v("La "),r("strong",[e._v("communauté")]),e._v(" qui grandit tout autour et la prise de conscience qu'elle apporte aux machines à états finis et aux diagrammes d'états. Si vous relisez cet historique gitter, il y a une multitude de liens vers des articles de recherche, d'autres implémentations FSM et Statechart, etc. qui ont été collectés par "),r("a",{attrs:{href:"https://twitter.com/mogsie",target:"_blank",rel:"noopener noreferrer"}},[e._v("Erik Mogensen"),r("OutboundLink")],1),e._v(" sur "),r("a",{attrs:{href:"https://statecharts.github.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("statecharts.github.io"),r("OutboundLink")],1),e._v(".")])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);