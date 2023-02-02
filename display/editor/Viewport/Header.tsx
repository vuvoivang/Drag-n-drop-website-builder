import { useEditor } from "libs/core/src";
import {
  Tooltip,
  FormControl,
  Select,
  Button as MaterialButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  MenuItem,
} from "@material-ui/core";
import cx from "classnames";
import React, { useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import { ROOT_PATH } from "libs/utils/src";

import Checkmark from "../../../public/icons/check.svg";
import Customize from "../../../public/icons/customize.svg";
import RedoSvg from "../../../public/icons/toolbox/redo.svg";
import UndoSvg from "../../../public/icons/toolbox/undo.svg";
import Logo from "../../../public/images/logo.png";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveIcon from "@material-ui/icons/Remove";
import { LightTooltip } from "display/shared/components/Tooltip";
import lz from "lzutf8";
import copy from "copy-to-clipboard";
import Image from "next/image";

const HeaderDiv = styled.div`
  width: 100%;
  height: 60px;
  z-index: 99999;
  position: relative;
  padding: 0px 10px;
  background: #2c2c2c;
  display: flex;
`;

const Btn = styled.a`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  border-radius: 3px;
  color: #fff;
  font-size: 13px;
  svg {
    margin-right: 6px;
    width: 12px;
    height: 12px;
    fill: #fff;
    opacity: 0.9;
  }
`;

const Item = styled.a<{ disabled?: boolean }>`
  margin-right: 10px;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    fill: #fff;
  }
  ${(props) =>
    props.disabled &&
    `
    opacity:0.5;
    cursor: not-allowed;
  `}
`;

const PageFormControl = styled(FormControl)`
  min-width: 180px;
  margin: 16px;
  margin-left: 50px !important;
  margin-right: 50px !important;
  margin-bottom: 5px !important;
  display: flex;
  flex-direction: row !important;
  align-items: center;
`;
const PageSelect = styled(Select)`
  min-width: 120px;
  color: white !important;
`;

function addPageReducer(state, action) {
  if (action.type === "UPDATE_PATH") {
    return {
      ...state,
      path: action.data,
    };
  } else if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: action.data,
    };
  }
  throw Error("Unknown action.");
}

export const Header = () => {
  const [openDialogNewPage, setOpenDialogNewPage] = useState(false);
  const [addPage, dispatch] = useReducer(addPageReducer, {
    path: "",
    name: "",
  });
  const [openDialogLoadState, setOpenDialogLoadState] = useState(false);
  const [stateToLoad, setStateToLoad] = useState<string>("");

  const [openDialogConfirmDelete, setOpenDialogConfirmDelete] = useState(false);
  const [deletingPagePath, setDeletingPagePath] = useState("");

  const {
    enabled,
    canUndo,
    canRedo,
    actions,
    query,
    isShownAllIndicator = false,
    pages,
    currentPage,
  } = useEditor((state, query) => ({
    enabled: state.options.enabled,
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo(),
    isShownAllIndicator: state.options.isShownAllIndicator,
    pages: state.pageOptions.pages,
    currentPage: state.pageOptions.currentPage,
  }));

  const handleChangePage = (event) => {
    actions.setCurrentPage(event.target.value as string);
  };

  const clickOpenDialogAddNewPage = () => {
    handleClickOpenDialogNewPage();
  };

  const handleClickOpenDialogNewPage = () => {
    setOpenDialogNewPage(true);
  };
  const handleCloseDialogNewPage = () => {
    setOpenDialogNewPage(false);
  };
  const handleAddPage = () => {
    handleCloseDialogNewPage();
    actions.addNewPage(addPage);
    // go to new page 
    setTimeout(() => {
      actions.setCurrentPage(addPage.path);
    }, 500);
  };
  const handleDeletePageSelectItem = (path) => {
    setDeletingPagePath(path);
  };

  useEffect(() => {
    if (deletingPagePath) {
      handleClickOpenDialogConfirmDelete();
    }
  }, [deletingPagePath]);

  const handleClickOpenDialogConfirmDelete = () => {
    setOpenDialogConfirmDelete(true);
  };

  const handleCloseDialogConfirmDelete = () => {
    setOpenDialogConfirmDelete(false);
    setDeletingPagePath("");
  };

  const handleDeletePageDialog = () => {
    actions.deletePage(deletingPagePath);
    handleCloseDialogConfirmDelete();
  };

  return (
    <HeaderDiv id="header" className="header text-white transition w-full">
      <div className="items-center flex w-full px-4 justify-end">
        <div className="logo-container">
          <Image className="header-logo" src={Logo} alt="Our Logo" height={45} width={60}/>
        </div>
        {/* Form add new page  */}
        <PageFormControl className="pt-4">
          <LightTooltip
            title="See all the pages on your site and switch between them"
            disableFocusListener
            disableTouchListener
          >
            <label className="label-page" htmlFor="current-page">
              Page:{" "}
            </label>
          </LightTooltip>
          <div className="add-page-container ml-2">
            <PageSelect
              value={currentPage}
              onChange={handleChangePage}
              inputProps={{
                name: "current-page-select",
                id: "current-page",
              }}
              renderValue={(value) =>
                pages.find((el) => el.path === value)?.name
              }
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.path}
                  value={page.path}
                  className="custom-menu-item"
                >
                  {page.name}
                  {/* Can't remove home page */}
                  {page.path !== ROOT_PATH && (
                    <RemoveIcon
                      fontSize="small"
                      className="rm-icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeletePageSelectItem(page.path);
                      }}
                    />
                  )}
                </MenuItem>
              ))}
            </PageSelect>

            <LightTooltip title="Add new page">
              <AddCircleIcon
                className="cursor-pointer ml-1"
                onClick={clickOpenDialogAddNewPage}
                fontSize="small"
              />
            </LightTooltip>
          </div>
        </PageFormControl>

        {/* Undo and Redo  */}
        {enabled && (
          <div className="flex-1 flex">
            <Tooltip title="Undo" placement="bottom">
              <Item disabled={!canUndo} onClick={() => actions.history.undo()}>
                <UndoSvg />
              </Item>
            </Tooltip>
            <Tooltip title="Redo" placement="bottom">
              <Item disabled={!canRedo} onClick={() => actions.history.redo()}>
                <RedoSvg />
              </Item>
            </Tooltip>
          </div>
        )}

        <div className="actions-group flex">
          <Btn
            className={cx([
              "transition cursor-pointer",
              {
                "bg-green-400": enabled,
                "bg-primary": !enabled,
              },
            ])}
            onClick={() => {
              actions.setOptions((options) => (options.enabled = !enabled));
            }}
          >
            {enabled ? <Checkmark /> : <Customize />}
            {enabled ? "Finish Editing" : "Edit"}
          </Btn>

          <Btn
            className="ml-2 transition cursor-pointer bg-primary"
            onClick={() => {
              console.log(
                "Node tree",
                query.getSerializedNodes(),
                "length",
                Object.keys(query.getSerializedNodes()).length
              );
              console.log("State", query.getState());
            }}
          >
            Debug
          </Btn>

          <Btn
            className="ml-2 transition cursor-pointer bg-primary"
            onClick={() => {
              const json = query.serialize();
              copy(lz.encodeBase64(lz.compress(json)));
            }}
          >
            Copy state
          </Btn>

          <Btn
            className="ml-2 transition cursor-pointer bg-primary"
            onClick={() => setOpenDialogLoadState(true)}
          >
            Load state
          </Btn>

          <Btn
            className="ml-2 transition cursor-pointer bg-red"
            onClick={() => {
              actions.setOptions(
                (options) =>
                  (options.isShownAllIndicator = !isShownAllIndicator)
              );
            }}
          >
            {!isShownAllIndicator ? " Show indicators" : "Hide indicators"}
          </Btn>
        </div>
      </div>

      {/* Dialog add new page infor */}

      <Dialog
        open={openDialogNewPage}
        onClose={handleCloseDialogNewPage}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Page Information</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter new path and name for your page:
          </DialogContentText>
          <ul className="dialog-new-page">
            <li>
              Path: specific path for pages' routing, must start with /. Ex:
              /example
            </li>
            <li>
              Name: specific name for corresponding page, use as title. Ex:
              Example
            </li>
          </ul>

          <TextField
            margin="dense"
            id="path"
            label="Page Path"
            type="text"
            fullWidth
            onChange={(e) => {
              dispatch({ type: "UPDATE_PATH", data: e.target.value });
            }}
          />
          <TextField
            margin="dense"
            id="name"
            label="Page Name"
            type="text"
            fullWidth
            onChange={(e) => {
              dispatch({ type: "UPDATE_NAME", data: e.target.value });
            }}
          />
        </DialogContent>
        <DialogActions>
          <MaterialButton onClick={handleCloseDialogNewPage} color="primary">
            Cancel
          </MaterialButton>
          <MaterialButton onClick={handleAddPage} color="primary">
            Done
          </MaterialButton>
        </DialogActions>
      </Dialog>

      {/* Dialog load state (copied) */}
      <Dialog
        open={openDialogLoadState}
        onClose={() => setOpenDialogLoadState(false)}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle id="alert-dialog-title">Load state</DialogTitle>
        <DialogContent>
          <TextField
            multiline
            fullWidth
            placeholder='Paste the contents that was copied from the "Copy Current State" button'
            value={stateToLoad}
            onChange={(e) => setStateToLoad(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <MaterialButton
            onClick={() => setOpenDialogLoadState(false)}
            color="secondary"
          >
            Cancel
          </MaterialButton>
          <MaterialButton
            onClick={() => {
              setOpenDialogLoadState(false);
              const json = lz.decompress(lz.decodeBase64(stateToLoad));
              actions.deserialize(json);
            }}
            color="primary"
            autoFocus
          >
            Load
          </MaterialButton>
        </DialogActions>
      </Dialog>

      {/* Dialog confirm deleting page */}

      <Dialog
        open={openDialogConfirmDelete}
        aria-labelledby="delete-page-dialog-title"
        aria-describedby="delete-page-dialog-description"
      >
        <DialogTitle id="delete-page-dialog-title">
          Delete {pages.find((el) => el.path === deletingPagePath)?.name} page
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="delete-page-dialog-description">
            This action cannot be undone. Delete this page will permanently
            delete all its elements you've designed. Are you sure you want to
            delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <MaterialButton
            onClick={handleCloseDialogConfirmDelete}
            color="secondary"
          >
            Cancel
          </MaterialButton>
          <MaterialButton onClick={handleDeletePageDialog} color="primary">
            Sure
          </MaterialButton>
        </DialogActions>
      </Dialog>
    </HeaderDiv>
  );
};
