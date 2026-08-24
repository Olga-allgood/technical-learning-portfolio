// src/pages/projects/SATVocabularyCaseStudy.jsx

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

import gamePractice from "../../assets/sat-case-study/01-game-practice.png";
import feedbackReview from "../../assets/sat-case-study/02-feedback-review.png";
import aiGeneratedPractice from "../../assets/sat-case-study/03-ai-generated-practice.png";
import learningHistory from "../../assets/sat-case-study/04-learning-history.png";

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

export default function SATVocabularyCaseStudy() {
  const navigate = useNavigate();

  const screens =
    Grid.useBreakpoint();

  const isMobile =
    !screens.md;

  const openProject = () => {
    window.open(
      "https://new-sat-builder-hw4o.vercel.app/",
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
            AI-Supported Learning Case Study
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
            SAT Vocabulary Builder
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
            An AI-supported vocabulary learning
            experience that turns missed words into
            personalized contextual practice.
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
            <Row
              gutter={[24, 18]}
            >
              <Col
                xs={24}
                md={8}
              >
                <MetaItem
                  label="Audience"
                  value="SAT vocabulary learners"
                />
              </Col>

              <Col
                xs={24}
                md={8}
              >
                <MetaItem
                  label="Tools"
                  value="Next.js · TypeScript · Supabase · Gemini AI"
                />
              </Col>

              <Col
                xs={24}
                md={8}
              >
                <MetaItem
                  label="Focus"
                  value="Retrieval Practice · Personalized Learning · AI-Generated Practice"
                />
              </Col>
            </Row>
          </Card>

          <Button
            type="primary"
            size="large"
            icon={
              <ExportOutlined />
            }
            onClick={
              openProject
            }
          >
            Experience the Project
          </Button>

          {/* =================================================
              01 — CHALLENGE
          ================================================= */}

          <CaseSection
            number="01"
            title="The Learning Challenge"
          >
            <Paragraph
              style={bodyTextStyle}
            >
              Vocabulary learners often practice
              definitions in isolation, but knowing a
              definition does not always mean being
              able to recognize or understand a word
              in context.
            </Paragraph>

            <Paragraph
              style={{
                ...bodyTextStyle,
                marginBottom: 0,
              }}
            >
              I designed the experience to combine
              retrieval practice, immediate feedback,
              contextual examples, and personalized
              review of words the learner finds
              difficult.
            </Paragraph>

            <Card
              style={{
                border: "none",

                background:
                  lightBlue,

                marginTop: 22,
              }}
            >
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
                Practice → Feedback → Review →
                Contextual Re-Exposure
              </Title>
            </Card>
          </CaseSection>

          {/* =================================================
              02 — LEARNING EXPERIENCE
          ================================================= */}

          <CaseSection
            number="02"
            title="Learning Experience Design"
          >
            <Row
              gutter={[36, 28]}
              align="middle"
            >
              {/* IMAGE */}

              <Col
                xs={24}
                md={11}
              >
                <ScreenshotFrame
                  image={gamePractice}
                  alt="SAT Vocabulary Builder game practice interface"
                  isMobile={isMobile}
                />
              </Col>

              {/* TEXT */}

              <Col
                xs={24}
                md={13}
              >
                <Paragraph
                  style={bodyTextStyle}
                >
                  Learners begin with retrieval
                  practice by identifying a target
                  vocabulary word from its meaning.
                  The game records correct and
                  incorrect guesses while keeping the
                  task focused on active recall.
                </Paragraph>

                <Paragraph
                  style={{
                    ...bodyTextStyle,
                    marginBottom: 0,
                  }}
                >
                  Missed vocabulary is captured by the
                  system rather than discarded, so it
                  can become input for later
                  personalized practice.
                </Paragraph>
              </Col>
            </Row>

            {/* FEEDBACK */}

            <Row
              gutter={[36, 28]}
              align="middle"
              style={{
                marginTop: 34,
              }}
            >
              <Col
                xs={24}
                md={11}
              >
                <ScreenshotFrame
                  image={feedbackReview}
                  alt="Vocabulary feedback with meaning and contextual examples"
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
                  Feedback That Supports Review
                </Title>

                <Paragraph
                  style={bodyTextStyle}
                >
                  After an attempt, learners can review
                  the word's meaning and contextual
                  examples rather than simply seeing a
                  correct or incorrect result.
                </Paragraph>

                <Paragraph
                  style={{
                    ...bodyTextStyle,
                    marginBottom: 0,
                  }}
                >
                  This creates an immediate bridge
                  between retrieval practice and
                  meaningful language use.
                </Paragraph>
              </Col>
            </Row>
          </CaseSection>

          {/* =================================================
              03 — AI-GENERATED PRACTICE
          ================================================= */}

          <CaseSection
            number="03"
            title="AI-Generated Personalized Practice"
          >
            <Paragraph
              style={bodyTextStyle}
            >
              The most important design decision was
              connecting generative AI directly to
              learner performance.
            </Paragraph>

            <Paragraph
              style={bodyTextStyle}
            >
              Words the learner misses become input
              for Gemini AI, which generates a short
              learning article that uses those words
              in context. This gives the learner
              another opportunity to encounter
              difficult vocabulary through meaningful
              language rather than isolated
              memorization.
            </Paragraph>

            <LargeScreenshotFrame
              image={
                aiGeneratedPractice
              }
              alt="Gemini AI generated learning article using vocabulary words missed by the learner"
              maxWidth={980}
            />

            <FlowCard>
              <FlowStep>
                Missed Vocabulary
              </FlowStep>

              <ArrowRightOutlined />

              <FlowStep>
                Gemini AI
              </FlowStep>

              <ArrowRightOutlined />

              <FlowStep>
                Personalized Reading
              </FlowStep>

              <ArrowRightOutlined />

              <FlowStep>
                Contextual Re-Exposure
              </FlowStep>
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
                AI's Instructional Role
              </Text>

              <Paragraph
                style={{
                  margin: 0,

                  color:
                    textColor,

                  fontSize: 16,

                  lineHeight: 1.7,
                }}
              >
                AI is not used as a standalone feature.
                Learner performance determines the
                vocabulary that becomes the source
                material for the next learning
                experience.
              </Paragraph>
            </Card>
          </CaseSection>

          {/* =================================================
              04 — PERSONALIZED LOOP
          ================================================= */}

          <CaseSection
            number="04"
            title="Personalized Learning Loop"
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
                  image={
                    learningHistory
                  }
                  alt="SAT Vocabulary Builder learning history with correct words, missed words, and generated articles"
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
                  Learning continues beyond an
                  individual game. The History
                  experience keeps learner activity
                  available for later review.
                </Paragraph>

                <Paragraph
                  style={bodyTextStyle}
                >
                  Learners can revisit correctly
                  guessed vocabulary, missed words,
                  personal vocabulary, and previously
                  generated learning articles.
                </Paragraph>

                <FlowCard compact>
                  <FlowStep>
                    Practice
                  </FlowStep>

                  <ArrowRightOutlined />

                  <FlowStep>
                    Capture Difficulty
                  </FlowStep>

                  <ArrowRightOutlined />

                  <FlowStep>
                    Generate Context
                  </FlowStep>

                  <ArrowRightOutlined />

                  <FlowStep>
                    Review
                  </FlowStep>
                </FlowCard>
              </Col>
            </Row>
          </CaseSection>

          {/* =================================================
              05 — TECHNICAL IMPLEMENTATION
          ================================================= */}

          <CaseSection
            number="05"
            title="Technical Implementation"
          >
            <Paragraph
              style={bodyTextStyle}
            >
              I developed the learning experience as
              a full-stack Next.js application.
              Supabase manages authentication,
              learner-specific vocabulary, learning
              history, and generated content, while
              Gemini provides AI-generated contextual
              practice.
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
                "Next.js",
                "React",
                "TypeScript",
                "Supabase",
                "Gemini AI",
                "Vercel",
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

            <ArchitectureCard />
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
              The key design opportunity was using
              learner performance as input for the
              next learning experience.
            </Paragraph>

            <Paragraph
              style={{
                ...bodyTextStyle,
                marginBottom: 0,
              }}
            >
              Instead of adding generative AI as a
              separate feature, I connected it to
              learner behavior: difficult vocabulary
              becomes the source material for
              personalized contextual practice. The
              project demonstrates how instructional
              design, learner data, AI, and custom
              development can work together in one
              learning system.
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
                icon={
                  <ExportOutlined />
                }
                onClick={
                  openProject
                }
              >
                Experience the Project
              </Button>

              <Button
                size="large"
                icon={
                  <ArrowLeftOutlined />
                }
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
      style={{
        marginTop: 60,
      }}
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

        background:
          "#EEF4F9",

        padding: 10,

        borderRadius: 14,

        boxShadow:
          "0 6px 20px rgba(30, 70, 110, 0.07)",

        display: "flex",

        alignItems:
          "center",

        justifyContent:
          "center",

        overflow:
          "hidden",
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

          maxWidth:
            "100%",

          objectFit:
            "contain",

          display:
            "block",

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

        overflow:
          "hidden",
      }}
    >
      <img
        src={image}
        alt={alt}
        style={{
          width: "100%",
          height: "auto",

          display:
            "block",

          objectFit:
            "contain",

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
  compact = false,
}) {
  return (
    <Card
      style={{
        border: "none",

        background:
          lightBlue,

        marginTop: compact
          ? 18
          : 24,
      }}
      styles={{
        body: {
          padding: compact
            ? 16
            : 20,
        },
      }}
    >
      <div
        style={{
          display: "flex",

          alignItems:
            "center",

          justifyContent:
            compact
              ? "flex-start"
              : "center",

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

/* =========================================================
   ARCHITECTURE
========================================================= */

function ArchitectureCard() {
  return (
    <Card
      style={{
        border: "none",
        background: lightBlue,
      }}
    >
      <Row
        gutter={[12, 12]}
        align="middle"
        justify="center"
      >
        <Col>
          <ArchitectureStep>
            Learner Practice
          </ArchitectureStep>
        </Col>

        <Col>
          <ArrowRightOutlined
            style={{
              color: mediumBlue,
            }}
          />
        </Col>

        <Col>
          <ArchitectureStep>
            Next.js
          </ArchitectureStep>
        </Col>

        <Col>
          <ArrowRightOutlined
            style={{
              color: mediumBlue,
            }}
          />
        </Col>

        <Col>
          <ArchitectureStep>
            Supabase
          </ArchitectureStep>
        </Col>

        <Col>
          <ArrowRightOutlined
            style={{
              color: mediumBlue,
            }}
          />
        </Col>

        <Col>
          <ArchitectureStep>
            Gemini AI
          </ArchitectureStep>
        </Col>

        <Col>
          <ArrowRightOutlined
            style={{
              color: mediumBlue,
            }}
          />
        </Col>

        <Col>
          <ArchitectureStep>
            Personalized Practice
          </ArchitectureStep>
        </Col>
      </Row>
    </Card>
  );
}

function ArchitectureStep({
  children,
}) {
  return (
    <Tag
      style={{
        border: "none",

        background:
          "#ffffff",

        color: blue,

        padding:
          "7px 12px",

        margin: 0,

        fontWeight: 600,
      }}
    >
      {children}
    </Tag>
  );
}