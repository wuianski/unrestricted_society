import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

/** Shared black panel used by every artist modal. */
const Item = styled(Paper)(({ theme }) => ({
  borderRadius: 0,
  backgroundColor: "#000",
  padding: theme.spacing(1),
  textAlign: "left",
  color: "#fff",
}));

export default Item;
