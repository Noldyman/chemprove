import { selectedThemeState, Theme } from "../services/theme";
import { useRecoilState } from "recoil";
import {
  Drawer,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { LightMode, SettingsBrightness, NightsStay } from "@mui/icons-material";

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
      <div style={{ padding: "20px" }}>
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
    </Drawer>
  );
};
