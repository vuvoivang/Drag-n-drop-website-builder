import React, { useState, useEffect } from "react";
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
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';
import { useEffectOnce } from "@libs/utils";
import userService from "services/user";
import toastMessage from "utils/toast";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    TextField,
    Button as MaterialButton,

} from '@material-ui/core';
import { useRouter } from "next/router";
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


function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string },
) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}
interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof PROJECT) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}
const useStyles = makeStyles({
    table: {
        minWidth: 650
    }
});
function EnhancedTableHead(props: EnhancedTableProps) {
    const { order, orderBy, onRequestSort } =
        props;
    const createSortHandler =
        (property: keyof PROJECT) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };


    return (
        <TableHead >
            <TableRow>
                <TableCell style={{ fontSize: 15, backgroundColor: '#eaeaf7' }} sortDirection={orderBy === 'name' ? order : false}>

                    <TableSortLabel
                        active={orderBy === 'name'}
                        direction={orderBy === 'name' ? order : 'asc'}
                        onClick={createSortHandler('name')}
                    >Name
                    </TableSortLabel>
                    {orderBy === 'name' ? (
                        <Box component="span" sx={visuallyHidden}>
                            {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                        </Box>
                    ) : null}
                </TableCell>
                <TableCell style={{ fontSize: 15, backgroundColor: '#eaeaf7' }} align="right" sortDirection={orderBy === 'type' ? order : false}>
                    <TableSortLabel
                        active={orderBy === 'type'}
                        direction={orderBy === 'type' ? order : 'asc'}
                        onClick={createSortHandler('type')}
                    >Type
                    </TableSortLabel>
                    {orderBy === 'type' ? (
                        <Box component="span" sx={visuallyHidden}>
                            {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                        </Box>
                    ) : null}
                </TableCell>
                <TableCell style={{ fontSize: 15, backgroundColor: '#eaeaf7' }} align="right">Created Time</TableCell>
                <TableCell style={{ fontSize: 15, backgroundColor: '#eaeaf7' }} align="right">Updated Time</TableCell>
                <TableCell style={{ fontSize: 15, backgroundColor: '#eaeaf7' }} align="right">Operations</TableCell>
            </TableRow>
        </TableHead>)
}

const originalRows = [
    { name: "Buildify Landing", type: 0, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Example buildify2 Landing", type: 0, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify3 Blog", type: 1, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify4 Blog", type: 1, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify6 Blog", type: 1, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify5 Landing", type: 0, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify Landing", type: 0, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Example buildify2 Landing", type: 0, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify3 Blog", type: 1, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify4 Blog", type: 1, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify6 Blog", type: 1, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify5 Landing", type: 0, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify Landing", type: 0, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Example buildify2 Landing", type: 0, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify3 Blog", type: 1, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify4 Blog", type: 1, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify6 Blog", type: 1, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify5 Landing", type: 0, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify Landing", type: 0, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Example buildify2 Landing", type: 0, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify3 Blog", type: 1, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify4 Blog", type: 1, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify6 Blog", type: 1, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify5 Landing", type: 0, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify Landing", type: 0, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Example buildify2 Landing", type: 0, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify3 Blog", type: 1, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify4 Blog", type: 1, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify6 Blog", type: 1, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify5 Landing", type: 0, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify4 Blog", type: 1, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
    { name: "Buildify4 Blog", type: 1, createdTime: new Date().getTime() + Math.random() * 1000000, updatedTime: new Date().getTime() + Math.random() * 1000000 },
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
    const [rows, setRows] = useState<PROJECT[]>([]);
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof PROJECT>('name');
    const [selected, setSelected] = React.useState<readonly string[]>([]);

    const [searched, setSearched] = useState<string>("");
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [openDialogConfirmDelete, setOpenDialogConfirmDelete] = useState(false);
    const [deletingProject, setDeletingProject] = useState<PROJECT>({} as PROJECT);

    const classes = useStyles();
    const router = useRouter();

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
        setRows([...filteredRows] as any);
    };

    const cancelSearch = () => {
        setSearched("");
        requestSearch(searched);
    };

    const onEditProject = (project: PROJECT) => {
        console.log('here');
    }

    const onDeleteProject = (project: PROJECT) => {
        handleDeleteProjectSelectItem(project);
    }

    const onGoToBuildProject = (project: PROJECT) => {
        router.push(`/builder/${project.id}`);
    }


    const handleRequestSort = (
        _: React.MouseEvent<unknown>,
        property: keyof PROJECT,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const visibleRows = React.useMemo(
        () => {
            const sortedData = stableSort(rows, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            )
            return sortedData;
        },
        [rows, order, orderBy, page, rowsPerPage],
    );

    useEffectOnce(() => {
        userService.getListProject().then(resp => {
            if (resp.Projects) {
                setRows(resp.Projects);
            } else toastMessage.error('Something went wrong, please try again later');
        }).catch((err) => {
            console.log(err);
            toastMessage.error('Something went wrong, please try again later');
        });
    })

    const handleCloseDialogConfirmDelete = () => {
        setOpenDialogConfirmDelete(false);
        setDeletingProject({} as any);
    };

    const handleDeletePageDialog = () => {
        userService.deleteProject({
            id: deletingProject.id
          }).then(resp => {
            if (!resp.msg) {
              toastMessage.success('Delete project successfully')
              const newRows = [...rows.filter((row) => row.id !== deletingProject.id)];
              setRows(newRows);
              setDeletingProject({} as any);
            } else toastMessage.error('Delete project failed');
          }).catch((err) => {
              console.log(err);
              toastMessage.error('Delete project failed');
          });
        handleCloseDialogConfirmDelete();
    };

    const handleDeleteProjectSelectItem = (project) => {
        setDeletingProject(project);
    };

    useEffect(() => {
        if (deletingProject?.id) {
          setOpenDialogConfirmDelete(true);
        }
      }, [deletingProject]);
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
                        <EnhancedTableHead numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length} />
                        <TableBody>
                            {(visibleRows).map((row) => (
                                <TableRow key={row.id}>
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
                                <TableRow style={{ height: 77 * emptyRows }}>
                                    <TableCell colSpan={5} />
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


            <Dialog
                open={openDialogConfirmDelete}
                aria-labelledby='delete-page-dialog-title'
                aria-describedby='delete-page-dialog-description'
            >
                <DialogTitle id='delete-page-dialog-title'>
                    Delete {visibleRows.find((el) => el.id === deletingProject.id)?.name} project
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id='delete-page-dialog-description'>
                        This action cannot be undone. Delete this page will permanently delete all its elements you've designed. Are
                        you sure you want to delete?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <MaterialButton onClick={handleCloseDialogConfirmDelete} color='secondary'>
                        Cancel
                    </MaterialButton>
                    <MaterialButton onClick={handleDeletePageDialog} color='primary'>
                        Sure
                    </MaterialButton>
                </DialogActions>
            </Dialog>
        </div>
    );
}
