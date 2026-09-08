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
              fontSize: isMobile ? 34 : 48,
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
              fontSize: isMobile ? 17 : 20,
              lineHeight: 1.65,
              color: textColor,
              marginBottom: 24,
            }}
          >
            A short Excel learning experience that combines
            Articulate Storyline 360 instruction with a custom React
            game to move learners from understanding formula structure
            to applying SUM, AVERAGE, and IF in spreadsheet challenges.
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
              <Col xs={24} md={8}>
                <MetaItem
                  label="Audience"
                  value="Beginning Excel learners"
                />
              </Col>

              <Col xs={24} md={8}>
                <MetaItem
                  label="Technology"
                  value="Articulate Storyline 360 · React · JavaScript"
                />
              </Col>

              <Col xs={24} md={8}>
                <MetaItem
                  label="Learning Approach"
                  value="Scaffolding · Guided Practice · Feedback · Gamification"
                />
              </Col>
            </Row>
          </Card>

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
          </Space>

          {/* =================================================
              01 — GOAL
          ================================================= */}

          <CaseSection
            number="01"
            title="The Learning Goal"
          >
            <Paragraph
              style={{
                ...bodyTextStyle,
                maxWidth: 840,
                marginBottom: 0,
              }}
            >
              Beginners may recognize Excel functions without
              understanding how a formula is structured or knowing
              which function to use in a real spreadsheet. I designed
              the experience to build that understanding before asking
              learners to apply formulas independently.
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

            <LargeScreenshotFrame
              image={goalImage}
              alt="How Formulas Work Storyline slide showing formula structure and spreadsheet example"
              maxWidth={820}
            />
          </CaseSection>

          {/* =================================================
              02 — PROCESS
          ================================================= */}

          <CaseSection
            number="02"
            title="Designing the Practice"
          >
            <Paragraph
              style={{
                ...bodyTextStyle,
                maxWidth: 850,
              }}
            >
              I used Storyline for the parts of the experience that
              benefit from structured guidance: concept explanation,
              formula exploration, decision-making, and immediate
              feedback. After learners practiced selecting the correct
              function, I moved them into a custom React game for
              applied practice.
            </Paragraph>

            <Row
              gutter={[24, 24]}
              align="stretch"
              style={{
                marginTop: 28,
              }}
            >
              <Col xs={24} md={12}>
                <PracticeCard
                  label="Articulate Storyline 360"
                  title="Guided Formula Selection"
                  description="Learners interpret a spreadsheet problem, select the appropriate formula, and receive immediate feedback."
                  image={chooseFormulaImage}
                  alt="Storyline activity asking learners to choose the correct Excel formula"
                  imageHeight={250}
                  isMobile={isMobile}
                />
              </Col>

              <Col xs={24} md={12}>
                <PracticeCard
                  label="React + JavaScript"
                  title="Applied Formula Challenge"
                  description="The custom game places learners in spreadsheet scenarios where formulas become tools for solving a problem."
                  image={reactGameImage}
                  alt="React Excel game asking learners to determine target status using the IF function"
                  imageHeight={250}
                  isMobile={isMobile}
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
                The technology choice follows the learning task:
                Storyline provides structured support and feedback,
                while React extends the experience into custom,
                game-based application.
              </Paragraph>
            </Card>
          </CaseSection>

          {/* =================================================
              03 — RESULT
          ================================================= */}

          <CaseSection
            number="03"
            title="The Integrated Experience"
          >
            <Paragraph
              style={{
                ...bodyTextStyle,
                maxWidth: 850,
              }}
            >
              The finished module connects the two environments into
              one learning sequence. Learners begin with guided
              instruction and practice in Storyline, then launch the
              React game when they are ready to apply the same formulas
              in new spreadsheet challenges.
            </Paragraph>

            <LargeScreenshotFrame
              image={resultImage}
              alt="Formula Challenge Storyline slide that launches the React game"
              maxWidth={820}
            />

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
                  marginBottom: 10,
                }}
              >
                Experience Flow
              </Text>

              <ProgressionFlow
                items={[
                  "Learn in Storyline",
                  "Practice",
                  "Launch Game",
                  "Apply in React",
                ]}
              />
            </Card>

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
                icon={<PlayCircleOutlined />}
                onClick={openGame}
              >
                Play the React Game
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

/* =========================================================
   PRACTICE CARD
========================================================= */

function PracticeCard({
  label,
  title,
  description,
  image,
  alt,
  imageHeight,
  isMobile,
}) {
  return (
    <Card
      style={{
        height: "100%",
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
          padding: 10,
          background: "#EEF4F9",
        }}
      >
        <div
          style={{
            height: isMobile
              ? "auto"
              : imageHeight,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            background: "#ffffff",
            borderRadius: 8,
          }}
        >
          <img
            src={image}
            alt={alt}
            style={{
              width: "100%",
              height: isMobile
                ? "auto"
                : "100%",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>
      </div>

      <div
        style={{
          padding: 18,
        }}
      >
        <Text
          strong
          style={{
            display: "block",
            color: mediumBlue,
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.6px",
            marginBottom: 5,
          }}
        >
          {label}
        </Text>

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
            margin: 0,
            color: textColor,
            fontSize: 15,
            lineHeight: 1.65,
          }}
        >
          {description}
        </Paragraph>
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
          maxHeight: STANDARD_IMAGE_HEIGHT,
          display: "block",
          objectFit: "contain",
          borderRadius: 8,
        }}
      />
    </div>
  );
}