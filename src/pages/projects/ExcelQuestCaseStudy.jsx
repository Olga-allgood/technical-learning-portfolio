// src/pages/projects/ExcelQuestCaseStudy.jsx

import {
  Button,
  Card,
  Col,
  Grid,
  Row,
  Space,
  Tag,
  Typography,
} from "antd";

import {
  ArrowLeftOutlined,
  ExportOutlined,
} from "@ant-design/icons";

import { useNavigate } from "react-router-dom";

import diagnosticFeedbackImage from "../../assets/excel-quest/excel-quest-diagnostic-feedback.png";
import level1PracticeImage from "../../assets/excel-quest/excel-quest-level-1-practice.png";
import level2RetrievalImage from "../../assets/excel-quest/excel-quest-level-2-retrieval.png";
import progressiveScaffoldingImage from "../../assets/excel-quest/excel-quest-progressive-scaffolding.png";

const { Title, Text, Paragraph } = Typography;

/* =========================================================
   COLORS
========================================================= */

const BLUE = "#173B63";
const ACCENT = "#4E79A7";
const TEXT = "#4b5563";
const LIGHT_BLUE = "#EDF4FA";
const BORDER = "#D9E5EF";
const GREEN = "#1F8F5F";
const LIGHT_GREEN = "#EEF8F2";

/* =========================================================
   SHARED TEXT STYLES
========================================================= */

const bodyTextStyle = {
  color: TEXT,
  fontSize: 17,
  lineHeight: 1.8,
  marginBottom: 18,
};

const sectionLabelStyle = {
  display: "block",
  color: GREEN,
  fontSize: 12,
  fontWeight: 800,
  textTransform: "uppercase",
  letterSpacing: "0.8px",
};

const compactTextStyle = {
  color: TEXT,
  fontSize: 15,
  lineHeight: 1.75,
  marginBottom: 14,
};

/* =========================================================
   EXCEL QUEST CASE STUDY
========================================================= */

export default function ExcelQuestCaseStudy() {
  const navigate = useNavigate();
  const screens = Grid.useBreakpoint();

  const isMobile = !screens.md;

  const openProject = () => {
    window.open(
      "https://excel-complete-game.vercel.app/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#ffffff",
      }}
    >
      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: isMobile
            ? "22px 20px 0"
            : "30px 32px 0",
        }}
      >
        <Button
          type="text"
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate("/")}
          style={{
            paddingLeft: 0,
            color: ACCENT,
            fontWeight: 600,
          }}
        >
          Back to Portfolio
        </Button>
      </div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: isMobile
            ? "46px 20px 38px"
            : "68px 32px 54px",
        }}
      >
        <Text
          style={{
            display: "block",
            color: ACCENT,
            fontSize: 13,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "1.1px",
            marginBottom: 14,
          }}
        >
          Technical Instructional Design · Custom React Learning
          Experience
        </Text>

        <Title
          level={1}
          style={{
            color: BLUE,
            fontSize: isMobile ? 38 : 54,
            lineHeight: 1.1,
            margin: "0 0 20px",
            maxWidth: 900,
          }}
        >
          Excel Quest
        </Title>

        <Paragraph
          style={{
            maxWidth: 900,
            margin: "0 0 14px",
            color: TEXT,
            fontSize: isMobile ? 18 : 20,
            lineHeight: 1.7,
          }}
        >
          A comprehensive Excel formula learning experience that
          builds foundational workplace skills across calculations,
          business logic, lookups, data cleanup, and analysis.
        </Paragraph>

        <Paragraph
          style={{
            maxWidth: 850,
            margin: "0 0 28px",
            color: "#66727f",
            fontSize: 17,
            lineHeight: 1.7,
          }}
        >
          Designed to move learners from supported formula
          recognition to independent retrieval and construction.
        </Paragraph>

        <Space
          wrap
          size={[8, 8]}
          style={{
            marginBottom: 30,
          }}
        >
          {[
            "React",
            "JavaScript",
            "Instructional Design",
            "Retrieval Practice",
            "Scaffolding",
            "Diagnostic Feedback",
            "Gamification",
          ].map((item) => (
            <Tag
              key={item}
              style={{
                margin: 0,
                padding: "5px 11px",
                borderRadius: 999,
                border: "none",
                background: LIGHT_BLUE,
                color: BLUE,
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              {item}
            </Tag>
          ))}
        </Space>

        <div>
          <Button
            type="primary"
            size="large"
            icon={<ExportOutlined />}
            onClick={openProject}
          >
            Experience Excel Quest
          </Button>
        </div>
      </section>

      {/* =====================================================
          PROJECT SNAPSHOT
      ===================================================== */}

      <section
        style={{
          background: "#F7FAFC",
          borderTop: `1px solid ${BORDER}`,
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: isMobile
              ? "40px 20px"
              : "48px 32px",
          }}
        >
          <Row gutter={[28, 24]}>
            <Col xs={24} md={8}>
              <SummaryItem
                label="Audience"
                value="Beginner and workplace learners developing practical Excel formula skills"
              />
            </Col>

            <Col xs={24} md={8}>
              <SummaryItem
                label="Learning Strategy"
                value="Progressive practice · Retrieval · Scaffolding · Diagnostic feedback"
              />
            </Col>

            <Col xs={24} md={8}>
              <SummaryItem
                label="Technology"
                value="React · JavaScript · CSS · Vite · Local Storage · Vercel"
              />
            </Col>
          </Row>
        </div>
      </section>

      {/* =====================================================
          01 — LEARNING CHALLENGE
      ===================================================== */}

      <CaseSection
        number="01"
        eyebrow="Learning Challenge"
        title="Recognition is not the same as independent performance"
      >
        <Paragraph style={bodyTextStyle}>
          Learners may recognize what SUM, IF, or XLOOKUP does when
          the function appears as an option, but still struggle to
          construct the formula independently in a spreadsheet.
        </Paragraph>

        <Paragraph style={bodyTextStyle}>
          I designed Excel Quest around that gap. The learning path
          gradually shifts responsibility from selecting an
          appropriate formula to retrieving its structure, mapping
          spreadsheet data to arguments, and constructing the formula
          directly.
        </Paragraph>

        <DesignGoal>
          Move learners from recognizing the right formula to
          constructing it independently.
        </DesignGoal>
      </CaseSection>

      {/* =====================================================
          02 — CURRICULUM DESIGN
      ===================================================== */}

      <CaseSection
        number="02"
        eyebrow="Curriculum Design"
        title="Organize formulas around the problems learners need to solve"
      >
        <Paragraph style={bodyTextStyle}>
          Rather than teaching formulas as an isolated list, I grouped
          them into five practical skill families. The sequence begins
          with core calculations and progresses toward conditional
          logic, data retrieval, cleanup, and analysis.
        </Paragraph>

        <Row
          gutter={[14, 14]}
          style={{
            marginTop: 30,
          }}
        >
          <Col xs={24} sm={12} lg={8}>
            <SkillCluster
              number="01"
              title="Formula Foundations"
              formulas="SUM · AVERAGE · COUNT · MIN · MAX"
            />
          </Col>

          <Col xs={24} sm={12} lg={8}>
            <SkillCluster
              number="02"
              title="Business Logic"
              formulas="IF · IFS · AND · OR · IFERROR"
            />
          </Col>

          <Col xs={24} sm={12} lg={8}>
            <SkillCluster
              number="03"
              title="Lookup Mission"
              formulas="XLOOKUP · VLOOKUP · INDEX + MATCH"
            />
          </Col>

          <Col xs={24} sm={12} lg={8}>
            <SkillCluster
              number="04"
              title="Data Cleanup"
              formulas="TRIM · LEFT · RIGHT · LEN · TEXTJOIN"
            />
          </Col>

          <Col xs={24} sm={12} lg={8}>
            <SkillCluster
              number="05"
              title="Data Analysis"
              formulas="SUMIF · SUMIFS · COUNTIF · COUNTIFS · AVERAGEIF"
            />
          </Col>
        </Row>
      </CaseSection>

      {/* =====================================================
          03 — TWO-LEVEL PRACTICE
      ===================================================== */}

      <CaseSection
        number="03"
        eyebrow="Practice Design"
        title="Two levels shift learners from supported application to retrieval"
      >
        <Paragraph style={bodyTextStyle}>
          The two practice levels change the type of thinking required,
          rather than simply making later questions harder. Learners
          first focus on selecting and applying the right function,
          then practice recalling and constructing formulas without
          multiple-choice support.
        </Paragraph>

        <div
          style={{
            margin: "32px 0 42px",
          }}
        >
          <ProgressionFlow
            isMobile={isMobile}
            items={[
              "Interpret the task",
              "Select the formula",
              "Retrieve the structure",
              "Construct independently",
            ]}
          />
        </div>

        {/* LEVEL 1 */}

        <PracticeSection
          label="Level 1"
          title="Supported Application"
          description="Learners interpret realistic spreadsheet scenarios and select the formula that solves the problem. Multiple-choice support reduces syntax-recall demands so attention can remain on function purpose and application."
          image={level1PracticeImage}
          alt="Excel Quest Level 1 multiple-choice formula practice"
        />

        {/* LEVEL 2 */}

        <div
          style={{
            marginTop: isMobile ? 50 : 68,
          }}
        >
          <PracticeSection
            label="Level 2"
            title="Retrieval & Construction"
            description="After completing Level 1, multiple-choice support is removed. Learners retrieve the formula structure, identify the relevant cells, and construct the formula directly in an Excel-style formula bar."
            image={level2RetrievalImage}
            alt="Excel Quest Level 2 formula retrieval and construction practice"
            reverse
          />
        </div>

        <div
          style={{
            marginTop: 38,
            padding: isMobile
              ? "22px 20px"
              : "24px 28px",
            borderRadius: 14,
            background: "#F7FAFC",
            border: `1px solid ${BORDER}`,
          }}
        >
          <Text
            style={{
              display: "block",
              color: GREEN,
              fontSize: 12,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.8px",
              marginBottom: 8,
            }}
          >
            Instructional Progression
          </Text>

          <Paragraph
            style={{
              color: TEXT,
              fontSize: 15,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Level 1 builds supported application. Level 2 removes
            recognition cues and requires retrieval, cell mapping, and
            formula construction.
          </Paragraph>
        </div>
      </CaseSection>

      {/* =====================================================
          04 — SCAFFOLDING + DIAGNOSTIC FEEDBACK
      ===================================================== */}

      <CaseSection
        number="04"
        eyebrow="Scaffolding & Feedback"
        title="Use mistakes to guide the next learning decision"
      >
        <Paragraph style={bodyTextStyle}>
          Formula errors can come from different sources: choosing the
          wrong function, selecting the wrong cells, misordering
          arguments, misunderstanding a condition, or making a syntax
          error. A generic “incorrect” message does not tell the
          learner where the reasoning broke down.
        </Paragraph>

        <Paragraph style={bodyTextStyle}>
          I designed the support system to respond progressively.
          Learners attempt the problem first, receive targeted guidance
          when needed, and can access increasingly explicit support
          rather than immediately being shown the solution.
        </Paragraph>

        {/* PROGRESSIVE SCAFFOLDING */}

        <Row
          gutter={[34, 30]}
          align="middle"
          style={{
            marginTop: 38,
          }}
        >
          <Col xs={24} lg={13}>
            <ScreenshotFrame
              src={progressiveScaffoldingImage}
              alt="Excel Quest guided support for an INDEX and MATCH formula"
            />
          </Col>

          <Col xs={24} lg={11}>
            <Text style={sectionLabelStyle}>
              Progressive Scaffolding
            </Text>

            <Title
              level={3}
              style={{
                color: BLUE,
                margin: "8px 0 14px",
                fontSize: 24,
              }}
            >
              Break complex formulas into manageable decisions
            </Title>

            <Paragraph style={compactTextStyle}>
              For compound formulas such as INDEX + MATCH, guided
              support separates the reasoning process instead of
              immediately displaying the solution.
            </Paragraph>

            <StepItem
              number="1"
              title="Separate the jobs"
              text="Clarify what each function contributes."
            />

            <StepItem
              number="2"
              title="Identify the cells"
              text="Connect spreadsheet data to the appropriate arguments."
            />

            <StepItem
              number="3"
              title="Assemble the formula"
              text="Combine the decisions into the complete structure."
            />
          </Col>
        </Row>

        {/* DIAGNOSTIC FEEDBACK */}

        <Row
          gutter={[34, 30]}
          align="middle"
          style={{
            marginTop: isMobile ? 50 : 70,
          }}
        >
          <Col
            xs={24}
            lg={11}
            order={isMobile ? 2 : 1}
          >
            <Text style={sectionLabelStyle}>
              Diagnostic Feedback
            </Text>

            <Title
              level={3}
              style={{
                color: BLUE,
                margin: "8px 0 14px",
                fontSize: 24,
              }}
            >
              Preserve what the learner got right
            </Title>

            <Paragraph style={compactTextStyle}>
              When possible, feedback identifies successful reasoning
              before directing attention to the remaining problem.
            </Paragraph>

            <Paragraph style={compactTextStyle}>
              If the learner chooses the correct function but
              constructs it incorrectly, the system acknowledges the
              function choice and redirects attention to conditions,
              operators, cell references, arguments, or return values.
            </Paragraph>

            <div
              style={{
                marginTop: 20,
                padding: "18px 20px",
                borderRadius: 12,
                background: LIGHT_GREEN,
                border: "1px solid #D8EBDD",
              }}
            >
              <Text
                style={{
                  color: GREEN,
                  fontWeight: 700,
                  lineHeight: 1.6,
                }}
              >
                Feedback narrows the problem instead of simply
                revealing the answer.
              </Text>
            </div>
          </Col>

          <Col
            xs={24}
            lg={13}
            order={isMobile ? 1 : 2}
          >
            <ScreenshotFrame
              src={diagnosticFeedbackImage}
              alt="Excel Quest diagnostic feedback and guided support"
            />
          </Col>
        </Row>

        {/* PRODUCTIVE SUPPORT SEQUENCE */}

        <div
          style={{
            marginTop: isMobile ? 50 : 64,
            padding: isMobile
              ? "26px 20px"
              : "30px 32px",
            borderRadius: 16,
            background: "#F7FAFC",
            border: `1px solid ${BORDER}`,
          }}
        >
          <Text style={sectionLabelStyle}>
            Productive Support Sequence
          </Text>

          <div
            style={{
              marginTop: 18,
            }}
          >
            <ProgressionFlow
              isMobile={isMobile}
              items={[
                "Attempt",
                "Targeted Feedback",
                "Guided Support",
                "Answer Access",
              ]}
            />
          </div>

          <Paragraph
            style={{
              color: TEXT,
              fontSize: 15,
              lineHeight: 1.7,
              margin: "18px 0 0",
            }}
          >
            If learners remain stuck after guided support, they can
            reveal the answer and then type the formula themselves
            before continuing.
          </Paragraph>
        </div>
      </CaseSection>

      {/* =====================================================
          05 — TECHNICAL IMPLEMENTATION
      ===================================================== */}

      <CaseSection
        number="05"
        eyebrow="Technical Implementation"
        title="Custom development supports the learning design"
      >
        <Paragraph style={bodyTextStyle}>
          I built Excel Quest as a custom React application so the
          practice experience could respond to learner performance,
          preserve progress, and support formula construction rather
          than relying only on predefined answer choices.
        </Paragraph>

        <Row
          gutter={[16, 16]}
          style={{
            marginTop: 30,
          }}
        >
          <Col xs={24} md={12}>
            <TechnicalCard
              title="Reusable Challenge Architecture"
              text="Challenge content is structured as reusable data, allowing formula practice to scale across modules without rebuilding the interface."
            />
          </Col>

          <Col xs={24} md={12}>
            <TechnicalCard
              title="Custom Formula Practice"
              text="Learners type formulas into an Excel-style input rather than relying exclusively on recognition-based interactions."
            />
          </Col>

          <Col xs={24} md={12}>
            <TechnicalCard
              title="Responsive Feedback Logic"
              text="Learner attempts trigger targeted guidance and scaffolded support based on the type of error."
            />
          </Col>

          <Col xs={24} md={12}>
            <TechnicalCard
              title="Progress Persistence"
              text="Browser storage preserves completed challenges between sessions on the same browser and device."
            />
          </Col>
        </Row>

        <Space
          wrap
          size={[8, 8]}
          style={{
            marginTop: 28,
          }}
        >
          {[
            "React",
            "JavaScript",
            "CSS",
            "Vite",
            "Local Storage",
            "Responsive Design",
            "Vercel",
          ].map((item) => (
            <Tag
              key={item}
              style={{
                margin: 0,
                padding: "5px 10px",
                borderRadius: 999,
                border: "none",
                background: LIGHT_BLUE,
                color: BLUE,
                fontWeight: 600,
              }}
            >
              {item}
            </Tag>
          ))}
        </Space>
      </CaseSection>

      {/* =====================================================
          06 — DESIGN TAKEAWAY
      ===================================================== */}

      <section
        style={{
          background: BLUE,
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: isMobile
              ? "48px 20px"
              : "58px 32px",
            textAlign: "center",
          }}
        >
          <Text
            style={{
              display: "block",
              color: "#BFD3E5",
              fontSize: 12,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: 14,
            }}
          >
            Design Takeaway
          </Text>

          <Title
            level={2}
            style={{
              color: "#ffffff",
              fontSize: isMobile ? 27 : 32,
              lineHeight: 1.35,
              margin: "0 auto 16px",
              maxWidth: 760,
            }}
          >
            Move learners from recognizing the right formula to
            constructing it independently.
          </Title>

          <Paragraph
            style={{
              color: "#D7E3ED",
              fontSize: isMobile ? 16 : 17,
              lineHeight: 1.7,
              maxWidth: 700,
              margin: "0 auto 26px",
            }}
          >
            Excel Quest combines progressive practice, retrieval,
            scaffolding, and diagnostic feedback to support that
            transition.
          </Paragraph>

          <Button
            size="large"
            icon={<ExportOutlined />}
            onClick={openProject}
            style={{
              background: "#ffffff",
              color: BLUE,
              borderColor: "#ffffff",
              fontWeight: 700,
            }}
          >
            Experience Excel Quest
          </Button>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer
        style={{
          padding: "30px 20px",
          textAlign: "center",
          borderTop: `1px solid ${BORDER}`,
          background: "#ffffff",
        }}
      >
        <Text
          style={{
            color: "#7A8793",
            fontSize: 13,
          }}
        >
          Olga Orlova · Technical Instructional Designer
        </Text>
      </footer>
    </main>
  );
}

/* =========================================================
   CASE SECTION
========================================================= */

function CaseSection({
  number,
  eyebrow,
  title,
  children,
}) {
  const screens = Grid.useBreakpoint();
  const isMobile = !screens.md;

  return (
    <section
      style={{
        borderBottom: `1px solid ${BORDER}`,
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: isMobile
            ? "58px 20px"
            : "74px 32px",
        }}
      >
        <Row gutter={[28, 22]}>
          <Col xs={24} md={5}>
            <Text
              style={{
                display: "block",
                color: ACCENT,
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: "0.8px",
                marginBottom: 7,
              }}
            >
              {number}
            </Text>

            <Text
              style={{
                color: "#7A8793",
                fontSize: 12,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.7px",
              }}
            >
              {eyebrow}
            </Text>
          </Col>

          <Col xs={24} md={19}>
            <Title
              level={2}
              style={{
                color: BLUE,
                fontSize: isMobile ? 28 : 34,
                lineHeight: 1.3,
                margin: "0 0 24px",
                maxWidth: 900,
              }}
            >
              {title}
            </Title>

            {children}
          </Col>
        </Row>
      </div>
    </section>
  );
}

/* =========================================================
   SUMMARY ITEM
========================================================= */

function SummaryItem({
  label,
  value,
}) {
  return (
    <div>
      <Text
        style={{
          display: "block",
          color: ACCENT,
          fontSize: 12,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.8px",
          marginBottom: 7,
        }}
      >
        {label}
      </Text>

      <Text
        style={{
          color: BLUE,
          fontSize: 15,
          lineHeight: 1.65,
          fontWeight: 600,
        }}
      >
        {value}
      </Text>
    </div>
  );
}

/* =========================================================
   SCREENSHOT FRAME
========================================================= */

function ScreenshotFrame({
  src,
  alt,
}) {
  return (
    <div
      style={{
        width: "100%",
        border: `1px solid ${BORDER}`,
        borderRadius: 16,
        overflow: "hidden",
        background: "#F7FAFC",
        boxShadow:
          "0 8px 24px rgba(30, 70, 110, 0.07)",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />
    </div>
  );
}

/* =========================================================
   DESIGN GOAL
========================================================= */

function DesignGoal({
  children,
}) {
  return (
    <div
      style={{
        marginTop: 28,
        padding: "22px 24px",
        borderLeft: `4px solid ${GREEN}`,
        borderRadius: 10,
        background: LIGHT_GREEN,
      }}
    >
      <Text
        style={{
          display: "block",
          color: GREEN,
          fontSize: 12,
          fontWeight: 800,
          textTransform: "uppercase",
          letterSpacing: "0.8px",
          marginBottom: 8,
        }}
      >
        Core Design Goal
      </Text>

      <Text
        style={{
          color: BLUE,
          fontSize: 19,
          lineHeight: 1.6,
          fontWeight: 700,
        }}
      >
        {children}
      </Text>
    </div>
  );
}

/* =========================================================
   SKILL CLUSTER
========================================================= */

function SkillCluster({
  number,
  title,
  formulas,
}) {
  return (
    <Card
      style={{
        height: "100%",
        borderRadius: 14,
        border: `1px solid ${BORDER}`,
        background: "#ffffff",
      }}
      styles={{
        body: {
          padding: 20,
        },
      }}
    >
      <Text
        style={{
          display: "block",
          color: GREEN,
          fontSize: 11,
          fontWeight: 800,
          letterSpacing: "0.7px",
          marginBottom: 7,
        }}
      >
        MODULE {number}
      </Text>

      <Title
        level={4}
        style={{
          color: BLUE,
          fontSize: 17,
          margin: "0 0 9px",
        }}
      >
        {title}
      </Title>

      <Text
        style={{
          color: TEXT,
          fontSize: 13,
          lineHeight: 1.7,
        }}
      >
        {formulas}
      </Text>
    </Card>
  );
}

/* =========================================================
   PRACTICE SECTION
========================================================= */

function PracticeSection({
  label,
  title,
  description,
  image,
  alt,
  reverse = false,
}) {
  const screens = Grid.useBreakpoint();
  const isMobile = !screens.lg;

  const textOrder = isMobile
    ? 1
    : reverse
      ? 2
      : 1;

  const imageOrder = isMobile
    ? 2
    : reverse
      ? 1
      : 2;

  return (
    <Row
      gutter={[34, 28]}
      align="middle"
    >
      <Col
        xs={24}
        lg={10}
        order={textOrder}
      >
        <Text
          style={{
            display: "block",
            color: GREEN,
            fontSize: 12,
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.8px",
            marginBottom: 8,
          }}
        >
          {label}
        </Text>

        <Title
          level={3}
          style={{
            color: BLUE,
            margin: "0 0 14px",
            fontSize: 25,
          }}
        >
          {title}
        </Title>

        <Paragraph
          style={{
            color: TEXT,
            fontSize: 16,
            lineHeight: 1.75,
            margin: 0,
          }}
        >
          {description}
        </Paragraph>
      </Col>

      <Col
        xs={24}
        lg={14}
        order={imageOrder}
      >
        <ScreenshotFrame
          src={image}
          alt={alt}
        />
      </Col>
    </Row>
  );
}

/* =========================================================
   STEP ITEM
========================================================= */

function StepItem({
  number,
  title,
  text,
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: 13,
        marginTop: 17,
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          flexShrink: 0,
          width: 30,
          height: 30,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: LIGHT_GREEN,
          color: GREEN,
          fontSize: 13,
          fontWeight: 800,
        }}
      >
        {number}
      </div>

      <div>
        <Text
          style={{
            display: "block",
            color: BLUE,
            fontSize: 15,
            fontWeight: 700,
            marginBottom: 3,
          }}
        >
          {title}
        </Text>

        <Text
          style={{
            color: TEXT,
            fontSize: 14,
            lineHeight: 1.6,
          }}
        >
          {text}
        </Text>
      </div>
    </div>
  );
}

/* =========================================================
   TECHNICAL CARD
========================================================= */

function TechnicalCard({
  title,
  text,
}) {
  return (
    <Card
      style={{
        height: "100%",
        borderRadius: 14,
        border: `1px solid ${BORDER}`,
      }}
      styles={{
        body: {
          padding: 20,
        },
      }}
    >
      <Title
        level={4}
        style={{
          color: BLUE,
          fontSize: 17,
          margin: "0 0 8px",
        }}
      >
        {title}
      </Title>

      <Paragraph
        style={{
          color: TEXT,
          fontSize: 14,
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        {text}
      </Paragraph>
    </Card>
  );
}

/* =========================================================
   PROGRESSION FLOW
========================================================= */

function ProgressionFlow({
  items,
  isMobile,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile
          ? "column"
          : "row",
        alignItems: "stretch",
        gap: isMobile ? 9 : 0,
        width: "100%",
      }}
    >
      {items.map((item, index) => (
        <div
          key={item}
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
          }}
        >
          <div
            style={{
              flex: 1,
              minHeight: 58,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px 14px",
              borderRadius: 11,
              border: `1px solid ${BORDER}`,
              background:
                index === items.length - 1
                  ? LIGHT_GREEN
                  : "#F7FAFC",
              color:
                index === items.length - 1
                  ? GREEN
                  : BLUE,
              fontSize: 14,
              fontWeight: 700,
              lineHeight: 1.4,
              textAlign: "center",
            }}
          >
            {item}
          </div>

          {index < items.length - 1 && (
            <div
              style={{
                width: isMobile ? 0 : 26,
                height: isMobile ? 15 : 1,
                margin: isMobile
                  ? "0 auto"
                  : "0 7px",
                borderLeft: isMobile
                  ? `2px solid ${BORDER}`
                  : "none",
                borderTop: isMobile
                  ? "none"
                  : `2px solid ${BORDER}`,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}