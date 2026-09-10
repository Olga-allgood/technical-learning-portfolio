// src/pages/Home.jsx

import {
  Card,
  Col,
  Grid,
  Layout,
  Row,
  Space,
  Tag,
  Typography,
} from "antd";

import {
  BookOutlined,
  CodeOutlined,
  DatabaseOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";

import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import PortfolioHeader from "../components/PortfolioHeader";
import { projects } from "../data/projects";

const { Content, Footer } = Layout;
const { Title, Text, Paragraph } = Typography;

const blue = "#173B63";
const mediumBlue = "#4E79A7";
const lightBlue = "#F4F8FC";
const textColor = "#4b5563";

export default function Home() {
  const screens = Grid.useBreakpoint();
  const isMobile = !screens.md;

  return (
    <Layout
      style={{
        minHeight: "100vh",
        background: "#ffffff",
      }}
    >
      <PortfolioHeader />

      <Content>
        {/* =====================================================
            HERO
        ===================================================== */}

        <Hero />

        <main
          style={{
            width: "100%",
            maxWidth: 1100,
            margin: "0 auto",
            padding: isMobile
              ? "42px 18px 64px"
              : "64px 40px 88px",
          }}
        >
          {/* =====================================================
              FEATURED PROJECTS
          ===================================================== */}

          <section id="projects">
            <Text
              strong
              style={{
                display: "block",
                color: mediumBlue,
                fontSize: 12,
                letterSpacing: "0.8px",
                marginBottom: 5,
              }}
            >
              PORTFOLIO
            </Text>

            <Title
              level={2}
              style={{
                color: blue,
                marginTop: 0,
                marginBottom: 8,
              }}
            >
              Featured Projects
            </Title>

            <Paragraph
              style={{
                maxWidth: 760,
                fontSize: 17,
                lineHeight: 1.7,
                color: textColor,
                marginBottom: 30,
              }}
            >
              Interactive learning experiences combining
              instructional design, technical curriculum
              development, and custom learning technology.
            </Paragraph>

            <Row gutter={[24, 24]}>
              {projects.map((project) => (
                <Col
                  xs={24}
                  md={12}
                  key={project.id}
                >
                  <ProjectCard project={project} />
                </Col>
              ))}
            </Row>
          </section>

          {/* =====================================================
              CAPABILITIES & TOOLS
          ===================================================== */}

          <section
            style={{
              marginTop: isMobile ? 60 : 80,
            }}
          >
            <Text
              strong
              style={{
                display: "block",
                color: mediumBlue,
                fontSize: 12,
                letterSpacing: "0.8px",
                marginBottom: 5,
              }}
            >
              CAPABILITIES & TOOLS
            </Text>

            <Title
              level={2}
              style={{
                color: blue,
                marginTop: 0,
                marginBottom: 10,
              }}
            >
              Designing and Building Learning Experiences
            </Title>

            <Paragraph
              style={{
                maxWidth: 800,
                fontSize: 17,
                lineHeight: 1.7,
                color: textColor,
                marginBottom: 28,
              }}
            >
              I work across instructional design, authoring
              tools, custom development, AI, data, and multimedia
              to create practical learning experiences.
            </Paragraph>

            <Row gutter={[18, 18]}>
              {/* LEARNING DESIGN */}

              <Col xs={24} md={12}>
                <CapabilityCard
                  icon={<BookOutlined />}
                  title="Learning Design"
                  description="Designing structured, learner-centered experiences from learning goals through practice and assessment."
                  tools={[
                    "Instructional Design",
                    "Technical Curriculum",
                    "Scaffolding",
                    "Scenario-Based Learning",
                    "Assessment Design",
                  ]}
                />
              </Col>

              {/* AUTHORING & VIDEO */}

              <Col xs={24} md={12}>
                <CapabilityCard
                  icon={<PlayCircleOutlined />}
                  title="Authoring & Video"
                  description="Creating interactive eLearning and polished multimedia experiences using industry-standard development tools."
                  tools={[
                    "Articulate Storyline",
                    "Rise 360",
                    "Adobe Captivate",
                    "Camtasia",
                  ]}
                />
              </Col>

              {/* LEARNING ENGINEERING */}

              <Col xs={24} md={12}>
                <CapabilityCard
                  icon={<CodeOutlined />}
                  title="Learning Engineering"
                  description="Building custom learning applications and simulations when traditional authoring tools are not enough."
                  tools={[
                    "React",
                    "JavaScript",
                    "TypeScript",
                    "Next.js",
                    "Interactive Simulations",
                  ]}
                />
              </Col>

              {/* AI & DATA */}

              <Col xs={24} md={12}>
                <CapabilityCard
                  icon={<DatabaseOutlined />}
                  title="AI & Data"
                  description="Using learner data and AI to support targeted practice, personalization, and learning insights."
                  tools={[
                    "AI-Supported Learning",
                    "Learning Analytics",
                    "SQL",
                    "APIs",
                    "Data-Informed Practice",
                  ]}
                />
              </Col>
            </Row>
          </section>

          {/* =====================================================
              ABOUT
          ===================================================== */}

          <section
            id="about"
            style={{
              marginTop: isMobile ? 60 : 80,
            }}
          >
            <Text
              strong
              style={{
                display: "block",
                color: mediumBlue,
                fontSize: 12,
                letterSpacing: "0.8px",
                marginBottom: 5,
              }}
            >
              ABOUT
            </Text>

            <Title
              level={2}
              style={{
                color: blue,
                marginTop: 0,
                marginBottom: 16,
              }}
            >
              About Me
            </Title>

            <Paragraph
              style={{
                maxWidth: 850,
                fontSize: 17,
                lineHeight: 1.8,
                color: textColor,
                marginBottom: 0,
              }}
            >
              I’m a Technical Instructional Designer and
              Learning Engineer who designs and builds practical,
              interactive learning experiences. My work combines
              instructional strategy with custom development,
              technical curriculum, AI, learner data, and modern
              learning technologies.
            </Paragraph>
          </section>

          {/* =====================================================
              CONTACT
          ===================================================== */}

          <section
            id="contact"
            style={{
              marginTop: isMobile ? 60 : 80,
            }}
          >
            <Card
              style={{
                border: "none",
                background: lightBlue,
                borderRadius: 16,
              }}
            >
              <Title
                level={3}
                style={{
                  color: blue,
                  marginTop: 0,
                  marginBottom: 10,
                }}
              >
                Let’s Connect
              </Title>

              <Paragraph
                style={{
                  maxWidth: 720,
                  fontSize: 17,
                  lineHeight: 1.7,
                  color: textColor,
                  marginBottom: 18,
                }}
              >
                Interested in working together or discussing
                technical learning, learning engineering, or
                instructional design? I’d be happy to connect.
              </Paragraph>

              <Space
                wrap
                size={isMobile ? 12 : 28}
                style={{
                  fontSize: 16,
                }}
              >
                {/* EMAIL */}

                <Text
                  style={{
                    fontSize: 16,
                  }}
                >
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:olga.s.orlova@gmail.com"
                    style={{
                      color: mediumBlue,
                    }}
                  >
                    olga.s.orlova@gmail.com
                  </a>
                </Text>

                {/* LINKEDIN */}

                <Text
                  style={{
                    fontSize: 16,
                  }}
                >
                  <strong>LinkedIn:</strong>{" "}
                  <a
                    href="https://www.linkedin.com/in/orlovaolga/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: mediumBlue,
                    }}
                  >
                    linkedin.com/in/orlovaolga
                  </a>
                </Text>
              </Space>
            </Card>
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
          borderTop: "1px solid #f0f0f0",
        }}
      >
        <Text type="secondary">
          © 2026 Olga Orlova
        </Text>
      </Footer>
    </Layout>
  );
}

/* =========================================================
   CAPABILITY CARD
========================================================= */

function CapabilityCard({
  icon,
  title,
  description,
  tools,
}) {
  return (
    <Card
      style={{
        height: "100%",
        borderRadius: 14,
        border: "1px solid #e7edf3",
      }}
    >
      <Space
        align="start"
        size={14}
      >
        <div
          style={{
            fontSize: 24,
            color: mediumBlue,
            lineHeight: 1,
            marginTop: 3,
          }}
        >
          {icon}
        </div>

        <div>
          <Title
            level={4}
            style={{
              color: blue,
              marginTop: 0,
              marginBottom: 8,
            }}
          >
            {title}
          </Title>

          <Paragraph
            style={{
              color: textColor,
              lineHeight: 1.65,
              marginBottom: 14,
            }}
          >
            {description}
          </Paragraph>

          <Space
            wrap
            size={[7, 7]}
          >
            {tools.map((tool) => (
              <Tag
                key={tool}
                style={{
                  border: "none",
                  background: "#EDF4FA",
                  color: "#164A7B",
                  padding: "4px 9px",
                }}
              >
                {tool}
              </Tag>
            ))}
          </Space>
        </div>
      </Space>
    </Card>
  );
}