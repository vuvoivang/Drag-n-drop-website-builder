import { useEditor, useNode } from 'libs/core/src';
import { Grid, Slider, RadioGroup, MenuItem, FormGroup } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import { withStyles } from '@material-ui/core/styles';
import React, { useEffect, useRef, useState } from 'react';
import ImageUploading, { ImageListType } from 'react-images-uploading';

import { ToolbarDropdown } from '../ToolbarDropdown';
import { ToolbarTextInput } from '../ToolbarTextInput';
import { ToolbarRadio } from '../ToolbarRadio';
import { ToolbarCheckbox } from '../ToolbarCheckbox';

import { PLACEHOLDER_IMAGE_URL, STYLED_CLASSNAMES_KEY } from 'display/constants';
import { LightTooltip } from 'display/shared/components/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import _var from '../../../styles/common/_var.module.scss';
import fileMgtService from 'services/file-mgt';
import { THEME_TYPE_VALUE } from '@libs/utils';
import { camelToTitle } from 'utils/text';
import { cloneDeep } from 'lodash';

const iOSBoxShadow = '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value; //assign the value of ref to the argument
  }, [value]); //this code will run when the value of 'value' changes
  return ref.current; //in the end, return the current ref value.
}
const SliderStyled = withStyles({
  root: {
    color: _var.secondaryColor,
    height: 2,
    padding: '5px 0',
    width: '100%',
  },
  thumb: {
    height: 14,
    width: 14,
    backgroundColor: _var.primaryColor,
    boxShadow: iOSBoxShadow,
    marginTop: -7,
    marginLeft: -7,
    '&:focus,&:hover,&$active': {
      boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 11px)',
    top: -22,
    '& *': {
      background: 'transparent',
      color: _var.redColor, //??
    },
  },
  track: {
    height: 2,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: _var.grayDarkColor,
  },
  mark: {
    backgroundColor: _var.redColor, //??
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: 'currentColor',
  },
})(Slider);
type Option = {
  value: string;
  label: string;
};
export type ToolbarPropItemProps = Partial<{
  prefix: string;
  label: string;
  full: boolean;
  propKey: string;
  nestedPropKey?: string;
  index: number;
  children: React.ReactNode;
  type: string | string[];
  styledCustomOptions: Option | Array<Option>;
  checkboxChildren: Array<Option>;
  radioChildren: Array<Option>;
  selectchildren: Array<Option>;
  onChange: (value: any) => any;
  themeTypes: THEME_TYPE_VALUE | THEME_TYPE_VALUE[];
}>;
enum CUSTOM_STYLE {
  DEFAULT = 'DEFAULT',
  STYLED_SUGGESTION = 'SUGGESTION',
  THEME = 'THEME',
}

const useMenuItemStyles = makeStyles({
  root: {
    fontSize: '14px',
  },
});

export const ToolbarPropItem = ({
  full = false,
  propKey,
  nestedPropKey, // craft component is children of another component
  type: inputType,
  styledCustomOptions = [],
  onChange,
  index,
  themeTypes = [],
  ...props
}: ToolbarPropItemProps) => {
  const menuItemClasses = useMenuItemStyles({});

  const getCurrentProps = (props) => {
    if (nestedPropKey) {
      return props[nestedPropKey];
    }
    return props;
  };

  const setCurrentProp = (callbackSetProps, timeout?) => {
    if (previousValue && previousValue?.type === 'theme' && value?.type !== 'theme') {
      removeReferencedPropKeyOfNodeFromTheme(nodeId, getPropKeyReferenceTheme());
    }
    if (nestedPropKey) {
      return setProp((props) => callbackSetProps(props[nestedPropKey]), timeout);
    }
    return setProp(callbackSetProps, timeout);
  };
  const { theme, actions: { setTheme, removeReferencedPropKeyOfNodeFromTheme } } = useEditor((_, query) => ({ theme: query.getTheme() }));
  const {
    id: nodeId,
    actions: { setProp },
    propValue,
    propStyledClassNameValue,
  } = useNode((node) => ({
    propValue: getCurrentProps(node.data.props)[propKey],
    propStyledClassNameValue: getCurrentProps(node.data.props)[STYLED_CLASSNAMES_KEY]?.[propKey] || '',
  }));
  const value = Array.isArray(propValue) ? propValue[index] : propValue;
  const styledClassNameValue = Array.isArray(propStyledClassNameValue)
    ? propStyledClassNameValue[index]
    : propStyledClassNameValue;
  const listType = Array.isArray(inputType) ? inputType : [inputType];
  const listStyledCustomOptions = Array.isArray(styledCustomOptions) ? styledCustomOptions : [styledCustomOptions];
  const arrThemeTypes = Array.isArray(themeTypes) ? themeTypes : [themeTypes];
  const listThemeOptions = Object.entries(theme).filter(([_, valueTheme]) => arrThemeTypes.includes(valueTheme.type)).map(([id, { key }]) => ({
    value: {
      type: 'theme',
      // key,
      id: Number(id),
    },
    label: camelToTitle(key),
  }));
  const [customStyle, setCustomStyle] = useState<string>(CUSTOM_STYLE.DEFAULT);
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);
  const isDisabledDefault = customStyle !== CUSTOM_STYLE.DEFAULT;
  const isDisabledStyledSuggestion = customStyle !== CUSTOM_STYLE.STYLED_SUGGESTION;
  const isDisabledTheme = customStyle !== CUSTOM_STYLE.THEME;
  const previousValue = usePrevious(value);
  useEffect(() => {
    if (isFirstLoad) {
      // prevent set value when first load
      setIsFirstLoad(false);
      return;
    }
    if (customStyle === CUSTOM_STYLE.DEFAULT || customStyle === CUSTOM_STYLE.THEME) {
      // clear class value
      handleSetPropClassName('');

    } else if (customStyle === CUSTOM_STYLE.STYLED_SUGGESTION) {
      // keep state default to switch again
      // and set default value for styled class
      handleSetPropClassName(`custom-${listStyledCustomOptions[0].value}`);
    }
  }, [customStyle]);

  useEffect(() => {
    setCustomStyle(styledClassNameValue ? CUSTOM_STYLE.STYLED_SUGGESTION : value?.type ? CUSTOM_STYLE.THEME : CUSTOM_STYLE.DEFAULT)
  }, [styledClassNameValue]);

  const handleSetPropClassName = (className: string) => {
    setCurrentProp((props: any) => {
      if (!props[STYLED_CLASSNAMES_KEY]) {
        props[STYLED_CLASSNAMES_KEY] = {};
      }
      if (!props[STYLED_CLASSNAMES_KEY]?.[propKey])
        if (Array.isArray(propValue)) props[STYLED_CLASSNAMES_KEY][propKey] = [];
        else props[STYLED_CLASSNAMES_KEY] = {};

      if (Array.isArray(propValue)) {
        props[STYLED_CLASSNAMES_KEY][propKey][index] = className;
      } else props[STYLED_CLASSNAMES_KEY][propKey] = className;
    });
  };
  const setPropKeyValueWithIndexAndTimeOut = (value: any, timeout: number) => {
    setCurrentProp((props: any) => {
      if (Array.isArray(propValue)) {
        props[propKey][index] = onChange ? onChange(value) : value;
      } else {
        props[propKey] = onChange ? onChange(value) : value;
      }
    }, timeout);
  };
  const setPropKeyValueWithoutIndex = (value: any) => {
    setCurrentProp((props: any) => {
      props[propKey] = onChange ? onChange(value) : value;
    });
  };
  const setPropKeyValueWithPropertyName = (propName: string, value: any) => {
    setCurrentProp((props: any) => {
      if (typeof props[propKey] === 'object') {
        props[propKey][propName] = onChange ? onChange(value) : value;
      }
    });
  };
  const handleSetPropValue = (newValue: any, type: string) => {
    if (['text', 'color', 'bg', 'number', 'imageUpload'].includes(type)) {
      setPropKeyValueWithIndexAndTimeOut(newValue, 500);
    } else if (type === 'slider') {
      setPropKeyValueWithIndexAndTimeOut(newValue, 1000);
    } else if (['radio', 'select'].includes(type)) {
      setPropKeyValueWithoutIndex(newValue);
    } else if (type === 'checkbox') {
      setPropKeyValueWithPropertyName(newValue.name, newValue.checked);
    }
  };
  const getPropKeyReferenceTheme = () => {
    const curPropKey = nestedPropKey ? `${propKey}${nestedPropKey}` : propKey;
    const refPropKey = Array.isArray(propValue) ? `${curPropKey}${index}` : curPropKey;
    return refPropKey;
  }
  const handleSetPropTheme = (value) => {
    const { type, id } = JSON.parse(value);
    handleSetPropValue({ type, id }, 'select');

    // update reference nodes with theme
    const refPropKey = getPropKeyReferenceTheme();
    const newTheme = cloneDeep(theme);
    const currentRefNodesInTheme = newTheme[id].refNodes?.[nodeId];
    if (!currentRefNodesInTheme) {
      newTheme[id].refNodes = { ...newTheme[id].refNodes, [nodeId]: [refPropKey] };
    } else newTheme[id].refNodes[nodeId] = new Set([...currentRefNodesInTheme, refPropKey]);
    setTheme(newTheme);
  }

  const handleRenderInputSetting = (type) => {
    const normalizedValue = value?.type === 'theme' ? theme[value.id].value : value;
    return (
      <>
        {['text', 'color', 'bg', 'number'].includes(type) ? (
          <ToolbarTextInput
            {...props}
            type={type}
            value={normalizedValue}
            disabled={isDisabledDefault}
            onChange={(value) => {
              handleSetPropValue(value, type);
            }}
          />
        ) : type === 'slider' ? (
          <>
            <SliderStyled
              disabled={isDisabledDefault}
              value={parseInt(normalizedValue) || 0}
              onChange={
                ((_, value: number) => {
                  handleSetPropValue(value, type);
                }) as any
              }
            />
          </>
        ) : type === 'radio' ? (
          <>
            <RadioGroup
              value={normalizedValue || 0}
              onChange={(e) => {
                const newValue = e.target.value;
                handleSetPropValue(newValue, type);
              }}
            >
              {props.radioChildren?.map((option) => (
                <ToolbarRadio
                  key={option.value}
                  value={option.value}
                  label={option.label}
                  disabled={isDisabledDefault}
                />
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
                  disabled={isDisabledDefault}
                  checked={!!normalizedValue[option.value]}
                  onChange={(e) => {
                    const newValue = {
                      name: e.target.value,
                      checked: e.target.checked,
                    };
                    handleSetPropValue(newValue, type);
                  }}
                />
              ))}
            </FormGroup>
          </>
        ) : type === 'select' ? (
          <ToolbarDropdown
            value={normalizedValue || ''}
            renderValue={(value) => {
              const option = props.selectchildren?.find((option) => option.value === value);
              return option?.label || 'Select value';
            }}
            onChange={(value) => handleSetPropValue(value, type)}
            disabled={isDisabledDefault}
            {...props}
          >
            {props.selectchildren?.map((option) => (
              <MenuItem key={option.value} value={option.value} disabled={isDisabledDefault} classes={menuItemClasses}>
                {option.label}
              </MenuItem>
            ))}
          </ToolbarDropdown>
        ) : type === 'imageUpload' ? (
          <ImageUploading
            value={[normalizedValue] || ['']}
            onChange={async (imageList: ImageListType) => {
              // call api upload image
              // set image url to value
              const fileImage = imageList[0]?.file;
              const formData = new FormData();
              formData.append('image', fileImage);

              try {
                fileMgtService.uploadImage(fileImage).then((res: any) => {
                  if (res?.code === 0) {
                    handleSetPropValue(res?.url, type);
                  }
                });

              } catch (err) {
                console.log('Err upload image', err);
              }
            }}
            acceptType={['jpg', 'gif', 'png']}
          >
            {({ onImageUpload, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
              <div className='upload__image-wrapper'>
                {value && value !== PLACEHOLDER_IMAGE_URL ? (
                  <>
                    <div className='image-item'>
                      <img src={value} alt='uploaded' width='180' />
                      <div className='image-item__btn-wrapper mt-4'>
                        <button
                          onClick={() => onImageUpdate(0)}
                          className='text-sm py-2 px-3 rounded-full text-black bg-green-600	focus:outline-none mr-2'
                        >
                          <UpdateIcon /> Update
                        </button>
                        <button
                          onClick={() => onImageRemove(0)}
                          className='text-sm py-2 px-3 rounded-full text-black bg-rose-600	 focus:outline-none'
                        >
                          <DeleteIcon /> Remove
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <button
                    style={isDragging ? { color: 'red' } : undefined}
                    onClick={onImageUpload}
                    className='text-sm py-2 px-3 rounded-full text-white bg-green-600	focus:outline-none'
                    {...dragProps}
                  >
                    Choose image (click or drop)
                  </button>
                )}
              </div>
            )}
          </ImageUploading>
        ) : null}
      </>
    );
  };
  return (
    <Grid item xs={12}>
      <div className='mb-2 toolbar-item-container'>
        {props.label && <h4 className='text-sm text-primary'>{props.label}</h4>}

        <div className='toolbar-item-setting-container p-4 pb-0'>
          {[...listStyledCustomOptions, ...listThemeOptions].length > 0 ? ( // radio group to choose how to use style
            <RadioGroup
              value={customStyle}
              onChange={(e) => {
                setCustomStyle(e.target.value);
              }}
            >
              <ToolbarRadio value={CUSTOM_STYLE.DEFAULT} label={'Use default setting'} />
              <div
                className='default-setting-container p-4 pt-0'
                style={{
                  opacity: isDisabledDefault ? 0.5 : 1,
                }}
              >
                {listType.map((type, keyIndex) => {
                  return (
                    <div className='mb-3' key={keyIndex}>
                      {handleRenderInputSetting(type)}
                    </div>
                  );
                })}
              </div>

              {listStyledCustomOptions.length > 0 && (
                <>
                  <ToolbarRadio value={CUSTOM_STYLE.STYLED_SUGGESTION} label={'Use suggestion style'} />
                  <div
                    style={{
                      opacity: isDisabledStyledSuggestion ? 0.5 : 1,
                    }}
                    className='p-4 pt-0'
                  >
                    <LightTooltip title='Use built-in styles, always be prioritized'>
                      <h4 className='text-sm text-black my-2'>Custom {props.label}</h4>
                      {/* <p className="text-sm text-slate-400 mb-4">
                        Use built-in styles, always be{" "}
                        <span className="text-primary">prioritized</span>
                        </p> */}
                    </LightTooltip>

                    <RadioGroup
                      value={styledClassNameValue?.substring('custom-'.length) || ''}
                      onChange={(e) => {
                        const classNameValue = `custom-${e.target.value}`;
                        handleSetPropClassName(classNameValue);
                      }}
                    >
                      {listStyledCustomOptions?.map((option) => (
                        <ToolbarRadio
                          key={option.value}
                          value={option.value}
                          label={option.label}
                          disabled={isDisabledStyledSuggestion}
                        />
                      ))}
                    </RadioGroup>
                  </div>
                </>
              )}

              {listThemeOptions.length > 0 && (
                <>
                  <ToolbarRadio value={CUSTOM_STYLE.THEME} label={'Use from theme'} />
                  <div
                    style={{
                      opacity: isDisabledTheme ? 0.5 : 1,
                    }}
                    className='p-4 pt-0'
                  >
                    <LightTooltip title='Apply value from your theme, will be changed if you change theme'>
                      <h4 className='text-sm text-black my-2'>Choose your theme's name</h4>
                    </LightTooltip>

                    <ToolbarDropdown
                      value={value || ''}
                      renderValue={(value) => {
                        const option = listThemeOptions?.find((option) => option.value?.id === value?.id);
                        return option?.label || "Select theme's name";
                      }}
                      onChange={handleSetPropTheme}
                      disabled={isDisabledTheme}
                      {...props}
                    >
                      {listThemeOptions?.map((option) => (
                        <MenuItem key={option.value?.id} value={JSON.stringify(option.value)} disabled={isDisabledTheme} classes={menuItemClasses}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </ToolbarDropdown>
                  </div>
                </>
              )}
            </RadioGroup>
          ) : (
            <div
              className='default-setting-container pl-4'
              style={{
                opacity: isDisabledDefault ? 0.5 : 1,
              }}
            >
              {listType.map((type, keyIndex) => {
                return (
                  <div className='mb-3' key={keyIndex}>
                    {handleRenderInputSetting(type)}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </Grid>
  );
};
