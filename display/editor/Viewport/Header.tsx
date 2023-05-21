import { Theme, useEditor } from 'libs/core/src';
import {
  Tooltip,
  // FormControl,
  // Select,
  Button as MaterialButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  MenuItem,
  Grid,
} from '@material-ui/core';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

import cx from 'classnames';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import styled from 'styled-components';
import { ROOT_PATH, THEME_TYPE_VALUE, ThemeTypeOptions, serializedContainerRootNodeForPage } from 'libs/utils/src';

import axios from 'axios';
import Checkmark from '../../../public/icons/check.svg';
import Customize from '../../../public/icons/customize.svg';
import RedoSvg from '../../../public/icons/toolbox/redo.svg';
import UndoSvg from '../../../public/icons/toolbox/undo.svg';
import DebugSvg from '../../../public/icons/toolbox/debug.svg';
import CopyStateSvg from '../../../public/icons/toolbox/copy-state.svg';
import LoadStateSvg from '../../../public/icons/toolbox/load-state.svg';
import ShowSvg from '../../../public/icons/toolbox/show.svg';
import HideSvg from '../../../public/icons/toolbox/hide.svg';

import Logo from '../../../public/images/logo.png';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveIcon from '@material-ui/icons/Remove';
import { LightTooltip } from 'display/shared/components/Tooltip';
import lz from 'lzutf8';
import copy from 'copy-to-clipboard';
import Image from 'next/image';

import _var from '../../styles/common/_var.module.scss';
import CircularProgress from '@material-ui/core/CircularProgress';
import genCodeService from 'services/gen-code';
import { useRouter } from 'next/router';
import userService from 'services/user';
import toastMessage from 'utils/toast';
import { ProjectContext } from 'pages/builder/[id]';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { ToolbarTextInput } from '../Toolbar';
import { ColorInput } from './ColorInput';
import { camelToTitle, titleToCamelize } from 'utils/text';
import { clearValueThemeAndDynamicData, handleInputAppTitleCase } from 'utils/helper';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Icon from '@material-ui/core/Icon';

const HeaderDiv = styled.div<any>`
  width: 100%;
  // height: 48px;
  z-index: 0;
  position: relative;
  padding: 0px 10px;
  background: ${_var.whiteColor};
  display: flex;
  border-bottom: 2px solid ${_var.borderBottomColor};
`;

const Btn = styled.a`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  border-radius: 4px;
  color: ${_var.blackColor};
  font-size: 15px;
  svg {
    margin-right: 6px;
    width: 12px;
    height: 12px;
    fill: ${_var.blackColor};
    opacity: 1;
  }
  &:hover {
    background-color: ${_var.grayDarkColor};
    color: ${_var.whiteColor};
    svg {
      fill: ${_var.whiteColor};
    }
  }
  &.btn-gen-code {
    color: ${_var.whiteColor};
    &:hover {
      background-color: ${_var.greenDarkColor};
    }
  }
`;

const PageFormControl = styled(FormControl)`
  min-width: 180px;
  // margin: 16px;
  margin-bottom: 4px;
  display: flex;
  flex-direction: row !important;
`;

function addPageReducer(state, action) {
  if (action.type === 'UPDATE_PATH') {
    return {
      ...state,
      path: action.data,
    };
  } else if (action.type === 'UPDATE_NAME') {
    return {
      ...state,
      name: action.data,
    };
  }
  throw Error('Unknown action.');
}

export type PageData = {
  path: string;
  name: string;
};
export type Node = {
  id: string;
  type: string;
  props: string;
  displayName: string;
  hidden: boolean;
  children: Array<string>;
  linkedNodes: Array<string>;
  pagePath: string;
};


export const Header = () => {
  const [openDialogNewPage, setOpenDialogNewPage] = useState(false);
  const [openDialogTheme, setOpenDialogTheme] = useState(false);

  const [addPage, dispatch] = useReducer(addPageReducer, {
    path: '',
    name: '',
  });
  const [openDialogLoadState, setOpenDialogLoadState] = useState(false);
  const [stateToLoad, setStateToLoad] = useState<string>('');

  const [openDialogConfirmDelete, setOpenDialogConfirmDelete] = useState(false);
  const [loadingGenCode, setLoadingGenCode] = useState(false);

  const [deletingPagePath, setDeletingPagePath] = useState('');

  //@ts-ignore
  const { project } = useContext(ProjectContext);

  const {
    enabled,
    canUndo,
    canRedo,
    actions,
    query,
    isShownAllIndicator = false,
    pages,
    currentPage,
    theme: themeValues,
  } = useEditor((state, query) => ({
    enabled: state.options.enabled,
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo(),
    isShownAllIndicator: state.options.isShownAllIndicator,
    pages: state.pageOptions.pages,
    currentPage: state.pageOptions.currentPage,
    theme: query.getTheme(),
  }));
  const { control, register, setValue, formState: { errors }, handleSubmit, watch, resetField } = useForm({
    defaultValues: {
      theme: Object.entries(themeValues).map(([key, { value, type }]) => ({ key: camelToTitle(key), value, type })),
    },
  });
  useEffect(() => {
    // resetField('theme', {
    //   defaultValue: Object.entries(themeValues).map(([key, { value, type }]) => ({ key: camelToTitle(key), value, type }))
    // })
    setValue('theme', Object.entries(themeValues).map(([key, { value, type }]) => ({ key: camelToTitle(key), value, type })));
  }, [themeValues])
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control,
    name: "theme",
  });

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

    // add new container root node for new page
    const newContainerRootNodeInNewPage = {
      ...serializedContainerRootNodeForPage,
      page: addPage.path,
    };
    const rootNodeIdInNewPage = `ROOT_${addPage.path.slice(1)}`;
    actions.addNewNodeWithSerializedData(newContainerRootNodeInNewPage, rootNodeIdInNewPage);

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
    setDeletingPagePath('');
  };

  const handleDeletePageDialog = () => {
    actions.deletePage(deletingPagePath);
    handleCloseDialogConfirmDelete();
  };

  const handleGenerateCode = async () => {
    setLoadingGenCode(true);
    try {
      let pages = new Array<PageData>();
      let nodes = new Array<Node>();
      let theme: string;
      // get pages info
      for (const page of query.getState().pageOptions.pages) {
        pages.push({ path: page.path, name: page.name });
      }
      // get theme
      theme = JSON.stringify(themeValues);

      // get nodes info

      let serializeNodes = query.getSerializedNodes();
      for (const id in serializeNodes) {
        let serializeNode = serializeNodes[id];
        let type = serializeNode.type;
        let typeName = '';
        if (typeof type === 'object' && type.resolvedName) {
          typeName = type.resolvedName;
        } else continue;

        let node: Node = {
          id: id,
          type: typeName.replace('Craft', ''),
          props: JSON.stringify(clearValueThemeAndDynamicData(serializeNode.props)),
          displayName: serializeNode.custom?.displayName
            ? serializeNode.custom?.displayName
            : serializeNode.displayName,
          hidden: serializeNode.hidden,
          linkedNodes: Object.values(serializeNode.linkedNodes),
          children: serializeNode.nodes,
          pagePath: serializeNode.page,
        };

        nodes.push(node);
      }

      console.log({ nodes, pages, theme });

      // call api
      await genCodeService
        .genCode({
          nodes,
          pages,
          projectId: project?.id,
          theme,
        })
        .then((res) => {
          if (res.url) window.location.href = res.url;
        })
        .catch((err) => {
          console.log(err);
        });
    } finally {
      setLoadingGenCode(false);
    }
  };

  const handleGoToAdminDatabase = () => {
    window.open(`/admin/dynamic-data?project_id=${project?.id}`, '_blank');
  };

  const handleSaveProject = () => {
    const json = query.serialize();
    const compressString = (lz.encodeBase64(lz.compress(json)));
    userService.updateProject({
      ...project,
      compressString,
      updatedTime: new Date().getTime(),
    }).then(resp => {
      if (resp.msg) {
        toastMessage.error('Save project failed');
      } else toastMessage.success('Save project successfully');
    }).catch((err) => {
      console.log(err);
      toastMessage.error('Save project failed');
    });
  };

  const handleClickOpenDialogTheme = () => {
    setOpenDialogTheme(true);
  };
  const handleCloseDialogTheme = () => {
    setOpenDialogTheme(false);
  };
  const handleUpdateTheme = (data) => {
    const themeObject = data.theme?.reduce((res, item) => ({
      ...res, [titleToCamelize(item.key)]: {
        value: item.value,
        type: item.type,
      }
    }), {});

    actions.setTheme(themeObject);
    handleCloseDialogTheme();
  };

  return (
    <HeaderDiv id='header' className='header text-white transition w-full'>
      <div className='items-center flex w-full pl-4 justify-space-between py-2'>
        <div className='logo-container flex items-center' style={{ width: '200px' }}>
          <a href='/' className='flex items-center'>
            <Image className='header-logo' src={Logo} alt='Our Logo' height={47} width={47} />
            {/* <span className='self-center text-xl font-bold whitespace-nowrap ml-2 text-indigo-500'>Buildify</span> */}
          </a>
          <h2 className='text-indigo-950 text-xl ml-4'>{project.name}</h2>
        </div>

        {/* Form add new page  */}
        <PageFormControl className='pt-2'>
          <div className='add-page-container flex items-center'>
            <Select
              value={currentPage}
              onChange={handleChangePage}
              inputProps={{
                name: 'current-page-select',
                id: 'current-page',
              }}
              className='page-select global-select'
              renderValue={(value) => pages.find((el) => el.path === value)?.name + ' page'}
            >
              {pages.map((page) => (
                <MenuItem key={page.path} value={page.path} className='custom-menu-item'>
                  {page.name}
                  {/* Can't remove home page */}
                  {page.path !== ROOT_PATH && (
                    <RemoveIcon
                      fontSize='small'
                      className='rm-icon bg-red-500 hover:bg-red-600'
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeletePageSelectItem(page.path);
                      }}
                    />
                  )}
                </MenuItem>
              ))}
            </Select>
            <LightTooltip title='Add new page'>
              <AddCircleIcon
                className='cursor-pointer ml-2 text-green-500'
                onClick={clickOpenDialogAddNewPage}
                fontSize='small'
              />
            </LightTooltip>
          </div>
        </PageFormControl>

        {/* Undo and Redo  */}
        {enabled && (
          <div className='flex'>
            <Tooltip title='Undo' placement='bottom'>
              <a
                className='action-ic'
                style={{
                  cursor: canUndo ? 'pointer' : 'not-allowed',
                  opacity: canUndo ? 1 : 0.5,
                }}
                onClick={() => actions.history.undo()}
              >
                <UndoSvg />
              </a>
            </Tooltip>
            <Tooltip title='Redo' placement='bottom'>
              <a
                className='action-ic'
                style={{
                  cursor: canRedo ? 'pointer' : 'not-allowed',
                  opacity: canRedo ? 1 : 0.5,
                }}
                onClick={() => actions.history.redo()}
              >
                <RedoSvg />
              </a>
            </Tooltip>
          </div>
        )}
        <div className='flex-1 flex' />

        <div className='actions-group flex items-center'>
          <Tooltip title={enabled ? 'Finish Editing' : 'Edit'} placement='bottom'>
            <a
              className='action-ic-right'
              style={{
                cursor: 'pointer',
              }}
              onClick={() => {
                actions.setOptions((options) => (options.enabled = !enabled));
              }}
            >
              {enabled ? <Checkmark /> : <Customize />}
            </a>
          </Tooltip>

          <Tooltip title='Debug' placement='bottom'>
            <a
              className='action-ic-right debug'
              style={{
                cursor: 'pointer',
              }}
              onClick={() => {
                console.log(
                  'Node tree',
                  query.getSerializedNodes(),
                  'length',
                  Object.keys(query.getSerializedNodes()).length
                );
                console.log('State', query.getState());
                console.log('Serialized data', query.serialize());
              }}
            >
              <DebugSvg />
            </a>
          </Tooltip>

          <Tooltip title='Copy current state' placement='bottom'>
            <a
              className='action-ic-right'
              style={{
                cursor: 'pointer',
              }}
              onClick={() => {
                const json = query.serialize();
                copy(lz.encodeBase64(lz.compress(json)));
              }}
            >
              <CopyStateSvg />
            </a>
          </Tooltip>

          <Tooltip title='Load state' placement='bottom'>
            <a
              className='action-ic-right load'
              style={{
                cursor: 'pointer',
              }}
              onClick={() => setOpenDialogLoadState(true)}
            >
              <LoadStateSvg />
            </a>
          </Tooltip>

          <Tooltip title={!isShownAllIndicator ? 'Show indicators' : 'Hide indicators'} placement='bottom'>
            <a
              className='action-ic-right'
              style={{
                cursor: 'pointer',
              }}
              onClick={() => {
                actions.setOptions((options) => (options.isShownAllIndicator = !isShownAllIndicator));
              }}
            >
              {isShownAllIndicator ? <ShowSvg /> : <HideSvg />}
            </a>
          </Tooltip>

          <Btn
            className={`ml-2 transition cursor-pointer btn-gen-code bg-neutral-600`}
            onClick={handleSaveProject}
          >
            Save
          </Btn>

          <Btn
            className={`ml-2 transition cursor-pointer btn-gen-code bg-neutral-600`}
            onClick={handleGoToAdminDatabase}
          >
            Database
          </Btn>

          <Btn
            className={`ml-2 transition cursor-pointer btn-gen-code bg-fuchsia-500`}
            onClick={handleClickOpenDialogTheme}
          >
            Theme
          </Btn>

          <Btn
            className={`ml-2 transition cursor-pointer btn-gen-code bg-purple-600 ${loadingGenCode ? 'disabled' : ''}`}
            onClick={handleGenerateCode}
          >
            {loadingGenCode && <CircularProgress size={20} />}
            Generate Code
          </Btn>
        </div>
      </div>

      {/* Dialog add new page infor */}

      <Dialog open={openDialogNewPage} onClose={handleCloseDialogNewPage} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>New Page Information</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter new path and name for your page:</DialogContentText>
          <ul className='dialog-new-page'>
            <li>Path: specific path for pages' routing, must start with /. Ex: /example</li>
            <li>Name: specific name for corresponding page, use as title. Ex: Example</li>
          </ul>

          <TextField
            margin='dense'
            id='path'
            label='Page Path'
            type='text'
            fullWidth
            onChange={(e) => {
              dispatch({ type: 'UPDATE_PATH', data: e.target.value });
            }}
          />
          <TextField
            margin='dense'
            id='name'
            label='Page Name'
            type='text'
            fullWidth
            onChange={(e) => {
              dispatch({ type: 'UPDATE_NAME', data: e.target.value });
            }}
          />
        </DialogContent>
        <DialogActions>
          <MaterialButton
            onClick={handleCloseDialogNewPage}
            style={{
              backgroundColor: _var.redColor,
              color: _var.whiteColor,
              padding: '6px',
              borderRadius: '6px',
              margin: '10px 0 10px 0',
            }}
          >
            Cancel
          </MaterialButton>
          <MaterialButton
            onClick={handleAddPage}
            style={{
              backgroundColor: _var.greenColor,
              color: _var.whiteColor,
              padding: '6px',
              borderRadius: '6px',
              margin: '10px 14px 10px 10px',
            }}
          >
            Done
          </MaterialButton>
        </DialogActions>
      </Dialog>

      {/* Dialog load state (copied) */}
      <Dialog open={openDialogLoadState} onClose={() => setOpenDialogLoadState(false)} fullWidth maxWidth='md'>
        <DialogTitle id='alert-dialog-title'>Load state</DialogTitle>
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
          <MaterialButton onClick={() => setOpenDialogLoadState(false)} color='secondary'>
            Cancel
          </MaterialButton>
          <MaterialButton
            onClick={() => {
              setOpenDialogLoadState(false);
              const json = lz.decompress(lz.decodeBase64(stateToLoad));
              actions.deserialize(json);
            }}
            color='primary'
            autoFocus
          >
            Load
          </MaterialButton>
        </DialogActions>
      </Dialog>

      {/* Dialog confirm deleting page */}

      <Dialog
        open={openDialogConfirmDelete}
        aria-labelledby='delete-page-dialog-title'
        aria-describedby='delete-page-dialog-description'
      >
        <DialogTitle id='delete-page-dialog-title'>
          Delete {pages.find((el) => el.path === deletingPagePath)?.name} page
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


      {/* Dialog theme */}

      <Dialog maxWidth={'md'} id="dialog-theme" open={openDialogTheme} onClose={handleCloseDialogTheme} aria-labelledby='form-dialog-title'>
        <form onSubmit={handleSubmit(handleUpdateTheme)}>
          <DialogTitle id='form-dialog-title'>Theme information</DialogTitle>
          <DialogContent style={{ paddingRight: 32 }}>
            <Box sx={{ flexGrow: 1, width: 800 }}>
              {fields.map((item, index) => (
                <Grid style={{ borderBottom: "1px solid rgba(51,48,60,.15)", marginBottom: 8 }} key={item.id} container spacing={4} direction="row"
                  alignContent="center"
                  alignItems="center" component="div">
                  <Grid item xs={5}> <Controller
                    control={control}
                    name={`theme.${index}.key`}
                    rules={{ required: "Please fill in name of theme's property" }}
                    render={({ field }) => (
                      <>
                        <label htmlFor={`theme.${index}.key`} className="block mb-2">Name</label>
                        <TextField
                          {...field}
                          fullWidth
                          // label="Name"
                          margin="dense"
                          // required
                          error={!!errors?.theme?.[index]?.key}
                          helperText={errors?.theme?.[index]?.key && `${errors.theme?.[index]?.key.message}`}
                          onInput={e => handleInputAppTitleCase(e)}
                        /></>
                    )}
                  /></Grid>
                  <Grid item style={{ width: 120 }}>

                    <Controller
                      control={control}
                      name={`theme.${index}.type`}
                      rules={{ required: "Please fill in name of theme's property" }}
                      render={({ field }) => (
                        <>
                          <label htmlFor={`theme.${index}.type`} className="block mb-3">Type</label>
                          <Select
                            // inputProps={{
                            //   name: 'current-theme-select',
                            //   id: 'current-theme',
                            // }}
                            className='theme-select global-select theme-select'
                            // renderValue={(value) => pages.find((el) => el.path === value)?.name + ' page'}
                            {...field}
                          >
                            {ThemeTypeOptions.map((otp) => (
                              <MenuItem key={otp.value} value={otp.value} className='custom-menu-item'>
                                {otp.label}
                              </MenuItem>
                            ))}
                          </Select>
                        </>
                      )}
                    />


                  </Grid>
                  <Grid item xs={4}>
                    {watch(`theme.${index}.type`) === THEME_TYPE_VALUE.NUMBER &&
                      <Controller
                        control={control}
                        name={`theme.${index}.value`}
                        rules={{ required: "Please fill in value of theme's property" }}
                        render={({ field }) => (
                          <>
                            <label htmlFor={`theme.${index}.type`} className="block mb-2">Value</label>
                            <TextField
                              {...field}
                              fullWidth
                              // label="Value"
                              margin="dense"
                              type='number'
                              inputProps={{ style: { textAlign: 'center' } }}
                              disabled={!watch(`theme.${index}.type`)}
                              // required
                              error={!!errors?.theme?.[index]?.value}
                              helperText={errors?.theme?.[index]?.value && `${errors.theme?.[index]?.value.message}`}
                            />
                          </>


                        )}
                      />}

                    {watch(`theme.${index}.type`) === THEME_TYPE_VALUE.COLOR && <Controller
                      control={control}
                      name={`theme.${index}.value`}
                      rules={{ required: "Please fill in value of theme's property" }}
                      render={({ field }) => (
                        <>
                          <label htmlFor={`theme.${index}.value`} className="block mb-2">Value</label>
                          <ColorInput
                            type='color'
                            {...field}
                          // label="Value"
                          />
                        </>

                      )}
                    />}

                    {!watch(`theme.${index}.type`) && <><label htmlFor={`theme.${index}.value`} className="block mb-2">Value</label><TextField fullWidth
                      disabled
                      value='Please select type'
                    /></>}

                  </Grid>

                  <Grid item xs={1}>

                    <button className='text-red-600' type="button" onClick={() => remove(index)}><DeleteIcon /></button>
                  </Grid>
                  <br />
                </Grid>
              ))}
              <Btn
                type="button"
                onClick={() => append({ key: "", value: "", type: "" })}
                className={`transition cursor-pointer btn-gen-code bg-fuchsia-500 w-fit hover:bg-fuchsia-700`}
                style={{ marginLeft: 0, marginTop: 16 }}
              >
                <AddIcon style={{ fill: "white", width: 20, height: 20 }} />
                Add theme property
              </Btn>
            </Box>


          </DialogContent>
          <DialogActions>
            <MaterialButton
              onClick={handleCloseDialogTheme}
              style={{
                backgroundColor: _var.redColor,
                color: _var.whiteColor,
                padding: '6px',
                borderRadius: '6px',
                margin: '10px 0 10px 0',
              }}
            >
              Cancel
            </MaterialButton>
            <MaterialButton
              style={{
                backgroundColor: _var.greenColor,
                color: _var.whiteColor,
                padding: '6px',
                borderRadius: '6px',
                margin: '10px 14px 10px 10px',
              }}
              type="submit"
            >
              Done
            </MaterialButton>
          </DialogActions>
        </form>
      </Dialog>
    </HeaderDiv>
  );
};
