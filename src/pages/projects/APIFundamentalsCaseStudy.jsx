// src/pages/projects/APIFundamentalsCaseStudy.jsx

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
import { track } from "@vercel/analytics";

import PortfolioHeader from "../../components/PortfolioHeader";

import requestAnatomy from "../../assets/api-fundamentals/01-request-anatomy.png";

import weatherRequest from "../../assets/api-fundamentals/02-weather-api-request.png";
import weatherPrediction from "../../assets/api-fundamentals/03-weather-api-prediction.png";
import weatherResponse from "../../assets/api-fundamentals/04-weather-api-response.png";

import supportTicket from "../../assets/api-fundamentals/05-support-ticket.png";
import supportDiagnosis from "../../assets/api-fundamentals/06-support-ticket-diagnosis.png";
import supportResolved from "../../assets/api-fundamentals/07-support-ticket-resolved.png";

const { Content, Footer } = Layout;
const { Title, Text, Paragraph } = Typography;

/* =========================================================
   COLORS
========================================================= */

const blue = "#173B63";
const mediumBlue = "#4E79A7";
const lightBlue = "#F4F8FC";
const textColor = "#4b5563";

/* =========================================================
   COMPONENT
========================================================= */

export default function APIFundamentalsCaseStudy() {
  const navigate = useNavigate();

  const screens = Grid.useBreakpoint();
  const isMobile = !screens.md;

  const openCourse = () => {
    track("Experience Project", {
      project: "API Fundamentals",
    });

    window.open(
      "/api-fundamentals/index.html",
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
            Interactive Technical Learning Case Study
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
            API Fundamentals
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
            A Rise 360 technical learning experience that
            combines scaffolded instruction, interactive
            experimentation, and authentic troubleshooting to
            help beginners understand how APIs behave.
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
                  value="Beginning API learners"
                />
              </Col>

              <Col xs={24} md={8}>
                <MetaItem
                  label="Technology"
                  value="Rise 360 · HTML · CSS · JavaScript"
                />
              </Col>

              <Col xs={24} md={8}>
                <MetaItem
                  label="Learning Approach"
                  value="Scaffolding · Experimentation · Troubleshooting · Mastery"
                />
              </Col>
            </Row>
          </Card>

          <Button
            type="primary"
            size="large"
            icon={<ExportOutlined />}
            onClick={openCourse}
          >
            Experience the Course
          </Button>

          {/* =================================================
              01 — LEARNING PROBLEM
          ================================================= */}

          <CaseSection
            number="01"
            title="The Learning Problem"
          >
            <Paragraph
              style={{
                ...bodyTextStyle,
                maxWidth: 850,
                marginBottom: 0,
              }}
            >
              API terminology can feel abstract when learners
              encounter methods, endpoints, parameters, request
              bodies, and status codes as separate definitions.
              I designed the course to help learners see how
              these concepts work together during an actual
              request-response cycle.
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
                Learning Progression
              </Text>

              <Title
                level={4}
                style={{
                  color: blue,
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                Understand → Examine → Apply → Experiment →
                Diagnose
              </Title>
            </Card>
          </CaseSection>

          {/* =================================================
              02 — BUILD THE MENTAL MODEL
          ================================================= */}

          <CaseSection
            number="02"
            title="Build the Mental Model"
          >
            <Row
              gutter={[36, 28]}
              align="middle"
            >
              <Col xs={24} md={11}>
                <LargeScreenshotFrame
                  image={requestAnatomy}
                  alt="Interactive API request anatomy showing a query parameter"
                />
              </Col>

              <Col xs={24} md={13}>
                <Paragraph style={bodyTextStyle}>
                  Early lessons break an API request into
                  manageable parts so learners can understand
                  what each component contributes before working
                  with complete requests.
                </Paragraph>

                <Space
                  wrap
                  size={[8, 8]}
                  style={{
                    marginBottom: 20,
                  }}
                >
                  {[
                    "HTTP Method",
                    "Endpoint",
                    "Query Parameter",
                    "Header",
                    "Request Body",
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
                  Native Rise interactions support guided
                  exploration while keeping the initial
                  cognitive load focused on one concept at a
                  time.
                </Paragraph>
              </Col>
            </Row>
          </CaseSection>

          {/* =================================================
              03 — EXPERIMENTATION
          ================================================= */}

          <CaseSection
            number="03"
            title="Turn Status Codes Into an Experiment"
          >
            <Paragraph
              style={{
                ...bodyTextStyle,
                maxWidth: 880,
              }}
            >
              Rather than asking learners to memorize HTTP
              status-code definitions, I built a custom
              JavaScript Weather API Lab where learners make a
              prediction before seeing the result.
            </Paragraph>

            <FlowCard>
              <FlowStep>Choose & Examine</FlowStep>

              <ArrowRightOutlined />

              <FlowStep>Predict</FlowStep>

              <ArrowRightOutlined />

              <FlowStep>Send Request</FlowStep>

              <ArrowRightOutlined />

              <FlowStep>Investigate Response</FlowStep>
            </FlowCard>

            <Row
              gutter={[18, 22]}
              align="stretch"
              style={{
                marginTop: 24,
              }}
            >
              <Col
                xs={24}
                lg={8}
                style={{
                  display: "flex",
                }}
              >
                <InteractionCard
                  number="1"
                  title="Examine"
                  subtitle="Generate and inspect the request"
                  image={weatherRequest}
                  alt="Weather API Lab showing an Atlantis API request"
                />
              </Col>

              <Col
                xs={24}
                lg={8}
                style={{
                  display: "flex",
                }}
              >
                <InteractionCard
                  number="2"
                  title="Predict"
                  subtitle="Commit to an expected outcome"
                  image={weatherPrediction}
                  alt="Weather API Lab prediction interaction"
                />
              </Col>

              <Col
                xs={24}
                lg={8}
                style={{
                  display: "flex",
                }}
              >
                <InteractionCard
                  number="3"
                  title="Investigate"
                  subtitle="Interpret the response and feedback"
                  image={weatherResponse}
                  alt="Weather API Lab showing a 404 response and prediction feedback"
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
                  fontSize: 16,
                  lineHeight: 1.7,
                }}
              >
                Learners discover the meaning of{" "}
                <Text code>200 OK</Text>,{" "}
                <Text code>404 Not Found</Text>, and{" "}
                <Text code>500 Internal Server Error</Text>{" "}
                through prediction, experimentation, and
                immediate feedback rather than definition
                recall alone.
              </Paragraph>
            </Card>
          </CaseSection>

          {/* =================================================
              04 — TROUBLESHOOTING
          ================================================= */}

          <CaseSection
            number="04"
            title="Design for Authentic Troubleshooting"
          >
            <Paragraph
              style={{
                ...bodyTextStyle,
                maxWidth: 880,
              }}
            >
              The final challenge removes much of the earlier
              scaffolding. Learners receive realistic API
              support tickets and must use technical evidence to
              determine what is wrong.
            </Paragraph>

            <FlowCard>
              <FlowStep>Investigate</FlowStep>

              <ArrowRightOutlined />

              <FlowStep>Analyze Evidence</FlowStep>

              <ArrowRightOutlined />

              <FlowStep>Diagnose</FlowStep>

              <ArrowRightOutlined />

              <FlowStep>Resolve</FlowStep>
            </FlowCard>

            <Row
              gutter={[18, 22]}
              align="stretch"
              style={{
                marginTop: 24,
              }}
            >
              <Col
                xs={24}
                lg={8}
                style={{
                  display: "flex",
                }}
              >
                <InteractionCard
                  number="1"
                  title="Investigate"
                  subtitle="Review the support ticket and request"
                  image={supportTicket}
                  alt="API support ticket showing an incorrect POST request"
                />
              </Col>

              <Col
                xs={24}
                lg={8}
                style={{
                  display: "flex",
                }}
              >
                <InteractionCard
                  number="2"
                  title="Diagnose"
                  subtitle="Select the request that solves the problem"
                  image={supportDiagnosis}
                  alt="API support ticket diagnosis choices"
                />
              </Col>

              <Col
                xs={24}
                lg={8}
                style={{
                  display: "flex",
                }}
              >
                <InteractionCard
                  number="3"
                  title="Resolve"
                  subtitle="Receive diagnostic feedback"
                  image={supportResolved}
                  alt="Resolved API support ticket with instructional feedback"
                />
              </Col>
            </Row>
          </CaseSection>

          {/* =================================================
              05 — ASSESSMENT + TECHNICAL IMPLEMENTATION
          ================================================= */}

          <CaseSection
            number="05"
            title="Mastery-Based Assessment"
          >
            <Paragraph
              style={{
                ...bodyTextStyle,
                maxWidth: 860,
              }}
            >
              Instead of assigning points for a conventional
              final quiz, the troubleshooting challenge uses
              mastery-based completion. A ticket remains open
              until the learner successfully diagnoses the
              problem.
            </Paragraph>

            <FlowCard>
              <FlowStep>Investigate</FlowStep>

              <ArrowRightOutlined />

              <FlowStep>Diagnose</FlowStep>

              <ArrowRightOutlined />

              <FlowStep>Feedback</FlowStep>

              <ArrowRightOutlined />

              <FlowStep>Retry</FlowStep>

              <ArrowRightOutlined />

              <FlowStep>Resolved ✓</FlowStep>
            </FlowCard>

            <Paragraph
              style={{
                ...bodyTextStyle,
                maxWidth: 860,
                marginTop: 24,
                marginBottom: 0,
              }}
            >
              Incorrect responses provide diagnostic guidance
              without immediately revealing the answer, giving
              learners another opportunity to interpret the
              evidence and retry.
            </Paragraph>
          </CaseSection>

          {/* =================================================
              06 — TECHNICAL IMPLEMENTATION
          ================================================= */}

          <CaseSection
            number="06"
            title="Extend Rise With Custom Development"
          >
            <Paragraph
              style={{
                ...bodyTextStyle,
                maxWidth: 860,
              }}
            >
              I used native Rise 360 components when they
              supported the learning task and custom HTML, CSS,
              and JavaScript when learners needed more dynamic
              experimentation and troubleshooting.
            </Paragraph>

            <Row gutter={[24, 24]}>
              <Col xs={24} md={12}>
                <TechnologyCard
                  label="Native Rise 360"
                  items={[
                    "Process interactions",
                    "Labeled graphics",
                    "Flashcards",
                    "Accordions",
                    "Knowledge checks",
                  ]}
                />
              </Col>

              <Col xs={24} md={12}>
                <TechnologyCard
                  label="Custom HTML / CSS / JavaScript"
                  items={[
                    "Dynamic API requests",
                    "Prediction interactions",
                    "Response simulation",
                    "Troubleshooting console",
                    "Retry-based diagnostic feedback",
                  ]}
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
                Design Principle
              </Text>

              <Paragraph
                style={{
                  margin: 0,
                  color: textColor,
                  fontSize: 16,
                  lineHeight: 1.7,
                }}
              >
                Technology follows the learning problem:
                standard authoring components support
                instruction, while custom development is used
                where learners need to manipulate information,
                make predictions, and troubleshoot.
              </Paragraph>
            </Card>
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
                onClick={openCourse}
              >
                Experience the Course
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
        marginTop: 58,
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
   LARGE SCREENSHOT
========================================================= */

function LargeScreenshotFrame({
  image,
  alt,
}) {
  return (
    <div
      style={{
        width: "100%",
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
   INTERACTION CARD
========================================================= */

function InteractionCard({
  number,
  title,
  subtitle,
  image,
  alt,
}) {
  return (
    <Card
      style={{
        width: "100%",
        height: "100%",
        border: "none",
        background: lightBlue,
        overflow: "hidden",
      }}
      styles={{
        body: {
          padding: 0,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <div
        style={{
          padding: "16px 16px 14px",
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

        <Text
          type="secondary"
          style={{
            lineHeight: 1.5,
          }}
        >
          {subtitle}
        </Text>
      </div>

      <div
        style={{
          background: "#ffffff",
          padding: 8,
          flex: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={image}
          alt={alt}
          style={{
            width: "100%",
            height: "auto",
            maxHeight: 245,
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>
    </Card>
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
        marginTop: 22,
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

/* =========================================================
   TECHNOLOGY CARD
========================================================= */

function TechnologyCard({
  label,
  items,
}) {
  return (
    <Card
      style={{
        height: "100%",
        border: "none",
        background: lightBlue,
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
          marginBottom: 14,
        }}
      >
        {label}
      </Text>

      <Space
        direction="vertical"
        size={10}
        style={{
          width: "100%",
        }}
      >
        {items.map((item) => (
          <div
            key={item}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 8,
            }}
          >
            <Text
              style={{
                color: mediumBlue,
                fontWeight: 700,
              }}
            >
              ✓
            </Text>

            <Text
              style={{
                color: textColor,
                lineHeight: 1.6,
              }}
            >
              {item}
            </Text>
          </div>
        ))}
      </Space>
    </Card>
  );
}