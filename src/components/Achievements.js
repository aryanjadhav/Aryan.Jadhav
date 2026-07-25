export const Achievements = () => (
  <div className="Achievements container">

    <h2 className="section-title">Certificates & Leadership</h2>

   {/* CERTIFICATES */}
<div className="achievement-block">
  <h3>Certificates</h3>

  <ul className="clean-list">
    <li>
      <a
        href="https://drive.google.com/file/d/1zrzjUUVJccrZImmlcsjcqAb-q7FgJQU2/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        SolidWorks CSWA
      </a>
    </li>

    <li>
      <a
        href="https://drive.google.com/file/d/1PD3O6dQHBZR-PCMwW7VwzPAMRvueTJ9x/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Introduction to IoT & Embedded Systems
      </a>
    </li>
  </ul>
</div>
{/* LEADERSHIP */}
<div className="achievement-block leadership-section">
  <div className="leadership-heading">
    <div>
      <span className="section-label">Experience beyond academics</span>
      <h3>Leadership</h3>
    </div>
  </div>

  <div className="leadership-grid">
     {/* HYPERION RACING */}
    <article className="leadership-card featured-leadership-card">
      <div className="leadership-card-top">
        <span className="leadership-number">03</span>

        <span className="leadership-date">
          Sep 2020 – Oct 2023
        </span>
      </div>

      <h4>Team Captain</h4>

       <a
        className="leadership-organization leadership-link"
        href="https://drive.google.com/file/d/1wbXsRz7-D1Eu70pBjLLr5trM2W_Y7cY8/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Hyperion Racing · Formula Student <span>↗</span>
      </a>

      <ul className="leadership-details">
        <li>
          Led a 45 member Formula Student team across electronics, mechanical,
          marketing and operations for Formula Bharat 2023.
        </li>

        <li>
          Oversaw PCB design, embedded system integration, testing and
          coordination between vehicle subsystems.
        </li>

        <li>
          Collaborated with sponsors and managed technical planning, team
          operations and execution from design through competition.
        </li>
      </ul>
    </article>

    {/* IEEE PCE */}
    <article className="leadership-card">
      <div className="leadership-card-top">
        <span className="leadership-number">02</span>

        <span className="leadership-date">
          Sep 2020 – Apr 2023
        </span>
      </div>

      <h4>Head of Events</h4>

      <a
        className="leadership-organization leadership-link"
        href="https://drive.google.com/file/d/1IC9FKDbjJPFdGWtnE2ncwfRJTMkph8cC/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        IEEE PCE <span>↗</span>
      </a>

      <ul className="leadership-details">
        <li>
          Planned technical workshops, seminars and conferences while
          coordinating speakers, vendors, logistics and event execution.
        </li>

        <li>
          Led volunteer teams, ensuring timely task completion and successful
          delivery of events.
        </li>

        <li>
          Progressed from Volunteer to Joint Event Head and Head of Events,
          contributing to event strategy and community engagement.
        </li>
      </ul>
    </article>

  {/* JOURNAL COMMITTEE */}
    <article className="leadership-card">
      <div className="leadership-card-top">
        <span className="leadership-number">01</span>

        <span className="leadership-date">
          Aug 2020 – Apr 2023
        </span>
      </div>

      <h4>Management Head</h4>

      <a
        className="leadership-organization leadership-link"
        href="https://drive.google.com/file/d/1nx2CWwSE9qFBTMW-sZvhhhyo2-ZSSa8y/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
      Journal Committee of Electronics & Telecommunication Department
 <span>↗</span>
      </a>

      <ul className="leadership-details">
        <li>
          Directed the complete management of the departmental technical
          journal, including planning, operations and publication timelines.
        </li>

        <li>
          Coordinated editorial teams and multiple college departments to
          ensure efficient execution and high quality publications.
        </li>

        <li>
          Progressed from Editor to Management Head, leading teams and
          improving coordination across journal activities.
        </li>
      </ul>
    </article>
  </div>
</div>

{/* LANGUAGE */}
<div className="achievement-block">
  <h3>Language Skills</h3>

  <ul className="clean-list">
    <li>
      <strong>English:</strong> C1
    </li>

    <li>
      <strong>German:</strong> B1.2
      {" "}(Improving towards professional fluency)
    </li>
  </ul>
</div>

  </div>
);