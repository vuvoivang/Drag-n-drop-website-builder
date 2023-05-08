import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";
import { MAPPING_PROJECT_TYPE_TO_STRING, PROJECT } from "services/user";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';
import { Tooltip } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import Box from '@mui/material/Box';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';

interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (
        event: React.MouseEvent<HTMLButtonElement>,
        newPage: number,
    ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

const useStyles = makeStyles({
    table: {
        minWidth: 650
    }
});

const originalRows = [
    { name: "Buildify Landing", type: 0, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify2 Landing", type: 0, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify3 Blog", type: 1, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify4 Blog", type: 1, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify6 Blog", type: 1, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify5 Landing", type: 0, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify Landing", type: 0, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify2 Landing", type: 0, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify3 Blog", type: 1, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify4 Blog", type: 1, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify6 Blog", type: 1, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify5 Landing", type: 0, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify Landing", type: 0, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify2 Landing", type: 0, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify3 Blog", type: 1, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify4 Blog", type: 1, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify6 Blog", type: 1, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify5 Landing", type: 0, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify Landing", type: 0, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify2 Landing", type: 0, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify3 Blog", type: 1, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify4 Blog", type: 1, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify6 Blog", type: 1, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify5 Landing", type: 0, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify Landing", type: 0, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify2 Landing", type: 0, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify3 Blog", type: 1, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify4 Blog", type: 1, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify6 Blog", type: 1, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify5 Landing", type: 0, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 }
];

function formatDate(date) {
    // @ts-ignore
    // Number.prototype.padLeft = function (base, chr) {
    //     var len = (String(base || 10).length - String(this).length) + 1;
    //     return len > 0 ? new Array(len).join(chr || '0') + this : this;
    // }
    var dt = new Date(date);


    const padL = (nr, len = 2, chr = `0`) => `${nr}`.padStart(2, chr);


    return `${padL(dt.getDate())}/${padL(dt.getMonth() + 1)}/${dt.getFullYear()} ${padL(dt.getHours())}:${padL(dt.getMinutes())}:${padL(dt.getSeconds())}`;
}

export default function ProjectsTable() {
    const [rows, setRows] = useState(originalRows);
    const [searched, setSearched] = useState<string>("");
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const classes = useStyles();

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (
        _: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const requestSearch = (searchedVal: string) => {
        const filteredRows = originalRows.filter((row) => {
            return row.name.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setRows(filteredRows);
    };

    const cancelSearch = () => {
        setSearched("");
        requestSearch(searched);
    };

    const onEditProject = (project: PROJECT) => {
        console.log('here');
    }

    const onDeleteProject = (project: PROJECT) => {
        console.log('here');
    }

    const onGoToBuildProject = (project: PROJECT) => {
        console.log('here');
    }

    return (
        <div id="projects-table">
            <Paper>
                <div id="projects-table-search-bar">
                    <SearchBar
                        value={searched}
                        onChange={(searchVal) => requestSearch(searchVal)}
                        onCancelSearch={() => cancelSearch()}
                        placeholder="Search project"
                        style={{ padding: 10 }}
                    />
                </div>
                <div className="mt-4">
                    <Table stickyHeader className={classes.table} aria-label="simple table">
                        <TableHead >
                            <TableRow>
                                <TableCell style={{ fontSize: 15, backgroundColor: '#eaeaf7' }}>Name</TableCell>
                                <TableCell style={{ fontSize: 15, backgroundColor: '#eaeaf7' }} align="right">Type</TableCell>
                                <TableCell style={{ fontSize: 15, backgroundColor: '#eaeaf7' }} align="right">Created Time</TableCell>
                                <TableCell style={{ fontSize: 15, backgroundColor: '#eaeaf7' }} align="right">Updated Time</TableCell>
                                <TableCell style={{ fontSize: 15, backgroundColor: '#eaeaf7' }} align="right">Operations</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(rowsPerPage > 0
                                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : rows).map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{MAPPING_PROJECT_TYPE_TO_STRING[row.type]}</TableCell>
                                        <TableCell align="right">{formatDate(row.createdTime)}</TableCell>
                                        <TableCell align="right">{formatDate(row.updatedTime)}</TableCell>

                                        <TableCell align="right">
                                            <Tooltip title='Continue Build' arrow>

                                                <IconButton onClick={() => onGoToBuildProject(row)}>
                                                    <CallMissedOutgoingIcon />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title='Edit' arrow >
                                                <IconButton onClick={() => onEditProject(row)}>
                                                    <ModeEditIcon />
                                                </IconButton>
                                            </Tooltip>

                                            <Tooltip title='Delete' arrow>

                                                <IconButton onClick={() => onDeleteProject(row)}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Tooltip>



                                        </TableCell>
                                    </TableRow>
                                ))}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>

                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 20, { label: 'All', value: -1 }]}
                                    colSpan={8}

                                    count={rows.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    SelectProps={{
                                        inputProps: {
                                            'aria-label': 'rows per page',
                                        },
                                        native: true,
                                    }}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                    ActionsComponent={TablePaginationActions}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
            </Paper>
            <br />
        </div>
    );
}
