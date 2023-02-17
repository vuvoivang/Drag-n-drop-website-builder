import { useNode } from "libs/core/src";
import {
  Grid,
  Slider,
  RadioGroup,
  MenuItem,
  FormGroup,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
import { withStyles } from "@material-ui/core/styles";
import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";

import { ToolbarDropdown } from "../ToolbarDropdown";
import { ToolbarTextInput } from "../ToolbarTextInput";
import { ToolbarRadio } from "../ToolbarRadio";
import { ToolbarCheckbox } from "../ToolbarCheckbox";

import { PLACEHOLDER_IMAGE_URL, STYLED_CLASSNAMES_KEY } from "display/constants";
import { makeStyles } from "@material-ui/core/styles";

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
export type ToolbarEventItemProps = Partial<{
  prefix: string;
  label: string;
  full: boolean;
  eventKey: string;
  index: number;
  children: React.ReactNode;
  type: string | string[];
  styledCustomOptions: Option | Array<Option>;
  checkboxChildren: Array<Option>;
  radioChildren: Array<Option>;
  selectChildren: Array<Option>;
  onChange: (value: any) => any;
}>;

const useMenuItemStyles = makeStyles({
  root: {
    fontSize: "14px",
  },
});

export const ToolbarEventItem = ({
  full = false,
  eventKey,
  type: inputType,
  styledCustomOptions = [],
  onChange,
  index,
  ...props
}: ToolbarEventItemProps) => {
  const menuItemClasses = useMenuItemStyles({});
  const {
    actions: { setEvent },
    eventValue,
  } = useNode((node) => ({
    eventValue: node.data.events[eventKey],
  }));
  const value = Array.isArray(eventValue) ? eventValue[index] : eventValue;
  const listType = Array.isArray(inputType) ? inputType : [inputType];

  const setEventKeyValueWithIndexAndTimeOut = (value: any, timeout: number) => {
    setEvent((props: any) => {
      if (Array.isArray(eventValue)) {
        props[eventKey][index] = onChange ? onChange(value) : value;
      } else {
        props[eventKey] = onChange ? onChange(value) : value;
      }
    }, timeout);
  };
  const setEventKeyValueWithoutIndex = (value: any) => {
    setEvent((props: any) => {
      props[eventKey] = onChange ? onChange(value) : value;
    });
  };
  const setEventKeyValueWithPropertyName = (propName: string, value: any) => {
    setEvent((props: any) => {
      if (typeof props[eventKey] === "object") {
        props[eventKey][propName] = onChange ? onChange(value) : value;
      }
    });
  };
  const handleSetEventValue = (newValue: any, type: string) => {
    if (["text"].includes(type)) {
      setEventKeyValueWithIndexAndTimeOut(newValue, 500);
    } else if (["radio", "select"].includes(type)) {
      setEventKeyValueWithoutIndex(newValue);
    } else if (type === "checkbox") {
      setEventKeyValueWithPropertyName(newValue.name, newValue.checked);
    }
  };

  const handleRenderInputSetting = (type) => {
    return (
      <>
        {["text"].includes(type) ? (
          <ToolbarTextInput
            {...props}
            type={type}
            value={value}
            onChange={(value) => {
              handleSetEventValue(value, type);
            }}
          />
        ) : type === "radio" ? (
          <>
            <RadioGroup
              value={value || 0}
              onChange={(e) => {
                const newValue = e.target.value;
                handleSetEventValue(newValue, type);
              }}
            >
              {props.radioChildren?.map((option) => (
                <ToolbarRadio
                  key={option.value}
                  value={option.value}
                  label={option.label}
                />
              ))}
            </RadioGroup>
          </>
        ) : type === "checkbox" ? (
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
        ) : type === "select" ? (
          <ToolbarDropdown
            value={value || ""}
            renderValue={(value) => {
              const option = props.selectChildren?.find(
                (option) => option.value === value
              );
              return option?.label || "Select value";
            }}
            onChange={(value) => handleSetEventValue(value, type)}
            {...props}
          >
            {props.selectChildren?.map((option) => (
              <MenuItem
                key={option.value}
                value={option.value}
                classes={menuItemClasses}
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
          
            <div
              className="default-setting-container pl-4"
            >
              {listType.map((type, keyIndex) => {
                return (
                  <div className="mb-3" key={keyIndex}>
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
