//FIC: React
import React, { useEffect, useState } from "react";
//FIC: Material UI
import { MaterialReactTable } from 'material-react-table';
import { Box, Stack, Tooltip, Button, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
//FIC: DB
//import InstitutesStaticData from '../../../db/inversions/json/priceshistory/InversionsData';
import {getAllInversions} from '../../services/remote/get/GetAllInversions';
//FIC: Columns Table Definition.
const InstitutesColumns = [
    
    {
        accessorKey: "ID",
        header: "ID",
        size: 50, //small column
      },
      
    {
        accessorKey: "DATE",
        header: "FECHA",
        size: 30, //small column
      },
      
    {
        accessorKey: "OPEN",
        header: "OPEN",
        size: 150, //small column
      },
      
    {
        accessorKey: "HIGH",
        header: "HIGH",
        size: 150, //small column
      },
      
    {
        accessorKey: "LOW",
        header: "LOW",
        size: 30, //small column
      },
    {
      accessorKey: "CLOSE",
      header: "CLOSE",
      size: 30, //small column
    },
    {
      accessorKey: "VOLUME",
      header: "VOLUME",
      size: 30, //small column
    },
  ];



export default function InversionsTab() {


    //FIC: controlar el estado del indicador (loading).
    const [loadingTable, setLoadingTable] = useState(true);
    
    //FIC: controlar el estado de la data de Institutos.
    const [InstitutesData, setInstitutesData] = useState([]);
    useEffect(() => {
        async function fetchData() {
          try {
            const AllInstitutesData = await getAllInversions();
            setInstitutesData(AllInstitutesData);
            //setInstitutesData(InstitutesStaticData);
            setLoadingTable(false);
          } catch (error) {
            console.error("Error al obtener los institutos en useEffect de InstitutesTable:", error);
          }
        }
        fetchData();
      }, []);

    return (
        <Box>
          <Box>
          <MaterialReactTable
              columns={InstitutesColumns}
              data={InstitutesData}
              state={{isLoading: loadingTable}}
              initialState={{ density: "compact", showGlobalFilter: true }}
              
              renderTopToolbarCustomActions={({ table }) => (
                  <>
                    {/* ------- ACTIONS TOOLBAR INIT ------ */}
                    <Stack direction="row" sx={{ m: 1 }}>
                      <Box>
                        <Tooltip title="Agregar">
                          <IconButton >
                            <AddCircleIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Editar">
                          <IconButton>
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Eliminar">
                          <IconButton>
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Detalles ">
                          <IconButton>
                            <InfoIcon />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </Stack>
                    {/* ------- ACTIONS TOOLBAR END ------ */}
                  </>
                )}
            />
          </Box>
        </Box>
      );
}