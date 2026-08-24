// src/pages/About.jsx

import {
  Button,
  Grid,
  Layout,
  Typography,
} from "antd";

import {
  ArrowLeftOutlined,
} from "@ant-design/icons";

import {
  useNavigate,
} from "react-router-dom";

import PortfolioHeader from "../components/PortfolioHeader";

const {
  Content,
  Footer,
} = Layout;

const {
  Title,
  Paragraph,
  Text,
} = Typography;

export default function About() {
  const navigate =
    useNavigate();

  const screens =
    Grid.useBreakpoint();

  const isMobile =
    !screens.md;

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
            maxWidth: 880,
            margin: "0 auto",

            padding: isMobile
              ? "48px 20px 72px"
              : "72px 40px 96px",
          }}
        >
          {/* BACK */}

          <Button
            type="link"
            icon={
              <ArrowLeftOutlined />
            }
            onClick={() =>
              navigate("/")
            }
            style={{
              paddingLeft: 0,
              marginBottom: 24,
            }}
          >
            Back to Portfolio
          </Button>

          {/* HEADING */}

          <Text
            strong
            style={{
              display: "block",

              fontSize: isMobile
                ? 20
                : 24,

              color: "#164A7B",

              marginBottom: 8,
            }}
          >
            Olga Orlova
          </Text>

          <Title
            level={1}
            style={{
              marginTop: 0,
              marginBottom: 36,

              color: "#173B63",

              fontSize: isMobile
                ? 34
                : 44,

              lineHeight: 1.15,
            }}
          >
            About Me
          </Title>

          {/* STORY */}

          <div
            style={{
              fontSize: 18,
              lineHeight: 1.85,
              color: "#374151",
            }}
          >
            <Paragraph
              style={{
                fontSize: "inherit",
                lineHeight: "inherit",
                marginBottom: 28,
              }}
            >
              My career began in education,
              where I developed curriculum,
              taught multilingual learners,
              conducted needs assessments,
              created multimedia learning
              content, and helped educators
              integrate technology into their
              teaching. That experience gave
              me a strong foundation in
              learner-centered design and a
              lasting interest in how
              technology can make learning
              more effective.
            </Paragraph>

            <Paragraph
              style={{
                fontSize: "inherit",
                lineHeight: "inherit",
                marginBottom: 28,
              }}
            >
              Over time, my work moved
              increasingly toward technology.
              I worked on large language model
              projects involving multilingual
              data, quality review, and
              annotation guidelines, then
              completed full-stack software
              development training through Ada
              Developers Academy. During my
              software engineering internship
              at ExtraHop, I worked with React,
              TypeScript, APIs, databases, and
              cloud-based user management
              systems.
            </Paragraph>

            <Paragraph
              style={{
                fontSize: "inherit",
                lineHeight: "inherit",
                marginBottom: 36,
              }}
            >
              Today, I bring those experiences
              together through technical
              instructional design and learning
              technology. I am especially
              interested in creating learning
              experiences that do more than
              present information: learners
              should practice, make decisions,
              receive useful feedback, and
              progressively build confidence
              with technical skills.
            </Paragraph>
          </div>

          {/* RETURN TO PROJECTS */}

          <Button
            type="primary"
            size="large"
            onClick={() => {
              navigate("/");

              setTimeout(() => {
                document
                  .getElementById(
                    "projects"
                  )
                  ?.scrollIntoView({
                    behavior:
                      "smooth",
                  });
              }, 100);
            }}
          >
            View Projects
          </Button>
        </main>
      </Content>

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