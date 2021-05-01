const data = {
  fullName: 'Raikel Bordón López',
  mailAddress: 'raikelbl@gmail.com',
  birthDate: '14/08/1988',
  websiteLink: 'https://raikel.github.io/portfolio/',
  websiteName: 'raikel.github.io/portfolio',
  profileSummary: 'Full stack developer dedicated to design and implement high quality, user-friendly and feature-rich software products. Passionate about building things by coding and acquire new skills every day. Strong attention to detail, excellent problem solving skills and ability to work in a fast-paced team environment.',
  workExperience: [{
    dateLimits: '01/2021 - Present',
    location: 'Home Office',
    positionTitle: 'Software Engineer',
    companyName: 'Eva Health',
    workDone: [
      'Proposed and implemented architectural changes in the center software that eventually would reduce the downtime due to internet connectivity issues and faults in the communication between devices',
      'Developed a completely new version of the center server with API <b>Django</b> and <b>Django REST framework</b> (<em>Python</em>). This API included several services that communicated with hardware devices (smart lights, thermal cameras) and a remote server',
      'Refactored part of the code that interact with a thermal camera in order to reduce downtime due to connectivity and faults in proprietary vendor software. Used <b>Falkon</b> framework at a basic level (<em>Python</em>).',
      'Developed a small REST API in <b>C++</b> using <b>Crow</b> framework to interface a FLIR thermal camera with the <b>eBUS SDK</b>',
      'Learned React Native and TypeScript in approximately one month and used the acquired skills to refactor two mobile apps in order to adapt them to the proposed architectural changes.',
      'Provided remote support to center managers to solve software and hardware issues, simultaneously to the coding work.',
      'Deployed existing projects to new centers using <b>Ansible</b> as automation tool.'
  ]}, {
    dateLimits: '06/2019 - 01/2021',
    location: 'Zacatecas, Mexico',
    positionTitle: 'Software Engineer',
    companyName: 'Altest',
    workDone: [
    'Improved software development workflows by promoting development methodologies (scrum, kanban) and tools (Git, GitHub, Ansible) and team collaboration.',
      'Reduced the overall software development cycle time by introducing an <b>API</b> driven architecture, the use of modern <em>JavaScript</em> frameworks like <b>Vue</b> and automated deployment tools, like <b>Ansible</b>.',
      'Developed a <b>web scraper</b> to analyze vehicle market data from main online vendors using <b>Scrapy</b> (<em>Python</em>).',
      'Developed a <b>web scraper</b> to analyze vehicle market data from main online vendors using <b>Scrapy</b> (<em>Python</em>).',
      'Developed a <b>REST API</b> web platform for vehicle market analysis from scraped data, using <b>Django</b> and <b>Django REST framework</b> (<em>Python</em>).',
      'Designed and developed a single page web application to interface the vehicle market API, using <b>Vue</b> and <b>Quasar</b> (<em>JavaScript</em>, <em>HTML</em>, <em>CSS</em>).',
      'Developed a <b>REST API</b> web platform for <b>RFID</b> asset management, using <b>Django</b> and <b>Django REST framework</b> (<em>Python</em>).',
      'Designed and developed a single page web application to interface the RFID asset management API, using <b>Vue</b> and <b>Quasar</b> (<em>JavaScript</em>, <em>HTML</em>, <em>CSS</em>).',
      'Designed and developed a <b>mobile App</b> for the Zebra <b>RFID</b> readers, using <b>Flutter</b> (<em>Dart</em>).',
      'Developed a native <b>Flutter</b> plugin to interface the Zebra <b>RFID</b> SDK for <b>Android</b> (<em>Java</em>, <em>Dart</em>).',
      'Designed and implemented a <b>desktop application</b> to print RFID tags on Zebra printers with and interface to the RFID asset management API (<em>Java</em>).',
      'Developed a desktop application for annotating anomaly video datasets, that was used later for the training of deep learning models, using <b>PyQt</b> (<em>Python</em>).',
      'Developed a Python package for face analysis (face detection, face recognition, age and gender estimation) based on <b>deep learning</b>, using <b>Pytorch</b> and <b>OpenCv</b> (<em>Python</em>).',
      'Developed an scalable <b>REST API</b> web platform for real-time face analysis on video cameras, using <b>Django</b> and <b>Django REST framework</b> (<em>Python</em>).',
      'Designed and developed a single page web application to interface the face analysis API, using <b>Vue</b> and <b>ElementUi</b> (<em>JavaScript</em>, <em>HTML</em>, <em>CSS</em>).',
      'Developed a Python application for license plate recognition based on <b>deep learning</b>, using <b>TensorFlow</b> and <b>OpenCv</b> (<em>Python</em>).',
      'Deployed multiple projects to <b>AWS EC2</b> instances, using <b>Ansible</b> as deployment automation tool.',
      'Configured and managed <b>Linux servers</b> (Ubuntu, CentOS), including <b>security</b>, <b>databases</b> and <b>web servers</b>.'
    ]}, {
    dateLimits: '09/2017 - 02/2018',
    location: 'Zacatecas, Mexico',
    positionTitle: 'Software Engineer',
    companyName: 'CRD Ingeniería y Consultoría Zacatecas',
    workDone: [
      'Designed and developed a native <b>Android app</b> for planning drone flight missions, using the <b>DJI Android SDK</b> (<em>Java</em>).',
      'Developed a Python package for the analysis of aerial images of crop fields using <b>OpenCv</b> (<em>Python</em>). This work was also part of my Master\'s thesis.',
      'Designed and developed a desktop application for the generation and analysis of crop fields orthomosaics, using <b>PyQt</b> and OpenDroneMap (<em>Python</em>).'
    ]
  }, {
    dateLimits: '10/2013 - 07/2016',
    location: 'Santa Clara, Cuba',
    positionTitle: 'Adjunct Professor',
    companyName: 'Central University of Las Villas "Marta Abreu"',
    workDone: [
      'Prepared the study materials and taught a Satellite Communications course (64 hours).',
      'Assisted the taught of a IP Telephony course (32 hours).',
      'Assisted the taught of a Physics course (64 hours).',
      'Advised two undergraduate thesis in the telecommunications field.'
    ]
  }, {
    dateLimits: 'In my free time',
    location: 'Anywhere',
    positionTitle: 'Personal/Hobby projects',
    companyName: 'I like to solve problems by coding',
    workDone: [
      'Developed a stock market analysis tool which has helped me to see better long-term investment opportunities, based on public Yahoo financial data. Used <b>Django</b> (<em>Python</em>) for this project',
      'Tried to develop a crypto currency forecasting tool based on Deep Learning (RNN and DQN), using <b>Pytorch</b> (<em>Python</em>) as deep learning framework. It did\' work',
      'Developed a tool to increase the odds of winning a trivia game (Confetti from Facebook). Used OCR in mobile app to get the question and possible answers from the phone screen and send it to an API (developed in Node with <b>Express</b>), which scraped and ranked the possible answers from Google (using <b>Chrome Puppeteer</b>). Me and my family won around a dozen of games using this tool.',
      'Wrote this resume using <b>Vue</b> (<em>JavaScript</em>, <em>HTML</em>, <em>CSS</em>). Available <a href="https://github.com/raikel/resume">here</a>',
    ]
  }],
  researchWork: {
    hide: false,
    works: [
      'Bordon, Raikel, et al. "Energy efficient cooperation based on relay switching on–off probability for WSNs." <em>IEEE Systems Journal</em> 12.4 (2017).',
      'Bordón, Raikel, et al. "Energy efficient power allocation schemes for a two-user network-coded cooperative cognitive radio network." <em>IEEE Transactions on Signal Processing 64.7</em> (2015).',
      'Bordón, Raikel, et al. "Energy‐efficient outage‐constrained power allocation based on statistical channel knowledge for dual‐hop cognitive relay networks." <em>International Journal of Communication Systems</em> 30.3 (2017).',
      'Bordón, Raikel, et al. "La radio cognitiva y su impacto en el uso eficiente del espectro de radio." <em>Ingeniería Electrónica, Automática y Comunicaciones</em> 36.1 (2015).',
      'Bordón, Raikel, et al. "Evaluación de modelos de propagación de canal inalámbrico." <em>Revista Cubana de Ingeniería</em> 3.1 (2012).',
      'Bordón, Raikel, et al. "Genetic algorithm aided transmit power control in cognitive radio networks." <em>2014 9th International Conference on Cognitive Radio Oriented Wireless Networks and Communications (CROWNCOM)</em>. 2014.'
    ]
  },
  educationDegrees: [{
    dateLimits: '08/2016 - 08/2018',
    location: 'Zacatecas, Mexico',
    degreeTitle: 'Master of Science in Engineering',
    schoolName: 'Autonomous University of Zacatecas "Francisco García Salinas"',
    achievements: [
      'General average of <b>9.80/10</b>.'
    ]
  }, {
    dateLimits: '09/2013 - 07/2015',
    location: 'Santa Clara, Cuba',
    degreeTitle: 'Master in Telematics',
    schoolName: 'Central University of Las Villas "Marta Abreu"',
    achievements: [
      'General average of <b>9.75/10</b>.'
    ]
  }, {
    dateLimits: '09/2007 - 07/2012',
    location: 'Santa Clara, Cuba',
    degreeTitle: 'Engineer in Telecommunications and Electronics',
    schoolName: 'Central University of Las Villas "Marta Abreu"',
    achievements: [
      'General average of <b>10/10</b>.'
    ]
  }],
  programming: {
    hide: false,
    languages: [{
      label: 'Python',
      level: '95'
    }, {
      label: 'JavaScript',
      level: '95'
    }, {
      label: 'Java',
      level: '85'
    }, {
      label: 'C/C++',
      level: '70'
    }, {
      label: 'PHP',
      level: '75'
    }, {
      label: 'Matlab',
      level: '90'
    }, {
      label: 'Dart',
      level: '70'
    }]
  },
  skillsTags: [{
    hide: false,
    title: 'Web and mobile development',
    tags: [
      'Django',
      'Django Rest Framework',
      'Vue',
      'Quasar',
      'HTML',
      'CSS',
      'Flutter',
      'Android',
      'React Native'
    ]
  }, {
    hide: false,
    title: 'Machine learning',
    tags: [
      'Pytorch',
      'OpenCv',
      'TensorFlow'
    ]
  }, {
    hide: false,
    title: 'UI Design',
    tags: [
      'Figma',
      'Inkscape',
      'AdobeXd'
    ]
  }, {
    hide: false,
    title: 'Other Skills',
    tags: [
      'Ansible',
      'AWS EC2',
      'Git',
      'Linux Systems'
    ]
  }],
  hobbies: [{
    label: 'Travel',
    image: 'images/travel.svg'
  }, {
    label: 'Movies & TV',
    image: 'images/movies.svg'
  },  {
    label: 'Video Games',
    image: 'images/games.svg'
  }, {
    label: 'Running',
    image: 'images/running.svg'
  }, {
    label: 'Reading',
    image: 'images/reading.svg'
  }]
};
