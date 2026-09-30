import { Button, Typography } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Paragraph, Text } = Typography;

export default function FormulaQuestPrivacy() {
  const navigate = useNavigate();

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        padding: "48px 20px 80px",
      }}
    >
      <div
        style={{
          maxWidth: 820,
          margin: "0 auto",
        }}
      >
        <Button
          type="text"
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate("/")}
          style={{
            paddingLeft: 0,
            marginBottom: 28,
            color: "#1F8F5F",
            fontWeight: 600,
          }}
        >
          Back to Portfolio
        </Button>

        <Text
          strong
          style={{
            display: "block",
            color: "#1F8F5F",
            fontSize: 13,
            textTransform: "uppercase",
            letterSpacing: "1px",
            marginBottom: 10,
          }}
        >
          Formula Quest
        </Text>

        <Title
          level={1}
          style={{
            color: "#173B63",
            marginBottom: 8,
          }}
        >
          Privacy Policy
        </Title>

        <Text type="secondary">
          Effective date: September 30, 2026
        </Text>

        <Paragraph
          style={{
            fontSize: 17,
            lineHeight: 1.8,
            marginTop: 32,
          }}
        >
          Formula Quest is an educational application developed by
          Olga Orlova Learning. This Privacy Policy explains how information
          is handled when you use the Formula Quest application.
        </Paragraph>

        <Title level={2}>Information We Collect</Title>

        <Paragraph style={{ fontSize: 16, lineHeight: 1.8 }}>
          Formula Quest does not collect, transmit, or share personal
          information or sensitive user data.
        </Paragraph>

        <Paragraph style={{ fontSize: 16, lineHeight: 1.8 }}>
          The app does not require users to create an account or provide a
          name, email address, location, or other personal information.
        </Paragraph>

        <Title level={2}>Learning Progress</Title>

        <Paragraph style={{ fontSize: 16, lineHeight: 1.8 }}>
          Formula Quest stores learning progress locally on the user's device
          so that progress can be restored when the user returns to the app.
          This information is stored using local device storage and is not
          transmitted to the developer or to third parties.
        </Paragraph>

        <Paragraph style={{ fontSize: 16, lineHeight: 1.8 }}>
          Users can reset their learning progress from within the application.
          Locally stored application data can also be removed by clearing the
          app's data or uninstalling the application.
        </Paragraph>

        <Title level={2}>Analytics and Advertising</Title>

        <Paragraph style={{ fontSize: 16, lineHeight: 1.8 }}>
          Formula Quest does not use advertising services or third-party
          analytics services.
        </Paragraph>

        <Title level={2}>Data Sharing</Title>

        <Paragraph style={{ fontSize: 16, lineHeight: 1.8 }}>
          Formula Quest does not sell, share, or transmit user data to third
          parties.
        </Paragraph>

        <Title level={2}>Data Security</Title>

        <Paragraph style={{ fontSize: 16, lineHeight: 1.8 }}>
          Formula Quest does not transmit personal or sensitive user data to
          the developer, and no such information is stored on
          developer-operated servers. Learning progress remains locally on the
          user's device and is subject to the device's security protections.
        </Paragraph>

        <Title level={2}>Children's Privacy</Title>

        <Paragraph style={{ fontSize: 16, lineHeight: 1.8 }}>
          Formula Quest does not knowingly collect personal information from
          children or other users.
        </Paragraph>

        <Title level={2}>Changes to This Privacy Policy</Title>

        <Paragraph style={{ fontSize: 16, lineHeight: 1.8 }}>
          This Privacy Policy may be updated if the application's features or
          data practices change. Any updated policy will be published on this
          page with a revised effective date.
        </Paragraph>

        <Title level={2}>Contact</Title>

        <Paragraph style={{ fontSize: 16, lineHeight: 1.8 }}>
          Questions about this Privacy Policy may be sent to:
        </Paragraph>

        <Paragraph style={{ fontSize: 16, lineHeight: 1.8 }}>
          <strong>Olga Orlova Learning</strong>
          <br />
          <a href="mailto:olga.s.orlova@gmail.com">
            olga.s.orlova@gmail.com
          </a>
        </Paragraph>

        <div
          style={{
            marginTop: 48,
            paddingTop: 24,
            borderTop: "1px solid #e5e7eb",
          }}
        >
          <Text type="secondary">
            Formula Quest is an independent educational application.
          </Text>
        </div>
      </div>
    </main>
  );
}