export const ResearchPublications = () => {
  const researchData = [
    
  ];

  return (
    <section className="research" id="research">
      <div className="container">
         {/* 🔹 EDUCATION SECTION */}
         <div className="education-section">
          <h2>Education</h2>

          <div className="education-card">
            <h3>Master’s in Electrical Engineering and Information Technology</h3>
            <p><strong>Major:</strong> Communication Systems</p>
            <p><strong>University:</strong> Hochschule Darmstadt, Germany</p>
            <p><strong>Duration:</strong> September 2024 – Present</p>
            <p className="edu-modules">
              <strong>Modules:</strong> Wireless and Mobile Communication, Antenna & Microwave Systems, Advanced DSP, Advanced Modulation, System & Hardware Design
            </p>
          </div>

          <div className="education-card">
            <h3>Bachelor of Engineering in Electronics and Telecommunication</h3>
            <p><strong>University:</strong> Pillai College of Engineering, India</p>
            <p><strong>Duration:</strong> June 2019 – February 2023</p>
            <p><strong>Grade:</strong> 1.6 (Sehr Gut)</p>
          </div>
        </div>
        <div className="research-header">
          <h2>Technical Conferences</h2>

        </div>

        <div className="research-table-wrapper">
          <table className="research-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Year</th>
                <th>Link</th>
              </tr>
            </thead>

            <tbody>
              {researchData.map((paper, index) => (
                <tr key={index}>
                  <td>{paper.title}</td>
                  <td>{paper.year}</td>
                  <td>
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};