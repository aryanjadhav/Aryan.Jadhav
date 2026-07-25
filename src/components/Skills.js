import python from "../assets/img/python.png";
import pandas from "../assets/img/pandas.png";
import cpp from "../assets/img/c++..png";
import cst from "../assets/img/cst_studio.png";
import excel from "../assets/img/Excel_logo.png";
import powerpoint from "../assets/img/PowerPoint.png";
import matlab from "../assets/img/Matlab_Logo.png";
import colorSharp from "../assets/img/color-sharp.png";
import eagle from "../assets/img/Eagle.png";
import KiCAD from "../assets/img/KICAD.png";

export const Skills = () => {
  const tools = [
    { img: python, label: "Python" },
    { img: pandas, label: "NumPy & Pandas" },
    { img: matlab, label: "MATLAB" },
    { img: matlab, label: "MATLAB Simulink" },
    { img: cpp, label: "C++" },
    { img: cst, label: "CST Studio" },
    { img: excel, label: "Excel" },
    { img: powerpoint, label: "PowerPoint" },
  ];

  const toolCategories = [
  {
    title: "Engineering & Simulation",
    icon: "⚙",
    tools: [
      { img: matlab, label: "MATLAB" },
      { img: matlab, label: "MATLAB Simulink" },
      { img: cst, label: "CST Studio" },
      { img: eagle, label: "EagleCAD" },
      { img: eagle, label: "EagleCAD" },
      { img: KiCAD, label: "KICAD" },
    ],
  },
  {
    title: "Programming & Development",
    icon: "⌨",
    tools: [
      { img: python, label: "Python" },
      { img: pandas, label: "NumPy & Pandas" },
      { img: cpp, label: "C++" },
    ],
  },
  {
    title: "Productivity",
    icon: "▥",
    tools: [
      { img: excel, label: "Microsoft Excel" },
      { img: powerpoint, label: "Microsoft PowerPoint" },
    ],
  },
];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>

              <div className="skills-section">
                <h4>Technical Skills</h4>

                <ul className="skills-list">
                  <li>
                    RF & Mixed Signal Measurement using Spectrum Analyzer,
                    VNA and Oscilloscope
                  </li>
                  <li>Wireless Systems: 4G, 5G, OFDM and MIMO</li>
                  <li>
                    Modulation Behaviour, Digital Modulation and Signal
                    Analysis
                  </li>
                  <li>SDR Experimentation and Waveform Analysis</li>
                  <li>Data Analysis, Automation and Signal Processing</li>
                  <li>
                    Modelling and Simulation using MATLAB Simulink and CST
                  </li>
                </ul>
              </div>

              <div className="skills-section">
  <h4>Programming & Tools</h4>

  <div className="tool-categories">
    {toolCategories.map((category) => (
      <div className="tool-category" key={category.title}>
        <div className="tool-category-heading">
          <span className="tool-category-icon">{category.icon}</span>
          <span className="tool-category-divider"></span>
          <h5>{category.title}</h5>
          <span className="tool-category-line"></span>
        </div>

        <div className="tools-grid">
          {category.tools.map(({ img, label }) => (
            <div className="tool-item" key={label}>
              <div className="tool-image-container">
                <img className="toolImage" src={img} alt={label} />
              </div>

              <p>{label}</p>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>

              <div className="skills-section">
                <h4>Soft Skills</h4>

                <ul className="skills-list">
                  <li>Analytical Thinking and Problem Solving</li>
                  <li>Clear Communication and Team Collaboration</li>
                  <li>Structured and Reliable Working Style</li>
                  <li>Fast Learning Ability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        className="background-image-left"
        src={colorSharp}
        alt=""
      />
    </section>
  );
};