---
# Collection page (Exhibition)
title: "The Computer"
excerpt: "It was the most impressive tool man had ever dreamed of. Not because it could perform a great many functions, no, it was because it could perform all of them. The computer could take on many..."
layout: blank_page
author: "prokhorVLG"

# isSearchable: Will this page show up in searches?
isSearchable: true
# isCollectionExhibit: Is this page a collection exhibition?
isCollectionExhibit: true
# exhibitType: Dictates the post type - including layout and style of presentation.
# All exhibit types can be found in the README.md file in this folder.
exhibitType: experience
# date: Used in search and shows up in collection list
date: 2019-09-11
# searchText: Adds invisible text to search
searchText: "home"
# searchExcerpt: Shows up as description in collection list
searchExcerpt: "<p class='emphasized'>This exhibit presents the unique personal computers from various cultures during the late era of Morning Artifice.</p>

<p>“Think? Why think! We have computers to do that for us.” - Isaac Asimov</p>

<p>It was the most impressive tool man had ever dreamed of. Not because it could perform a great many functions, no, it was because it could perform all of them. The computer could take on many...</p>"
tags: ["technology", "computer-science"]
# eyebrow: Shows up above image in collection list
eyebrow: "the computers of the artifice era"
backgroundImage: "/assets/images/collection/backgrounds/computers.png"

raw: the-computer

page_highlight: "#c165d8"
image: "/assets/images/codex/computers.png"

page_features: [
                {
                  type: 'codexHead', init: {
                    id: 'codexHead',

                    toc: [ 
                      { title: 'Confederate Terminals', url: 'confederacy' },
                      { title: 'Federation Portables', url: 'federation' }, 
                      { title: 'Imperial Powerhouses', url: 'empire' },
                      { title: 'Directorate Machines', url: 'directorate' },
                      { title: 'Image Gallery', url: 'imageGallery' },
                    ],

                    title: "The Computer",
                    flavor: "",
                    flavor_url: '',

                    description: "<p class='text-left'>“Think? Why think! We have computers to do that for us.” - Isaac Asimov</p>

<p class='text-left'>It was the most impressive tool man had ever dreamed of. Not because it could perform a great many functions, no, it was because it could perform all of them. The computer could take on many forms, whether weak, strong, small, large; one thing remains constant - the computer is the gateway to limitless possibility.</p>

<p class='text-left'>Little did mankind know that when they would escape to the stars following the <a href='#' class='infoTag common' data-info='millenium-collapse' data-toggle='modal' data-target='#modalInfoTag'>Millenium Collapse</a>, the computer would be their eventual salvation. Despite man’s best efforts to resist the allure of the computer after its betrayal, the reign of the computer would eventually return.</p>

<p class='text-left'>These were the computers of Morning Artifice. What appears to be a mere hunk of machined plastic and silicon conceals an idea which would eventually permeate every home, every room, every thing, until finally it would be realized during the ascension of man, and our creation.</p>",

                    image: "/assets/images/codex/computers.png",
                    imageBlurb: "Computers. Importantish.",
                    lower_clear: 'codexLowerClear', 
                  }
                },
                {
                  type: 'infoBlock', init: {
                    id: 'introductionCuratorBlock',
                    class: 'paddingBottomResponsive80',
                    dualFloatBlock: true,
                    dualFloatBlockLeft: true,
                    curatorBlock: true,
                    width: '8',
                    data: "<img height='100' src='/assets/images/cast/curator-beautiful.png'/>
                      <div>
                        <h5>CURATOR</h5>
                        <p>Going forward, note that the technology for 'mobile personal digital assistants' was never quite perfected in this world as opposed to yours. Unturned Stones jumped straight from personal computers to what might be referred to as 'smarthome' technology.</p>
                      </div>",
                  } 
                },
                {
                  type: 'stripesBar', init: {
                    id: 'confederacy',
                    class: '',
                    color: '#31e05a',
                  }
                },
                {
                  type: 'headingBar', init: {
                    id: 'confederacyTitle',
                    overtitle: '',
                    title: 'Confederate Terminals',
                    desc: 'Thin client terminals, powered by the fastest internet ever created by man',
                    class: 'paddingTopResponsive80 paddingBottomResponsive80',
                    desc_color: '#31e05a',
                    center: true,
                    noHR: true,
                  }
                },
                {
                  type: 'imageBlock', init: {
                    id: 'confederacyImages',
                    cols: 2,
                    items: [
                      {
                        thumb: '/assets/images/codex/technology/compsci/salamis_torqueplus_thumb.png',
                        full: '/assets/images/codex/technology/compsci/salamis_torqueplus.png',
                        title: 'QUTNUMA Salamis Torqueplus',
                        title-alignment: "left-center",
                        desc: "<span class='description-italics'>Digital Life 4; Golemguard</span><br><br>QUTNUMA's Salamis series might not have been very innovative when it came out 16 years ago relative to existing Confederate technology, but the stability and ubiquity the design brought to the table made it rather popular.
                        <br>
                        <br>
                        Unfortunately, the new claytronic technology used in the screen caused it to 'sweat' under extended load. This created an interesting cultural phenomenon in which digital content producers based all experiences around the 72-minute screen threshold.",
                        desc-style: 'margin-top: -15px;',
                      },
                      {
                        thumb: '/assets/images/codex/technology/compsci/salamis_onepoint_thumb.png',
                        full: '/assets/images/codex/technology/compsci/salamis_onepoint.png',
                        title: 'QUTNUMA Onepoint 2',
                        title-alignment: "left-center",
                        desc: "<span class='description-italics'>Digital Life 12; Serpentguard</span><br><br>Simply put, QUTNUMA is a member of the old guard and they don't really innovate anymore. The only changes their desktop terminals have seen in the past decade is an increase in all of the version numbers, as minor aspects of the platform have gradually improved across the board. Most of the changes with the Onepoint 2 come in the form of design streamlining and software upgrades, as the Serpentguard virtual machines are several times faster than their older counterparts.",
                        desc-style: 'margin-top: -15px;',
                      },
                    ],
                  } 
                },
                {
                  type: 'infoSheet', init: {
                  id: 'confederateInfoSheet',
                  title: '',
                  desc: '',
                  desc_color: '#31e05a',
                  no_border: true,
                  data: [
                    ["Paradigm", "PROP113 (Proposition-113)"],
                    ["Architecture", "PerLab Cloud Solution"],
                  ]
                  } 
                },
                {
                  type: 'infoBlock', init: {
                    id: 'confederateBlock',
                    dualFloatBlock: true,
                    width: '8',
                    data: "<img src='/assets/images/codex/technology/compsci/computerLogo_perlab.png'/><p>Proposition-113 stems from a comunication standard used between two stranded space bases several centuries ago. Today, the light-based protocol has been combined with photonic microchips to create a lightening-fast cloud based computing paradigm in the Middle Eastern based Confederacy, and it is considered to be one of the fastest known internet networks in the universe. Unfortunately, this also means that a client’s distance to a data center directly impacts their user experience.</p>",
                  } 
                },
                {
                  type: 'infoBlock', init: {
                    id: 'confederateChartBlock',
                    width: '8',
                    data: "<img src='/assets/images/codex/technology/compsci/computerParadigmChart_perlab.png' class='imageMaxWidth' />",
                    centered: true,
                  } 
                },
                {
                  type: 'paddingBar', init: {
                    size: '60px',
                  }
                },
                {
                  type: 'stripesBar', init: {
                    id: 'federation',
                    class: '',
                    color: '#e63a2d',
                  }
                },
                {
                  type: 'headingBar', init: {
                    id: 'federationTitle',
                    overtitle: '',
                    title: 'Federation Portables',
                    desc: 'Thick client portable computers. Playful and powerful.',
                    class: 'paddingTopResponsive80 paddingBottomResponsive80',
                    desc_color: '#e63a2d',
                    center: true,
                    noHR: true,
                  }
                },
                {
                  type: 'imageBlock', init: {
                    id: 'federationImages',
                    class: '',
                    cols: 2,
                    items: [
                      {
                        thumb: '/assets/images/codex/technology/compsci/gearkid_thumb.png',
                        full: '/assets/images/codex/technology/compsci/gearkid.png',
                        title: 'Gearkid',
                        title-alignment: "left-center",
                        desc: "<span class='description-italics'>Touch OS 2.1</span><br><br>The Gearkid *was* innovative when it came onto market 23 years ago. It's one of those classic devices everyone remembers for being amazing because of how much better it was than everything else was at the time, even though it was actually plagued with issues. Despite this, the Gearkid remains in widespread use by hardcore Gearkid loyalists.<br><br>A successor to the Gearkid Company's Gearkid was never created for whatever reason (the creators don't know how to replicate their success without tarnishing their reputation), but people still hope for the next one.",
                        desc-style: 'margin-top: -15px;',
                      },
                      {
                        thumb: '/assets/images/codex/technology/compsci/berkeley_touch_thumb.png',
                        full: '/assets/images/codex/technology/compsci/berkeley_touch.png',
                        title: 'Berkeley Touch',
                        title-alignment: "left-center",
                        desc: "<span class='description-italics'>Touch OS Ultimate</span><br><br>After years of losing buckets of market share to competitors that capitolized on the mobile computing shift that began with Gearkid, long-time electronics kingpin Berkeley finally re-established confidence with consumers after completely reevaluating their strategies, marketing, and product lines 2 years ago.<br><br>The Berkeley Touch explores the full potential of their Touch OS software as a claytronic tablet that unfolds perfectly into a device over three times its initial size.",
                        desc-style: 'margin-top: -15px;',
                      },
                    ],
                  } 
                },
                {
                  type: 'infoSheet', init: {
                  id: 'federationInfoSheet',
                  title: '',
                  desc: '',
                  desc_color: '#e63a2d',
                  no_border: true,
                  data: [
                    ["Paradigm", "IBM-Neumann (IBM-Neumann Digital)"],
                    ["Architecture", "ARPANET (Advanced Research Projects Agency Network"],
                  ]
                  } 
                },
                {
                  type: 'infoBlock', init: {
                    id: 'federationBlock',
                    dualFloatBlock: true,
                    width: '8',
                    data: "<img src='/assets/images/codex/technology/compsci/computerLogo_ibm.png'/><p>Ditching the idea of using different devices for different client tasks, the Federation evolved to use IBM-Neumann pattern devices which take on the role of desktops, laptops, phones, and most gadgets in between. They are well-rounded client computing solutions, relying on persistent web apps to keep the client up to date but still usable offline. Responsive design lets a single IBM-Neumann device to take on any form factor. However, flexible design comes with a cost: these devices are jacks of all trades and masters of none.</p>",
                  } 
                },
                {
                  type: 'infoBlock', init: {
                    id: 'federationChartBlock',
                    width: '8',
                    data: "<img src='/assets/images/codex/technology/compsci/computerParadigmChart_ibm.png' class='imageMaxWidth' />",
                    centered: true,
                  } 
                },
                {
                  type: 'paddingBar', init: {
                    size: '60px',
                  }
                },
                {
                  type: 'stripesBar', init: {
                    id: 'empire',
                    class: '',
                    color: '#dfba24',
                  }
                },
                {
                  type: 'headingBar', init: {
                    id: 'empireTitle',
                    overtitle: '',
                    title: 'Imperial Powerhouses',
                    desc: 'The big boys have come out to play: ternary modular powerhouses.',
                    class: 'paddingTopResponsive80 paddingBottomResponsive80',
                    desc_color: '#dfba24',
                    center: true,
                    noHR: true,
                  }
                },
                {
                  type: 'imageBlock', init: {
                    id: 'empireImages',
                    cols: 2,
                    items: [
                      {
                        thumb: '/assets/images/codex/technology/compsci/zna_pk_thumb.png',
                        full: '/assets/images/codex/technology/compsci/zna_pk.png',
                        title: 'ZNA PK',
                        title-alignment: "left-center",
                        desc: "<span class='description-italics'>Mun Solaris 56</span><br><br>While the big ol' ZNA PK isn't really around anymore outside of a few underdeveloped regions, this beast introduced just 18 years ago is something most adults remember very well. While it may look ugly and old compared to its counterparts from other nations, it established certain fundamantal concepts in Imperial computer doctrine that weren't possible before: military-level ruggedness for civilian computers, the idea that each and any computer should be portable in one way or another, and most importantly, limited modularity.",
                        desc-style: 'margin-top: -15px;',
                      },
                      {
                        thumb: '/assets/images/codex/technology/compsci/zna_vezdehod_thumb.png',
                        full: '/assets/images/codex/technology/compsci/zna_vezdehod.png',
                        title: 'ZNA Vezdehod',
                        title-alignment: "left-center",
                        desc: "<span class='description-italics'>Eternity Solaris GUI</span><br><br>Today's ZNA Vezdehod is the best the Empire can come up with... for now. Borrowing design ideas from other nations, this enormous briefcase laptop designed 3 years ago is relatively compact compared to its older counterparts, has the capacity to run complex neural networks and artificial intelligences on a client level, and includes a built-in light pen for some of the first GUI interactions the Empire has ever seen.<br><br>Imperial citizens can finally begin to enjoy the wonders of modern gaming with interactive media such as Antiassault 1.6, a multiplayer shooter featuring cutting-edge 3d vector graphics and keyboard controls.",
                        desc-style: 'margin-top: -15px;',
                      },
                    ],
                  } 
                },
                {
                  type: 'infoSheet', init: {
                  id: 'empireInfoSheet',
                  title: '',
                  desc: '',
                  desc_color: '#dfba24',
                  no_border: true,
                  data: [
                    ["Paradigm", "sOGAS (Svarog All State Automated System)"],
                    ["Architecture", "Glushkov-Brusentsov OGAS"],
                  ]
                  } 
                },
                {
                  type: 'infoBlock', init: {
                    id: 'empireBlock',
                    dualFloatBlock: true,
                    width: '8',
                    data: "<img src='/assets/images/codex/technology/compsci/computerLogo_sogas.png'/><p>Long after the USSR is gone, Imperial computers continue to run on the trinary logic circuits and state control protocols that the communist regime introduced. sOGAS computers might be far less advanced than their counterparts, but they make up for that in modularity and malleability. Imperial doctrines mandate that each computer must be portable, recycled within a year, and have the ability to take direct commands from the state-controlling AI originally designed to control the economy.</p>",
                  } 
                },
                {
                  type: 'infoBlock', init: {
                    id: 'empireChartBlock',
                    width: '8',
                    data: "<img src='/assets/images/codex/technology/compsci/computerParadigmChart_sogas.png' class='imageMaxWidth' />",
                    centered: true,
                  } 
                },
                {
                  type: 'paddingBar', init: {
                    size: '60px',
                  }
                },
                {
                  type: 'stripesBar', init: {
                    id: 'directorate',
                    class: '',
                    color: '#48d0e4',
                  }
                },
                {
                  type: 'headingBar', init: {
                    id: 'directorateTitle',
                    overtitle: '',
                    title: 'Directorate Machines',
                    desc: 'Proprietary quantum machines, the most powerful in their class.',
                    class: 'paddingTopResponsive80 paddingBottomResponsive80',
                    desc_color: '#48d0e4',
                    center: true,
                    noHR: true,
                  }
                },
                {
                  type: 'imageBlock', init: {
                    id: 'directorateImages',
                    cols: 2,
                    items: [
                      {
                        thumb: '/assets/images/codex/technology/compsci/pengtai_pro_thumb.png',
                        full: '/assets/images/codex/technology/compsci/pengtai_pro.png',
                        title: 'Deskmate/Pengtai Pro 28',
                        title-alignment: "left-center",
                        desc: "<span class='description-italics'>Deskmate 2.0</span><br><br>The Deskmate/Pengtai Pro 28 running Deskmate 2.0 appeared in offices 18 years ago. While they are relatively old now, Deskmate software has been kept up to date and it holds up well especially when compared to older systems offered in other nations.",
                        desc-style: 'margin-top: -15px;',
                      },
                      {
                        thumb: '/assets/images/codex/technology/compsci/muguang_envy_thumb.png',
                        full: '/assets/images/codex/technology/compsci/muguang_envy.png',
                        title: 'Vision/Muguang Envy 28',
                        title-alignment: "left-center",
                        desc: "<span class='description-italics'>OS 9 Daydream</span><br><br>Introduced just 2 years ago by the <a href='#' class='infoTag common' data-info='vision-muguang' data-toggle='modal' data-target='#modalInfoTag'>Vision/Muguang</a> Zaibatsu, the Envy 28 may be the most powerful personal computer in history. Unfortunately, as it is illegal to modify outside of a few strict guidelines, its full potential will likely never be explored.",
                        desc-style: 'margin-top: -15px;',
                      },
                    ],
                  } 
                },
                {
                  type: 'infoSheet', init: {
                  id: 'directorateInfoSheet',
                  title: '',
                  desc: '',
                  desc_color: '#48d0e4',
                  no_border: true,
                  data: [
                    ["Paradigm", "Analytical (Meerkat Analytical Engine)"],
                    ["Architecture", "NQN (Hefei National Quantum Network)"],
                  ]
                  } 
                },
                {
                  type: 'infoBlock', init: {
                    id: 'directorateBlock',
                    dualFloatBlock: true,
                    width: '8',
                    data: "<img src='/assets/images/codex/technology/compsci/computerLogo_hefei.png'/><p>Because of the prevalence of advanced quantum computing components in the East Asian based Directorate, computers here tend to follow the ‘foggy’ paradigm in which powerful, local devices in the form of highly proprietary and illegal-to-open consoles are connected with data centers on a nearby nitrogen-ice moon. Despite dwarfing their counterparts in power, these computing goliaths are kneecapped by the fact that they can only do exactly what they were designed to do, forever and with no exceptions.</p>",
                  } 
                },
                {
                  type: 'infoBlock', init: {
                    id: 'directorateCuratorBlock',
                    dualFloatBlock: true,
                    curatorBlock: true,
                    width: '8',
                    data: "<img src='/assets/images/cast/curator-beautiful.png'/>
                      <div>
                        <h5>CURATOR</h5>
                        <p>Anticonsumer practices were prevalent for so many years that people didn't even know anything else. Self-repair was illegal (by law!) for centuries, and even things like pushing the power button without a certification voided your warranty.</p>
                        <p>Meanwhile, because every device was so damn proprietary and every part was designed to work with every other, they worked extremely efficiently and lasted for years.</p>
                        <p>It's basically Apple on steroids.</p>
                      </div>",
                  } 
                },
                {
                  type: 'infoBlock', init: {
                    id: 'directorateChartBlock',
                    width: '8',
                    data: "<img src='/assets/images/codex/technology/compsci/computerParadigmChart_hefei.png' class='imageMaxWidth' />",
                    centered: true,
                  } 
                },
                {
                  type: 'paddingBar', init: {
                    size: '60px',
                  }
                },
                {
                  type: 'galleryBlock', init: {
                    id: 'imageGallery',
                    count: '2',
                    title: 'Image Gallery',
                    desc: 'Computers in Unturned Stones',
                    items: [
                      [
                        {
                          thumb: '/assets/images/codex/technology/compsci/computers_uts_infographic_thumb.png',
                          full: '/assets/images/codex/technology/compsci/computers_uts_infographic.png',
                          title: 'Computers in Unturned Stones',
                          desc: 'Infographic',
                        },
                        {
                          thumb: '/assets/images/codex/technology/compsci/computer_paradigms_long_thumb.png',
                          full: '/assets/images/codex/technology/compsci/computer_paradigms_long.png',
                          title: 'Computer Paradigms in Unturned Stones',
                          desc: 'Infographic',
                        },
                      ],
                    ],
                  } 
                },
                {
                  type: 'paddingBar', init: {
                    size: '60px',
                  }
                },
              ]
---