// src/pages/About.jsx

import {
  Button,
  Card,
  Col,
  Grid,
  Layout,
  Row,
  Space,
  Typography,
} from "antd";

import {
  ArrowLeftOutlined,
  CodeOutlined,
  DatabaseOutlined,
  ExperimentOutlined,
  FileTextOutlined,
  ReadOutlined,
} from "@ant-design/icons";

import { useNavigate } from "react-router-dom";
import { track } from "@vercel/analytics";

import PortfolioHeader from "../components/PortfolioHeader";

const { Content, Footer } = Layout;
const { Title, Text, Paragraph } = Typography;

const blue = "#173B63";
const mediumBlue = "#4E79A7";
const lightBlue = "#F4F8FC";
const textColor = "#4b5563";

export default function About() {
  const navigate = useNavigate();

  const screens = Grid.useBreakpoint();
  const isMobile = !screens.md;

  /* =========================================================
     RESUME
  ========================================================= */

  const openResume = () => {
    track("View Resume", {
      location: "About Page",
    });

    window.open(
      "/Olga-Orlova-Resume.pdf",
      "_blank",
      "noopener,noreferrer"
    );
  };

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
            maxWidth: 1000,
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
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate("/")}
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
              textTransform: "uppercase",
              letterSpacing: "0.8px",
              marginBottom: 7,
            }}
          >
            About
          </Text>

          <Title
            level={1}
            style={{
              color: blue,
              fontSize: isMobile ? 34 : 46,
              lineHeight: 1.12,
              marginTop: 0,
              marginBottom: 16,
            }}
          >
            Technical Instructional Designer + Learning Engineer
          </Title>

          <Paragraph
            style={{
              maxWidth: 820,
              fontSize: isMobile ? 17 : 20,
              lineHeight: 1.65,
              color: textColor,
              marginBottom: 30,
            }}
          >
            I combine instructional design with software development
            to create practical, interactive technical learning
            experiences.
          </Paragraph>

          <Space
            wrap
            style={{
              marginBottom: 38,
            }}
          >
            <Button
              type="primary"
              size="large"
              icon={<FileTextOutlined />}
              onClick={openResume}
            >
              View Resume
            </Button>

            <Button
              size="large"
              onClick={() => navigate("/")}
            >
              View Projects
            </Button>
          </Space>

          {/* =================================================
              STORY
          ================================================= */}

          <section
            style={{
              maxWidth: 880,
            }}
          >
            <Paragraph
              style={bodyTextStyle}
            >
              I bring 10+ years of experience across education,
              curriculum development, and learning technology,
              along with hands-on software development experience.
              I’ve led curriculum initiatives supporting 600+
              learners and now build hands-on labs, interactive
              learning applications, technical assessments, and
              scenario-based eLearning.
            </Paragraph>

            <Paragraph
              style={{
                ...bodyTextStyle,
                marginBottom: 0,
              }}
            >
              I use React, TypeScript, Python, SQL, APIs, and
              tools such as Articulate Storyline 360, Articulate
              Rise 360, and Adobe Captivate to turn technical
              concepts into learning experiences people can
              practice and apply.
            </Paragraph>
          </section>

          {/* =================================================
              CAPABILITIES
          ================================================= */}

          <section
            style={{
              marginTop: 54,
            }}
          >
            <Text
              strong
              style={{
                display: "block",
                color: mediumBlue,
                fontSize: 12,
                letterSpacing: "0.8px",
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
              Instructional Design + Learning Engineering
            </Title>

            <Row
              gutter={[18, 18]}
            >
              <Col
                xs={24}
                md={12}
              >
                <StrengthCard
                  icon={<ReadOutlined />}
                  title="Technical Instructional Design"
                  text="Technical curriculum, hands-on practice, scenario design, scaffolding, feedback, and assessment."
                />
              </Col>

              <Col
                xs={24}
                md={12}
              >
                <StrengthCard
                  icon={<CodeOutlined />}
                  title="Learning Engineering"
                  text="React, Next.js, TypeScript, JavaScript, APIs, databases, and custom interactive learning applications."
                />
              </Col>

              <Col
                xs={24}
                md={12}
              >
                <StrengthCard
                  icon={<DatabaseOutlined />}
                  title="Learning Analytics"
                  text="Mastery tracking, learner performance data, progress visualization, and targeted practice."
                />
              </Col>

              <Col
                xs={24}
                md={12}
              >
                <StrengthCard
                  icon={<ExperimentOutlined />}
                  title="AI for Learning"
                  text="Using generative AI with learner data to create contextual and personalized practice."
                />
              </Col>
            </Row>
          </section>

          {/* =================================================
              FOCUS
          ================================================= */}

          <section
            style={{
              marginTop: 54,
            }}
          >
            <Text
              strong
              style={{
                display: "block",
                color: mediumBlue,
                fontSize: 12,
                letterSpacing: "0.8px",
                marginBottom: 4,
              }}
            >
              FOCUS
            </Text>

            <Card
              style={{
                border: "none",
                background: lightBlue,
                borderRadius: 14,
              }}
            >
              <Paragraph
                style={{
                  margin: 0,
                  color: blue,
                  fontSize: 16,
                  lineHeight: 1.75,
                  fontWeight: 600,
                }}
              >
                Technical Instructional Design · Learning Engineering ·
                Technical Curriculum Development · Technical Training
              </Paragraph>
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
        border: "1px solid #E8EEF4",
        borderRadius: 14,

        boxShadow:
          "0 4px 16px rgba(30, 70, 110, 0.05)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 14,
        }}
      >
        <div
          style={{
            width: 42,
            height: 42,
            flexShrink: 0,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            borderRadius: 10,
            background: lightBlue,
            color: mediumBlue,
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
              color: textColor,
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