import { useEditor, useNode } from 'libs/core/src';
import { Grid, Slider, RadioGroup, MenuItem, FormGroup } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import ImageUploading, { ImageListType } from 'react-images-uploading';

import { ToolbarDropdown } from '../ToolbarDropdown';
import { ToolbarTextInput } from '../ToolbarTextInput';
import { ToolbarRadio } from '../ToolbarRadio';
import { ToolbarCheckbox } from '../ToolbarCheckbox';

import { PLACEHOLDER_IMAGE_URL, STYLED_CLASSNAMES_KEY } from 'display/constants';
import { makeStyles } from '@material-ui/core/styles';
import { serializedPopupNodeForPage } from '@libs/utils';
import { getRandomId as getRandomNodeId } from 'libs/utils/src';
import styled from 'styled-components';
import _var from '../../../styles/common/_var.module.scss';

const Btn = styled.a`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-radius: 3px;
  font-size: 14px;
  width: fit-content;
  margin-bottom: 16px;
  svg {
    margin-right: 6px;
    width: 12px;
    height: 12px;
    fill: ${_var.whiteColor};
    opacity: 0.9;
  }
`;
type Option = {
  value: string;
  label: string;
};
export type ToolbarEventItemProps = Partial<{
  prefix: string;
  label: string;
  full: boolean;
  eventKey: string;
  index: number;
  children: React.ReactNode;
  type: string | string[];
  checkboxChildren: Array<Option>;
  radioChildren: Array<Option>;
  selectchildren: Array<Option>;
  onChange: (value: any) => any;
}>;

const useMenuItemStyles = makeStyles({
  root: {
    fontSize: '14px',
  },
});

const EVENT_KEYS_WITH_MOUSE_OVER_SELECT = ['href'];

export const ToolbarEventItem = ({
  full = false,
  eventKey,
  type: inputType,
  onChange,
  index,
  ...props
}: ToolbarEventItemProps) => {
  const menuItemClasses = useMenuItemStyles({});
  const { actions, query, currentPage } = useEditor((state) => ({
    currentPage: state.pageOptions.currentPage,
  }));
  const {
    actions: { setEvent },
    eventValue,
  } = useNode((node) => ({
    eventValue: node.data.props.events?.[eventKey],
  }));
  const value = Array.isArray(eventValue) ? eventValue[index] : eventValue;
  const listType = Array.isArray(inputType) ? inputType : [inputType];

  const setEventKeyValueWithIndexAndTimeOut = (value: any, timeout: number) => {
    setEvent((events: any) => {
      if (Array.isArray(eventValue)) {
        events[eventKey][index] = onChange ? onChange(value) : value;
      } else {
        events[eventKey] = onChange ? onChange(value) : value;
      }
    }, timeout);
  };
  const setEventKeyValueWithoutIndex = (value: any) => {
    setEvent((events: any) => {
      events[eventKey] = onChange ? onChange(value) : value;
    });
  };
  const setEventKeyValueWithPropertyName = (propName: string, value: any) => {
    setEvent((events: any) => {
      if (typeof events[eventKey] === 'object') {
        events[eventKey][propName] = onChange ? onChange(value) : value;
      }
    });
  };
  const handleSetEventValue = (newValue: any, type: string) => {
    if (['text'].includes(type)) {
      setEventKeyValueWithIndexAndTimeOut(newValue, 500);
    } else if (['radio', 'select'].includes(type)) {
      setEventKeyValueWithoutIndex(newValue);
    } else if (type === 'checkbox') {
      setEventKeyValueWithPropertyName(newValue.name, newValue.checked);
    } else if (type === 'oneOptionCheckbox') {
      setEventKeyValueWithoutIndex(newValue.checked);
    }
  };
  const appliedMouseOverEventSelect = EVENT_KEYS_WITH_MOUSE_OVER_SELECT.includes(eventKey);
  const handleRenderInputSetting = (type) => {
    return (
      <>
        {['text'].includes(type) ? (
          <ToolbarTextInput
            {...props}
            type={type}
            value={value}
            width='100%'
            onChange={(value) => {
              handleSetEventValue(value, type);
            }}
          />
        ) : type === 'radio' ? (
          <>
            <RadioGroup
              value={value || 0}
              onChange={(e) => {
                const newValue = e.target.value;
                handleSetEventValue(newValue, type);
              }}
            >
              {props.radioChildren?.map((option) => (
                <ToolbarRadio key={option.value} value={option.value} label={option.label} />
              ))}
            </RadioGroup>
          </>
        ) : type === 'checkbox' ? (
          <>
            <FormGroup>
              {props.checkboxChildren?.map((option) => (
                <ToolbarCheckbox
                  key={option.value}
                  value={option.value}
                  name={option.value}
                  label={option.label}
                  onChange={(e) => {
                    const newValue = {
                      name: e.target.value,
                      checked: e.target.checked,
                    };
                    handleSetEventValue(newValue, type);
                  }}
                />
              ))}
            </FormGroup>
          </>
        ) : type === 'select' ? (
          <ToolbarDropdown
            value={value || ''}
            renderValue={(value) => {
              const option = props.selectchildren?.find((option) => option.value === value);
              return option?.label || 'Select value';
            }}
            onChange={(value) => handleSetEventValue(value, type)}
            {...props}
          >
            {props.selectchildren?.map((option) => (
              <MenuItem
                key={option.value}
                value={option.value}
                classes={menuItemClasses}
                onMouseOver={appliedMouseOverEventSelect ? () => handleOnMouseOver(option.value) : undefined}
              >
                {option.label}
              </MenuItem>
            ))}
          </ToolbarDropdown>
        ) : type === 'popup' ? (
          <div>
            {!value ? (
              <Btn
                className='transition cursor-pointer text-center rounded-md px-4 py-2 bg-sky-500 text-white'
                onClick={createNewPopup}
              >
                Create pop up
              </Btn>
            ) : (
              <FormGroup>
                <ToolbarCheckbox
                  value={'showPopup'}
                  name={'checkboxShowPopup'}
                  label={'Show popup'}
                  checked={!!getCurrentShowPopup()}
                  onChange={(e) => togglePopup(e.target.checked)}
                />
              </FormGroup>
            )}
          </div>
        ) : type === 'oneOptionCheckbox' ? (
          <>
            <FormGroup>
              {props.checkboxChildren?.map((option) => (
                <ToolbarCheckbox
                  key={option.value}
                  value={option.value}
                  name={option.value}
                  label={option.label}
                  checked={!!value}
                  onChange={(e) => {
                    const newValue = {
                      name: e.target.value,
                      checked: e.target.checked,
                    };
                    handleSetEventValue(newValue, type);
                  }}
                />
              ))}
            </FormGroup>
          </>
        ) : null}
      </>
    );
  };
  const handleOnMouseOver = (id) => {
    if (eventKey === 'href') {
      actions.setNodeEvent('hovered', id);
    }
  };
  const createNewPopup = () => {
    const rootNodeIdThisPage = currentPage.length > 1 ? `ROOT_${currentPage.slice(1)}` : `ROOT`;
    const popupId = `Popup_${getRandomNodeId()}`;

    const newPopupNodeThisPage = {
      ...serializedPopupNodeForPage,
      page: currentPage,
      parent: rootNodeIdThisPage,
      id: popupId,
    };
    setEventKeyValueWithoutIndex(popupId);
    actions.addNewNodeWithSerializedData(newPopupNodeThisPage, popupId);
    // actions.add(newPopupNodeThisPage, rootNodeIdThisPage);
  };
  const getCurrentShowPopup = () => {
    if (eventKey === 'popup' && value) return query.node(value)?.get().data.props.events?.showPopup;
    else return false;
  };
  const togglePopup = (toggle) => {
    actions.setEvent(value, (events) => (events.showPopup = toggle));
  };
  return (
    <Grid item xs={12}>
      <div className='mb-2 toolbar-item-container'>
        {props.label && <h4 className='text-sm text-primary'>{props.label}</h4>}

        <div className='toolbar-item-setting-container p-4 pb-0'>
          <div className='default-setting-container pl-4'>
            {listType.map((type, keyIndex) => {
              return (
                <div className='mb-3' key={keyIndex}>
                  {handleRenderInputSetting(type)}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Grid>
  );
};
