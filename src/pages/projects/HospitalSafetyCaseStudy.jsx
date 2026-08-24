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
  Divider,
  Image,
  Row,
  Space,
  Tag,
  Typography,
} from "antd";

import { Link } from "react-router-dom";

import overviewImage from "../../assets/hospital-safety-case-study/01-ppe-training-overview.png";
import foundationsImage from "../../assets/hospital-safety-case-study/02-ppe-foundations.png";

import respiratorStep1 from "../../assets/hospital-safety-case-study/03-respirator-step-1.png";
import respiratorStep2 from "../../assets/hospital-safety-case-study/04-respirator-step-2.png";
import respiratorStep3 from "../../assets/hospital-safety-case-study/05-respirator-step-3.png";
import respiratorStep4 from "../../assets/hospital-safety-case-study/06-respirator-step-4.png";
import respiratorStep5 from "../../assets/hospital-safety-case-study/07-respirator-step-5.png";

import videoImage from "../../assets/hospital-safety-case-study/08-video-demonstration.png";
import assessmentImage from "../../assets/hospital-safety-case-study/09-summative-assessment.png";

const { Title, Paragraph, Text } = Typography;

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

const pageStyle = {
  maxWidth: 1180,
  margin: "0 auto",
  padding: "48px 24px 80px",
};

const sectionStyle = {
  marginTop: 72,
};

const imageStyle = {
  width: "100%",
  borderRadius: 12,
  display: "block",
};

const bodyTextStyle = {
  fontSize: 17,
  lineHeight: 1.75,
};

export default function HospitalSafetyCaseStudy() {
  return (
    <main style={pageStyle}>
      {/* BACK NAVIGATION */}

      <Link to="/">
        <Button
          type="text"
          icon={<ArrowLeftOutlined />}
          style={{
            paddingLeft: 0,
            marginBottom: 32,
          }}
        >
          Back to Projects
        </Button>
      </Link>

      {/* HERO */}

      <section>
        <Text
          type="secondary"
          style={{
            fontSize: 13,
            letterSpacing: 1.5,
            textTransform: "uppercase",
          }}
        >
          Instructional Design Case Study
        </Text>

        <Title
          level={1}
          style={{
            marginTop: 10,
            marginBottom: 16,
            fontSize: "clamp(38px, 6vw, 64px)",
            lineHeight: 1.05,
          }}
        >
          Hospital Safety Training
        </Title>

        <Paragraph
          style={{
            maxWidth: 760,
            fontSize: 20,
            lineHeight: 1.65,
          }}
        >
          A structured procedural learning experience that teaches healthcare
          workers how to correctly don personal protective equipment through
          visual instruction, demonstration, and summative assessment.
        </Paragraph>

        <Space wrap size={[8, 8]} style={{ marginTop: 8 }}>
          <Tag>Adobe Captivate</Tag>
          <Tag>Instructional Design</Tag>
          <Tag>Procedural Learning</Tag>
          <Tag>Video-Based Learning</Tag>
          <Tag>Assessment Design</Tag>
        </Space>

        <div style={{ marginTop: 28 }}>
          <Button
            type="primary"
            size="large"
            href={projectUrl}
            target="_blank"
            rel="noreferrer"
            icon={<PlayCircleOutlined />}
          >
            Experience the Project
          </Button>
        </div>
      </section>

      {/* PROJECT OVERVIEW */}

      <section style={sectionStyle}>
        <Row gutter={[48, 32]} align="middle">
          <Col xs={24} md={11}>
            <Image
              src={overviewImage}
              alt="Hospital Safety Training introduction screen"
              preview={false}
              style={imageStyle}
            />
          </Col>

          <Col xs={24} md={13}>
            <Title level={3} style={{ marginTop: 0 }}>
              Project Overview
            </Title>

            <Paragraph
              style={{
                ...bodyTextStyle,
                marginBottom: 28,
              }}
            >
              A procedural learning experience designed to help healthcare
              workers build foundational knowledge of personal protective
              equipment and understand the correct sequence for donning PPE.
            </Paragraph>

            <div style={{ marginBottom: 22 }}>
              <Text strong>Audience</Text>

              <Paragraph
                type="secondary"
                style={{
                  marginTop: 5,
                  marginBottom: 0,
                }}
              >
                Healthcare workers who need foundational instruction on
                correctly putting on PPE.
              </Paragraph>
            </div>

            <div>
              <Text strong>Learning Goal</Text>

              <Paragraph
                type="secondary"
                style={{
                  marginTop: 5,
                  marginBottom: 0,
                }}
              >
                Help learners recognize common PPE and understand the correct
                sequence for donning protective equipment.
              </Paragraph>
            </div>
          </Col>
        </Row>
      </section>

      <Divider style={{ margin: "72px 0 0" }} />

      {/* 01 — DESIGN CHALLENGE */}

      <section style={sectionStyle}>
        <Text
          type="secondary"
          style={{
            letterSpacing: 1.5,
            fontSize: 13,
          }}
        >
          01
        </Text>

        <Title level={2}>The Design Challenge</Title>

        <Paragraph
          style={{
            maxWidth: 800,
            ...bodyTextStyle,
          }}
        >
          PPE procedures require learners to do more than recognize equipment.
          They need to understand a specific sequence of actions and
          distinguish correct procedures from potentially unsafe ones.
        </Paragraph>

        <Paragraph
          style={{
            maxWidth: 800,
            ...bodyTextStyle,
          }}
        >
          I designed the module around a simple learning progression:
          establish foundational knowledge, model the procedure visually,
          reinforce it through demonstration, and evaluate whether learners
          can recognize the correct process independently.
        </Paragraph>

        <Card
          style={{
            marginTop: 32,
            maxWidth: 900,
          }}
        >
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={8}>
              <Text strong>Learn</Text>
              <br />
              <Text type="secondary">Build foundational knowledge</Text>
            </Col>

            <Col xs={24} sm={8}>
              <Text strong>Observe</Text>
              <br />
              <Text type="secondary">See the procedure modeled</Text>
            </Col>

            <Col xs={24} sm={8}>
              <Text strong>Evaluate</Text>
              <br />
              <Text type="secondary">Demonstrate understanding</Text>
            </Col>
          </Row>
        </Card>
      </section>

      {/* 02 — FOUNDATIONAL KNOWLEDGE */}

      <section style={sectionStyle}>
        <Text
          type="secondary"
          style={{
            letterSpacing: 1.5,
            fontSize: 13,
          }}
        >
          02
        </Text>

        <Title level={2}>Building Foundational Knowledge</Title>

        <Row gutter={[48, 32]} align="middle" style={{ marginTop: 28 }}>
          <Col xs={24} md={11}>
            <Image
              src={foundationsImage}
              alt="PPE foundations screen showing common protective equipment"
              preview={false}
              style={imageStyle}
            />
          </Col>

          <Col xs={24} md={13}>
            <Paragraph style={bodyTextStyle}>
              Before introducing the procedure itself, I established the
              essential vocabulary and purpose of PPE. Learners first identify
              common protective equipment such as gowns, respirators, goggles,
              and gloves.
            </Paragraph>

            <Paragraph
              style={{
                ...bodyTextStyle,
                marginBottom: 0,
              }}
            >
              This creates a shared foundation before learners move into the
              more complex task of procedural sequencing.
            </Paragraph>
          </Col>
        </Row>
      </section>

      {/* 03 — PROCEDURAL INSTRUCTION */}

      <section style={sectionStyle}>
        <Text
          type="secondary"
          style={{
            letterSpacing: 1.5,
            fontSize: 13,
          }}
        >
          03
        </Text>

        <Title level={2}>
          Breaking the Procedure into Observable Steps
        </Title>

        <Paragraph
          style={{
            maxWidth: 820,
            ...bodyTextStyle,
          }}
        >
          To reduce cognitive load, I broke the respirator procedure into a
          sequence of focused visual steps. Each screen pairs a specific action
          with a supporting image so learners can connect the written
          instruction with the physical procedure.
        </Paragraph>

        <Paragraph
          style={{
            maxWidth: 820,
            ...bodyTextStyle,
          }}
        >
          Presenting the process incrementally helps learners focus on one
          action at a time while still building a mental model of the complete
          sequence.
        </Paragraph>

        <Row gutter={[16, 24]} style={{ marginTop: 36 }}>
          {respiratorSteps.map((step) => (
            <Col
              key={step.label}
              xs={24}
              sm={12}
              md={8}
              lg={4}
              flex="1"
            >
              <Image
                src={step.image}
                alt={`Respirator procedure step ${step.label}: ${step.title}`}
                preview={false}
                style={{
                  width: "100%",
                  borderRadius: 10,
                  display: "block",
                }}
              />

              <div style={{ marginTop: 12 }}>
                <Text
                  type="secondary"
                  style={{
                    fontSize: 12,
                    letterSpacing: 1,
                  }}
                >
                  STEP {step.label}
                </Text>

                <div>
                  <Text strong>{step.title}</Text>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </section>

      {/* 04 — VIDEO DEMONSTRATION */}

      <section style={sectionStyle}>
        <Text
          type="secondary"
          style={{
            letterSpacing: 1.5,
            fontSize: 13,
          }}
        >
          04
        </Text>

        <Title level={2}>From Visual Steps to Demonstration</Title>

        <Row gutter={[48, 32]} align="middle" style={{ marginTop: 28 }}>
          <Col xs={24} md={11}>
            <Image
              src={videoImage}
              alt="Transition to PPE video demonstration"
              preview={false}
              style={imageStyle}
            />
          </Col>

          <Col xs={24} md={13}>
            <Paragraph style={bodyTextStyle}>
              After learners review the individual steps, the module
              transitions to video demonstration. This allows learners to see
              the procedure performed continuously rather than only as isolated
              steps.
            </Paragraph>

            <Paragraph style={bodyTextStyle}>
              The progression from explanation to visual sequencing to
              demonstration provides multiple representations of the same
              procedure before learners are assessed.
            </Paragraph>

            <Space direction="vertical" size={12}>
              <Text>
                <CheckCircleOutlined /> Written procedural guidance
              </Text>

              <Text>
                <CheckCircleOutlined /> Step-by-step visual modeling
              </Text>

              <Text>
                <CheckCircleOutlined /> Video demonstration
              </Text>
            </Space>
          </Col>
        </Row>
      </section>

      {/* 05 — SUMMATIVE ASSESSMENT */}

      <section style={sectionStyle}>
        <Text
          type="secondary"
          style={{
            letterSpacing: 1.5,
            fontSize: 13,
          }}
        >
          05
        </Text>

        <Title level={2}>Assessing Independent Understanding</Title>

        <Row gutter={[48, 32]} align="middle" style={{ marginTop: 28 }}>
          <Col xs={24} md={11}>
            <Image
              src={assessmentImage}
              alt="Summative PPE assessment question"
              preview={false}
              style={imageStyle}
            />
          </Col>

          <Col xs={24} md={13}>
            <Paragraph style={bodyTextStyle}>
              The module concludes with a six-question summative assessment
              focused on the procedures learners have just studied and
              observed.
            </Paragraph>

            <Paragraph style={bodyTextStyle}>
              Unlike the guided instruction earlier in the module, the
              assessment is intentionally evaluative. Learners submit their
              responses without repeated attempts, allowing the assessment to
              measure what they can identify independently after instruction.
            </Paragraph>

            <Card
              size="small"
              style={{
                marginTop: 24,
              }}
            >
              <Space align="start">
                <SafetyCertificateOutlined />

                <Text strong>
                  Instruction and evaluation serve different purposes.
                </Text>
              </Space>
            </Card>
          </Col>
        </Row>
      </section>

      {/* 06 — DEVELOPMENT */}

      <section style={sectionStyle}>
        <Text
          type="secondary"
          style={{
            letterSpacing: 1.5,
            fontSize: 13,
          }}
        >
          06
        </Text>

        <Title level={2}>Development in Adobe Captivate</Title>

        <Paragraph
          style={{
            maxWidth: 820,
            ...bodyTextStyle,
          }}
        >
          I developed the experience in Adobe Captivate, combining
          instructional screens, procedural visuals, video, navigation, and
          quiz interactions into a consistent learning flow.
        </Paragraph>

        <Paragraph
          style={{
            maxWidth: 820,
            ...bodyTextStyle,
          }}
        >
          The visual design intentionally remains restrained so that the
          procedure stays central. Consistent layouts, typography, navigation,
          and visual hierarchy help learners move through the module without
          unnecessary interface complexity.
        </Paragraph>
      </section>

      {/* DESIGN TAKEAWAY */}

      <section style={sectionStyle}>
        <Card
          style={{
            padding: "12px 8px",
          }}
        >
          <Text
            type="secondary"
            style={{
              fontSize: 13,
              letterSpacing: 1.5,
            }}
          >
            DESIGN TAKEAWAY
          </Text>

          <Title level={3} style={{ marginTop: 12 }}>
            Matching the learning strategy to the task
          </Title>

          <Paragraph
            style={{
              maxWidth: 820,
              ...bodyTextStyle,
              marginBottom: 0,
            }}
          >
            This project demonstrates a more structured instructional approach
            than my scenario-based work. Because PPE donning is a procedural
            task with an established sequence, I prioritized clear explanation,
            visual modeling, demonstration, and independent assessment rather
            than branching decision-making.
          </Paragraph>
        </Card>
      </section>

      {/* CTA */}

      <section
        style={{
          marginTop: 72,
          textAlign: "center",
        }}
      >
        <Title level={2}>Explore the Learning Experience</Title>

        <Paragraph
          type="secondary"
          style={{
            maxWidth: 620,
            margin: "0 auto 24px",
            fontSize: 16,
          }}
        >
          View the complete Adobe Captivate module to experience the
          instructional sequence and assessment.
        </Paragraph>

        <Button
          type="primary"
          size="large"
          href={projectUrl}
          target="_blank"
          rel="noreferrer"
        >
          Experience the Project <ArrowRightOutlined />
        </Button>
      </section>
    </main>
  );
}