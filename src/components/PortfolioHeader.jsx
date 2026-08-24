// src/components/PortfolioHeader.jsx

import {
  Button,
  Grid,
  Layout,
  Space,
  Typography,
} from "antd";

import {
  useNavigate,
} from "react-router-dom";

const {
  Header,
} = Layout;

const {
  Text,
} = Typography;

export default function PortfolioHeader() {
  const navigate =
    useNavigate();

  const screens =
    Grid.useBreakpoint();

  const isMobile =
    !screens.md;

  const navigateToSection = (
    sectionId
  ) => {
    navigate("/");

    setTimeout(() => {
      document
        .getElementById(
          sectionId
        )
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 100);
  };

  return (
    <Header
      style={{
        height: 64,

        padding: isMobile
          ? "0 16px"
          : "0 40px",

        display: "flex",

        alignItems:
          "center",

        justifyContent:
          "space-between",

        background:
          "#ffffff",

        borderBottom:
          "1px solid #f0f0f0",

        position: "sticky",

        top: 0,

        zIndex: 100,
      }}
    >
      {/* NAME */}

      <Text
        strong
        onClick={() =>
          navigate("/")
        }
        style={{
          fontSize: isMobile
            ? 16
            : 18,

          color: "#173B63",

          cursor: "pointer",

          whiteSpace:
            "nowrap",
        }}
      >
        Olga Orlova
      </Text>

      {/* DESKTOP NAV */}

      {!isMobile && (
        <Space>
          <Button
            type="text"
            onClick={() =>
              navigateToSection(
                "projects"
              )
            }
          >
            Projects
          </Button>

          <Button
            type="text"
            onClick={() =>
              navigate("/about")
            }
          >
            About
          </Button>

          <Button
            type="text"
            onClick={() =>
              navigateToSection(
                "contact"
              )
            }
          >
            Contact
          </Button>
        </Space>
      )}

      {/* MOBILE */}

      {isMobile && (
        <Button
          type="text"
          onClick={() =>
            navigate("/about")
          }
        >
          About
        </Button>
      )}
    </Header>
  );
}