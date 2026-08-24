// src/components/ProjectCard.jsx

import {
  Button,
  Card,
  Grid,
  Space,
  Tag,
  Typography,
} from "antd";

import {
  ArrowRightOutlined,
  ExportOutlined,
  PlayCircleOutlined,
  ReadOutlined,
} from "@ant-design/icons";

import {
  useNavigate,
} from "react-router-dom";

const {
  Title,
  Text,
  Paragraph,
} = Typography;

export default function ProjectCard({
  project,
}) {
  const navigate = useNavigate();

  const screens =
    Grid.useBreakpoint();

  const isMobile =
    !screens.md;

  const handleViewProject = () => {
    window.open(
      project.liveUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <Card
      style={{
        width: "100%",
        height: "100%",

        border: "none",

        borderRadius: 18,

        overflow: "hidden",

        background: "#ffffff",

        boxShadow:
          "0 8px 28px rgba(30, 70, 110, 0.10)",
      }}
      styles={{
        body: {
          padding: 0,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      {/* TITLE */}

      <div
        style={{
          padding: isMobile
            ? "20px 20px 16px"
            : "26px 28px 18px",
        }}
      >
        <Text
          style={{
            display: "block",

            fontSize: 13,

            fontWeight: 600,

            color: "#4E79A7",

            textTransform:
              "uppercase",

            letterSpacing:
              "0.6px",

            marginBottom: 7,
          }}
        >
          {project.category}
        </Text>

        <Title
          level={2}
          style={{
            margin: 0,

            fontSize: isMobile
              ? 24
              : 28,

            color: "#173B63",
          }}
        >
          {project.title}
        </Title>
      </div>

      {/* IMAGE */}

      <div
        style={{
          width: "100%",

          aspectRatio: "16 / 9",

          background:
            "#EDF4FA",

          overflow: "hidden",

          display: "flex",

          alignItems: "center",

          justifyContent:
            "center",
        }}
      >
        <img
          src={project.image}
          alt={`${project.title} preview`}
          style={{
            width: "100%",
            height: "100%",

            objectFit: "contain",

            display: "block",
          }}
        />
      </div>

      {/* DESCRIPTION */}

      <div
        style={{
          padding: isMobile
            ? 20
            : 28,

          display: "flex",

          flexDirection:
            "column",

          flex: 1,
        }}
      >
        <Paragraph
          style={{
            fontSize: 16,

            lineHeight: 1.7,

            color: "#4b5563",

            marginBottom: 20,
          }}
        >
          {project.description}
        </Paragraph>

        {/* SKILLS */}

        <Space
          wrap
          size={[6, 8]}
          style={{
            marginBottom: 26,
          }}
        >
          {project.skills.map(
            (skill) => (
              <Tag
                key={skill}
                style={{
                  padding:
                    "3px 9px",

                  borderRadius:
                    999,

                  border: "none",

                  background:
                    "#EDF4FA",

                  color:
                    "#164A7B",
                }}
              >
                {skill}
              </Tag>
            )
          )}
        </Space>

        {/* ACTIONS */}

        <Space
          wrap
          size="middle"
          style={{
            marginTop: "auto",
          }}
        >
          <Button
            type="primary"
            icon={
              <ExportOutlined />
            }
            onClick={
              handleViewProject
            }
          >
            View Project
          </Button>

          {project.demoUrl && (
            <Button
              icon={
                <PlayCircleOutlined />
              }
              onClick={() =>
                window.open(
                  project.demoUrl,
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              1-Min Demo
            </Button>
          )}

          {project.caseStudyPath && (
            <Button
              type="link"
              icon={
                <ReadOutlined />
              }
              onClick={() =>
                navigate(
                  project.caseStudyPath
                )
              }
            >
              Design Process
              <ArrowRightOutlined />
            </Button>
          )}
        </Space>
      </div>
    </Card>
  );
}