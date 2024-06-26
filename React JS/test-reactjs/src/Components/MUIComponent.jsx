import { Box, Link, useMediaQuery, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { useState } from "react";

const MUIComponent = ({ isDashboard = false, view }) => {
    const [data, setData] = useState([])
    const isNonMobile = useMediaQuery("(min-width: 720px)");

    fetch('https://jsonplaceholder.typicode.com/todos/1/posts')
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setData(json)
        })

    const columns = [
        {
            field: "id",
            headerName: "ID",
            flex: 0.5,
            sortable: false
        },
        {
            field: "body",
            headerName: "TOPIC",
            flex: 1,
        },
        {
            field: "title",
            headerName: "TITLE",
            flex: 0.6,
        },
        {
            field: "userId",
            headerName: "USERID",
            flex: 0.6,
        },
    ];


    return (
        <>
            {/* <h2 style={{ margin: '20px' }}><strong>This is Table Implementes through the Material Ui along with the Pagination</strong></h2> */}
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gap="20px"
                m="1.5rem 1.5rem">
                <Box
                    gridColumn="span 12"
                    mt="40px"
                    height="75vh"
                >
                    <DataGrid
                        // loading={isLoading || !data}
                        getRowId={(row) => row.id}
                        rows={data || []}
                        columns={columns}
                    />
                </Box>
            </Box>
        </>
    );
};

export default MUIComponent;
