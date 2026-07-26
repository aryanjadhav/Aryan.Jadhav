import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import { useState, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { ProjectShowcase } from "./ProjectShowcase";
import { Achievements } from "./Achievements";
import { WorkExperience } from "./WorkExperience";
import { ResearchPublications } from "./ResearchPublications";

export const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("first");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  
  const responsive = {
    tablet: {
      breakpoint: {
        max: 768,
        min: 464,
      },
      items: 2,
    },

    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
    },
  };

  const tabs = [
    {
      eventKey: "first",
      label: "Projects",
    },
    {
      eventKey: "second",
      label: "Achievements",
    },
    {
      eventKey: "third",
      label: "Work Experience",
    },
    {
      eventKey: "fourth",
      label: "Education",
    },
  ];

  const handleTabChange = (selectedTab) => {
    if (selectedTab) {
      setActiveTab(selectedTab);
    }
  };

  const handleCarouselChange = (
    previousSlide,
    { currentSlide }
  ) => {
    const selectedTab = tabs[currentSlide];

    if (selectedTab) {
      setActiveTab(selectedTab.eventKey);
    }
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeIn"
                      : ""
                  }
                >
                  <h2>My Works</h2>

                  <br />

                  <Tab.Container
                    id="projects-tabs"
                    activeKey={activeTab}
                    onSelect={handleTabChange}
                    mountOnEnter
                    unmountOnExit
                  >
                    {isMobile ? (
                      <Nav
                        activeKey={activeTab}
                        onSelect={handleTabChange}
                        className="mobile-carousel-nav"
                      >
                        <Carousel
                          responsive={responsive}
                          infinite={false}
                          swipeable
                          draggable
                          arrows
                          keyBoardControl
                          afterChange={handleCarouselChange}
                          className="nav-pills-carousel"
                        >
                          {tabs.map((tab) => (
                            <Nav.Item key={tab.eventKey}>
                              <Nav.Link
                                eventKey={tab.eventKey}
                                active={
                                  activeTab === tab.eventKey
                                }
                              >
                                {tab.label}
                              </Nav.Link>
                            </Nav.Item>
                          ))}
                        </Carousel>
                      </Nav>
                    ) : (
                      <Nav
                        variant="pills"
                        activeKey={activeTab}
                        onSelect={handleTabChange}
                        className="nav-pills mb-5 justify-content-center align-items-center"
                        id="pills-tab"
                      >
                        {tabs.map((tab) => (
                          <Nav.Item key={tab.eventKey}>
                            <Nav.Link eventKey={tab.eventKey}>
                              {tab.label}
                            </Nav.Link>
                          </Nav.Item>
                        ))}
                      </Nav>
                    )}

                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible
                          ? "animate__animated animate__slideInUp"
                          : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <ProjectShowcase />
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Achievements />
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <WorkExperience />
                      </Tab.Pane>

                      <Tab.Pane eventKey="fourth">
                        <ResearchPublications />
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />
    </section>
  );
};

