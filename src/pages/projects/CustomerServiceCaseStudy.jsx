// src/pages/projects/CustomerServiceCaseStudy.jsx

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

import actionMapping from "../../assets/customer-service-case-study/01-action-mapping.png";
import scenarioDecision from "../../assets/customer-service-case-study/02-scenario-decision.png";
import branchingScenario from "../../assets/customer-service-case-study/03-branching-scenario-design.png";
import coachingFeedback from "../../assets/customer-service-case-study/04-coaching-feedback.png";
import decisionConsequence from "../../assets/customer-service-case-study/05-decision-consequence.png";

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

const STANDARD_IMAGE_HEIGHT = 300;

/* =========================================================
   COMPONENT
========================================================= */

export default function CustomerServiceCaseStudy() {
  const navigate = useNavigate();

  const screens =
    Grid.useBreakpoint();

  const isMobile =
    !screens.md;

  const openProject = () => {
    window.open(
      "https://storage.googleapis.com/olgaorlovainstructionaldesign/UPDATED%20Coffee%20shop%20-%20Storyline%20output/story.html",
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
              textTransform: "uppercase",
              letterSpacing: "0.8px",
              marginBottom: 7,
            }}
          >
            Scenario-Based eLearning Case Study
          </Text>

          <Title
            level={1}
            style={{
              color: blue,

              fontSize: isMobile
                ? 34
                : 48,

              lineHeight: 1.08,

              marginTop: 0,
              marginBottom: 12,
            }}
          >
            Customer Service Training Module
          </Title>

          <Paragraph
            style={{
              maxWidth: 900,

              fontSize: isMobile
                ? 17
                : 20,

              lineHeight: 1.65,

              color: textColor,

              marginBottom: 24,
            }}
          >
            A scenario-based eLearning experience that
            gives new employees a safe environment to
            practice difficult customer interactions,
            make decisions, and experience the
            consequences of their choices.
          </Paragraph>

          {/* QUICK SUMMARY */}

          <Card
            style={{
              maxWidth: 960,

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
                  value="New coffee shop employees"
                />
              </Col>

              <Col
                xs={24}
                md={8}
              >
                <MetaItem
                  label="Tool"
                  value="Articulate Storyline"
                />
              </Col>

              <Col
                xs={24}
                md={8}
              >
                <MetaItem
                  label="Focus"
                  value="Scenario-Based Learning · Action Mapping · Branching · Feedback Design"
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
              01 — PERFORMANCE CHALLENGE
          ================================================= */}

          <CaseSection
            number="01"
            title="The Performance Challenge"
          >
            <Paragraph
              style={bodyTextStyle}
            >
              Newly hired coffee shop employees need
              to respond effectively when customers
              are frustrated, disappointed, or unsure
              what to do next.
            </Paragraph>

            <Paragraph
              style={{
                ...bodyTextStyle,
                marginBottom: 0,
              }}
            >
              Working with a subject matter expert, I
              identified that successful customer
              interactions depend less on recalling
              service rules and more on recognizing
              customer emotions and choosing effective
              actions in the moment.
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
                Move from knowing customer-service
                principles to making effective
                decisions in realistic situations.
              </Title>
            </Card>
          </CaseSection>

          {/* =================================================
              02 — ACTION MAPPING
          ================================================= */}

          <CaseSection
            number="02"
            title="From Performance Goals to Learner Actions"
          >
            <Row
              gutter={[36, 28]}
              align="middle"
            >
              <Col
                xs={24}
                md={11}
              >
                <ScreenshotFrame
                  image={actionMapping}
                  alt="Action mapping showing customer service behaviors, scenarios, and recommended responses"
                  isMobile={isMobile}
                />
              </Col>

              <Col
                xs={24}
                md={13}
              >
                <Paragraph
                  style={bodyTextStyle}
                >
                  I worked with a coffee shop SME to
                  identify behaviors that would have
                  the greatest impact on customer
                  experience.
                </Paragraph>

                <Paragraph
                  style={bodyTextStyle}
                >
                  Rather than organizing the course
                  around information employees should
                  remember, I focused the design on
                  actions they need to perform.
                </Paragraph>

                <Space
                  wrap
                  size={[8, 8]}
                  style={{
                    marginTop: 4,
                  }}
                >
                  {[
                    "Take ownership",
                    "Recognize emotions",
                    "Find solutions",
                    "Handle difficult situations",
                  ].map(
                    (item) => (
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
                    )
                  )}
                </Space>
              </Col>
            </Row>

            <FlowCard>
              <FlowStep>
                Business Goal
              </FlowStep>

              <ArrowRightOutlined />

              <FlowStep>
                Critical Behaviors
              </FlowStep>

              <ArrowRightOutlined />

              <FlowStep>
                Scenario Decisions
              </FlowStep>

              <ArrowRightOutlined />

              <FlowStep>
                Customer Outcomes
              </FlowStep>
            </FlowCard>
          </CaseSection>

          {/* =================================================
              03 — SCENARIO PRACTICE
          ================================================= */}

          <CaseSection
            number="03"
            title="Scenario-Based Practice"
          >
            <Row
              gutter={[36, 28]}
              align="middle"
            >
              <Col
                xs={24}
                md={11}
              >
                <ScreenshotFrame
                  image={scenarioDecision}
                  alt="Customer service scenario asking the learner to choose how to respond"
                  isMobile={isMobile}
                />
              </Col>

              <Col
                xs={24}
                md={13}
              >
                <Paragraph
                  style={bodyTextStyle}
                >
                  I translated the priority behaviors
                  into realistic customer interactions
                  where learners must assess the
                  situation and choose how to respond.
                </Paragraph>

                <Paragraph
                  style={bodyTextStyle}
                >
                  Effective options represent the
                  workplace behaviors identified
                  during action mapping, while
                  distractors reflect realistic
                  mistakes an employee might make.
                </Paragraph>

                <Card
                  style={{
                    border: "none",
                    background: lightBlue,
                  }}
                >
                  <Text
                    strong
                    style={{
                      color: blue,
                      fontSize: 16,
                    }}
                  >
                    Situation → Decision → Consequence
                    → Feedback → Retry
                  </Text>
                </Card>
              </Col>
            </Row>
          </CaseSection>

          {/* =================================================
              04 — DECISIONS, CONSEQUENCES & COACHING
          ================================================= */}

          <CaseSection
            number="04"
            title="Decisions, Consequences & Coaching"
          >
            <Paragraph
              style={bodyTextStyle}
            >
              Learner choices lead to different
              outcomes. Effective decisions move the
              interaction forward, while ineffective
              choices reveal realistic customer
              reactions and provide an opportunity to
              reconsider the response.
            </Paragraph>

            {/* BRANCHING DESIGN */}

            <LargeScreenshotFrame
              image={branchingScenario}
              alt="Branching scenario diagram showing different learner choices and customer outcomes"
              maxWidth={980}
            />

            {/* COACHING FEEDBACK */}

            <div
              style={{
                marginTop: 30,
              }}
            >
              <MiniVisualCard
                title="Coaching Feedback"
                image={coachingFeedback}
                alt="Manager coaching learner after an ineffective customer service response"
                text="Jenny, the manager, explains the underlying service principle and encourages the learner to try again."
                maxWidth={760}
              />
            </div>

            {/* DECISION TO CONSEQUENCE */}

            <div
              style={{
                marginTop: 30,
              }}
            >
              <WideVisualCard
                title="Decision to Consequence"
                image={decisionConsequence}
                alt="Scenario sequence showing learner decision followed by customer consequence"
                text="Character reactions make the impact of learner choices visible rather than relying only on correct or incorrect messages."
              />
            </div>

            <FlowCard>
              <FlowStep>
                Learner Choice
              </FlowStep>

              <ArrowRightOutlined />

              <FlowStep>
                Customer Reaction
              </FlowStep>

              <ArrowRightOutlined />

              <FlowStep>
                Manager Coaching
              </FlowStep>

              <ArrowRightOutlined />

              <FlowStep>
                Retry
              </FlowStep>
            </FlowCard>
          </CaseSection>

          {/* =================================================
              05 — PROTOTYPE + DEVELOPMENT
          ================================================= */}

          <CaseSection
            number="05"
            title="Prototype, Development & Iteration"
          >
            <Paragraph
              style={bodyTextStyle}
            >
              I translated the scenarios into
              storyboards documenting dialogue,
              learner choices, consequences, feedback,
              and interaction behavior before full
              development.
            </Paragraph>

            <Paragraph
              style={bodyTextStyle}
            >
              I then developed the experience in
              Articulate Storyline using reusable
              layouts, states, layers, triggers, and
              variables to support consistent
              branching interactions and navigation.
            </Paragraph>

            <Space
              wrap
              size={[8, 8]}
              style={{
                marginTop: 4,
                marginBottom: 22,
              }}
            >
              {[
                "Articulate Storyline",
                "Action Mapping",
                "Branching",
                "States",
                "Layers",
                "Triggers",
                "Variables",
                "User Testing",
              ].map(
                (item) => (
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
                )
              )}
            </Space>

            <Card
              style={{
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
                  marginBottom: 7,
                }}
              >
                Iteration Through User Testing
              </Text>

              <Paragraph
                style={{
                  margin: 0,
                  color: textColor,
                  fontSize: 16,
                  lineHeight: 1.7,
                }}
              >
                User feedback informed several design
                decisions. I removed planned music and
                video elements when testing showed
                they distracted from the scenarios,
                and I added a progress indicator to
                give learners clearer orientation
                throughout the experience.
              </Paragraph>
            </Card>
          </CaseSection>

          {/* =================================================
              06 — TAKEAWAY
          ================================================= */}

          <CaseSection
            number="06"
            title="Design Takeaway"
          >
            <Paragraph
              style={bodyTextStyle}
            >
              The central lesson from this project was
              that effective scenario-based learning
              depends on meaningful decisions and
              believable consequences—not simply
              placing multiple-choice questions inside
              a story.
            </Paragraph>

            <Paragraph
              style={{
                ...bodyTextStyle,
                marginBottom: 0,
              }}
            >
              By connecting realistic workplace
              situations, behavior-based choices,
              emotional customer reactions, coaching,
              and opportunities to retry, I designed a
              learning experience that lets employees
              practice the impact of their decisions
              before encountering similar situations
              on the job.
            </Paragraph>
          </CaseSection>

          {/* =================================================
              CTA
          ================================================= */}

          <div
            style={{
              marginTop: 56,
              paddingTop: 28,
              borderTop:
                "1px solid #e5e7eb",
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
                onClick={() =>
                  navigate("/")
                }
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
   STANDARD SCREENSHOT
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

        margin:
          "28px auto 0",

        padding: 10,

        background:
          "#EEF4F9",

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
   MINI VISUAL CARD
========================================================= */

function MiniVisualCard({
  title,
  image,
  alt,
  text,
  maxWidth = "100%",
}) {
  return (
    <Card
      style={{
        width: "100%",
        maxWidth,
        margin: "0 auto",

        border: "none",

        background:
          lightBlue,

        overflow:
          "hidden",
      }}
      styles={{
        body: {
          padding: 0,
        },
      }}
    >
      <div
        style={{
          padding:
            "18px 18px 12px",
        }}
      >
        <Title
          level={4}
          style={{
            color: blue,
            margin: 0,
          }}
        >
          {title}
        </Title>
      </div>

      <div
        style={{
          background:
            "#ffffff",

          padding: 8,
        }}
      >
        <img
          src={image}
          alt={alt}
          style={{
            width: "100%",
            height: 260,

            objectFit:
              "contain",

            display:
              "block",
          }}
        />
      </div>

      <div
        style={{
          padding: 18,
        }}
      >
        <Paragraph
          style={{
            margin: 0,

            color:
              textColor,

            lineHeight: 1.7,
          }}
        >
          {text}
        </Paragraph>
      </div>
    </Card>
  );
}

/* =========================================================
   WIDE VISUAL CARD
========================================================= */

function WideVisualCard({
  title,
  image,
  alt,
  text,
}) {
  return (
    <Card
      style={{
        width: "100%",

        border: "none",

        background:
          lightBlue,

        overflow:
          "hidden",
      }}
      styles={{
        body: {
          padding: 0,
        },
      }}
    >
      <div
        style={{
          padding:
            "18px 18px 12px",
        }}
      >
        <Title
          level={4}
          style={{
            color: blue,
            margin: 0,
          }}
        >
          {title}
        </Title>
      </div>

      <div
        style={{
          width: "100%",

          background:
            "#ffffff",

          padding: 10,
        }}
      >
        <img
          src={image}
          alt={alt}
          style={{
            width: "100%",

            height: "auto",

            maxHeight: 420,

            objectFit:
              "contain",

            display:
              "block",

            margin:
              "0 auto",
          }}
        />
      </div>

      <div
        style={{
          padding: 18,
        }}
      >
        <Paragraph
          style={{
            margin: 0,

            color:
              textColor,

            lineHeight: 1.7,
          }}
        >
          {text}
        </Paragraph>
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

        background:
          lightBlue,

        marginTop: 24,
      }}
    >
      <div
        style={{
          display: "flex",

          alignItems:
            "center",

          justifyContent:
            "center",

          flexWrap:
            "wrap",

          gap: 12,

          color: blue,

          textAlign:
            "center",
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