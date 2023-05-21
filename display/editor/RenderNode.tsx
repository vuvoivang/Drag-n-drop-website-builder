import { useNode, useEditor } from 'libs/core/src';
import { ROOT_NODE } from 'libs/utils/src';
import React, { useEffect, useRef, useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import ArrowUp from '../../public/icons/arrow-up.svg';
import Clone from '../../public/icons/clone.svg';
import Delete from '../../public/icons/delete.svg';
import Move from '../../public/icons/move.svg';
import Link from '@mui/icons-material/TrendingUp';
import _var from '../styles/common/_var.module.scss';
import {
  Tooltip,
  Button as MaterialButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@material-ui/core';

import { Autocomplete, TextField } from '@mui/material';
import { MOCK_COLLECTIONS, MOCK_DOCUMENTS } from 'display/mock/dynamic-data';
import { lighten, darken } from '@mui/system';
import { createFilterOptions } from '@mui/material/Autocomplete';

const GroupHeader = styled('div')({
  position: 'sticky',
  top: '-8px',
  padding: '4px 10px',
  color: _var.secondaryColor,
  backgroundColor: lighten(_var.secondaryColor, 0.85),
});

const GroupItems = styled('ul')({
  padding: 0,
});

const IndicatorDiv = styled.div`
  height: 30px;
  margin-top: -29px;
  font-size: 14px;
  line-height: 14px;
  .link {
    font-size: 20px;
    line-height: 20px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
  svg {
    fill: ${_var.whiteColor};
    width: 15px;
    height: 15px;
  }
`;

const Btn = styled.a`
  padding: 0 0px;
  opacity: 0.9;
  display: flex;
  align-items: center;
  > div {
    position: relative;
    top: -50%;
    left: -50%;
  }
`;

export const RenderNode = ({ render }) => {
  const { id } = useNode();
  const { actions, query, isActive, database } = useEditor((_, query) => ({
    isActive: query.getEvent('selected').contains(id),
    database: query.getDatabase(),
  }));

  const {
    isHover,
    dom,
    name,
    moveable,
    deletable,
    connectors: { drag },
    parent,
    actions: { setProp },
    propTextValue,
  } = useNode((node) => ({
    isHover: node.events.hovered,
    dom: node.dom,
    name: node.data.custom.displayName || node.data.displayName,
    moveable: query.node(node.id).isDraggable(),
    deletable: query.node(node.id).isDeletable(),
    parent: node.data.parent,
    propTextValue: node.data.props?.text,
  }));

  const { isShownAllIndicator } = useEditor((state) => ({
    isShownAllIndicator: state.options.isShownAllIndicator,
  }));

  const currentRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (dom) {
      if (isActive || isHover) dom.classList.add('component-selected');
      else dom.classList.remove('component-selected');
    }
  }, [dom, isActive, isHover]);

  const getPos = useCallback((dom: HTMLElement) => {
    const { top, left, bottom } = dom ? dom.getBoundingClientRect() : { top: 0, left: 0, bottom: 0 };
    return {
      top: `${top > 0 ? top : bottom}px`,
      left: `${left}px`,
    };
  }, []);

  const scroll = useCallback(() => {
    const { current: currentDOM } = currentRef;

    if (!currentDOM) return;
    const { top, left } = getPos(dom);
    currentDOM.style.top = top;
    currentDOM.style.left = left;
  }, [dom, getPos]);

  useEffect(() => {
    document.querySelector('.craftjs-renderer').addEventListener('scroll', scroll);

    return () => {
      document.querySelector('.craftjs-renderer').removeEventListener('scroll', scroll);
    };
  }, [scroll]);

  const [openDialogConnectData, setOpenDialogConnectData] = useState(false);
  const [collections, setCollections] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [selectedDocument, setSelectedDocument] = useState(null);

  useEffect(() => {
    setCollections(database.collections);
    setDocuments(database.documents);
  }, [database]);

  const handleCloseDialogConnectData = () => {
    setOpenDialogConnectData(false);
  };
  const handleConnectData = () => {
    handleCloseDialogConnectData();
    setProp((props) => {
      props.text = {
        type: 'dynamic',
        value: selectedDocument.label,
        key: selectedDocument.key,
        collectionId: selectedCollection.value,
        documentId: selectedDocument.value.slice(0, Number(selectedDocument.value.indexOf('-'))),
      };
    });
  };

  const collectionOptions = collections?.map((item) => {
    return {
      value: item.id,
      label: item.name,
    };
  });

  const documentOptions = documents
    ?.filter((item) => item.collectionId === selectedCollection?.value)
    .map((item) => {
      return Object.entries(item.data).map(([key, value]) => {
        return {
          value: `${item.id}-${key}`,
          label: value,
          key,
        };
      });
    })
    .flat();

  const filterOptions = createFilterOptions({
    matchFrom: 'start',
    ignoreCase: true,
    ignoreAccents: true,
    trim: true,
  });

  useEffect(() => {
    if (!selectedCollection) {
      setSelectedDocument(null);
    }
  }, [selectedCollection]);

  return (
    <>
      {isHover || isActive || isShownAllIndicator
        ? ReactDOM.createPortal(
            <IndicatorDiv
              ref={currentRef}
              className='px-2 py-2 text-white bg-blue-500 fixed flex items-center'
              style={{
                left: getPos(dom).left,
                top: getPos(dom).top,
                zIndex: 9999,
              }}
            >
              <h2 className='flex-1'>{name}</h2>
              <p className='text-sm text-yellow-300 mr-4 ml-2'>{id}</p>
              {moveable ? (
                <Btn className='mr-2 cursor-move' ref={drag}>
                  <Move />
                </Btn>
              ) : null}
              {!id.startsWith(ROOT_NODE) && (
                <Btn
                  className='mr-2 cursor-pointer'
                  onClick={() => {
                    const {
                      data: { type, props },
                    } = query.node(id).get();
                    actions.add(query.createNode(React.createElement(type, props)), parent);
                  }}
                >
                  <Clone />
                </Btn>
              )}
              {!id.startsWith(ROOT_NODE) && (
                <Btn
                  className='mr-2 cursor-pointer'
                  onClick={() => {
                    actions.selectNode(parent);
                  }}
                >
                  <ArrowUp />
                </Btn>
              )}
              {deletable ? (
                <Btn
                  className='mr-2 cursor-pointer'
                  onMouseDown={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    actions.delete(id);
                  }}
                >
                  <Delete />
                </Btn>
              ) : null}
              {propTextValue !== undefined ? (
                <Tooltip title='Connect Data'>
                  <Btn
                    className='link cursor-pointer'
                    onMouseDown={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      setOpenDialogConnectData(true);
                    }}
                  >
                    <Link />
                  </Btn>
                </Tooltip>
              ) : null}
            </IndicatorDiv>,
            document.querySelector('.page-container') // create inside the page container, but still in component tree (triggered by onClick...)
          )
        : null}
      {render}

      {/* Dialog connect data for text */}

      <Dialog
        open={openDialogConnectData}
        onClose={handleCloseDialogConnectData}
        aria-labelledby='form-dialog-connect-data-title'
        id='form-dialog-connect-data'
      >
        <DialogTitle>Connect Data From Your Database</DialogTitle>
        <DialogContent id='form-dialog-connect-data-content'>
          <DialogContentText>Choose your data's value from your collections</DialogContentText>

          <Autocomplete
            disablePortal
            id='collections-autocomplete'
            options={collectionOptions}
            sx={{ width: 300 }}
            onChange={(_, newValue) => {
              setSelectedCollection(newValue);
            }}
            value={selectedCollection}
            renderInput={(params) => (
              <TextField
                {...params}
                label='Collection'
                // @ts-ignore
                filterOptions={filterOptions}
              />
            )}
          />

          <Autocomplete
            id='documents-autocomplete'
            value={selectedDocument}
            options={documentOptions?.sort((a, b) => (a.value < b.value ? -1 : 1))}
            disabled={!selectedCollection}
            groupBy={(option) => option.value.slice(0, Number(option.value.indexOf('-'))) as any}
            getOptionLabel={(option) =>
              `(${option.key}) ${option.label.length > 47 ? `${option.label?.slice(0, 47)}...` : option.label}` as any
            }
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label='Choose data from documents' />}
            renderGroup={(params) => (
              <li key={params.key}>
                <GroupHeader>Document {params.group}</GroupHeader>
                <GroupItems>{params.children}</GroupItems>
              </li>
            )}
            onChange={(_, newValue) => {
              setSelectedDocument(newValue);
            }}
            filterOptions={filterOptions}
          />
        </DialogContent>
        <DialogActions>
          <MaterialButton
            onClick={handleCloseDialogConnectData}
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
            onClick={handleConnectData}
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
    </>
  );
};
