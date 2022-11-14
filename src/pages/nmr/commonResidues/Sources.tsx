import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Bookmark } from "@mui/icons-material";
import { sources } from "../../../data/H_NMR_COMMON_RESIDUES";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const Sources = ({ open, onClose }: Props) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Sources</DialogTitle>
      <Divider />
      <DialogContent>
        <Typography>
          The following sources were used for the common residue table.
        </Typography>
        <List>
          {sources.map((s, i) => (
            <ListItem key={i} button onClick={() => window.open(s.url)}>
              <ListItemIcon>
                <Bookmark />
              </ListItemIcon>
              <ListItemText>{s.label}</ListItemText>
            </ListItem>
          ))}
        </List>
      </DialogContent>
    </Dialog>
  );
};
