// src/pages/Home.jsx

import {
  useEffect,
} from "react";

import {
  Button,
  Col,
  Grid,
  Layout,
  Row,
  Typography,
} from "antd";

import {
  ArrowRightOutlined,
} from "@ant-design/icons";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import PortfolioHeader from "../components/PortfolioHeader";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";

import {
  projects,
} from "../data/projects";

const {
  Content,
  Footer,
} = Layout;

const {
  Title,
  Paragraph,
  Text,
} = Typography;

export default function Home() {
  const navigate =
    useNavigate();

  const location =
    useLocation();

  const screens =
    Grid.useBreakpoint();

  const isMobile =
    !screens.md;

  /* =========================================================
     SCROLL TO HASH SECTION
  ========================================================= */

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const sectionId =
      location.hash.replace(
        "#",
        ""
      );

    const timeout =
      setTimeout(() => {
        document
          .getElementById(
            sectionId
          )
          ?.scrollIntoView({
            behavior:
              "smooth",

            block:
              "start",
          });
      }, 0);

    return () =>
      clearTimeout(timeout);
  }, [location]);

  return (
    <Layout
      style={{
        minHeight: "100vh",
        background: "#ffffff",
      }}
    >
      <PortfolioHeader />

      <Content>
        {/* =================================================
            HERO
        ================================================= */}

        <main
          style={{
            width: "100%",
            maxWidth: 1200,
            margin: "0 auto",

            padding: isMobile
              ? "0 16px"
              : "0 40px",
          }}
        >
          <Hero />
        </main>

        {/* =================================================
            FEATURED PROJECTS
        ================================================= */}

        <section
          id="projects"
          style={{
            scrollMarginTop: 90,

            background: "#F4F8FC",

            padding: isMobile
              ? "52px 16px 64px"
              : "70px 40px 84px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 1120,
              margin: "0 auto",
            }}
          >
            <Title
              level={2}
              style={{
                marginTop: 0,
                marginBottom: 32,

                color: "#173B63",
              }}
            >
              Featured Projects
            </Title>

            <Row
              gutter={[28, 28]}
              align="stretch"
            >
              {projects.map(
                (project) => (
                  <Col
                    key={
                      project.id
                    }
                    xs={24}
                    lg={12}
                    style={{
                      display:
                        "flex",
                    }}
                  >
                    <ProjectCard
                      project={
                        project
                      }
                    />
                  </Col>
                )
              )}
            </Row>
          </div>
        </section>

        {/* =================================================
            ABOUT
        ================================================= */}

        <main
          style={{
            width: "100%",
            maxWidth: 1200,
            margin: "0 auto",

            padding: isMobile
              ? "0 16px"
              : "0 40px",
          }}
        >
          <section
            id="about"
            style={{
              maxWidth: 820,

              scrollMarginTop: 90,

              padding: isMobile
                ? "56px 0"
                : "72px 0",
            }}
          >
            <Title
              level={2}
              style={{
                marginTop: 0,
                marginBottom: 14,

                color: "#173B63",
              }}
            >
              About
            </Title>

            <Paragraph
              style={{
                fontSize: isMobile
                  ? 16
                  : 17,

                lineHeight: 1.75,

                color: "#4b5563",

                marginBottom: 22,
              }}
            >
              I design learning experiences at the
              intersection of instructional design,
              learning technology, and software
              development. My work combines learning
              strategy with custom development, AI,
              learner data, and industry-standard
              eLearning tools.
            </Paragraph>

            <Button
              type="primary"
              onClick={() =>
                navigate(
                  "/about"
                )
              }
            >
              More About Me
              <ArrowRightOutlined />
            </Button>
          </section>

          {/* =================================================
              CONTACT
          ================================================= */}

          <section
            id="contact"
            style={{
              scrollMarginTop: 90,

              paddingBottom: 80,
            }}
          >
            <Title
              level={2}
              style={{
                color: "#173B63",

                marginBottom: 10,
              }}
            >
              Contact
            </Title>

            <Paragraph
              type="secondary"
              style={{
                marginBottom: 0,
              }}
            >
              Connect with me through LinkedIn,
              GitHub, or email.
            </Paragraph>
          </section>
        </main>
      </Content>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer
        style={{
          textAlign: "center",

          background: "#fafafa",

          borderTop:
            "1px solid #f0f0f0",
        }}
      >
        <Text type="secondary">
          © 2026 Olga Orlova
        </Text>
      </Footer>
    </Layout>
  );
}