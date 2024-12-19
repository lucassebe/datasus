describe("example to-do app", () => {
  it.only("FORTALEZA", () => {
    cy.visit(
      "http://tabnet.datasus.gov.br/cgi/deftohtm.exe?sinannet/cnv/toxogestacionalce.def"
    );
    cy.get("#A").select([
      "toxcce19.dbf",
      "toxcce20.dbf",
      "toxcce21.dbf",
      "toxcce22.dbf",
      "toxcce23.dbf",
    ]);

    cy.get("#fig6").click();
    cy.get("#S6").select([
      "230440 FORTALEZA",
      "230428 EUSEBIO",
      "230100 AQUIRAZ",
      "230625 ITAITINGA",
      "230370 CAUCAIA",
      "231240 SAO GONCALO DO AMARANTE",
      "231020 PARACURU",
      "231025 PARAIPABA",
      "231260 SAO LUIS DO CURU",
      "231070 PENTECOSTE",
      "230090 APUIARES",
      "230460 GENERAL SAMPAIO",
      "231335 TEJUCUOCA",
      "230670 ITAPAGE",
      "230765 MARACANAU",
      "230970 PACATUBA",
      "230770 MARANGUAPE",
      "231010 PALMACIA",
      "230495 GUAIUBA",
      "230015 ACARAPE",
      "231160 REDENCAO",
      "230195 BARREIRA",
      "230210 BATURITE",
      "230980 PACOTI",
      "230510 GUARAMIRANGA",
      "230910 MULUNGU",
      "230120 ARACOIABA",
      "230140 ARATUBA",
      "230290 CAPISTRANO",
      "230650 ITAPIUNA",
      "230640 ITAPIPOCA",
      "231350 TRAIRI",
      "231355 TURURU",
      "231375 UMIRIM",
      "231380 URUBURETAMA",
    ]);

    cy.get(".mostra").click();
  });
  it("SERTÃO CENTRAL", () => {
    cy.visit(
      "http://tabnet.datasus.gov.br/cgi/deftohtm.exe?sinannet/cnv/toxogestacionalce.def"
    );
    cy.get("#A").select([
      "toxcce19.dbf",
      "toxcce20.dbf",
      "toxcce21.dbf",
      "toxcce22.dbf",
      "toxcce23.dbf",
    ]);

    cy.get("#fig6").click();
    cy.get("#S6").select([
      "231140 QUIXERAMOBIM",
      "230393 CHORO",
      "230533 IBICUITINGA",
      "230533 IBICUITINGA",
      "231140 QUIXERAMOBIM",
      "230185 BANABUIU",
      "231050 PEDRA BRANCA",
      "231270 SENADOR POMPEU",
      "230835 MILHA",
      "231300 SOLONOPOLE",
      "230280 CANINDE",
      "230300 CARIDADE",
      "231040 PARAMOTI",
      "230660 ITATIRA",
      "230763 MADALENA",
      "230240 BOA VIAGEM",
      "231330 TAUA",
      "231030 PARAMBU",
      "230040 AIUABA",
      "230150 ARNEIROZ",
    ]);

    cy.get(".mostra").click();
  });
  it("LITORAL LESTE", () => {
    cy.visit(
      "http://tabnet.datasus.gov.br/cgi/deftohtm.exe?sinannet/cnv/toxogestacionalce.def"
    );
    cy.get("#A").select([
      "toxcce19.dbf",
      "toxcce20.dbf",
      "toxcce21.dbf",
      "toxcce22.dbf",
      "toxcce23.dbf",
    ]);

    cy.get("#fig6").click();
    cy.get("#S6").select([
      "230760 LIMOEIRO DO NORTE",
      "231150 QUIXERE",
      "231310 TABULEIRO DO NORTE",
      "231250 SAO JOAO DO JAGUARIBE",
      "230070 ALTO SANTO",
      "230680 JAGUARIBARA",
      "230600 IRACEMA",
      "231126 POTIRETAMA",
      "230690 JAGUARIBE",
      "231080 PEREIRO",
      "230427 ERERE",
      "230110 ARACATI",
      "230445 FORTIM",
      "230535 ICAPUI",
      "230620 ITAICABA",
      "231180 RUSSAS",
      "230870 MORADA NOVA",
      "231010 PALMACIA",
      "230680 JAGUARETAMA",
      "230700 JAGUARUANA",
    ]);

    cy.get(".mostra").click();
  });
  it("NORTE", () => {
    cy.visit(
      "http://tabnet.datasus.gov.br/cgi/deftohtm.exe?sinannet/cnv/toxogestacionalce.def"
    );
    cy.get("#A").select([
      "toxcce19.dbf",
      "toxcce20.dbf",
      "toxcce21.dbf",
      "toxcce22.dbf",
      "toxcce23.dbf",
    ]);

    cy.get("#fig6").click();
    cy.get("#S6").select([
      "231290 SOBRAL",
      "231280 SENADOR SA",
      "231390 URUOCA",
      "231200 SANTANA DO ACARAU",
      "230800 MASSAPE",
      "230820 MERUOCA",
      "230880 MORAUJO",
      "230900 MUCAMBO",
      "230400 COREAU",
      "230450 FRECHEIRINHA",
      "230050 ALCANTARAS",
      "230435 FORQUILHA",
      "230610 IRAUCUBA",
      "231220 SANTA QUITERIA",
      "230365 CATUNDA",
      "230520 HIDROLANDIA",
      "230580 IPU",
      "231095 PIRES FERREIRA",
      "231170 RERIUTABA",
      "230465 GRACA",
      "231395 VARJOTA",
      "230990 PACUJA",
      "230310 CARIRE",
      "230490 GROAIRAS",
      "230020 ACARAU",
      "230230 BELA CRUZ",
      "230425 CRUZ",
      "230655 ITAREMA",
      "230725 JIJOCA DE JERICOACOARA",
      "230780 MARCO",
      "230890 MORRINHOS",
      "231340 TIANGUA",
      "231360 UBAJARA",
      "231410 VICOSA DO CEARA",
      "231230 SAO BENEDITO",
      "230530 IBIAPINA",
      "230340 CARNAUBAL",
      "230423 CROATA",
      "230500 GUARACIABA DO NORTE",
      "230410 CRATEUS",
      "230590 IPUEIRAS",
      "231100 PORANGA",
      "231126 QUITERIANOPOLIS",
      "230930 NOVA RUSSAS",
      "230940 NOVO ORIENTE",
      "230560 INDEPENDENCIA",
      "230565 IPAPORANGA",
      "231320 TAMBORIL",
      "230860 MONSENHOR TABOSA",
      "230125 ARARENDA",
    ]);

    cy.get(".mostra").click();
  });
  it("CARIRI", () => {
    cy.visit(
      "http://tabnet.datasus.gov.br/cgi/deftohtm.exe?sinannet/cnv/toxogestacionalce.def"
    );
    cy.get("#A").select([
      "toxcce19.dbf",
      "toxcce20.dbf",
      "toxcce21.dbf",
      "toxcce22.dbf",
      "toxcce23.dbf",
    ]);

    cy.get("#fig6").click();
    cy.get("#S6").select([
      "230260 CAMOCIM",
      "230205 BARROQUINHA",
      "230390 CHAVAL",
      "230790 MARTINOPOLE",
      "230470 GRANJA",
      "230730 JUAZEIRO DO NORTE",
      "230480 GRANJEIRO",
      "230320 CARIRIACU",
      "230190 BARBALHA",
      "230840 MISSAO VELHA",
      "230710 JARDIM",
      "230540 ICO",
      "230950 OROS",
      "230380 CEDRO",
      "231400 VARZEA ALEGRE",
      "230750 LAVRAS DA MANGABEIRA",
      "231370 UMARI",
      "230180 BAIXIO",
      "230570 IPAUMIRIM",
      "230550 IGUATU",
      "230850 MOMBACA",
      "230426 DEPUTADO IRAPUAN PINHEIRO",
      "231090 PIQUET CARNEIRO",
      "230030 ACOPIARA",
      "230360 CATARINA",
      "231135 QUIXELO",
      "231190 SABOEIRO",
      "230740 JUCAS",
      "230330 CARIUS",
      "230250 BREJO SANTO",
      "230170 AURORA",
      "230200 BARRO",
      "230830 MILAGRES",
      "230010 ABAIARA",
      "230810 MAURITI",
      "230720 JATI",
      "231060 PENAFORTE",
      "231120 POTENGI",
      "230420 CRATO",
      "230270 CAMPOS SALES",
      "230060 ALTANEIRA",
      "230080 ANTONINA DO NORTE",
      "230130 ARARIPE",
      "230160 ASSARE",
      "230430 FARIAS BRITO",
      "230920 NOVA OLINDA",
      "231120 POTENGI",
      "231195 SALITRE",
      "231210 SANTANA DO CARIRI",
      "231325 TARRAFAS",
    ]);

    cy.get(".mostra").click();
  });
});
