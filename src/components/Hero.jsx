import {
  Button,
  Col,
  Grid,
  Row,
  Typography,
} from "antd";

import {
  ArrowDownOutlined,
} from "@ant-design/icons";

import olgaImage from "../assets/olga.png";

const {
  Title,
  Text,
  Paragraph,
} = Typography;

export default function Hero() {
  const screens = Grid.useBreakpoint();

  const isMobile = !screens.md;

  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section
      style={{
        padding: isMobile
          ? "36px 0 48px"
          : "56px 0 72px",
      }}
    >
      <Row
        gutter={[
          isMobile ? 0 : 56,
          32,
        ]}
        align="middle"
      >
        {/* PHOTO */}

        <Col
          xs={24}
          md={10}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 460,
              margin: isMobile
                ? "0 auto"
                : 0,
            }}
          >
            <div
              style={{
                width: "100%",
                overflow: "hidden",
                borderRadius: 18,

                boxShadow:
                  "0 10px 32px rgba(20, 70, 130, 0.12)",
              }}
            >
              <img
                src={olgaImage}
                alt="Olga Orlova"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>
          </div>
        </Col>

        {/* TEXT */}

        <Col
          xs={24}
          md={14}
        >
          <div
            style={{
              maxWidth: 650,

              margin: isMobile
                ? "8px auto 0"
                : 0,

              textAlign: isMobile
                ? "center"
                : "left",
            }}
          >
            {/* NAME */}

            <Text
              strong
              style={{
                display: "block",

                fontSize: isMobile
                  ? 24
                  : 30,

                lineHeight: 1.2,

                color: "#164A7B",

                marginBottom: 14,
              }}
            >
              Olga Orlova
            </Text>

            {/* PROFESSIONAL TITLE */}

            <Title
              level={1}
              style={{
                margin: 0,

                fontSize: isMobile
                  ? 32
                  : 42,

                lineHeight: 1.12,

                letterSpacing:
                  "-0.6px",

                maxWidth: 630,
              }}
            >
              Technical Instructional
              Designer & Learning
              Technologist
            </Title>

            {/* DESCRIPTION */}

            <Paragraph
              type="secondary"
              style={{
                marginTop: 22,
                marginBottom: 0,

                fontSize: isMobile
                  ? 16
                  : 18,

                lineHeight: 1.7,

                maxWidth: 600,

                marginLeft: isMobile
                  ? "auto"
                  : 0,

                marginRight: isMobile
                  ? "auto"
                  : 0,
              }}
            >
              I design interactive
              learning experiences that
              combine instructional
              design, technology, and
              hands-on practice to help
              learners build practical
              skills.
            </Paragraph>

            {/* BUTTON */}

            <div
              style={{
                marginTop: 26,
              }}
            >
              <Button
                type="primary"
                size="large"
                icon={
                  <ArrowDownOutlined />
                }
                onClick={
                  scrollToProjects
                }
              >
                View Projects
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
}