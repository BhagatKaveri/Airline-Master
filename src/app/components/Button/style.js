import {
    Button as MuiButton,
    styled
} from "@mui/material";


export const ButtonContainer = styled(MuiButton)(({ theme, direction, top, left, alignItems }) => ({
    padding: 10,
    borderRadius: '4px !important',
}));
