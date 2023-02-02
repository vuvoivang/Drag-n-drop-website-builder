import { useNode } from "libs/core/src";
import { Grid, Slider, RadioGroup, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";

import { ToolbarDropdown } from "./ToolbarDropdown";
import { ToolbarTextInput } from "./ToolbarTextInput";
import { ToolbarRadio } from "./ToolbarRadio";
import { STYLED_CLASSNAMES_KEY } from "display/constants";
import { LightTooltip } from "display/shared/components/Tooltip";

const iOSBoxShadow =
  "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

const SliderStyled = withStyles({
  root: {
    color: "#3880ff",
    height: 2,
    padding: "5px 0",
    width: "100%",
  },
  thumb: {
    height: 14,
    width: 14,
    backgroundColor: "#fff",
    boxShadow: iOSBoxShadow,
    marginTop: -7,
    marginLeft: -7,
    "&:focus,&:hover,&$active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 11px)",
    top: -22,
    "& *": {
      background: "transparent",
      color: "#000",
    },
  },
  track: {
    height: 2,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: "#fff",
  },
  mark: {
    backgroundColor: "#fff",
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: "currentColor",
  },
})(Slider);
type Option = {
  value: string;
  label: string;
};
export type ToolbarItemProps = {
  prefix?: string;
  label?: string;
  full?: boolean;
  propKey?: string;
  index?: number;
  children?: React.ReactNode;
  type: string | string[];
  styledCustomOptions?: Option | Array<Option>;
  radioChildren?: Array<Option>;
  selectChildren?: Array<Option>;
  onChange?: (value: any) => any;
};
enum CUSTOM_STYLE {
  DEFAULT = "DEFAULT",
  STYLED_SUGGESTION = "SUGGESTION",
}
export const ToolbarItem = ({
  full = false,
  propKey,
  type: inputType,
  styledCustomOptions = [],
  onChange,
  index,
  ...props
}: ToolbarItemProps) => {
  const {
    actions: { setProp },
    propValue,
    propStyledClassNameValue,
  } = useNode((node) => ({
    propValue: node.data.props[propKey],
    propStyledClassNameValue:
      node.data.props[STYLED_CLASSNAMES_KEY]?.[propKey] || "",
  }));
  const value = Array.isArray(propValue) ? propValue[index] : propValue;
  const styledClassNameValue = Array.isArray(propStyledClassNameValue)
    ? propStyledClassNameValue[index]
    : propStyledClassNameValue;
  const listType = Array.isArray(inputType) ? inputType : [inputType];
  const listStyledCustomOptions = Array.isArray(styledCustomOptions)
    ? styledCustomOptions
    : [styledCustomOptions];
  const [customStyle, setCustomStyle] = useState<string>(
    styledClassNameValue ? CUSTOM_STYLE.STYLED_SUGGESTION : CUSTOM_STYLE.DEFAULT
  );
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);
  const isDisabledDefault = customStyle !== CUSTOM_STYLE.DEFAULT;
  const isDisabledStyledSuggestion =
    customStyle !== CUSTOM_STYLE.STYLED_SUGGESTION;

  useEffect(() => {
    if (isFirstLoad) {
      // prevent set value when first load
      setIsFirstLoad(false);
      return;
    }
    if (customStyle === CUSTOM_STYLE.DEFAULT) {
      // set default prop value
      // clear class value
      handleSetPropClassName("");
    } else {
      // keep state default to switch again
      // and set default value for styled class
      handleSetPropClassName(`custom-${listStyledCustomOptions[0].value}`);
    }
  }, [customStyle]);

  const handleSetPropClassName = (className: string) => {
    setProp((props: any) => {
      if (!props[STYLED_CLASSNAMES_KEY]) {
        props[STYLED_CLASSNAMES_KEY] = {};
      }
      if (!props[STYLED_CLASSNAMES_KEY]?.[propKey])
        if (Array.isArray(propValue))
          props[STYLED_CLASSNAMES_KEY][propKey] = [];
        else props[STYLED_CLASSNAMES_KEY] = {};

      if (Array.isArray(propValue)) {
        props[STYLED_CLASSNAMES_KEY][propKey][index] = className;
      } else props[STYLED_CLASSNAMES_KEY][propKey] = className;
    });
  };
  const setPropKeyValueWithIndexAndTimeOut = (value: any, timeout: number) => {
    setProp((props: any) => {
      if (Array.isArray(propValue)) {
        props[propKey][index] = onChange ? onChange(value) : value;
      } else {
        props[propKey] = onChange ? onChange(value) : value;
      }
    }, timeout);
  };
  const setPropKeyValueWithoutIndex = (value: any) => {
    setProp((props: any) => {
      props[propKey] = onChange ? onChange(value) : value;
    });
  };
  const handleSetPropValue = (newValue: any, type: string) => {
    if (["text", "color", "bg", "number"].includes(type)) {
      setPropKeyValueWithIndexAndTimeOut(newValue, 500);
    } else if (type === "slider") {
      setPropKeyValueWithIndexAndTimeOut(newValue, 1000);
    } else if (["radio", "select"].includes(type)) {
      setPropKeyValueWithoutIndex(newValue);
    }
  };

  const handleRenderInputSetting = (type) => {
    return (
      <>
        {["text", "color", "bg", "number"].includes(type) ? (
          <ToolbarTextInput
            {...props}
            type={type}
            value={value}
            disabled={isDisabledDefault}
            onChange={(value) => {
              handleSetPropValue(value, type);
            }}
          />
        ) : type === "slider" ? (
          <>
            <SliderStyled
              disabled={isDisabledDefault}
              value={parseInt(value) || 0}
              onChange={
                ((_, value: number) => {
                  handleSetPropValue(value, type);
                }) as any
              }
            />
          </>
        ) : type === "radio" ? (
          <>
            <RadioGroup
              value={value || 0}
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
        ) : type === "select" ? (
          <ToolbarDropdown
            value={value || ""}
            renderValue={(value) => {
              const option = props.selectChildren?.find(
                (option) => option.value === value
              );
              return option?.label || "Select value";
            }}
            onChange={(value) => handleSetPropValue(value, type)}
            disabled={isDisabledDefault}
            {...props}
          >
            {props.selectChildren?.map((option) => (
              <MenuItem
                key={option.value}
                value={option.value}
                disabled={isDisabledDefault}
              >
                {option.label}
              </MenuItem>
            ))}
          </ToolbarDropdown>
        ) : null}
      </>
    );
  };
  return (
    <Grid item xs={12}>
      <div className="mb-2 toolbar-item-container">
        {props.label && <h4 className="text-sm text-primary">{props.label}</h4>}

        <div className="toolbar-item-setting-container p-4 pb-0">
          {listStyledCustomOptions.length > 0 ? ( // radio group to choose how to use style
            <RadioGroup
              value={customStyle}
              onChange={(e) => {
                setCustomStyle(e.target.value);
              }}
            >
              <ToolbarRadio
                value={CUSTOM_STYLE.DEFAULT}
                label={"Use default setting"}
              />
              <div
                className="default-setting-container p-4 pt-0"
                style={{
                  opacity: isDisabledDefault ? 0.5 : 1,
                }}
              >
                {listType.map((type, keyIndex) => {
                  return (
                    <div key={keyIndex}>{handleRenderInputSetting(type)}</div>
                  );
                })}
              </div>

              {listStyledCustomOptions.length > 0 && (
                <>
                  <ToolbarRadio
                    value={CUSTOM_STYLE.STYLED_SUGGESTION}
                    label={"Use suggestion style"}
                  />
                  <div
                    style={{
                      opacity: isDisabledStyledSuggestion ? 0.5 : 1,
                    }}
                    className="p-4 pt-0"
                  >
                    <LightTooltip title="Use built-in styles, always be prioritized">
                      <h4 className="text-sm text-white my-2">
                        Custom {props.label}
                      </h4>
                      {/* <p className="text-sm text-slate-400 mb-4">
                        Use built-in styles, always be{" "}
                        <span className="text-primary">prioritized</span>
                        </p> */}
                    </LightTooltip>

                    <RadioGroup
                      value={
                        styledClassNameValue?.substring("custom-".length) || ""
                      }
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
            </RadioGroup>
          ) : (
            <div
              className="default-setting-container pl-4"
              style={{
                opacity: isDisabledDefault ? 0.5 : 1,
              }}
            >
              {listType.map((type, keyIndex) => {
                return (
                  <div key={keyIndex}>{handleRenderInputSetting(type)}</div>
                );
              })}
            </div>
          )}
        </div>

        {/* Render array type for this propKey */}

        {/* Default class css by propKey */}
        {/* Suggest, when choose -> add/remove class. Default value */}
        {/* Design system -> get from context -> variable for every type */}
        {/* First: color, font size, font weight -> define css */}
      </div>
    </Grid>
  );
};
