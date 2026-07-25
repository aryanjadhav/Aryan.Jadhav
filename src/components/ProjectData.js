export const projectsData = [
  {
  slug: "satellite-modem-test-automation",
  title: "Python Based Satellite Modem Test Automation Framework",
  subtitle: "RF System Verification | Python Automation | Software Testing",
  date: "June 2026",
  type: "Masters",

  shortDescription:
    "Python based automation framework for verifying satellite modem RF performance against configurable engineering requirements using automated testing, simulation, and report generation.",

  skills: [
    "Python",
    "RF System Verification",
    "Satellite Communications",
    "Test Automation",
    "Software Testing",
    "SNR",
    "BER",
    "Latency",
    "Throughput",
    "YAML",
    "Logging",
    "CSV Data Processing",
    "PDF Report Generation",
    "Modem Simulation",
  ],

  details: [
    "Designed and developed a Python based automation framework to verify satellite modem RF performance against configurable engineering requirements.",
    "Implemented automated validation of Signal to Noise Ratio, Bit Error Rate, latency, and throughput with automatic PASS and FAIL evaluation.",
    "Developed a modular software architecture using Python, YAML configuration files, logging, CSV data storage, and automated PDF verification report generation.",
    "Built a satellite modem simulator to emulate realistic PASS and FAIL scenarios, enabling verification of the automation logic without physical hardware.",
    "Implemented timestamped execution history and structured verification reports aligned with industrial RF testing workflows.",
    "Designed the framework to support future integration with real RF instruments and satellite modem hardware.",
  ],
},
  {
    slug: "near-field-far-field-transformation",
    title: "Near Field Measurements and Far Field Transformation of a Large Parabolic Antenna",
    subtitle: "RF Measurement and Antenna Characterization",
    date: "March 2024 – August 2025",
      type: "Masters",

    shortDescription:
      "Team project focused on near field RF measurements, data acquisition, and MATLAB based far field transformation of a 4.5 meter parabolic antenna.",

    skills: [
      "RF Measurement",
      "VNA",
      "Antenna Characterization",
      "MATLAB",
      "Spherical Wave Expansion",
      "Spherical Harmonics",
      "Data Processing",
      "Far Field Transformation",
      "Signal Analysis",
      "Troubleshooting",
    ],

    details: [
      "Operated the complete near field RF measurement setup including VNA, dual polarized probe, RF switch, LNA, attenuator, and precision rotator to acquire stable S21 amplitude phase datasets for a 4.5 meter parabolic antenna.",
      "Acquired and processed 180 near field readings per polarization, converting raw magnitude phase data into structured datasets for modelling and far field transformation.",
      "Resolved LOS limitations, rotation constraints, reflections, and wind noise issues through iterative on site troubleshooting, optimizing probe placement at 4.46 m.",
      "Developed the full MATLAB workflow for near field to far field transformation using spherical wave expansion, spherical harmonics, and modal coefficient extraction.",
      "Validated the algorithm using synthetic antenna datasets, achieving radiation patterns with approximately 3 degree HPBW and around 24 dBi directivity.",
    ],
  },

  {
    slug: "advanced-modulation-sdr-measurement",
    title: "Advanced Modulation and SDR Measurement",
    subtitle: "MATLAB Simulink and SDR Based RF Signal Analysis",
    date: "January 2025 – June 2025",
    type: "Masters",

    shortDescription:
      "Project involving RF measurement setups, OFDM analysis, mixed signal impairment study, and SDR based receiver implementation for wireless communication systems.",

    skills: [
      "MATLAB",
      "Simulink",
      "SDR",
      "OFDM",
      "MIMO",
      "SISO",
      "Signal Processing",
      "Spectrum Analyzer",
      "Wireless Communication",
      "Channel Capacity",
    ],

    details: [
      "Configured RF measurement setups to analyse OFDM signals using a spectrum analyzer, evaluating carrier frequency, pilot spacing, occupied bandwidth, and cyclic prefix behaviour.",
      "Investigated mixed signal impairments including phase drift, frequency offset, multipath delay, and noise by examining constellation distortions before and after equalization.",
      "Implemented channel capacity estimation and adaptive loading algorithms to study SNR, power allocation, and sub channel behaviour in frequency selective channels.",
      "Built SDR based SISO and MISO receivers for Alamouti transmission, performing downconversion, matched filtering, SNR estimation, synchronization, and symbol recovery workflows.",
    ],
  },

  {
    slug: "motion-detection-cw-radar",
    title: "Motion Detection using Continuous Wave Radar",
    subtitle: "24 GHz Radar Signal Analysis",
    date: "February 2025 – July 2025",
    type: "Masters",

    shortDescription:
      "Radar based project focused on motion detection using a 24 GHz continuous wave radar module and signal behaviour analysis across multiple motion scenarios.",

    skills: [
      "Radar Systems",
      "24 GHz CW Radar",
      "FFT",
      "Doppler Analysis",
      "Signal Processing",
      "Data Collection",
      "Performance Evaluation",
      "Documentation",
    ],

    details: [
      "Used a 24 GHz CW radar module, analysing over 300 motion samples to study signal variations and detection consistency.",
      "Evaluated FFT outputs, Doppler signatures, and amplitude trends to understand system performance under different motion scenarios.",
      "Prepared structured documentation on detection accuracy and system behavior while managing data collection, processing, and verification workflows.",
    ],
  },

  {
  slug: "smart-vertical-farming-hmi",
  title: "Smart Vertical Farming HMI",
  subtitle:
    "Human Machine Interface and UI/UX Design | Darmstadt University of Applied Sciences",
  date: "November 2024 – January 2025",
  type: "Masters",

  shortDescription:
    "Interactive Human Machine Interface prototype for centralized monitoring and control of smart vertical farming operations.",

  skills: [
    "Human Machine Interface",
    "UI/UX Design",
    "Axure",
    "UML",
    "System Modelling",
    "Interactive Prototyping",
    "Smart Farming",
    "Dashboard Design",
    "Usability Testing",
    "User Centered Design",
  ],

  details: [
    "Designed an interactive Human Machine Interface prototype for smart vertical farming, enabling centralized monitoring and control of irrigation, lighting, ventilation, temperature, and humidity.",
    "Developed high fidelity UI and UX prototypes in Axure using UML based system modelling.",
    "Integrated weather information, task scheduling, multilingual support, and user feedback features into the interface.",
    "Improved operational efficiency by simplifying farm management through an intuitive centralized dashboard.",
    "Validated the interface design through interactive usability prototypes and user centered evaluation.",
  ],
},

  {
    slug: "ai-gym-buddy",
    title: "AI Gym Buddy",
    subtitle: "Pose Estimation and Embedded Workout Assistant",
    date: "September 2022 – February 2023",
    type: "Bachelors",

    shortDescription:
      "Real time workout assistant built on Raspberry Pi using computer vision, pose estimation, and embedded integration for movement analysis.",

    skills: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "Raspberry Pi",
      "Computer Vision",
      "Pose Estimation",
      "KNN",
      "Arduino",
      "Embedded Systems",
    ],

    details: [
      "Built a real time workout assistant on Raspberry Pi using Python, OpenCV, and Mediapipe, performing pose estimation from 33 body landmarks for movement analysis.",
      "Implemented feature extraction and a KNN classifier, improving pose recognition accuracy through iterative testing.",
      "Integrated multiple Arduino based robotic platforms, combining embedded control with computer vision to deliver a unified prototype.",
    ],
  },

{
  slug: "smart-e-textile-uniform",
  title: "Smart E Textile Uniform for Indian Army",
  subtitle: "Embedded Wearable Health and Environment Monitoring System",
  date: "October 2021 – February 2022",
  type: "Bachelors",

  shortDescription:
    "Smart wearable military uniform integrating embedded sensors, energy harvesting concepts, and real time monitoring of soldier health and environmental conditions.",

  skills: [
    "Embedded Systems",
    "Wearable Electronics",
    "E Textiles",
    "LPC2138",
    "Keil uVision",
    "Proteus",
    "Sensor Integration",
    "Firmware Development",
    "Circuit Simulation",
    "Energy Harvesting",
    "Health Monitoring",
  ],

  details: [
    "Designed a smart wearable military uniform integrating embedded sensors for real time monitoring of soldier health and environmental conditions.",
    "Developed the embedded system using LPC2138, Keil uVision, and Proteus for sensor interfacing, firmware development, and circuit simulation.",
    "Integrated wearable electronics with embedded monitoring components to demonstrate a practical military safety solution.",
    "Incorporated energy harvesting concepts to support the development of a self powered monitoring system for defense applications.",
  ],
},

{
  slug: "covid-19-sanitization-tunnel",
  title: "COVID 19 Sanitization Tunnel",
  subtitle: "Arduino Based Automated Contactless Disinfection System",
  date: "November 2020 – September 2021",
  type: "Bachelors",

  shortDescription:
    "Automated sanitization tunnel developed using Arduino Uno, sensors, and embedded control for contactless disinfection in public spaces.",

  skills: [
    "Arduino Uno",
    "Embedded Systems",
    "Embedded Programming",
    "Sensor Integration",
    "Proteus",
    "Circuit Design",
    "Automation",
    "Real Time Control",
    "Public Safety Systems",
    "Hardware Prototyping",
  ],

  details: [
    "Designed and developed an automated sanitization tunnel using Arduino Uno for contactless disinfection in public spaces during the COVID 19 pandemic.",
    "Built the complete control system by integrating sensors, embedded programming, and electronic circuit design.",
    "Used Proteus to design and simulate the electronic control circuit before hardware implementation.",
    "Demonstrated a scalable embedded solution for automated public health and safety applications through real time sensing and control.",
  ],
},
];