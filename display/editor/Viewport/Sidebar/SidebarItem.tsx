import React from 'react';
import styled from 'styled-components';

import Arrow from '../../../../public/icons/arrow.svg';
import _var from '../../../styles/common/_var.module.scss';

const SidebarItemDiv = styled.div<{ visible?: boolean; height?: string }>`
  height: ${(props) => (props.visible && props.height && props.height !== 'full' ? `${props.height}` : 'auto')};
  flex: ${(props) => (props.visible && props.height && props.height === 'full' ? `1` : 'unset')};
  color: ${_var.secondaryColor};
  overflow: auto;
  display: ${(props) => (props.visible ? `flex` : 'none')};
  & > div {
    & > div{
      &:after{
        content: "";
        display: block;
        height: 70px;
        width: 100%;
      }
    }
  }
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

// const HeaderDiv = styled.div`
//   color: ${_var.secondaryColor};
//   height: 45px;
//   svg {
//     fill: ${_var.secondaryColor};
//   }
// `;

export const SidebarItem: React.FC<SidebarItemProps> = ({
  visible,
  icon,
  title,
  children,
  height,
  onChange,
  ...props
}) => {
  // if (!visible) return <></>;
  return (
    <SidebarItemDiv {...props} visible={visible} height={height} className='flex flex-col'>
      {/* {visible ? (
        <div className="w-full flex-1 overflow-auto">{children}</div>
      ) : null} */}
      <div className='w-full flex-1 overflow-auto'>{children}</div>
    </SidebarItemDiv>
  );
};
