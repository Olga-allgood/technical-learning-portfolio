// src/components/PortfolioHeader.jsx

import { useState } from "react";

import {
  Button,
  Drawer,
  Grid,
  Space,
  Typography,
} from "antd";

import {
  FileTextOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

const { Text } = Typography;

const blue = "#173B63";

export default function PortfolioHeader() {
  const navigate = useNavigate();
  const location = useLocation();

  const screens =
    Grid.useBreakpoint();

  const isMobile =
    !screens.md;

  const [
    drawerOpen,
    setDrawerOpen,
  ] = useState(false);

  /* =========================================================
     NAVIGATION
  ========================================================= */

  const goToHomeSection = (
    sectionId
  ) => {
    setDrawerOpen(false);

    if (
      location.pathname === "/"
    ) {
      document
        .getElementById(
          sectionId
        )
        ?.scrollIntoView({
          behavior: "smooth",
        });

      return;
    }

    navigate(
      `/#${sectionId}`
    );
  };

  const goToAbout = () => {
    setDrawerOpen(false);

    navigate("/about");
  };

  const openResume = () => {
    setDrawerOpen(false);

    window.open(
      "/Olga-Orlova-Resume.pdf",
      "_blank",
      "noopener,noreferrer"
    );
  };

  /* =========================================================
     DESKTOP NAVIGATION
  ========================================================= */

  const desktopNavigation = (
    <Space size={4}>
      <Button
        type="text"
        onClick={() =>
          goToHomeSection(
            "projects"
          )
        }
      >
        Projects
      </Button>

      <Button
        type="text"
        onClick={goToAbout}
      >
        About
      </Button>

      <Button
        type="text"
        icon={
          <FileTextOutlined />
        }
        onClick={openResume}
      >
        Resume
      </Button>

      <Button
        type="text"
        onClick={() =>
          goToHomeSection(
            "contact"
          )
        }
      >
        Contact
      </Button>
    </Space>
  );

  return (
    <>
      <header
        style={{
          width: "100%",

          background:
            "#ffffff",

          borderBottom:
            "1px solid #f0f0f0",

          position: "sticky",

          top: 0,

          zIndex: 100,
        }}
      >
        <div
          style={{
            width: "100%",

            maxWidth: 1200,

            margin: "0 auto",

            padding: isMobile
              ? "14px 18px"
              : "16px 40px",

            display: "flex",

            alignItems:
              "center",

            justifyContent:
              "space-between",

            gap: 20,
          }}
        >
          {/* NAME */}

          <button
            type="button"
            onClick={() =>
              navigate("/")
            }
            style={{
              border: "none",

              background:
                "transparent",

              padding: 0,

              cursor:
                "pointer",

              textAlign:
                "left",
            }}
          >
            <Text
              strong
              style={{
                color: blue,

                fontSize: 18,

                whiteSpace:
                  "nowrap",
              }}
            >
              Olga Orlova
            </Text>
          </button>

          {/* DESKTOP NAV */}

          {!isMobile &&
            desktopNavigation}

          {/* MOBILE MENU */}

          {isMobile && (
            <Button
              type="text"
              icon={
                <MenuOutlined />
              }
              onClick={() =>
                setDrawerOpen(
                  true
                )
              }
              style={{
                fontSize: 18,
              }}
            />
          )}
        </div>
      </header>

      {/* =====================================================
          MOBILE DRAWER
      ===================================================== */}

      <Drawer
        title="Olga Orlova"
        placement="right"
        open={drawerOpen}
        onClose={() =>
          setDrawerOpen(false)
        }
        width={280}
      >
        <Space
          direction="vertical"
          size={6}
          style={{
            width: "100%",
          }}
        >
          <MobileNavButton
            onClick={() =>
              goToHomeSection(
                "projects"
              )
            }
          >
            Projects
          </MobileNavButton>

          <MobileNavButton
            onClick={
              goToAbout
            }
          >
            About
          </MobileNavButton>

          <MobileNavButton
            icon={
              <FileTextOutlined />
            }
            onClick={
              openResume
            }
          >
            Resume
          </MobileNavButton>

          <MobileNavButton
            onClick={() =>
              goToHomeSection(
                "contact"
              )
            }
          >
            Contact
          </MobileNavButton>
        </Space>
      </Drawer>
    </>
  );
}

/* =========================================================
   MOBILE BUTTON
========================================================= */

function MobileNavButton({
  children,
  icon,
  onClick,
}) {
  return (
    <Button
      type="text"
      block
      icon={icon}
      onClick={onClick}
      style={{
        height: 44,

        display: "flex",

        alignItems:
          "center",

        justifyContent:
          "flex-start",

        fontSize: 16,

        textAlign:
          "left",
      }}
    >
      {children}
    </Button>
  );
}