// src/pages/About.jsx

import {
  Button,
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
  ArrowLeftOutlined,
  CodeOutlined,
  DatabaseOutlined,
  ExperimentOutlined,
  ReadOutlined,
} from "@ant-design/icons";

import {
  useNavigate,
} from "react-router-dom";

import PortfolioHeader from "../components/PortfolioHeader";

const { Content, Footer } = Layout;

const {
  Title,
  Text,
  Paragraph,
} = Typography;

/* =========================================================
   COLORS
========================================================= */

const blue = "#173B63";
const mediumBlue = "#4E79A7";
const lightBlue = "#F4F8FC";
const textColor = "#4b5563";

/* =========================================================
   ABOUT PAGE
========================================================= */

export default function About() {
  const navigate = useNavigate();

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
        <main
          style={{
            width: "100%",
            maxWidth: 1050,
            margin: "0 auto",

            padding: isMobile
              ? "32px 18px 64px"
              : "48px 40px 88px",
          }}
        >
          {/* =================================================
              BACK
          ================================================= */}

          <Button
            type="link"
            icon={
              <ArrowLeftOutlined />
            }
            onClick={() =>
              navigate("/")
            }
            style={{
              paddingLeft: 0,
              marginBottom: 20,
            }}
          >
            Back to Portfolio
          </Button>

          {/* =================================================
              HERO
          ================================================= */}

          <Text
            strong
            style={{
              display: "block",

              color: mediumBlue,

              fontSize: 13,

              textTransform:
                "uppercase",

              letterSpacing:
                "0.8px",

              marginBottom: 7,
            }}
          >
            About
          </Text>

          <Title
            level={1}
            style={{
              color: blue,

              fontSize: isMobile
                ? 34
                : 46,

              lineHeight: 1.12,

              marginTop: 0,

              marginBottom: 16,
            }}
          >
            Learning Design + Technology + Development
          </Title>

          <Paragraph
            style={{
              maxWidth: 900,

              fontSize: isMobile
                ? 17
                : 20,

              lineHeight: 1.65,

              color: textColor,

              marginBottom: 34,
            }}
          >
            I design learning experiences at the
            intersection of instructional design,
            learning technology, and software
            development.
          </Paragraph>

          {/* =================================================
              MAIN STORY
          ================================================= */}

          <Row
            gutter={[40, 28]}
            align="top"
          >
            {/* LEFT — MAIN COPY */}

            <Col
              xs={24}
              lg={16}
            >
              <Paragraph
                style={bodyTextStyle}
              >
                My background in education gave me a
                strong foundation in learner-centered
                design, curriculum development, needs
                analysis, and multimedia learning,
                while later work in AI and software
                engineering expanded that foundation
                into data, APIs, React, TypeScript,
                databases, and cloud-based systems.
              </Paragraph>

              <Paragraph
                style={bodyTextStyle}
              >
                That combination now shapes how I
                approach technical learning. I am
                especially interested in building
                experiences where learners actively
                practice skills, make decisions,
                receive meaningful feedback, and
                progress based on performance rather
                than simply consuming content.
                Recent projects have included custom
                React-based learning applications,
                learning analytics, adaptive
                recommendations, AI-generated
                practice, and scenario-based
                eLearning.
              </Paragraph>

              <Paragraph
                style={{
                  ...bodyTextStyle,
                  marginBottom: 0,
                }}
              >
                I am targeting roles where I can bring
                together{" "}
                <strong>
                  learning science, technical content,
                  data-informed design, and
                  development
                </strong>{" "}
                to create learning systems that are
                practical, measurable, and responsive
                to learner needs.
              </Paragraph>
            </Col>

            {/* RIGHT — POSITIONING CARD */}

            <Col
              xs={24}
              lg={8}
            >
              <Card
                style={{
                  border: "none",

                  background:
                    lightBlue,

                  borderRadius: 16,
                }}
              >
                <Text
                  strong
                  style={{
                    display: "block",

                    color:
                      mediumBlue,

                    fontSize: 12,

                    textTransform:
                      "uppercase",

                    letterSpacing:
                      "0.7px",

                    marginBottom: 12,
                  }}
                >
                  Current Focus
                </Text>

                <Title
                  level={4}
                  style={{
                    color: blue,

                    marginTop: 0,

                    marginBottom: 14,
                  }}
                >
                  Technical Instructional Design &
                  Learning Technology
                </Title>

                <Paragraph
                  style={{
                    color:
                      textColor,

                    lineHeight: 1.7,

                    marginBottom: 16,
                  }}
                >
                  Designing learning systems that
                  connect instructional strategy with
                  custom technology, learner data, and
                  meaningful practice.
                </Paragraph>

                <Space
                  wrap
                  size={[7, 8]}
                >
                  {[
                    "Technical Training",
                    "Learning Analytics",
                    "AI for Learning",
                    "Scenario Design",
                    "Custom Learning Apps",
                  ].map(
                    (item) => (
                      <Tag
                        key={item}
                        style={{
                          border:
                            "none",

                          background:
                            "#ffffff",

                          color:
                            "#164A7B",

                          padding:
                            "5px 9px",
                        }}
                      >
                        {item}
                      </Tag>
                    )
                  )}
                </Space>
              </Card>
            </Col>
          </Row>

          {/* =================================================
              WHAT I BRING
          ================================================= */}

          <section
            style={{
              marginTop: 58,
            }}
          >
            <Text
              strong
              style={{
                display: "block",

                color: mediumBlue,

                fontSize: 12,

                letterSpacing:
                  "0.8px",

                marginBottom: 4,
              }}
            >
              WHAT I BRING
            </Text>

            <Title
              level={2}
              style={{
                color: blue,

                marginTop: 0,

                marginBottom: 22,
              }}
            >
              A Cross-Disciplinary Skill Set
            </Title>

            <Row
              gutter={[18, 18]}
            >
              <Col
                xs={24}
                md={12}
              >
                <StrengthCard
                  icon={
                    <ReadOutlined />
                  }
                  title="Learning Design"
                  text="Needs analysis, curriculum design, scaffolding, scenario-based learning, feedback design, assessment, and learner-centered practice."
                />
              </Col>

              <Col
                xs={24}
                md={12}
              >
                <StrengthCard
                  icon={
                    <CodeOutlined />
                  }
                  title="Custom Development"
                  text="React, Next.js, TypeScript, JavaScript, APIs, databases, and responsive learning interfaces."
                />
              </Col>

              <Col
                xs={24}
                md={12}
              >
                <StrengthCard
                  icon={
                    <DatabaseOutlined />
                  }
                  title="Data-Informed Learning"
                  text="Mastery tracking, learning analytics, learner-performance data, and targeted practice recommendations."
                />
              </Col>

              <Col
                xs={24}
                md={12}
              >
                <StrengthCard
                  icon={
                    <ExperimentOutlined />
                  }
                  title="AI-Supported Learning"
                  text="Using generative AI purposefully to create contextual, personalized practice based on learner needs."
                />
              </Col>
            </Row>
          </section>

          {/* =================================================
              CLOSING
          ================================================= */}

          <Card
            style={{
              border: "none",

              background:
                lightBlue,

              marginTop: 58,

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
              The kind of work I want to do
            </Title>

            <Paragraph
              style={{
                fontSize: 17,

                lineHeight: 1.75,

                color: textColor,

                marginBottom: 0,
              }}
            >
              I am most interested in roles where
              instructional design is closely
              connected to technology: technical
              training, learning engineering,
              learning experience development,
              educational technology, and learning
              systems design.
            </Paragraph>
          </Card>
        </main>
      </Content>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer
        style={{
          textAlign: "center",

          background:
            "#fafafa",

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

/* =========================================================
   SHARED STYLES
========================================================= */

const bodyTextStyle = {
  fontSize: 17,
  lineHeight: 1.8,
  color: textColor,
};

/* =========================================================
   STRENGTH CARD
========================================================= */

function StrengthCard({
  icon,
  title,
  text,
}) {
  return (
    <Card
      style={{
        height: "100%",

        border:
          "1px solid #E8EEF4",

        borderRadius: 14,

        boxShadow:
          "0 4px 16px rgba(30, 70, 110, 0.05)",
      }}
    >
      <div
        style={{
          display: "flex",

          alignItems:
            "flex-start",

          gap: 14,
        }}
      >
        <div
          style={{
            width: 42,

            height: 42,

            flexShrink: 0,

            display: "flex",

            alignItems:
              "center",

            justifyContent:
              "center",

            borderRadius: 10,

            background:
              lightBlue,

            color:
              mediumBlue,

            fontSize: 20,
          }}
        >
          {icon}
        </div>

        <div>
          <Title
            level={4}
            style={{
              marginTop: 0,

              marginBottom: 7,

              color: blue,
            }}
          >
            {title}
          </Title>

          <Paragraph
            style={{
              marginBottom: 0,

              color:
                textColor,

              lineHeight: 1.7,
            }}
          >
            {text}
          </Paragraph>
        </div>
      </div>
    </Card>
  );
}