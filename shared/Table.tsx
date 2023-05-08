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
    const classes = useStyles();

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
        <>
            <Paper>
                <SearchBar
                    value={searched}
                    onChange={(searchVal) => requestSearch(searchVal)}
                    onCancelSearch={() => cancelSearch()}
                    placeholder="Search your project"
                />
                <div>
                    <Table className={classes.table} aria-label="simple table" >
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Type</TableCell>
                                <TableCell align="right">Created Time</TableCell>
                                <TableCell align="right">Updated Time</TableCell>
                                <TableCell align="right">Operations</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
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
                        </TableBody>
                    </Table>
                </div>
            </Paper>
            <br />
        </>
    );
}
