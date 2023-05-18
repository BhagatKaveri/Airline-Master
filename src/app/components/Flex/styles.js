import {
    styled
} from "@mui/material";


export const FlexContainer = styled('div')(({ theme, direction, top, padding, left, alignItems, flex, justifyContent }) => ({
    display: 'flex',
    flexDirection: direction || 'row',
    marginTop: top || 0,
    marginLeft: left || 0,
    alignItems: alignItems,
    flex: 0 || flex,
    padding: padding,
    justifyContent: justifyContent || ''

}));
