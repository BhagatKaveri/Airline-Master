import {
  Box,
  Grid,
  Icon,
  IconButton,
  styled,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import {
  CheckBoxOutlineBlankRounded,
  CheckBoxRounded,
  CloudDownloadRounded,
  DeleteRounded,
  FilterListRounded,
  FullscreenRounded,
  PrintRounded,
  ReorderRounded,
  SearchRounded,
} from '@mui/icons-material';
import { Paper, Typography } from '@mui/material';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect } from 'react';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
}));
const StyledTable = styled(Table)(() => ({
  whiteSpace: 'pre',
  '& thead': {
    '& tr': { '& th': { paddingLeft: 0, paddingRight: 0 } },
  },
  '& tbody': {
    '& tr': { '& td': { paddingLeft: 0, textTransform: 'capitalize' } },
  },
}));

const subscribarList = [
  {
    ArlnNumCode: '805',
    ArlnAplhaCode: '4X',
    ArlnICAOCode: 'null',
    ArlnName: 'MERCURY AIR CARGO,INC',
    Alliance: '',
  },
  {
    ArlnNumCode: '806',
    ArlnAplhaCode: '7C',
    ArlnICAOCode: 'null',
    ArlnName: 'JEJU AIR CO.LTD.',
    Alliance: '',
  },
  {
    ArlnNumCode: '807',
    ArlnAplhaCode: 'AK',
    ArlnICAOCode: 'null',
    ArlnName: 'AIRASIA BERHED DBA AIRASIA',
    Alliance: '',
  },
  {
    ArlnNumCode: '808',
    ArlnAplhaCode: '7H',
    ArlnICAOCode: 'null',
    ArlnName: 'ERA AVIATION INC',
    Alliance: '',
  },
  {
    ArlnNumCode: '809',
    ArlnAplhaCode: 'RE',
    ArlnICAOCode: 'null',
    ArlnName: 'AER ARANN EXPRESS',
    Alliance: '',
  },
  {
    ArlnNumCode: '810',
    ArlnAplhaCode: 'M6',
    ArlnICAOCode: 'null',
    ArlnName: 'AMERIJET INTERNATIONAL INC.',
    Alliance: '',
  },
  {
    ArlnNumCode: '811',
    ArlnAplhaCode: 'EU',
    ArlnICAOCode: 'null',
    ArlnName: 'CHENGDU AIRLINES',
    Alliance: '',
  },
  {
    ArlnNumCode: '812',
    ArlnAplhaCode: 'L9',
    ArlnICAOCode: 'null',
    ArlnName: 'BELLE AIR EUROPE S.R.L.',
    Alliance: '',
  },
  {
    ArlnNumCode: '813',
    ArlnAplhaCode: '8C',
    ArlnICAOCode: 'null',
    ArlnName: 'AIR TRANSPORT INTERNATIONAL L.L.C.',
    Alliance: '',
  },
  {
    ArlnNumCode: '814',
    ArlnAplhaCode: '9F',
    ArlnICAOCode: 'null',
    ArlnName: 'EUROSTAR (U.K.) LIMITED',
    Alliance: '',
  },
  {
    ArlnNumCode: '815',
    ArlnAplhaCode: 'EP',
    ArlnICAOCode: 'null',
    ArlnName: 'IRAN ASEMAN AIRLINES',
    Alliance: '',
  },
  {
    ArlnNumCode: '816',
    ArlnAplhaCode: '9P',
    ArlnICAOCode: 'null',
    ArlnName: 'PALAU NATIONAL AIRLINES',
    Alliance: '',
  },
  {
    ArlnNumCode: '817',
    ArlnAplhaCode: 'MJ',
    ArlnICAOCode: 'null',
    ArlnName: 'MIHIN LANKA (PVT) LTD.',
    Alliance: '',
  },
  {
    ArlnNumCode: '818',
    ArlnAplhaCode: '6H',
    ArlnICAOCode: 'null',
    ArlnName: 'ISRAIR AIRLINES AND TOURISM LTD.',
    Alliance: '',
  },
  {
    ArlnNumCode: '819',
    ArlnAplhaCode: 'P8',
    ArlnICAOCode: 'null',
    ArlnName: 'AIR MEKONG',
    Alliance: '',
  },
  {
    ArlnNumCode: '820',
    ArlnAplhaCode: '8B',
    ArlnICAOCode: 'null',
    ArlnName: 'BUSINESS AIR CO,LTD',
    Alliance: '',
  },
  {
    ArlnNumCode: '821',
    ArlnAplhaCode: '6K',
    ArlnICAOCode: 'null',
    ArlnName: 'INTER EXPRESS HAVA TASIMACILIK A.S',
    Alliance: '',
  },
  {
    ArlnNumCode: '822',
    ArlnAplhaCode: 'KN',
    ArlnICAOCode: 'null',
    ArlnName: 'CHINA UNITED AIRLINES',
    Alliance: '',
  },
  {
    ArlnNumCode: '823',
    ArlnAplhaCode: 'NN',
    ArlnICAOCode: '',
    ArlnName: 'VIM AIRLINES',
    Alliance: '',
  },
];

const PaginationTable = () => {
  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [post, getPost] = useState([]);
  const API = 'http://65.1.154.157:8080/industry-master-api/v1/airline/data';
  const fetchPost = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        getPost(res);
        console.log(getPost(res));
      });
  };
  useEffect(() => {
    fetchPost();
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableHead>
          <Grid style={{ display: 'flex' }}>
            <Grid>
              <input
                type="search"
                placeholder="search..."
                style={{ width: '550px', height: '50px', marginRight: '40px' }}
              ></input>
            </Grid>
            <Grid style={{ 'margin-left': '200px' }} item sx={{ mt: 2 }}>
              <IconButton>
                <ReorderRounded />
              </IconButton>
              <IconButton>
                <CloudDownloadRounded />
              </IconButton>
              <IconButton>
                <PrintRounded />
              </IconButton>
              <IconButton>
                <FilterListRounded />
              </IconButton>

              <IconButton>
                <FullscreenRounded />
              </IconButton>
            </Grid>
          </Grid>
          <TableRow>
            <TableCell align="center"></TableCell>
            <TableCell align="center">Airline Num Code</TableCell>
            <TableCell align="center">Airline IATA Code</TableCell>
            <TableCell align="center">Airline ICAO Code</TableCell>
            <TableCell align="center">Airline name</TableCell>
            <TableCell align="center">Airline Alliance Code</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            // subscribarList
            //   .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            post.map((item, index) => (
              <TableRow key={index}>
                <TableCell align="left">
                  <IconButton>
                    <Checkbox />
                    {/* <Icon color="black">check_box</Icon> */}
                  </IconButton>
                  <IconButton>
                    <Icon color="black">edit</Icon>
                  </IconButton>
                </TableCell>
                <TableCell align="center">{item.arln_iata_code}</TableCell>
                <TableCell align="center">{item.arln_num_code}</TableCell>
                <TableCell align="center">{item.arln_icao_code}</TableCell>
                <TableCell align="center">{item.alliance_code}</TableCell>
                <TableCell align="center">${item.arln_name}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </StyledTable>

      <TablePagination
        sx={{ px: 2 }}
        page={page}
        component="div"
        rowsPerPage={rowsPerPage}
        count={subscribarList.length}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={handleChangeRowsPerPage}
        nextIconButtonProps={{ 'aria-label': 'Next Page' }}
        backIconButtonProps={{ 'aria-label': 'Previous Page' }}
      />
    </Box>
  );
};

export default PaginationTable;
