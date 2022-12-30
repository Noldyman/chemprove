import { selectedThemeState, Theme } from "../services/theme";
import { useRecoilState } from "recoil";
import {
  Drawer,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  Button,
} from "@mui/material";
import {
  LightMode,
  SettingsBrightness,
  NightsStay,
  Email,
  GitHub,
} from "@mui/icons-material";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsDrawer = ({ isOpen, onClose }: Props) => {
  const [selectedTheme, setSelectedTheme] = useRecoilState(selectedThemeState);

  const handleThemeChange = (_: any, newTheme: string) => {
    if (newTheme && newTheme !== selectedTheme) {
      setSelectedTheme(newTheme as Theme);
    }
  };

  return (
    <Drawer open={isOpen} onClose={onClose} anchor="right">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "25px",
          padding: "20px",
          width: "355px",
        }}
      >
        <div>
          <Typography variant="h6">Theme</Typography>
          <ToggleButtonGroup
            exclusive
            value={selectedTheme}
            onChange={handleThemeChange}
          >
            <ToggleButton value="light">
              <LightMode style={{ marginRight: "10px" }} />
              Light
            </ToggleButton>
            <ToggleButton value="system">
              <SettingsBrightness style={{ marginRight: "10px" }} />
              System
            </ToggleButton>
            <ToggleButton value="dark">
              <NightsStay style={{ marginRight: "10px" }} />
              Dark
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div>
          <Typography variant="h6">Contact</Typography>
          <Typography>
            Get in touch with me if you have any questions, feature requests or
            if you've found a bug in the site. Send me an email or create an
            issue on GitHub.
          </Typography>
          <div style={{ marginTop: "5px", display: "flex", gap: "10px" }}>
            <Button
              fullWidth
              startIcon={<Email />}
              variant="outlined"
              color="inherit"
              onClick={() =>
                (window.location.href = "mailto:info@chemprove.com")
              }
            >
              E-mail
            </Button>
            <Button
              fullWidth
              startIcon={<GitHub />}
              variant="outlined"
              color="inherit"
              onClick={() =>
                window.open("https://github.com/Noldyman/chemprove/issues")
              }
            >
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </Drawer>
  );
};
