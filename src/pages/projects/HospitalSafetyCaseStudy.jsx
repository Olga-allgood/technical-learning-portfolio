// src/pages/projects/HospitalSafetyCaseStudy.jsx

import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  PlayCircleOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

import {
  Button,
  Card,
  Col,
  Image,
  Row,
  Space,
  Tag,
  Typography,
} from "antd";

import { Link } from "react-router-dom";

import foundationsImage from "../../assets/hospital-safety-case-study/02-ppe-foundations.png";

import respiratorStep1 from "../../assets/hospital-safety-case-study/03-respirator-step-1.png";
import respiratorStep2 from "../../assets/hospital-safety-case-study/04-respirator-step-2.png";
import respiratorStep3 from "../../assets/hospital-safety-case-study/05-respirator-step-3.png";
import respiratorStep4 from "../../assets/hospital-safety-case-study/06-respirator-step-4.png";
import respiratorStep5 from "../../assets/hospital-safety-case-study/07-respirator-step-5.png";

import videoImage from "../../assets/hospital-safety-case-study/08-video-demonstration.png";
import assessmentImage from "../../assets/hospital-safety-case-study/09-summative-assessment.png";

const {
  Title,
  Paragraph,
  Text,
} = Typography;

/* =========================================================
   COLORS
========================================================= */

const blue = "#173B63";
const mediumBlue = "#4E79A7";
const lightBlue = "#F4F8FC";
const textColor = "#4b5563";

/* =========================================================
   PROJECT DATA
========================================================= */

const projectUrl =
  "https://storage.googleapis.com/olgaorlovainstructionaldesign/Hospital%20Safety%20Training%20May.cpt/Hospital%20Safety%20Training%20May.cpt/index.html";

const respiratorSteps = [
  {
    image: respiratorStep1,
    label: "01",
    title: "Position",
  },
  {
    image: respiratorStep2,
    label: "02",
    title: "Secure",
  },
  {
    image: respiratorStep3,
    label: "03",
    title: "Adjust",
  },
  {
    image: respiratorStep4,
    label: "04",
    title: "Shape",
  },
  {
    image: respiratorStep5,
    label: "05",
    title: "Seal Check",
  },
];

/* =========================================================
   SHARED STYLES
========================================================= */

const pageStyle = {
  maxWidth: 1100,
  margin: "0 auto",
  padding: "48px 24px 80px",
};

const sectionStyle = {
  marginTop: 58,
};

const imageStyle = {
  width: "100%",
  borderRadius: 12,
  display: "block",
};

const bodyTextStyle = {
  fontSize: 17,
  lineHeight: 1.75,
  color: textColor,
};

/* =========================================================
   COMPONENT
========================================================= */

export default function HospitalSafetyCaseStudy() {
  return (
    <main style={pageStyle}>
      {/* =====================================================
          BACK
      ===================================================== */}

      <Link to="/">
        <Button
          type="text"
          icon={
            <ArrowLeftOutlined />
          }
          style={{
            paddingLeft: 0,
            marginBottom: 28,
          }}
        >
          Back to Portfolio
        </Button>
      </Link>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section>
        <Text
          strong
          style={{
            display: "block",

            color:
              mediumBlue,

            fontSize: 13,

            textTransform:
              "uppercase",

            letterSpacing:
              "0.8px",

            marginBottom: 7,
          }}
        >
          Procedural Learning & Assessment Case Study
        </Text>

        <Title
          level={1}
          style={{
            color: blue,

            marginTop: 0,
            marginBottom: 14,

            fontSize:
              "clamp(36px, 6vw, 52px)",

            lineHeight: 1.08,
          }}
        >
          Hospital Safety Training
        </Title>

        <Paragraph
          style={{
            maxWidth: 820,

            fontSize: 20,

            lineHeight: 1.65,

            color:
              textColor,

            marginBottom: 24,
          }}
        >
          An Adobe Captivate module that teaches PPE
          donning through structured instruction,
          visual sequencing, video demonstration, and
          summative assessment.
        </Paragraph>

        <Card
          style={{
            maxWidth: 940,

            border: "none",

            background:
              lightBlue,

            marginBottom: 24,
          }}
        >
          <Row gutter={[24, 18]}>
            <Col
              xs={24}
              md={8}
            >
              <MetaItem
                label="Audience"
                value="Healthcare workers"
              />
            </Col>

            <Col
              xs={24}
              md={8}
            >
              <MetaItem
                label="Technology"
                value="Adobe Captivate"
              />
            </Col>

            <Col
              xs={24}
              md={8}
            >
              <MetaItem
                label="Learning Strategy"
                value="Procedural Learning · Multimedia · Assessment"
              />
            </Col>
          </Row>
        </Card>

        <Button
          type="primary"
          size="large"
          href={projectUrl}
          target="_blank"
          rel="noreferrer"
          icon={
            <PlayCircleOutlined />
          }
        >
          Experience the Project
        </Button>
      </section>

      {/* =====================================================
          01 — LEARNING STRATEGY
      ===================================================== */}

      <CaseSection
        number="01"
        title="Learning Strategy"
      >
        <Row
          gutter={[44, 30]}
          align="middle"
        >
          <Col
            xs={24}
            md={11}
          >
            <Image
              src={
                foundationsImage
              }
              alt="PPE foundations screen showing common protective equipment"
              preview={false}
              style={imageStyle}
            />
          </Col>

          <Col
            xs={24}
            md={13}
          >
            <Paragraph
              style={
                bodyTextStyle
              }
            >
              PPE donning is a procedural task with a
              defined sequence. I structured the
              experience so learners first build
              foundational knowledge, then study the
              procedure visually, observe it in
              motion, and finally demonstrate
              understanding through assessment.
            </Paragraph>

            <FlowCard>
              <FlowStep>
                Foundation
              </FlowStep>

              <ArrowRightOutlined />

              <FlowStep>
                Visual Steps
              </FlowStep>

              <ArrowRightOutlined />

              <FlowStep>
                Demonstration
              </FlowStep>

              <ArrowRightOutlined />

              <FlowStep>
                Assessment
              </FlowStep>
            </FlowCard>
          </Col>
        </Row>
      </CaseSection>

      {/* =====================================================
          02 — PROCEDURAL SEQUENCING
      ===================================================== */}

      <CaseSection
        number="02"
        title="Procedural Sequencing"
      >
        <Paragraph
          style={{
            ...bodyTextStyle,

            maxWidth: 840,
          }}
        >
          I broke the respirator procedure into focused
          visual steps so learners can connect each written
          instruction to an observable physical action before
          seeing the complete procedure performed.
        </Paragraph>

        <Row
          gutter={[16, 24]}
          style={{
            marginTop: 32,
          }}
        >
          {respiratorSteps.map(
            (step) => (
              <Col
                key={
                  step.label
                }
                xs={24}
                sm={12}
                md={8}
                lg={4}
                flex="1"
              >
                <Image
                  src={
                    step.image
                  }
                  alt={`Respirator procedure step ${step.label}: ${step.title}`}
                  preview={
                    false
                  }
                  style={{
                    width:
                      "100%",

                    borderRadius:
                      10,

                    display:
                      "block",
                  }}
                />

                <div
                  style={{
                    marginTop:
                      10,
                  }}
                >
                  <Text
                    type="secondary"
                    style={{
                      fontSize:
                        12,

                      letterSpacing:
                        1,
                    }}
                  >
                    STEP{" "}
                    {
                      step.label
                    }
                  </Text>

                  <div>
                    <Text strong>
                      {
                        step.title
                      }
                    </Text>
                  </div>
                </div>
              </Col>
            )
          )}
        </Row>
      </CaseSection>

      {/* =====================================================
          03 — MULTIMEDIA DEMONSTRATION
      ===================================================== */}

      <CaseSection
        number="03"
        title="Multimedia Demonstration"
      >
        <Row
          gutter={[44, 30]}
          align="middle"
        >
          <Col
            xs={24}
            md={11}
          >
            <Image
              src={
                videoImage
              }
              alt="PPE video demonstration"
              preview={false}
              style={imageStyle}
            />
          </Col>

          <Col
            xs={24}
            md={13}
          >
            <Paragraph
              style={
                bodyTextStyle
              }
            >
              After reviewing the individual steps,
              learners watch the procedure performed
              continuously. The video connects the
              segmented instruction to the complete
              physical sequence before assessment.
            </Paragraph>

            <Space
              direction="vertical"
              size={10}
            >
              <Text>
                <CheckCircleOutlined />{" "}
                Written guidance
              </Text>

              <Text>
                <CheckCircleOutlined />{" "}
                Step-by-step visual modeling
              </Text>

              <Text>
                <CheckCircleOutlined />{" "}
                Continuous video demonstration
              </Text>
            </Space>
          </Col>
        </Row>
      </CaseSection>

      {/* =====================================================
          04 — SUMMATIVE ASSESSMENT
      ===================================================== */}

      <CaseSection
        number="04"
        title="Summative Assessment"
      >
        <Row
          gutter={[44, 30]}
          align="middle"
        >
          <Col
            xs={24}
            md={11}
          >
            <Image
              src={
                assessmentImage
              }
              alt="Summative PPE assessment question"
              preview={false}
              style={imageStyle}
            />
          </Col>

          <Col
            xs={24}
            md={13}
          >
            <Paragraph
              style={
                bodyTextStyle
              }
            >
              The module concludes with a six-question
              assessment focused on the PPE procedures
              learners studied and observed.
            </Paragraph>

            <Paragraph
              style={{
                ...bodyTextStyle,

                marginBottom:
                  0,
              }}
            >
              The assessment is intentionally
              evaluative: learners submit responses
              without repeated attempts, separating
              instruction from performance
              verification.
            </Paragraph>

            <Card
              style={{
                border:
                  "none",

                background:
                  lightBlue,

                marginTop: 22,
              }}
            >
              <Space
                align="start"
              >
                <SafetyCertificateOutlined
                  style={{
                    color:
                      mediumBlue,

                    marginTop: 4,
                  }}
                />

                <Text
                  strong
                  style={{
                    color:
                      blue,
                  }}
                >
                  Teach the procedure first; evaluate
                  independent understanding afterward.
                </Text>
              </Space>
            </Card>
          </Col>
        </Row>
      </CaseSection>

      {/* =====================================================
          05 — CAPTIVATE DEVELOPMENT
      ===================================================== */}

      <CaseSection
        number="05"
        title="Adobe Captivate Development"
      >
        <Paragraph
          style={{
            ...bodyTextStyle,

            maxWidth: 850,
          }}
        >
          I developed the module in Adobe Captivate,
          combining instructional screens, visual
          sequencing, video, navigation, and scored quiz
          interactions into a consistent learning flow.
        </Paragraph>

        <Space
          wrap
          size={[8, 8]}
          style={{
            marginTop: 4,
          }}
        >
          {[
            "Adobe Captivate",
            "Procedural Learning",
            "Multimedia",
            "Quiz Design",
            "Navigation",
            "Assessment",
          ].map(
            (item) => (
              <Tag
                key={item}
                style={{
                  border:
                    "none",

                  background:
                    "#EDF4FA",

                  color:
                    "#164A7B",

                  padding:
                    "5px 10px",
                }}
              >
                {item}
              </Tag>
            )
          )}
        </Space>
      </CaseSection>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section
        style={{
          marginTop: 58,

          paddingTop: 28,

          borderTop:
            "1px solid #e5e7eb",
        }}
      >
        <Space wrap>
          <Button
            type="primary"
            size="large"
            href={projectUrl}
            target="_blank"
            rel="noreferrer"
            icon={
              <PlayCircleOutlined />
            }
          >
            Experience the Project
          </Button>

          <Link to="/">
            <Button
              size="large"
              icon={
                <ArrowLeftOutlined />
              }
            >
              Back to Portfolio
            </Button>
          </Link>
        </Space>
      </section>
    </main>
  );
}

/* =========================================================
   META
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
          display:
            "block",

          color:
            mediumBlue,

          fontSize: 12,

          textTransform:
            "uppercase",

          letterSpacing:
            "0.6px",

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
      style={
        sectionStyle
      }
    >
      <Text
        strong
        style={{
          display:
            "block",

          color:
            mediumBlue,

          fontSize: 12,

          letterSpacing:
            "0.8px",

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
   FLOW CARD
========================================================= */

function FlowCard({
  children,
}) {
  return (
    <Card
      style={{
        border:
          "none",

        background:
          lightBlue,

        marginTop: 18,
      }}
      styles={{
        body: {
          padding: 16,
        },
      }}
    >
      <div
        style={{
          display: "flex",

          alignItems:
            "center",

          flexWrap:
            "wrap",

          gap: 10,

          color: blue,
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

        fontSize: 14,
      }}
    >
      {children}
    </Text>
  );
}