// src/pages/projects/ExcelFormulaQuestCaseStudy.jsx

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
  PlayCircleOutlined,
} from "@ant-design/icons";

import { useNavigate } from "react-router-dom";
import { track } from "@vercel/analytics";

import PortfolioHeader from "../../components/PortfolioHeader";

import goalImage from "../../assets/excel-formula-quest/excel-formula-quest-goal-how-formulas-work.png";
import chooseFormulaImage from "../../assets/excel-formula-quest/excel-formula-quest-process-choose-formula.png";
import reactGameImage from "../../assets/excel-formula-quest/excel-formula-quest-process-react-game.png";
import resultImage from "../../assets/excel-formula-quest/excel-formula-quest-result-play-game.png";

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

export default function ExcelFormulaQuestCaseStudy() {
  const navigate = useNavigate();

  const screens = Grid.useBreakpoint();
  const isMobile = !screens.md;

  /* =========================================================
     PROJECT ANALYTICS
  ========================================================= */

  const openCourse = () => {
    track("Experience Project", {
      project: "Excel Formula Quest",
      experience: "Storyline Course",
    });

    window.open(
      "/excel-formula-quest/story.html",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const openGame = () => {
    track("Experience Project", {
      project: "Excel Formula Quest",
      experience: "React Game",
    });

    window.open(
      "https://excel-quest-formula-adventure.vercel.app/",
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
            Storyline + React Technical Learning Case Study
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
            Excel Formula Quest
          </Title>

          <Paragraph
            style={{
              maxWidth: 880,

              fontSize: isMobile
                ? 17
                : 20,

              lineHeight: 1.65,
              color: textColor,
              marginBottom: 24,
            }}
          >
            A technical microlearning experience that combines
            Articulate Storyline 360 with a custom React game to help
            beginning Excel learners move from understanding formula
            structure to applying SUM, AVERAGE, and IF in spreadsheet
            challenges.
          </Paragraph>

          {/* =================================================
              QUICK SUMMARY
          ================================================= */}

          <Card
            style={{
              maxWidth: 960,
              border: "none",
              background: lightBlue,
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
                  value="Beginning Excel learners"
                />
              </Col>

              <Col
                xs={24}
                md={8}
              >
                <MetaItem
                  label="Technology"
                  value="Articulate Storyline 360 · React · JavaScript"
                />
              </Col>

              <Col
                xs={24}
                md={8}
              >
                <MetaItem
                  label="Learning Strategy"
                  value="Scaffolding · Guided Practice · Feedback · Gamification"
                />
              </Col>
            </Row>
          </Card>

          <Space
            wrap
            size="middle"
          >
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
              icon={<PlayCircleOutlined />}
              onClick={openGame}
            >
              Play the React Game
            </Button>
          </Space>

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
              Beginning Excel learners may recognize functions such as
              SUM, AVERAGE, and IF without understanding how a formula
              is structured or knowing which function to use for a
              specific spreadsheet task.
            </Paragraph>

            <Paragraph
              style={{
                ...bodyTextStyle,
                maxWidth: 850,
                marginTop: 14,
                marginBottom: 0,
              }}
            >
              I designed the experience to build that understanding
              progressively before asking learners to apply formulas
              more independently.
            </Paragraph>

            <FlowCard>
              <FlowStep>
                Formula Structure
              </FlowStep>

              <ArrowRightOutlined />

              <FlowStep>
                Formula Exploration
              </FlowStep>

              <ArrowRightOutlined />

              <FlowStep>
                Guided Practice
              </FlowStep>

              <ArrowRightOutlined />

              <FlowStep>
                Application
              </FlowStep>
            </FlowCard>

            <LargeScreenshotFrame
              image={goalImage}
              alt="How Formulas Work Storyline slide showing an Excel formula broken into function, range, and result"
              maxWidth={820}
            />
          </CaseSection>

          {/* =================================================
              02 — SCAFFOLDED PRACTICE
          ================================================= */}

          <CaseSection
            number="02"
            title="Scaffolded Practice & Feedback"
          >
            <Paragraph
              style={{
                ...bodyTextStyle,
                maxWidth: 850,
              }}
            >
              I structured the Storyline portion as a short progression
              from explanation to decision-making. Learners first see
              how a formula is constructed, then explore SUM, AVERAGE,
              and IF before choosing the appropriate formula for a
              spreadsheet scenario.
            </Paragraph>

            <Row
              gutter={[36, 28]}
              align="middle"
              style={{
                marginTop: 28,
              }}
            >
              <Col
                xs={24}
                md={11}
              >
                <ScreenshotFrame
                  image={chooseFormulaImage}
                  alt="Storyline scenario asking learners to choose the correct Excel formula"
                  isMobile={isMobile}
                />
              </Col>

              <Col
                xs={24}
                md={13}
              >
                <Title
                  level={4}
                  style={{
                    color: blue,
                    marginTop: 0,
                  }}
                >
                  Practice Before Independent Application
                </Title>

                <Paragraph
                  style={bodyTextStyle}
                >
                  Learners interpret a realistic spreadsheet problem
                  and decide whether SUM, AVERAGE, or IF is the
                  appropriate function.
                </Paragraph>

                <Paragraph
                  style={{
                    ...bodyTextStyle,
                    marginBottom: 0,
                  }}
                >
                  Corrective feedback explains the purpose of the
                  appropriate formula, while an incorrect choice gives
                  learners another opportunity to reconsider the
                  problem and try again.
                </Paragraph>
              </Col>
            </Row>

            <Card
              style={{
                border: "none",
                background: lightBlue,
                marginTop: 26,
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
                  marginBottom: 8,
                }}
              >
                Learning Progression
              </Text>

              <ProgressionFlow
                items={[
                  "Understand",
                  "Explore",
                  "Choose",
                  "Apply",
                ]}
              />
            </Card>
          </CaseSection>

          {/* =================================================
              03 — STORYLINE + REACT
          ================================================= */}

          <CaseSection
            number="03"
            title="Extending Storyline with React"
          >
            <Paragraph
              style={{
                ...bodyTextStyle,
                maxWidth: 860,
              }}
            >
              Rather than extending the module with additional
              Storyline slides, I used custom development for the
              application stage. Storyline provides the structured
              instructional sequence, while the React game gives
              learners a more interactive environment for applying the
              same formulas in spreadsheet-based challenges.
            </Paragraph>

            {/* STORYLINE TRANSITION */}

            <Row
              gutter={[36, 28]}
              align="middle"
              style={{
                marginTop: 28,
              }}
            >
              <Col
                xs={24}
                md={11}
              >
                <ScreenshotFrame
                  image={resultImage}
                  alt="Storyline Formula Challenge slide that launches the React game"
                  isMobile={isMobile}
                />
              </Col>

              <Col
                xs={24}
                md={13}
              >
                <Title
                  level={4}
                  style={{
                    color: blue,
                    marginTop: 0,
                  }}
                >
                  Transition from Guided Learning to Practice
                </Title>

                <Paragraph
                  style={{
                    ...bodyTextStyle,
                    marginBottom: 0,
                  }}
                >
                  After completing the guided Storyline activities,
                  learners launch the game directly from the course.
                  This creates a clear transition from supported
                  instruction to more active application.
                </Paragraph>
              </Col>
            </Row>

            {/* REACT GAME */}

            <Row
              gutter={[36, 28]}
              align="middle"
              style={{
                marginTop: 36,
              }}
            >
              <Col
                xs={24}
                md={11}
              >
                <ScreenshotFrame
                  image={reactGameImage}
                  alt="React Excel Formula Quest game showing an IF formula spreadsheet challenge"
                  isMobile={isMobile}
                />
              </Col>

              <Col
                xs={24}
                md={13}
              >
                <Title
                  level={4}
                  style={{
                    color: blue,
                    marginTop: 0,
                  }}
                >
                  Custom Gamified Application
                </Title>

                <Paragraph
                  style={bodyTextStyle}
                >
                  The React game places learners in spreadsheet
                  challenge zones where SUM, AVERAGE, and IF become
                  tools for solving problems rather than isolated
                  formulas to memorize.
                </Paragraph>

                <Paragraph
                  style={{
                    ...bodyTextStyle,
                    marginBottom: 0,
                  }}
                >
                  This allowed me to use each technology for a distinct
                  instructional purpose: Storyline for guided learning
                  and feedback, and React for custom interactive
                  practice.
                </Paragraph>
              </Col>
            </Row>

            {/* EXPERIENCE FLOW */}

            <FlowCard>
              <FlowStep>
                Learn in Storyline
              </FlowStep>

              <ArrowRightOutlined />

              <FlowStep>
                Guided Practice
              </FlowStep>

              <ArrowRightOutlined />

              <FlowStep>
                Launch Game
              </FlowStep>

              <ArrowRightOutlined />

              <FlowStep>
                Apply in React
              </FlowStep>
            </FlowCard>

            {/* TECH */}

            <Space
              wrap
              size={[8, 8]}
              style={{
                marginTop: 22,
              }}
            >
              {[
                "Articulate Storyline 360",
                "React",
                "JavaScript",
                "Vite",
                "Vercel",
                "Gamification",
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
                onClick={openCourse}
              >
                Experience the Course
              </Button>

              <Button
                size="large"
                icon={<PlayCircleOutlined />}
                onClick={openGame}
              >
                Play the React Game
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
        margin: "26px auto 0",
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

          maxHeight: 420,

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
        marginTop: 22,
      }}
      styles={{
        body: {
          padding: 20,
        },
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
   PROGRESSION FLOW
========================================================= */

function ProgressionFlow({
  items,
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 10,
      }}
    >
      {items.map(
        (item, index) => (
          <div
            key={item}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Text
              strong
              style={{
                color: blue,
                fontSize: 15,
              }}
            >
              {item}
            </Text>

            {index <
              items.length - 1 && (
              <ArrowRightOutlined
                style={{
                  color: mediumBlue,
                  fontSize: 11,
                }}
              />
            )}
          </div>
        )
      )}
    </div>
  );
}