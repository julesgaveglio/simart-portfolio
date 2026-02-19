// Fichier de traductions centralisé

export type Language = 'en' | 'nl';

export interface Translations {
  navigation: {
    works: string;
    about: string;
    contact: string;
  };
  home: {
    subtitle: string;
    scrollDown: string;
  };
  works: {
    pageTitle: string;
    viewSeries: string;
    backToWorks: string;
    year: string;
    dimensions: string;
    medium: string;
    status: string;
    available: string;
    sold: string;
    medium_types: {
      oilOnCanvas: string;
      acrylicOnCanvas: string;
      mixedMedia: string;
    };
    series: {
      fieldOfBecoming: {
        title: string;
        description: string;
      };
      innerExpectation: {
        title: string;
        description: string;
      };
      threshold: {
        title: string;
        description: string;
      };
    };
    descriptions: {
      [key: string]: string;
    };
  };
  about: {
    pageTitle: string;
    biography: string[];
    education: string;
    educationList: string[];
    exhibitions: string;
    exhibitionsList: string[];
  };
  contact: {
    pageTitle: string;
    contactInfo: string;
    email: string;
    phone: string;
    address: string;
    studio: string;
    studioAddress: string;
    openingHours: string;
    formTitle: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    submitButton: string;
    submittingButton: string;
    thankYouMessage: string;
    requiredField: string;
    invalidEmail: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    navigation: {
      works: 'WORKS',
      about: 'ABOUT',
      contact: 'CONTACT',
    },
    home: {
      subtitle: 'Visual Artist',
      scrollDown: 'Scroll down',
    },
    works: {
      pageTitle: 'Works',
      viewSeries: 'View Series',
      backToWorks: 'Back to Works',
      year: 'Year',
      dimensions: 'Dimensions',
      medium: 'Medium',
      status: 'Status',
      available: 'Available',
      sold: 'Sold',
      medium_types: {
        oilOnCanvas: 'Oil on Canvas',
        acrylicOnCanvas: 'Acrylic on Canvas',
        mixedMedia: 'Mixed Media',
      },
      series: {
        fieldOfBecoming: {
          title: 'Field of Becoming',
          description: 'A series exploring the transformation of natural forms through abstract representation.',
        },
        innerExpectation: {
          title: 'Inner Expectation',
          description: 'Works that delve into the psychology of anticipation and internal dialogue.',
        },
        threshold: {
          title: 'Threshold',
          description: 'An exploration of liminal spaces and transitional states through bold color and form.',
        },
      },
      descriptions: {
        fieldOfBecoming1: 'The first work in the Field of Becoming series explores the emergence of form from chaos.',
        fieldOfBecoming2: 'A continuation of themes from the first piece, with greater emphasis on linear elements.',
        fieldOfBecoming3: 'This larger canvas allows for a more expansive exploration of the relationship between structure and fluidity.',
        fieldOfBecoming4: 'The culmination of the series, bringing together all previous elements into a harmonious whole.',
        innerExpectation1: 'The first in a series examining internal states through abstract forms.',
        innerExpectation2: 'Building on the themes of the first piece with a more subdued palette.',
        innerExpectation3: 'The final work in the series presents a resolution to the tension established in earlier pieces.',
        threshold1: 'The beginning of an exploration into transitional spaces.',
        threshold2: 'Continuing the investigation of thresholds with a focus on vertical movement.',
        threshold3: 'This piece introduces more complex spatial relationships within the threshold concept.',
        threshold4: 'A larger format allows for a more immersive experience of the threshold state.',
        threshold5: 'The final work in the series synthesizes all previous explorations into a definitive statement.',
      },
    },
    about: {
      pageTitle: 'About',
      biography: [
        'Simone Roodselaar (SiemArt) is a contemporary visual artist based in Amsterdam, Netherlands. Her work explores the intersection of abstract forms and natural elements, creating a unique visual language that bridges the gap between representation and abstraction.',
        'After completing her studies at the Royal Academy of Art in The Hague, Roodselaar developed a distinctive approach to painting that combines traditional techniques with experimental processes. Her work has been exhibited in galleries across Europe and is held in several private collections.',
        'Roodselaar\'s practice is characterized by a meticulous attention to composition and color relationships. She often works in series, exploring a particular theme or concept through multiple iterations. This approach allows her to deeply investigate formal and conceptual concerns while maintaining a cohesive body of work.',
        'In recent years, her focus has shifted towards exploring the relationship between human perception and natural environments. Through her abstract landscapes and organic forms, she invites viewers to reconsider their connection to the natural world and the ways in which we process visual information.',
        'When not in her studio, Roodselaar teaches workshops and lectures on contemporary painting practices. She is committed to fostering dialogue around art and its role in addressing environmental and social issues.'
      ],
      education: 'Education',
      educationList: [
        '2010 - 2014: Royal Academy of Art, The Hague - BFA in Fine Arts',
        '2014 - 2016: Gerrit Rietveld Academy, Amsterdam - MFA in Painting'
      ],
      exhibitions: 'Selected Exhibitions',
      exhibitionsList: [
        '2025: "Natural Abstractions", Van Gogh Museum, Amsterdam',
        '2024: "Contemporary Visions", Stedelijk Museum, Amsterdam',
        '2023: "Form and Color", Galerie Moderne, Rotterdam',
        '2022: "New Perspectives", Kunsthal, Rotterdam',
        '2021: "Organic Structures", Gallery 23, Amsterdam'
      ]
    },
    contact: {
      pageTitle: 'Contact',
      contactInfo: 'Contact Information',
      email: 'Email',
      phone: 'Phone',
      address: 'Address',
      studio: 'Studio',
      studioAddress: 'Kunstenaarsstudio 23, Amsterdam, Netherlands',
      openingHours: 'Studio visits by appointment only',
      formTitle: 'Get in Touch',
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      submitButton: 'Send Message',
      submittingButton: 'Sending...',
      thankYouMessage: 'Thank you for your message. I will get back to you soon.',
      requiredField: 'This field is required',
      invalidEmail: 'Please enter a valid email address',
    }
  },
  nl: {
    navigation: {
      works: 'WERKEN',
      about: 'OVER',
      contact: 'CONTACT',
    },
    home: {
      subtitle: 'Beeldend Kunstenaar',
      scrollDown: 'Scroll naar beneden',
    },
    works: {
      pageTitle: 'Werken',
      viewSeries: 'Bekijk Serie',
      backToWorks: 'Terug naar Werken',
      year: 'Jaar',
      dimensions: 'Afmetingen',
      medium: 'Medium',
      status: 'Status',
      available: 'Beschikbaar',
      sold: 'Verkocht',
      medium_types: {
        oilOnCanvas: 'Olieverf op Doek',
        acrylicOnCanvas: 'Acrylverf op Doek',
        mixedMedia: 'Gemengde Techniek',
      },
      series: {
        fieldOfBecoming: {
          title: 'Veld van Wording',
          description: 'Een serie die de transformatie van natuurlijke vormen door abstracte representatie verkent.',
        },
        innerExpectation: {
          title: 'Innerlijke Verwachting',
          description: 'Werken die dieper ingaan op de psychologie van verwachting en interne dialoog.',
        },
        threshold: {
          title: 'Drempel',
          description: 'Een verkenning van liminale ruimtes en overgangsstaten door middel van gedurfde kleur en vorm.',
        },
      },
      descriptions: {
        fieldOfBecoming1: 'Het eerste werk in de Veld van Wording-serie verkent het ontstaan van vorm uit chaos.',
        fieldOfBecoming2: 'Een voortzetting van thema\'s uit het eerste stuk, met meer nadruk op lineaire elementen.',
        fieldOfBecoming3: 'Dit grotere doek maakt een uitgebreidere verkenning mogelijk van de relatie tussen structuur en vloeiendheid.',
        fieldOfBecoming4: 'Het hoogtepunt van de serie, waarin alle eerdere elementen samenkomen tot een harmonieus geheel.',
        innerExpectation1: 'De eerste in een serie die interne toestanden onderzoekt door middel van abstracte vormen.',
        innerExpectation2: 'Voortbouwend op de thema\'s van het eerste stuk met een meer ingetogen palet.',
        innerExpectation3: 'Het laatste werk in de serie presenteert een oplossing voor de spanning die in eerdere stukken is opgebouwd.',
        threshold1: 'Het begin van een verkenning van overgangsruimtes.',
        threshold2: 'Voortzetting van het onderzoek naar drempels met een focus op verticale beweging.',
        threshold3: 'Dit stuk introduceert meer complexe ruimtelijke relaties binnen het drempelconcept.',
        threshold4: 'Een groter formaat zorgt voor een meer meeslepende ervaring van de drempeltoestand.',
        threshold5: 'Het laatste werk in de serie synthetiseert alle eerdere verkenningen tot een definitieve uitspraak.',
      },
    },
    about: {
      pageTitle: 'Over',
      biography: [
        'Simone Roodselaar (SiemArt) is een hedendaagse beeldend kunstenaar gevestigd in Amsterdam, Nederland. Haar werk verkent de kruising van abstracte vormen en natuurlijke elementen, waarmee ze een unieke visuele taal creëert die de kloof tussen representatie en abstractie overbrugt.',
        'Na het afronden van haar studie aan de Koninklijke Academie van Beeldende Kunsten in Den Haag, ontwikkelde Roodselaar een onderscheidende benadering van schilderen die traditionele technieken combineert met experimentele processen. Haar werk is tentoongesteld in galerieën door heel Europa en is opgenomen in verschillende privécollecties.',
        'Roodselaars praktijk wordt gekenmerkt door een nauwgezette aandacht voor compositie en kleurrelaties. Ze werkt vaak in series, waarbij ze een bepaald thema of concept onderzoekt door middel van meerdere iteraties. Deze aanpak stelt haar in staat om formele en conceptuele vraagstukken diepgaand te onderzoeken terwijl ze een samenhangend oeuvre behoudt.',
        'In de afgelopen jaren is haar focus verschoven naar het verkennen van de relatie tussen menselijke perceptie en natuurlijke omgevingen. Door haar abstracte landschappen en organische vormen nodigt ze kijkers uit om hun verbinding met de natuurlijke wereld en de manieren waarop we visuele informatie verwerken te heroverwegen.',
        'Wanneer ze niet in haar atelier is, geeft Roodselaar workshops en lezingen over hedendaagse schilderpraktijken. Ze zet zich in voor het bevorderen van dialoog rond kunst en de rol ervan bij het aanpakken van milieu- en sociale kwesties.'
      ],
      education: 'Opleiding',
      educationList: [
        '2010 - 2014: Koninklijke Academie van Beeldende Kunsten, Den Haag - Bachelor Beeldende Kunst',
        '2014 - 2016: Gerrit Rietveld Academie, Amsterdam - Master Schilderkunst'
      ],
      exhibitions: 'Geselecteerde Tentoonstellingen',
      exhibitionsList: [
        '2025: "Natuurlijke Abstracties", Van Gogh Museum, Amsterdam',
        '2024: "Hedendaagse Visies", Stedelijk Museum, Amsterdam',
        '2023: "Vorm en Kleur", Galerie Moderne, Rotterdam',
        '2022: "Nieuwe Perspectieven", Kunsthal, Rotterdam',
        '2021: "Organische Structuren", Galerie 23, Amsterdam'
      ]
    },
    contact: {
      pageTitle: 'Contact',
      contactInfo: 'Contactgegevens',
      email: 'E-mail',
      phone: 'Telefoon',
      address: 'Adres',
      studio: 'Atelier',
      studioAddress: 'Kunstenaarsstudio 23, Amsterdam, Nederland',
      openingHours: 'Atelierbezoeken alleen op afspraak',
      formTitle: 'Neem Contact Op',
      nameLabel: 'Naam',
      emailLabel: 'E-mail',
      messageLabel: 'Bericht',
      submitButton: 'Verstuur Bericht',
      submittingButton: 'Versturen...',
      thankYouMessage: 'Bedankt voor je bericht. Ik neem binnenkort contact met je op.',
      requiredField: 'Dit veld is verplicht',
      invalidEmail: 'Voer een geldig e-mailadres in',
    }
  }
};
