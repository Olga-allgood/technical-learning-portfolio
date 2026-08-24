// src/pages/projects/SQLFoundationsCaseStudy.jsx

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
  ArrowRightOutlined,
  ExportOutlined,
} from "@ant-design/icons";

import { useNavigate } from "react-router-dom";

import PortfolioHeader from "../../components/PortfolioHeader";

import learningArchitecture from "../../assets/sql-case-study/01-learning-architecture.png";
import knowledgeCard from "../../assets/sql-case-study/02-learn-knowledge-card.png";
import buildQuery from "../../assets/sql-case-study/04-build-the-query.png";
import sqlDetective from "../../assets/sql-case-study/05-apply-sql-detective.png";
import learningAnalytics from "../../assets/sql-case-study/06-learning-analytics.png";
import adaptiveRecommendation from "../../assets/sql-case-study/07-adaptive-recommendation.png";

const { Content, Footer } = Layout;

const { Title, Text, Paragraph } = Typography;

/* =========================================================
   COLORS
========================================================= */

const blue = "#173B63";
const mediumBlue = "#4E79A7";
const lightBlue = "#F4F8FC";
const textColor = "#4b5563";

const STANDARD_IMAGE_HEIGHT = 300;

/* =========================================================
   COMPONENT
========================================================= */

export default function SQLFoundationsCaseStudy() {
  const navigate = useNavigate();
  const screens = Grid.useBreakpoint();
  const isMobile = !screens.md;

  const openProject = () => {
    window.open(
      "https://sql-foundations-lab.vercel.app/",
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
            maxWidth: 1100,
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
            Technical Learning Case Study
          </Text>

          <Title
            level={1}
            style={{
              color: blue,
              fontSize: isMobile ? 34 : 48,
              lineHeight: 1.08,
              marginTop: 0,
              marginBottom: 12,
            }}
          >
            SQL Foundations Lab
          </Title>

          <Paragraph
            style={{
              maxWidth: 880,
              fontSize: isMobile ? 17 : 20,
              lineHeight: 1.65,
              color: textColor,
              marginBottom: 24,
            }}
          >
            A scaffolded, gamified SQL learning system that
            combines technical practice, learning analytics,
            and targeted recommendations to help beginners
            move toward independent problem solving.
          </Paragraph>

          {/* QUICK SUMMARY */}

          <Card
            style={{
              maxWidth: 960,
              border: "none",
              background: lightBlue,
              marginBottom: 24,
            }}
          >
            <Row gutter={[24, 18]}>
              <Col xs={24} md={8}>
                <MetaItem
                  label="Audience"
                  value="Beginning SQL learners"
                />
              </Col>

              <Col xs={24} md={8}>
                <MetaItem
                  label="Tools"
                  value="React · JavaScript · SQL · Ant Design"
                />
              </Col>

              <Col xs={24} md={8}>
                <MetaItem
                  label="Focus"
                  value="Scaffolding · Learning Analytics · Gamification · Adaptive Recommendation"
                />
              </Col>
            </Row>
          </Card>

          <Button
            type="primary"
            size="large"
            icon={<ExportOutlined />}
            onClick={openProject}
          >
            Experience the Project
          </Button>

          {/* =================================================
              01 — CHALLENGE
          ================================================= */}

          <CaseSection
            number="01"
            title="The Challenge"
          >
            <Paragraph style={bodyTextStyle}>
              Beginning SQL learners may recognize commands
              such as <Text code>SELECT</Text>,{" "}
              <Text code>WHERE</Text>, and{" "}
              <Text code>GROUP BY</Text> without being able
              to construct queries or apply SQL to practical
              problems.
            </Paragraph>

            <Paragraph
              style={{
                ...bodyTextStyle,
                marginBottom: 0,
              }}
            >
              I designed the system to bridge the gap between
              recognizing syntax and using SQL independently.
            </Paragraph>

            <Card
              style={{
                border: "none",
                background: lightBlue,
                marginTop: 22,
              }}
            >
              <Text
                strong
                style={{
                  display: "block",
                  color: mediumBlue,
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.6px",
                  marginBottom: 6,
                }}
              >
                Design Goal
              </Text>

              <Title
                level={4}
                style={{
                  color: blue,
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                Recognition → Construction → Application →
                Independent Problem Solving
              </Title>
            </Card>
          </CaseSection>

          {/* =================================================
              02 — LEARNING SYSTEM
          ================================================= */}

          <CaseSection
            number="02"
            title="Learning System Design"
          >
            <Row
              gutter={[36, 28]}
              align="middle"
            >
              {/* LEFT — ARCHITECTURE IMAGE */}

              <Col xs={24} md={9}>
                <ScreenshotFrame
                  image={learningArchitecture}
                  alt="SQL learning architecture showing seven skill areas"
                  isMobile={isMobile}
                />
              </Col>

              {/* RIGHT — EXPLANATION */}

              <Col xs={24} md={15}>
                <Paragraph style={bodyTextStyle}>
                  I organized SQL Foundations into seven
                  focused skill areas, from reading basic
                  queries through practical SQL.
                </Paragraph>

                <Paragraph style={bodyTextStyle}>
                  Each skill area follows the same learning
                  progression:
                </Paragraph>

                <ProgressionTags />

                <Paragraph
                  style={{
                    ...bodyTextStyle,
                    marginBottom: 0,
                  }}
                >
                  The learning system combines{" "}
                  <strong>chunking</strong>,{" "}
                  <strong>scaffolding</strong>, retrieval
                  practice, contextual application, feedback,
                  and visible mastery. Support decreases as
                  learners move toward more independent
                  problem solving.
                </Paragraph>
              </Col>
            </Row>

            {/* LEARN / BUILD / APPLY */}

            <div
              style={{
                marginTop: 36,
              }}
            >
              <Title
                level={4}
                style={{
                  color: blue,
                  marginBottom: 18,
                }}
              >
                From Understanding to Application
              </Title>

              <Row
                gutter={[18, 22]}
                align="top"
              >
                <Col xs={24} md={8}>
                  <StageCard
                    number="1"
                    title="Learn"
                    subtitle="Establish the mental model"
                    image={knowledgeCard}
                  />
                </Col>

                <Col xs={24} md={8}>
                  <StageCard
                    number="2"
                    title="Build"
                    subtitle="Practice query structure"
                    image={buildQuery}
                  />
                </Col>

                <Col xs={24} md={8}>
                  <StageCard
                    number="3"
                    title="Apply"
                    subtitle="Solve a contextual problem"
                    image={sqlDetective}
                  />
                </Col>
              </Row>

              <Card
                style={{
                  border: "none",
                  background: lightBlue,
                  marginTop: 24,
                }}
              >
                <Paragraph
                  style={{
                    margin: 0,
                    color: textColor,
                    lineHeight: 1.7,
                  }}
                >
                  Hints and feedback support retrying, while
                  independently solved tasks contribute to
                  mastery. Visible progress and themed
                  activities such as{" "}
                  <strong>SQL Detective</strong> make skill
                  development visible throughout the
                  experience.
                </Paragraph>
              </Card>
            </div>
          </CaseSection>

          {/* =================================================
              03 — LEARNING ANALYTICS
          ================================================= */}

          <CaseSection
            number="03"
            title="Learning Analytics"
          >
            <Paragraph style={bodyTextStyle}>
              I extended the system beyond completion
              tracking by capturing independently solved
              tasks and transforming learner performance into
              mastery metrics across seven SQL skill areas.
            </Paragraph>

            <Paragraph style={bodyTextStyle}>
              The analytics dashboard makes patterns visible
              across the learning path, helping learners see
              stronger skills and areas that would benefit
              from additional practice.
            </Paragraph>

            <LargeScreenshotFrame
              image={learningAnalytics}
              alt="SQL learning analytics dashboard showing mastery by SQL skill"
            />

            <FlowCard>
              <FlowStep>Practice</FlowStep>

              <ArrowRightOutlined />

              <FlowStep>Performance Data</FlowStep>

              <ArrowRightOutlined />

              <FlowStep>Skill Mastery</FlowStep>
            </FlowCard>
          </CaseSection>

          {/* =================================================
              04 — ADAPTIVE RECOMMENDATION
          ================================================= */}

          <CaseSection
            number="04"
            title="Adaptive Recommendation"
          >
            <Paragraph style={bodyTextStyle}>
              I used the analytics data to go beyond reporting
              and support a targeted next step in the learning
              experience.
            </Paragraph>

            <Paragraph style={bodyTextStyle}>
              When the system identifies a skill area that
              needs additional practice, it recommends a
              specific focus. Selecting{" "}
              <strong>Practice Next</strong> sends the learner
              directly to the relevant SQL skill and activity.
            </Paragraph>

            <LargeScreenshotFrame
              image={adaptiveRecommendation}
              alt="Adaptive recommendation showing targeted SQL practice"
              maxWidth={880}
            />

            <FlowCard>
              <FlowStep>Skill Gap</FlowStep>

              <ArrowRightOutlined />

              <FlowStep>
                Targeted Recommendation
              </FlowStep>

              <ArrowRightOutlined />

              <FlowStep>Practice Next</FlowStep>
            </FlowCard>

            <Card
              style={{
                border: "none",
                background: "#F7FAFD",
                marginTop: 22,
              }}
            >
              <Text
                strong
                style={{
                  display: "block",
                  color: mediumBlue,
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.6px",
                  marginBottom: 7,
                }}
              >
                Learning Loop
              </Text>

              <Title
                level={4}
                style={{
                  margin: 0,
                  color: blue,
                  lineHeight: 1.6,
                }}
              >
                Practice → Measure → Identify Need →
                Recommend → Practice
              </Title>
            </Card>
          </CaseSection>

          {/* =================================================
              05 — TECHNICAL IMPLEMENTATION
          ================================================= */}

          <CaseSection
            number="05"
            title="Technical Implementation"
          >
            <Paragraph style={bodyTextStyle}>
              I developed SQL Foundations as a responsive
              React application using reusable components for
              learning activities, feedback, mastery tracking,
              analytics, and targeted practice
              recommendations.
            </Paragraph>

            <Space
              wrap
              size={[8, 8]}
              style={{
                marginTop: 4,
                marginBottom: 20,
              }}
            >
              {[
                "React",
                "JavaScript",
                "Ant Design",
                "SQL",
                "Local Storage",
                "Learning Analytics",
                "Vite",
                "Vercel",
              ].map((item) => (
                <Tag
                  key={item}
                  style={{
                    border: "none",
                    background: "#EDF4FA",
                    color: "#164A7B",
                    padding: "5px 10px",
                  }}
                >
                  {item}
                </Tag>
              ))}
            </Space>

            <Paragraph
              style={{
                ...bodyTextStyle,
                marginBottom: 0,
              }}
            >
              Learner progress is persisted locally and
              transformed into performance metrics that power
              both the analytics dashboard and the
              recommendation logic.
            </Paragraph>
          </CaseSection>

          {/* =================================================
              06 — TAKEAWAY
          ================================================= */}

          <CaseSection
            number="06"
            title="Design Takeaway"
          >
            <Paragraph style={bodyTextStyle}>
              SQL Foundations evolved into a{" "}
              <strong>data-informed learning system</strong>{" "}
              in which instructional design, performance data,
              and custom software work together.
            </Paragraph>

            <Paragraph
              style={{
                ...bodyTextStyle,
                marginBottom: 0,
              }}
            >
              Practice generates learner data, analytics make
              skill development visible, and adaptive
              recommendations use those insights to guide
              targeted practice.
            </Paragraph>
          </CaseSection>

          {/* =================================================
              CTA
          ================================================= */}

          <div
            style={{
              marginTop: 56,
              paddingTop: 28,
              borderTop: "1px solid #e5e7eb",
            }}
          >
            <Space wrap>
              <Button
                type="primary"
                size="large"
                icon={<ExportOutlined />}
                onClick={openProject}
              >
                Experience the Project
              </Button>

              <Button
                size="large"
                icon={<ArrowLeftOutlined />}
                onClick={() => navigate("/")}
              >
                Back to Portfolio
              </Button>
            </Space>
          </div>
        </main>
      </Content>

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
  lineHeight: 1.75,
  color: textColor,
};

/* =========================================================
   META ITEM
========================================================= */

function MetaItem({
  label,
  value,
}) {
  return (
    <div>
      <Text
        strong
        style={{
          display: "block",
          color: mediumBlue,
          fontSize: 12,
          textTransform: "uppercase",
          letterSpacing: "0.6px",
          marginBottom: 4,
        }}
      >
        {label}
      </Text>

      <Text
        style={{
          color: blue,
          lineHeight: 1.55,
        }}
      >
        {value}
      </Text>
    </div>
  );
}

/* =========================================================
   CASE SECTION
========================================================= */

function CaseSection({
  number,
  title,
  children,
}) {
  return (
    <section
      style={{
        marginTop: 60,
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
        {number}
      </Text>

      <Title
        level={2}
        style={{
          color: blue,
          marginTop: 0,
          marginBottom: 18,
        }}
      >
        {title}
      </Title>

      {children}
    </section>
  );
}

/* =========================================================
   PROGRESSION
========================================================= */

function ProgressionTags() {
  const items = [
    "Learn",
    "Recognize",
    "Build",
    "Apply",
    "Analyze",
    "Challenge",
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 8,
        marginTop: 16,
        marginBottom: 20,
      }}
    >
      {items.map((item, index) => (
        <div
          key={item}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Tag
            style={{
              border: "none",
              background: lightBlue,
              color: blue,
              padding: "5px 10px",
              margin: 0,
              fontWeight: 600,
            }}
          >
            {item}
          </Tag>

          {index < items.length - 1 && (
            <ArrowRightOutlined
              style={{
                color: mediumBlue,
                fontSize: 11,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   SCREENSHOT FRAME
========================================================= */

function ScreenshotFrame({
  image,
  alt,
  isMobile = false,
}) {
  return (
    <div
      style={{
        width: "100%",
        background: "#EEF4F9",
        padding: 10,
        borderRadius: 14,

        boxShadow:
          "0 6px 20px rgba(30, 70, 110, 0.07)",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        overflow: "hidden",
      }}
    >
      <img
        src={image}
        alt={alt}
        style={{
          height: isMobile
            ? "auto"
            : STANDARD_IMAGE_HEIGHT,

          width: isMobile
            ? "100%"
            : "auto",

          maxWidth: "100%",

          objectFit: "contain",
          display: "block",

          borderRadius: 8,
        }}
      />
    </div>
  );
}

/* =========================================================
   STAGE CARD
========================================================= */

function StageCard({
  number,
  title,
  subtitle,
  image,
}) {
  return (
    <Card
      style={{
        border: "none",
        background: lightBlue,
        overflow: "hidden",
      }}
      styles={{
        body: {
          padding: 0,
        },
      }}
    >
      <div
        style={{
          padding: "16px 16px 12px",
        }}
      >
        <Text
          strong
          style={{
            display: "block",
            color: mediumBlue,
            fontSize: 11,
            marginBottom: 3,
          }}
        >
          {number}
        </Text>

        <Title
          level={4}
          style={{
            color: blue,
            margin: 0,
          }}
        >
          {title}
        </Title>

        <Text type="secondary">
          {subtitle}
        </Text>
      </div>

      <div
        style={{
          background: "#ffffff",
          padding: 8,
        }}
      >
        <img
          src={image}
          alt={`${title} activity`}
          style={{
            width: "100%",
            height: 175,
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>
    </Card>
  );
}

/* =========================================================
   LARGE SCREENSHOT
========================================================= */

function LargeScreenshotFrame({
  image,
  alt,
  maxWidth = "100%",
}) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth,
        margin: "28px auto 0",
        padding: 10,
        background: "#EEF4F9",
        borderRadius: 14,

        boxShadow:
          "0 6px 20px rgba(30, 70, 110, 0.07)",

        overflow: "hidden",
      }}
    >
      <img
        src={image}
        alt={alt}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          objectFit: "contain",
          borderRadius: 8,
        }}
      />
    </div>
  );
}

/* =========================================================
   FLOW CARD
========================================================= */

function FlowCard({
  children,
}) {
  return (
    <Card
      style={{
        border: "none",
        background: lightBlue,
        marginTop: 24,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 12,
          color: blue,
          textAlign: "center",
        }}
      >
        {children}
      </div>
    </Card>
  );
}

/* =========================================================
   FLOW STEP
========================================================= */

function FlowStep({
  children,
}) {
  return (
    <Text
      strong
      style={{
        color: blue,
        fontSize: 15,
      }}
    >
      {children}
    </Text>
  );
}