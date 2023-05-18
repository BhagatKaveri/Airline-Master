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
  Modal,
  Fade,
  Typography,
  Backdrop,
  Paper,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import {
  CheckBoxRounded,
  CloudDownloadRounded,
  DeleteRounded,
  FilterListRounded,
  FullscreenRounded,
  PrintRounded,
  ReorderRounded,
  CloseOutlined,
} from '@mui/icons-material';
import { useState } from 'react';
import React, { useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import axios from 'axios';
import fetch from 'cross-fetch';
import { Breadcrumb, SimpleCard } from 'app/components';
import SearchAirline from './SearchAirline/SearchAirline';
import { AirLineContainer } from './styles';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

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
const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));
const CountBadge = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginLeft: '8px',
  fontWeight: 600,
  color: 'black',
  fontSize: '16px', // Adjust the font size as desired
}));
const AirlineTable = () => {
  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setData] = useState([]);
  const [filters, setFilters] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedCount, setSelectedCount] = useState(0);

  const isMobile = useMediaQuery('(max-width: 600px)'); // Define the maximum width for mobile devices
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));
  //-------------------getdata---------------------
  const fetchGet = () => {
    axios.get('https://test.iconcile.com/industry-master-api/v1/airline/data').then((response) => {
      setData(response.data);
    });
  };
  useEffect(() => {
    fetchGet();
  }, []);
  //-------------------deletedata---------------------
  const deleteData = (id) => {
    const url = 'https://test.iconcile.com/industry-master-api/v1/airline/delete';
    const payload = [{ recordNumber: id }];

    axios
      .delete(url, {
        headers: {
          'Content-Type': 'application/json',
        },
        data: payload,
      })
      .then((response) => {
        console.warn(response.data);
        // Handle successful response here
      })
      .catch((error) => {
        console.error(error);
        // Handle error here
      });
    alert('Are You Sure You Want Delete Record !');

    fetchGet();
  };
  //-------------------multideletedata---------------------

  const handleSelectAll = (event) => {
    const checked = event.target.checked;
    setSelectAll(checked);

    if (checked) {
      const allRecordNumbers = user.map((item) => item.recordNumber);
      setSelectedRows(allRecordNumbers);
    } else {
      setSelectedRows([]);
    }
  };

  const handleRowSelection = (recordNumber, checked) => {
    if (checked) {
      setSelectedRows([...selectedRows, recordNumber]);
    } else {
      setSelectedRows(selectedRows.filter((row) => row !== recordNumber));
    }
  };
  const multiDelete = () => {
    const url = 'https://test.iconcile.com/industry-master-api/v1/airline/delete';
    const payload = selectedRows.map((recordNumber) => ({
      recordNumber: recordNumber,
    }));

    axios
      .delete(url, {
        headers: {
          'Content-Type': 'application/json',
        },
        data: payload,
      })
      .then((response) => {
        console.warn(response.data);
        // Handle successful response here
      })
      .catch((error) => {
        console.error(error);
        // Handle error here
      });

    alert('Are You Sure You Want to Delete the Selected Records!');

    fetchGet();
  };

  useEffect(() => {
    // Update the selectedCount whenever selectedRows changes
    setSelectedCount(selectedRows.length);
  }, [selectedRows]);
  //--------------------------full-----------------------------------
  const handleButtonClick = () => {
    if (
      !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      // Entering fullscreen
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        // Firefox
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        // Chrome, Safari, Opera
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        // IE/Edge
        document.documentElement.msRequestFullscreen();
      }
      // Store the scroll position
      setScrollPosition(
        window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
      );
    } else {
      // Exiting fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        // Chrome, Safari, Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        // IE/Edge
        document.msExitFullscreen();
      }
      // Restore the scroll position
      window.scrollTo(0, scrollPosition);
    }
  };

  //------------------------------------------------------------------------------
  /* ------------------ EXPORT BUTTON TO DOWNLOAD TABLEDATA---------------*/

  const downloadTableData = () => {
    let csv = '';
    const headers = Object.keys(user[0]);
    csv += headers.join(',') + '\n';

    user.forEach((row) => {
      const values = headers.map((header) => row[header]);
      csv += values.join(',') + '\n';
    });

    // Create a temporary anchor element and initiate the file download
    const csvContent = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
    const downloadLink = document.createElement('a');
    downloadLink.setAttribute('href', csvContent);
    downloadLink.setAttribute('download', 'export.csv');
    downloadLink.click();
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const toggle = () => {
    setOpen(!open);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const navigate = useNavigate();
  return (
    <Box width="100%" overflow="auto">
      <Grid container>
        <Grid item lg={9}>
          {selectedRows.length === 0 ? (
            <>
              <TextField
                InputProps={{
                  startAdornment: (
                    <IconButton>
                      <SearchOutlined />
                    </IconButton>
                  ),
                }}
                onClick={handleOpen}
                style={{
                  width: isMobile ? '50%' : '600px',
                  height: '5%',
                  padding: '5px 5px 5px 0px',
                }}
                id="standard-bare"
                variant="outlined"
                placeholder="Search..."
                InputClearProps={{
                  endAdornment: (
                    <IconButton>
                      <CloseOutlined />
                    </IconButton>
                  ),
                }}
              />
              <Modal
                open={open}
                onClose={handleClose}
                BackdropProps={{
                  style: {
                    backgroundColor: 'rgba(0, 0, 0, 0)', // Adjust the opacity as needed
                  },
                }}
              >
                <Fade in={open}>
                  <Paper
                    sx={{
                      position: 'absolute',
                      top: '74.9%',
                      left: '48.7%',
                      transform: 'translate(-50%, -50%)',
                      maxWidth: '100%',
                      width: '90%',
                      p: 4,
                      bgcolor: 'background.paper',
                      '@media (min-width: 600px)': {
                        width: '50%', // Adjust the width as needed for larger mobile screens
                      },
                      '@media (min-width: 960px)': {
                        width: '700px', // Adjust the width as needed for laptop view
                      },
                    }}
                  >
                    <SearchAirline setdata={setData} />
                  </Paper>
                </Fade>
              </Modal>
            </>
          ) : (
            <Typography variant="body2" style={{ fontWeight: 600, fontSize: '20px' }}>
              {selectedCount} {selectedCount === 1 ? 'row(s)' : 'items'} selected
            </Typography>
          )}
        </Grid>
        <Grid item lg={3} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          {selectedRows.length === 0 ? (
            <>
              <IconButton>
                <ReorderRounded />
              </IconButton>
              <IconButton onClick={downloadTableData}>
                <CloudDownloadRounded />
              </IconButton>
              <IconButton>
                <PrintRounded />
              </IconButton>
              <IconButton>
                <FilterListRounded />
              </IconButton>
              <IconButton onClick={handleButtonClick}>
                <FullscreenRounded />
              </IconButton>
            </>
          ) : (
            <IconButton onClick={multiDelete}>
              <DeleteRounded />
            </IconButton>
          )}
        </Grid>
      </Grid>

      <StyledTable>
        <TableHead>
          <TableRow style={{ border: '1px solid lightgray' }}>
            <TableCell>
              <IconButton align="left">
                <Checkbox
                  checked={selectAll}
                  indeterminate={!selectAll && selectedRows.length > 0}
                  onChange={handleSelectAll}
                />
              </IconButton>
            </TableCell>
            <TableCell> </TableCell>
            <TableCell>Airline Num Code</TableCell>
            <TableCell>Airline IATA Code</TableCell>
            <TableCell>Airline ICAO Code</TableCell>
            <TableCell>Alliance Code</TableCell>
            <TableCell>Airline name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{ border: '1px solid lightgray' }}>
          {user.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => (
            <TableRow key={index}>
              <TableCell align="left">
                <IconButton>
                  <Checkbox
                    checked={selectedRows.includes(item.recordNumber)}
                    onChange={(event) =>
                      handleRowSelection(item.recordNumber, event.target.checked)
                    }
                  />
                </IconButton>
              </TableCell>
              <TableCell align="left">
                <IconButton>
                  <Icon
                    color="black"
                    onClick={() => {
                      navigate(`/EditAirline/EditForm/${item.arln_num_code}`);
                    }}
                  >
                    edit
                  </Icon>
                </IconButton>
              </TableCell>
              <TableCell align="center">{item.arln_num_code}</TableCell>
              <TableCell align="center">{item.arln_iata_code}</TableCell>
              <TableCell align="center">{item.arln_icao_code}</TableCell>
              <TableCell align="center">{item.alliance_code}</TableCell>
              <TableCell align="center">{item.arln_name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
      <TablePagination
        style={{ border: '1px solid lightgray', marginTop: 0, overflowY: 'auto !important' }}
        sx={{ px: 2 }}
        page={page}
        component="div"
        rowsPerPage={rowsPerPage}
        count={user.length}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[10, 20, 40, 50, 100]}
        onRowsPerPageChange={handleChangeRowsPerPage}
        nextIconButtonProps={{ 'aria-label': 'Next Page' }}
        backIconButtonProps={{ 'aria-label': 'Previous Page' }}
      />
    </Box>
  );
};

export default AirlineTable;
