import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { projectsData } from "../components/ProjectData";

const projectSections = [
  {
    type: "Masters",
    title: "Masters Projects",
  },
  {
    type: "Bachelors",
    title: "Bachelors Projects",
  },
];

const months = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};

const getProjectDate = (date = "") => {
  const dateMatches = [
    ...date.matchAll(
      /(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{4})/g
    ),
  ];

  if (dateMatches.length === 0) {
    return 0;
  }

  const latestDate = dateMatches[dateMatches.length - 1];
  const month = months[latestDate[1]];
  const year = Number(latestDate[2]);

  return new Date(year, month, 1).getTime();
};

const sortProjects = (projects, sortBy) => {
  return [...projects].sort((firstProject, secondProject) => {
    if (sortBy === "priority") {
      const firstPriority =
        firstProject.priority !== undefined
          ? firstProject.priority
          : Number.MAX_SAFE_INTEGER;

      const secondPriority =
        secondProject.priority !== undefined
          ? secondProject.priority
          : Number.MAX_SAFE_INTEGER;

      if (firstPriority !== secondPriority) {
        return firstPriority - secondPriority;
      }
    }

    return (
      getProjectDate(secondProject.date) -
      getProjectDate(firstProject.date)
    );
  });
};

const ProjectItem = ({ project }) => {
  return (
    <Col xs={12} md={6} lg={6} className="mb-4">
      <div className="project-modern-card">
        <div className="project-modern-top">
          {project.type && (
            <span className="project-modern-type">
              {project.type}
            </span>
          )}

          <span className="project-modern-date">
            {project.date}
          </span>
        </div>

        <h3 className="project-modern-title">
          {project.title}
        </h3>

        <h4 className="project-modern-subtitle">
          {project.subtitle}
        </h4>

        <p className="project-modern-description">
          {project.shortDescription}
        </p>

        <div className="project-modern-skills">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="project-modern-tag"
            >
              {skill}
            </span>
          ))}
        </div>

        <a
          href={`/projects/${project.slug}`}
          target="_blank"
          rel="noreferrer"
          className="project-modern-btn"
        >
          View More
        </a>
      </div>
    </Col>
  );
};

export const ProjectShowcase = () => {
  const [expandedSections, setExpandedSections] = useState({
    Masters: true,
    Bachelors: true,
  });

  const [sortBy, setSortBy] = useState("priority");

  const toggleSection = (type) => {
    setExpandedSections((currentSections) => ({
      ...currentSections,
      [type]: !currentSections[type],
    }));
  };

  const expandAll = () => {
    setExpandedSections({
      Masters: true,
      Bachelors: true,
    });
  };

  const collapseAll = () => {
    setExpandedSections({
      Masters: false,
      Bachelors: false,
    });
  };

  return (
    <section className="project-showcase-modern">
      <div className="project-showcase-controls">
        <div className="project-expand-controls">
          <button
            type="button"
            className="project-control-btn"
            onClick={expandAll}
          >
            Expand All
          </button>

          <button
            type="button"
            className="project-control-btn"
            onClick={collapseAll}
          >
            Collapse All
          </button>
        </div>

        <label className="project-sort-control">
          <span>Sort projects</span>

          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
          >
            <option value="priority">Priority</option>
            <option value="date">Newest Date</option>
          </select>
        </label>
      </div>

      <div className="project-dropdowns">
        {projectSections.map(({ type, title }, sectionIndex) => {
          const sectionProjects = sortProjects(
            projectsData.filter(
              (project) =>
                project.type?.toLowerCase() === type.toLowerCase()
            ),
            sortBy
          );

          const isExpanded = expandedSections[type];

          return (
            <div className="project-dropdown" key={type}>
              <button
                type="button"
                className={`project-dropdown-header ${
                  isExpanded ? "is-expanded" : ""
                }`}
                onClick={() => toggleSection(type)}
                aria-expanded={isExpanded}
              >
                <div className="project-dropdown-title">
                  <span className="project-dropdown-number">
                    {String(sectionIndex + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h2>{title}</h2>

                    <p>
                      {sectionProjects.length}{" "}
                      {sectionProjects.length === 1
                        ? "project"
                        : "projects"}
                    </p>
                  </div>
                </div>

                <span className="project-dropdown-icon">
                  {isExpanded ? "−" : "+"}
                </span>
              </button>

              {isExpanded && (
                <div className="project-dropdown-content">
                  {sectionProjects.length > 0 ? (
                    <Row>
                      {sectionProjects.map((project) => (
                        <ProjectItem
                          key={project.slug}
                          project={project}
                        />
                      ))}
                    </Row>
                  ) : (
                    <p className="project-empty-message">
                      No projects available in this category.
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};