// src/pages/Home.jsx

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

  const screens =
    Grid.useBreakpoint();

  const isMobile =
    !screens.md;

  return (
    <Layout
      style={{
        minHeight: "100vh",
        background: "#ffffff",
      }}
    >
      <PortfolioHeader />

      <Content>
        {/* ================================================
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

        {/* ================================================
            FEATURED PROJECTS
        ================================================= */}

        <section
          id="projects"
          style={{
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

                borderBottom: "none",
                paddingBottom: 0,
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
                    key={project.id}
                    xs={24}
                    lg={12}
                    style={{
                      display: "flex",
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

        {/* ================================================
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

              padding: isMobile
                ? "56px 0"
                : "76px 0",
            }}
          >
            <Title
              level={2}
              style={{
                marginTop: 0,
                marginBottom: 16,
                color: "#173B63",
                borderBottom: "none",
              }}
            >
              About
            </Title>

            <Paragraph
              style={{
                fontSize: isMobile
                  ? 16
                  : 17,

                lineHeight: 1.8,

                color: "#4b5563",

                marginBottom: 24,
              }}
            >
              I am an instructional designer
              and learning technologist with a
              background in curriculum
              development, education, and
              software development. I combine
              learning design with modern
              technology to create practical,
              interactive experiences that help
              learners build skills through
              meaningful practice.
            </Paragraph>

            <Button
              type="primary"
              onClick={() =>
                navigate("/about")
              }
            >
              More About Me
              <ArrowRightOutlined />
            </Button>
          </section>

          {/* ================================================
              CONTACT
          ================================================= */}

          <section
            id="contact"
            style={{
              paddingBottom: 80,
            }}
          >
            <Title
              level={2}
              style={{
                color: "#173B63",
                borderBottom: "none",
              }}
            >
              Contact
            </Title>

            <Paragraph type="secondary">
              Connect with me through
              LinkedIn or GitHub, or
              contact me by email.
            </Paragraph>
          </section>
        </main>
      </Content>

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