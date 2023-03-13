import React from "react";
import styled from "styled-components";

import Arrow from "../../../../public/icons/arrow.svg";

const SidebarItemDiv = styled.div<{ visible?: boolean; height?: string }>`
  height: ${(props) =>
    props.visible && props.height && props.height !== "full"
      ? `${props.height}`
      : "auto"};
  flex: ${(props) =>
    props.visible && props.height && props.height === "full" ? `1` : "unset"};
  color: #000000;
  overflow: auto;
`;

const Chevron = styled.a<{ visible: boolean }>`
  transform: rotate(${(props) => (props.visible ? 180 : 0)}deg);
  svg {
    width: 8px;
    height: 8px;
  }
`;

export type SidebarItemProps = {
  id: string;
  role: string;
  title: string;
  height?: string;
  children: React.ReactNode;
  icon: string;
  visible?: boolean;
  onChange?: (bool: boolean) => void;
};

const HeaderDiv = styled.div`
  color: #000000;
  height: 45px;
  svg {
    fill: #000000;
  }
`;

export const SidebarItem: React.FC<SidebarItemProps> = ({
  visible,
  icon,
  title,
  children,
  height,
  onChange,
  ...props
}) => {
  if (!visible) return <></>;
  return (
    <SidebarItemDiv
      {...props}
      visible={visible}
      height={height}
      className="flex flex-col"
    >
      {visible ? (
        <div className="w-full flex-1 overflow-auto">{children}</div>
      ) : null}
    </SidebarItemDiv>
  );
};
