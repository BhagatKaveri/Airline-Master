import React, { useState } from 'react';
import MaterialTable, { MTableToolbar } from 'material-table'
import FilterList from '@material-ui/icons/FilterList';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import Search from '@material-ui/icons/Search';
import EditIcon from '@mui/icons-material/Edit';
import Clear from '@material-ui/icons/Clear';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Remove from '@material-ui/icons/Remove';
import Save from '@material-ui/icons/Save';
import GetAppIcon from '@material-ui/icons/GetApp'
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import DoneIcon from '@mui/icons-material/Done';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import ViewColumn from '@material-ui/icons/ViewColumn';
import DownloadIcon from '@mui/icons-material/Download';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
function App1() {
  const [selectedRow, setSelectedRow] = useState(null);
 
  const [tableData, setTableData] = useState([

    { ArlnNumCode: "805", ArlnAplhaCode: "4X", ArlnICAOCode: null, ArlnName: "MERCURY AIR CARGO,INC", Alliance: "" },
    { ArlnNumCode: "806", ArlnAplhaCode: "7C", ArlnICAOCode: null, ArlnName: "JEJU AIR CO.LTD.", Alliance: "" },
    { ArlnNumCode: "807", ArlnAplhaCode: "AK", ArlnICAOCode: null, ArlnName: "AIRASIA BERHED DBA AIRASIA", Alliance: "" },
    { ArlnNumCode: "808", ArlnAplhaCode: "7H", ArlnICAOCode: null, ArlnName: "ERA AVIATION INC", Alliance: "" },
    { ArlnNumCode: "809", ArlnAplhaCode: "RE", ArlnICAOCode: null, ArlnName: "AER ARANN EXPRESS", Alliance: "" },
    { ArlnNumCode: "810", ArlnAplhaCode: "M6", ArlnICAOCode: null, ArlnName: "AMERIJET INTERNATIONAL INC.", Alliance: "" },
    { ArlnNumCode: "811", ArlnAplhaCode: "EU", ArlnICAOCode: null, ArlnName: "CHENGDU AIRLINES", Alliance: "" },
    { ArlnNumCode: "812", ArlnAplhaCode: "L9", ArlnICAOCode: null, ArlnName: "BELLE AIR EUROPE S.R.L.", Alliance: "" },
    { ArlnNumCode: "813", ArlnAplhaCode: "8C", ArlnICAOCode: null, ArlnName: "AIR TRANSPORT INTERNATIONAL L.L.C.", Alliance: "" },
    { ArlnNumCode: "814", ArlnAplhaCode: "9F", ArlnICAOCode: null, ArlnName: "EUROSTAR (U.K.) LIMITED", Alliance: "" },
    { ArlnNumCode: "815", ArlnAplhaCode: "EP", ArlnICAOCode: null, ArlnName: "IRAN ASEMAN AIRLINES", Alliance: "" },
    { ArlnNumCode: "816", ArlnAplhaCode: "9P", ArlnICAOCode: null, ArlnName: "PALAU NATIONAL AIRLINES", Alliance: "" },
    { ArlnNumCode: "817", ArlnAplhaCode: "MJ", ArlnICAOCode: null, ArlnName: "MIHIN LANKA (PVT) LTD.", Alliance: "" },
    { ArlnNumCode: "818", ArlnAplhaCode: "6H", ArlnICAOCode: null, ArlnName: "ISRAIR AIRLINES AND TOURISM LTD.", Alliance: "" },
    { ArlnNumCode: "819", ArlnAplhaCode: "P8", ArlnICAOCode: null, ArlnName: "AIR MEKONG", Alliance: "" },
    { ArlnNumCode: "820", ArlnAplhaCode: "8B", ArlnICAOCode: null, ArlnName: "BUSINESS AIR CO,LTD", Alliance: "" },
    { ArlnNumCode: "821", ArlnAplhaCode: "6K", ArlnICAOCode: null, ArlnName: "INTER EXPRESS HAVA TASIMACILIK A.S", Alliance: "" },
    { ArlnNumCode: "822", ArlnAplhaCode: "KN", ArlnICAOCode: null, ArlnName: "CHINA UNITED AIRLINES", Alliance: "" },
    { ArlnNumCode: "823", ArlnAplhaCode: "NN", ArlnICAOCode: null, ArlnName: "VIM AIRLINES", Alliance: "" }

  ])

  const columns = [
    { title: "Arln Num Code ", field: "ArlnNumCode" },
    { title: "Arln Aplha Code ", field: "ArlnAplhaCode" },
    { title: "Arln ICAO Code ", field: "ArlnICAOCode" },
    { title: "Arln Name ", field: "ArlnName" },
    { title: "Alliance", field: "Alliance", emptyvalue: () => <em>null</em> }
  ]

  return (

   

     
       
      <MaterialTable columns={columns} data={tableData}

        editable={{
          onRowAdd: (newROW) => new Promise((resolve, reject) => {
            setTableData([...tableData, newROW])
            setTimeout(() => resolve(), 500)

          }),
          onRowUpdate: (newROW, oldRow) => new Promise((resolve, reject) => {
            const updatedData = [...tableData]
            updatedData[oldRow.tableData.id] = newROW
            setTableData(updatedData)
            console.log(newROW, oldRow)
            setTimeout(() => resolve(), 500)
          }),
          // onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
          //   const updatedData = [...tableData]
          //   updatedData.splice(selectedRow.id, 1)
          //   setTableData(updatedData)
          //   setTimeout(() => resolve(), 500)
          // })
          
        }}
        components={{
          Toolbar: props => (
            <div style={{ backgroundColor: '#e8eaf5' }}>
              <MTableToolbar {...props} />
            </div>
          )
        }}
        actions={[

          {
            icon: () => <DeleteIcon />,
            tooltip: "delete",
            onClick: (evt, data) => alert('You want to delete ' + data.length + ' rows'),
            isFreeAction: false
          },
          {
            icon: () => <GetAppIcon />,
            tooltip: "click me",
            onClick: (e, data) => console.log(data),
            isFreeAction: false
          },
          {
            icon: () => <FilterList />,
            tooltip: "click me",
            onClick: (e, data) => console.log(data),
            isFreeAction: false
          }
         
        ]}
            onSelectionChange={(selectedRows) => console.log(selectedRows)}
        
        onRowClick={(evt, selectedRow) =>
          setSelectedRow(selectedRow.tableData.id)
        }
        options={{
            selection: true,
            headerStyle: {
              backgroundColor: '#6495ED',
              color: '#FFF'
            },
            //filtering: true,
            sorting: true,
            thirdSortClick: false,
            search: true,
            searchFieldAlignment: "right",
            searchFieldVariant: "standard",
            padding: 10,
            paging: true,
            pageSizeOptions: [5, 10, 15, 20, 50],
            pageSize: 10,
            paginationType: "stepped",
            paginationPosition: "bottom",
            exportButton: true,
            exportCsv: (columns, data) => {
              alert('You should develop a code to export ' + data.length + ' rows');
            },
            exportFileName: "AIRLINE DATA",
            addRowPosition: "first",
            actionColumnIndex: -1,
            showSelectAllCheckBox: false,
            showTextRowsSelected: false,
            selectableRows: false,
            selectionProps: RowData => ({
              color: "blue"
            }),
            rowStyle: rowData => ({
              backgroundColor: (selectedRow === rowData.tableData.id) ? '#E6E6FA' : '#FFF'
            }),
            filterCellStyle: {
              backgroundColor: "#6ABAC9"
            }

          }
        }

        title="Airline Master Table "
        icons={{
          Add: () => <AddBox />, Check: () => <Check />, Edit: () => <EditIcon />, 
          Search: () => <Search />, Clear: () => <Clear />, clear: () => <Clear />, 
          Export: () => <SaveAlt />, Remove: () => <Remove />, Save: () => <Save />,
          Done: () => <DoneIcon />, FirstPage: () => <FirstPage />, 
          LastPage: () => <LastPage />, ViewColumn: () => <ViewColumn />, 
          Download: () => <DownloadIcon />, NextPage: () => <ChevronRight />,
          PreviousPage: () => <ChevronLeft />, Filter: () => <FilterList />,
          ResetSearch: () => <Clear />,// Delete: () => <DeleteIcon />,
          DetailPanel: () => <ChevronRight />, SortArrow: () => <ArrowDownward />,
          ThirdStateCheck:() => <Remove />
                }}

     />
  );}

 

export default App1;
