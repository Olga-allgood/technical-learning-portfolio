// src/pages/projects/MathAdventureCaseStudy.jsx

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

import {
  useNavigate,
} from "react-router-dom";

import {
  track,
} from "@vercel/analytics";

import PortfolioHeader from "../../components/PortfolioHeader";

import worldMap from "../../assets/math-adventure-case-study/01-world-map.png";
import areaModel from "../../assets/math-adventure-case-study/02-area-model-4x18.png";
import guidedPractice from "../../assets/math-adventure-case-study/03-guided-practice-8x17.png";
import transferHeroTraining from "../../assets/math-adventure-case-study/04-transfer-hero-training.png";
import regroupingStart from "../../assets/math-adventure-case-study/05-regrouping-start.png";
import regroupingTrade from "../../assets/math-adventure-case-study/06-regrouping-trade.png";
import regroupingResult from "../../assets/math-adventure-case-study/07-regrouping-result.png";
import zooProgressionMap from "../../assets/math-adventure-case-study/08-zoo-progression-map.png";
import missionComplete from "../../assets/math-adventure-case-study/09-mission-complete.png";

const {
  Content,
  Footer,
} = Layout;

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
   COMPONENT
========================================================= */

export default function MathAdventureCaseStudy() {
  const navigate =
    useNavigate();

  const screens =
    Grid.useBreakpoint();

  const isMobile =
    !screens.md;

  const openProject = () => {
    track(
      "Experience Project",
      {
        project:
          "Math Adventure",
      }
    );

    window.open(
      "https://multiplication-adventure.vercel.app/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <Layout
      style={{
        minHeight:
          "100vh",

        background:
          "#ffffff",
      }}
    >
      <PortfolioHeader />

      <Content>
        <main
          style={{
            width:
              "100%",

            maxWidth:
              1100,

            margin:
              "0 auto",

            padding:
              isMobile
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
              paddingLeft:
                0,

              marginBottom:
                20,
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
              display:
                "block",

              color:
                mediumBlue,

              fontSize:
                13,

              textTransform:
                "uppercase",

              letterSpacing:
                "0.8px",

              marginBottom:
                7,
            }}
          >
            Learning Engineering & Instructional Design Case Study
          </Text>

          <Title
            level={1}
            style={{
              color:
                blue,

              fontSize:
                isMobile
                  ? 34
                  : 48,

              lineHeight:
                1.08,

              marginTop:
                0,

              marginBottom:
                12,
            }}
          >
            Math Adventure
          </Title>

          <Paragraph
            style={{
              maxWidth:
                900,

              fontSize:
                isMobile
                  ? 17
                  : 20,

              lineHeight:
                1.65,

              color:
                textColor,

              marginBottom:
                24,
            }}
          >
            A custom React learning game for Grades 3–4
            that makes mathematical thinking visible
            through visual models, progressive
            scaffolding, guided practice, and
            game-based challenges.
          </Paragraph>

          {/* =================================================
              QUICK SUMMARY
          ================================================= */}

          <Card
            style={{
              maxWidth:
                980,

              border:
                "none",

              background:
                lightBlue,

              marginBottom:
                24,
            }}
          >
            <Row
              gutter={[
                24,
                18,
              ]}
            >
              <Col
                xs={24}
                md={8}
              >
                <MetaItem
                  label="Audience"
                  value="Elementary learners · Grades 3–4"
                />
              </Col>

              <Col
                xs={24}
                md={8}
              >
                <MetaItem
                  label="Technology"
                  value="React · JavaScript · CSS · Vite · Vercel"
                />
              </Col>

              <Col
                xs={24}
                md={8}
              >
                <MetaItem
                  label="Learning Design"
                  value="Visual Models · Scaffolding · Practice · Gamification"
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
              PROJECT OVERVIEW IMAGE
          ================================================= */}

          <LargeScreenshotFrame
            image={
              worldMap
            }
            alt="Math Adventure world selection screen showing Zoo, Magic, Space, Pirate, and Superhero worlds"
            maxWidth={
              1000
            }
          />

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

                maxWidth:
                  860,
              }}
            >
              Elementary learners are often asked to
              perform mathematical procedures before
              they have a strong mental model of what
              the numbers and operations represent.
              This can make multiplication,
              regrouping, place value, addition, and
              subtraction feel abstract.
            </Paragraph>

            <Paragraph
              style={{
                ...bodyTextStyle,

                maxWidth:
                  860,

                marginBottom:
                  0,
              }}
            >
              I designed Math Adventure around one
              central principle:
            </Paragraph>

            <Card
              style={{
                border:
                  "none",

                background:
                  lightBlue,

                marginTop:
                  22,
              }}
            >
              <Text
                strong
                style={{
                  display:
                    "block",

                  color:
                    mediumBlue,

                  fontSize:
                    12,

                  textTransform:
                    "uppercase",

                  letterSpacing:
                    "0.6px",

                  marginBottom:
                    6,
                }}
              >
                Design Principle
              </Text>

              <Title
                level={3}
                style={{
                  color:
                    blue,

                  margin:
                    0,
                }}
              >
                Make hard-to-picture math visible.
              </Title>
            </Card>
          </CaseSection>

          {/* =================================================
              02 — VISUAL MODELS
          ================================================= */}

          <CaseSection
            number="02"
            title="Making Mathematical Thinking Visible"
          >
            <Row
              gutter={[
                36,
                28,
              ]}
              align="middle"
            >
              <Col
                xs={24}
                md={13}
              >
                <LargeScreenshotFrame
                  image={
                    areaModel
                  }
                  alt="Area model showing 4 times 18 decomposed into 4 times 10 and 4 times 8"
                  maxWidth={
                    700
                  }
                  noTopMargin
                />
              </Col>

              <Col
                xs={24}
                md={11}
              >
                <Paragraph
                  style={
                    bodyTextStyle
                  }
                >
                  Visual models are part of the
                  instruction rather than decoration.
                  In Zoo World, multiplication is
                  decomposed into partial products so
                  learners can see how a larger
                  calculation can be transformed into
                  smaller, more manageable parts.
                </Paragraph>

                <Card
                  style={{
                    border:
                      "none",

                    background:
                      lightBlue,
                  }}
                >
                  <Text
                    strong
                    style={{
                      color:
                        blue,

                      fontSize:
                        17,
                    }}
                  >
                    4 × 18
                  </Text>

                  <div
                    style={{
                      marginTop:
                        8,

                      color:
                        textColor,

                      lineHeight:
                        1.7,
                    }}
                  >
                    4 × 10 + 4 × 8
                    <br />
                    40 + 32
                    <br />
                    72
                  </div>
                </Card>
              </Col>
            </Row>
          </CaseSection>

          {/* =================================================
              03 — PROGRESSIVE SCAFFOLDING
          ================================================= */}

          <CaseSection
            number="03"
            title="Progressive Scaffolding"
          >
            <Paragraph
              style={{
                ...bodyTextStyle,

                maxWidth:
                  880,
              }}
            >
              Support gradually decreases as learners
              gain experience. Early activities model
              the strategy explicitly. Later
              challenges require learners to
              calculate more of the solution
              themselves and eventually apply the
              strategy in a new context.
            </Paragraph>

            <ProgressionFlow />

            <Row
              gutter={[
                20,
                24,
              ]}
              align="stretch"
              style={{
                marginTop:
                  24,
              }}
            >
              <Col
                xs={24}
                md={8}
              >
                <StageCard
                  number="1"
                  title="Model"
                  subtitle="See how the problem is decomposed"
                  image={
                    areaModel
                  }
                />
              </Col>

              <Col
                xs={24}
                md={8}
              >
                <StageCard
                  number="2"
                  title="Guided Practice"
                  subtitle="Use the model and calculate each part"
                  image={
                    guidedPractice
                  }
                />
              </Col>

              <Col
                xs={24}
                md={8}
              >
                <StageCard
                  number="3"
                  title="Transfer"
                  subtitle="Apply the strategy in a new challenge"
                  image={
                    transferHeroTraining
                  }
                />
              </Col>
            </Row>

            <Card
              style={{
                border:
                  "none",

                background:
                  lightBlue,

                marginTop:
                  24,
              }}
            >
              <Paragraph
                style={{
                  ...bodyTextStyle,

                  margin:
                    0,
                }}
              >
                The Superhero World revisits skills
                from earlier worlds. This gives
                learners an opportunity to apply a
                previously practiced strategy in a
                different context rather than simply
                repeat the same activity.
              </Paragraph>
            </Card>
          </CaseSection>

          {/* =================================================
              04 — REGROUPING
          ================================================= */}

          <CaseSection
            number="04"
            title="Teaching the Concept Behind Regrouping"
          >
            <Paragraph
              style={{
                ...bodyTextStyle,

                maxWidth:
                  880,
              }}
            >
              In Pirate World, subtraction is modeled
              with tens and ones before learners
              complete the calculation. Instead of
              simply telling a learner to
              “borrow,” the experience shows what
              regrouping means.
            </Paragraph>

            <Row
              gutter={[
                20,
                24,
              ]}
              align="stretch"
            >
              <Col
                xs={24}
                md={4}
              />

              <Col
                xs={24}
                md={16}
              >
                <ScreenshotCard
                  number="1"
                  title="Represent the starting quantity"
                  image={
                    regroupingStart
                  }
                  alt="Subtraction model showing 72 as seven tens and two ones"
                />
              </Col>

              <Col
                xs={24}
                md={4}
              />
            </Row>

            <div
              style={{
                textAlign:
                  "center",

                margin:
                  "18px 0",
              }}
            >
              <ArrowDownVisual />
            </div>

            <Row
              gutter={[
                20,
                24,
              ]}
              align="stretch"
            >
              <Col
                xs={24}
                md={12}
              >
                <ScreenshotCard
                  number="2"
                  title="Trade one ten for ten ones"
                  image={
                    regroupingTrade
                  }
                  alt="Visual model showing one ten becoming ten ones"
                />
              </Col>

              <Col
                xs={24}
                md={12}
              >
                <ScreenshotCard
                  number="3"
                  title="See the equivalent representation"
                  image={
                    regroupingResult
                  }
                  alt="Visual model showing 72 regrouped as six tens and twelve ones"
                />
              </Col>
            </Row>

            <Card
              style={{
                border:
                  "none",

                background:
                  lightBlue,

                marginTop:
                  24,
              }}
            >
              <Title
                level={4}
                style={{
                  color:
                    blue,

                  marginTop:
                    0,

                  marginBottom:
                    8,
                }}
              >
                The quantity stays the same.
              </Title>

              <Paragraph
                style={{
                  ...bodyTextStyle,

                  margin:
                    0,
                }}
              >
                One ten is exchanged for ten ones.
                The representation changes, but the
                total value does not. The visual
                sequence connects the subtraction
                procedure to the mathematical idea
                underneath it.
              </Paragraph>
            </Card>
          </CaseSection>

          {/* =================================================
              05 — PROGRESSION
          ================================================= */}

          <CaseSection
            number="05"
            title="Learner Choice with Structured Progression"
          >
            <Row
              gutter={[
                36,
                28,
              ]}
              align="middle"
            >
              <Col
                xs={24}
                md={13}
              >
                <LargeScreenshotFrame
                  image={
                    zooProgressionMap
                  }
                  alt="Zoo World mission map showing completed, ready, and locked missions"
                  maxWidth={
                    720
                  }
                  noTopMargin
                />
              </Col>

              <Col
                xs={24}
                md={11}
              >
                <Paragraph
                  style={
                    bodyTextStyle
                  }
                >
                  All five worlds are available from
                  the main map so learners can choose
                  the skill they want to practice.
                  Within each world, however, missions
                  unlock sequentially.
                </Paragraph>

                <Paragraph
                  style={{
                    ...bodyTextStyle,

                    marginBottom:
                      0,
                  }}
                >
                  This preserves learner choice
                  across topics while maintaining the
                  intended instructional sequence
                  within each skill area.
                </Paragraph>
              </Col>
            </Row>

            <FlowCard>
              <FlowStep>
                Choose a World
              </FlowStep>

              <ArrowRightOutlined />

              <FlowStep>
                Complete Mission
              </FlowStep>

              <ArrowRightOutlined />

              <FlowStep>
                Unlock Next Challenge
              </FlowStep>

              <ArrowRightOutlined />

              <FlowStep>
                Increase Independence
              </FlowStep>
            </FlowCard>
          </CaseSection>

          {/* =================================================
              06 — GAMIFICATION
          ================================================= */}

          <CaseSection
            number="06"
            title="Simple Gamification"
          >
            <Row
              gutter={[
                36,
                28,
              ]}
              align="middle"
            >
              <Col
                xs={24}
                md={8}
              >
                <LargeScreenshotFrame
                  image={
                    missionComplete
                  }
                  alt="Mission completion screen showing one star earned"
                  maxWidth={
                    420
                  }
                  noTopMargin
                />
              </Col>

              <Col
                xs={24}
                md={16}
              >
                <Paragraph
                  style={
                    bodyTextStyle
                  }
                >
                  Each completed mission earns one
                  star. I intentionally kept the
                  reward system simple so that game
                  mechanics reinforce progress
                  without competing with the learning
                  activity.
                </Paragraph>

                <Card
                  style={{
                    border:
                      "none",

                    background:
                      lightBlue,
                  }}
                >
                  <Text
                    strong
                    style={{
                      display:
                        "block",

                      color:
                        blue,

                      marginBottom:
                        6,

                      fontSize:
                        17,
                    }}
                  >
                    One mission = one star ⭐
                  </Text>

                  <Text
                    style={{
                      color:
                        textColor,

                      lineHeight:
                        1.7,
                    }}
                  >
                    Progress is visible, immediate,
                    and easy for a young learner to
                    understand.
                  </Text>
                </Card>
              </Col>
            </Row>
          </CaseSection>

          {/* =================================================
              07 — TECHNICAL IMPLEMENTATION
          ================================================= */}

          <CaseSection
            number="07"
            title="Technical Implementation"
          >
            <Paragraph
              style={{
                ...bodyTextStyle,

                maxWidth:
                  870,
              }}
            >
              I built Math Adventure as a custom
              responsive React application rather
              than relying on a traditional
              authoring tool. This allowed me to
              control the instructional interactions,
              progression logic, visual models,
              learner state, and responsive behavior.
            </Paragraph>

            <Space
              wrap
              size={[
                8,
                8,
              ]}
              style={{
                marginTop:
                  4,

                marginBottom:
                  22,
              }}
            >
              {[
                "React",
                "JavaScript",
                "CSS",
                "Vite",
                "Vercel",
                "Local Storage",
                "Responsive Design",
                "Learning Engineering",
              ].map(
                (
                  item
                ) => (
                  <Tag
                    key={
                      item
                    }
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

            <Row
              gutter={[
                20,
                20,
              ]}
              align="stretch"
            >
              <Col
                xs={24}
                md={8}
              >
                <FeatureCard
                  title="Reusable Learning Components"
                  description="Mission structures and visual models are implemented as reusable React components."
                />
              </Col>

              <Col
                xs={24}
                md={8}
              >
                <FeatureCard
                  title="Persistent Progress"
                  description="Completed missions are stored locally so learners can return without losing their progress."
                />
              </Col>

              <Col
                xs={24}
                md={8}
              >
                <FeatureCard
                  title="Responsive Experience"
                  description="Layouts adapt across desktop, tablet, and mobile screen sizes."
                />
              </Col>
            </Row>

            <Card
              style={{
                border:
                  "none",

                background:
                  lightBlue,

                marginTop:
                  24,
              }}
            >
              <Text
                strong
                style={{
                  display:
                    "block",

                  color:
                    mediumBlue,

                  fontSize:
                    12,

                  textTransform:
                    "uppercase",

                  letterSpacing:
                    "0.6px",

                  marginBottom:
                    7,
                }}
              >
                Experience Architecture
              </Text>

              <Paragraph
                style={{
                  margin:
                    0,

                  color:
                    textColor,

                  fontSize:
                    16,

                  lineHeight:
                    1.8,
                }}
              >
                Choose a skill → enter a themed world
                → complete scaffolded missions →
                receive feedback → earn a star →
                unlock the next challenge → apply
                strategies with increasing
                independence
              </Paragraph>
            </Card>
          </CaseSection>

          {/* =================================================
              DESIGN TAKEAWAY
          ================================================= */}

          <CaseSection
            number="08"
            title="Design Takeaway"
          >
            <Card
              style={{
                border:
                  "none",

                background:
                  lightBlue,

                padding:
                  isMobile
                    ? 2
                    : 8,
              }}
            >
              <Title
                level={3}
                style={{
                  color:
                    blue,

                  marginTop:
                    0,

                  marginBottom:
                    12,
                }}
              >
                Design the learning first. Use
                technology to make the strategy
                possible.
              </Title>

              <Paragraph
                style={{
                  ...bodyTextStyle,

                  margin:
                    0,

                  maxWidth:
                    850,
                }}
              >
                Math Adventure demonstrates how
                custom development can support
                instructional goals that are
                difficult to achieve with static
                content alone: visualizing abstract
                concepts, gradually removing
                support, controlling progression,
                and creating opportunities for
                learners to apply strategies in new
                contexts.
              </Paragraph>
            </Card>
          </CaseSection>

          {/* =================================================
              CTA
          ================================================= */}

          <div
            style={{
              marginTop:
                56,

              paddingTop:
                28,

              borderTop:
                "1px solid #e5e7eb",
            }}
          >
            <Space
              wrap
            >
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
          textAlign:
            "center",

          background:
            "#fafafa",

          borderTop:
            "1px solid #f0f0f0",
        }}
      >
        <Text
          type="secondary"
        >
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
  fontSize:
    17,

  lineHeight:
    1.75,

  color:
    textColor,
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
          display:
            "block",

          color:
            mediumBlue,

          fontSize:
            12,

          textTransform:
            "uppercase",

          letterSpacing:
            "0.6px",

          marginBottom:
            4,
        }}
      >
        {label}
      </Text>

      <Text
        style={{
          color:
            blue,

          lineHeight:
            1.55,
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
        marginTop:
          58,
      }}
    >
      <Text
        strong
        style={{
          display:
            "block",

          color:
            mediumBlue,

          fontSize:
            12,

          letterSpacing:
            "0.8px",

          marginBottom:
            4,
        }}
      >
        {number}
      </Text>

      <Title
        level={2}
        style={{
          color:
            blue,

          marginTop:
            0,

          marginBottom:
            18,
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

function ProgressionFlow() {
  const items = [
    "Model",
    "Guided Practice",
    "Construct",
    "Independent",
    "Transfer",
  ];

  return (
    <div
      style={{
        display:
          "flex",

        flexWrap:
          "wrap",

        alignItems:
          "center",

        gap:
          8,

        marginTop:
          18,

        marginBottom:
          8,
      }}
    >
      {items.map(
        (
          item,
          index
        ) => (
          <div
            key={
              item
            }
            style={{
              display:
                "flex",

              alignItems:
                "center",

              gap:
                8,
            }}
          >
            <Tag
              style={{
                border:
                  "none",

                background:
                  lightBlue,

                color:
                  blue,

                padding:
                  "6px 11px",

                margin:
                  0,

                fontWeight:
                  600,
              }}
            >
              {item}
            </Tag>

            {index <
              items.length -
                1 && (
              <ArrowRightOutlined
                style={{
                  color:
                    mediumBlue,

                  fontSize:
                    11,
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
   LARGE SCREENSHOT
========================================================= */

function LargeScreenshotFrame({
  image,
  alt,
  maxWidth = "100%",
  noTopMargin = false,
}) {
  return (
    <div
      style={{
        width:
          "100%",

        maxWidth,

        margin:
          noTopMargin
            ? "0 auto"
            : "30px auto 0",

        padding:
          10,

        background:
          "#EEF4F9",

        borderRadius:
          14,

        boxShadow:
          "0 6px 20px rgba(30, 70, 110, 0.07)",

        overflow:
          "hidden",
      }}
    >
      <img
        src={
          image
        }
        alt={
          alt
        }
        style={{
          width:
            "100%",

          height:
            "auto",

          display:
            "block",

          objectFit:
            "contain",

          borderRadius:
            8,
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
        height:
          "100%",

        border:
          "none",

        background:
          lightBlue,

        overflow:
          "hidden",
      }}
      styles={{
        body: {
          padding:
            0,
        },
      }}
    >
      <div
        style={{
          padding:
            "16px 16px 12px",
        }}
      >
        <Text
          strong
          style={{
            display:
              "block",

            color:
              mediumBlue,

            fontSize:
              11,

            marginBottom:
              3,
          }}
        >
          {number}
        </Text>

        <Title
          level={4}
          style={{
            color:
              blue,

            margin:
              0,
          }}
        >
          {title}
        </Title>

        <Text
          type="secondary"
        >
          {subtitle}
        </Text>
      </div>

      <div
        style={{
          background:
            "#ffffff",

          padding:
            8,

          height:
            240,

          display:
            "flex",

          alignItems:
            "center",

          justifyContent:
            "center",
        }}
      >
        <img
          src={
            image
          }
          alt={`${title} activity`}
          style={{
            width:
              "100%",

            height:
              "100%",

            objectFit:
              "contain",

            display:
              "block",
          }}
        />
      </div>
    </Card>
  );
}

/* =========================================================
   SCREENSHOT CARD
========================================================= */

function ScreenshotCard({
  number,
  title,
  image,
  alt,
}) {
  return (
    <Card
      style={{
        height:
          "100%",

        border:
          "none",

        background:
          lightBlue,

        overflow:
          "hidden",
      }}
      styles={{
        body: {
          padding:
            0,
        },
      }}
    >
      <div
        style={{
          padding:
            "15px 16px 12px",
        }}
      >
        <Text
          strong
          style={{
            color:
              mediumBlue,

            fontSize:
              11,

            display:
              "block",
          }}
        >
          {number}
        </Text>

        <Title
          level={4}
          style={{
            color:
              blue,

            margin:
              "3px 0 0",
          }}
        >
          {title}
        </Title>
      </div>

      <div
        style={{
          background:
            "#ffffff",

          padding:
            10,

          minHeight:
            300,

          display:
            "flex",

          alignItems:
            "center",

          justifyContent:
            "center",
        }}
      >
        <img
          src={
            image
          }
          alt={
            alt
          }
          style={{
            width:
              "100%",

            maxHeight:
              440,

            objectFit:
              "contain",

            display:
              "block",
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
        border:
          "none",

        background:
          lightBlue,

        marginTop:
          24,
      }}
    >
      <div
        style={{
          display:
            "flex",

          alignItems:
            "center",

          justifyContent:
            "center",

          flexWrap:
            "wrap",

          gap:
            12,

          color:
            blue,

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
        color:
          blue,

        fontSize:
          15,
      }}
    >
      {children}
    </Text>
  );
}

/* =========================================================
   FEATURE CARD
========================================================= */

function FeatureCard({
  title,
  description,
}) {
  return (
    <Card
      style={{
        height:
          "100%",

        border:
          "none",

        background:
          lightBlue,
      }}
    >
      <Title
        level={4}
        style={{
          color:
            blue,

          marginTop:
            0,

          marginBottom:
            8,
        }}
      >
        {title}
      </Title>

      <Paragraph
        style={{
          color:
            textColor,

          lineHeight:
            1.7,

          marginBottom:
            0,
        }}
      >
        {description}
      </Paragraph>
    </Card>
  );
}

/* =========================================================
   DOWN ARROW
========================================================= */

function ArrowDownVisual() {
  return (
    <div
      style={{
        color:
          mediumBlue,

        fontSize:
          28,

        fontWeight:
          700,
      }}
      aria-hidden="true"
    >
      ↓
    </div>
  );
}