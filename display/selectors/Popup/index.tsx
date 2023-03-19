import { useEditor, useNode } from '@libs/hooks';
import { UserComponent } from '@libs/interfaces';
import { StyledModal, StyledModalContent } from 'display/raw-components/Popup/styled';
import React, { useEffect } from 'react';
import { PopupProps } from '../../raw-components/Popup/props';
import { defaultProps } from '../../raw-components/Popup/props';
import { PopupSettings } from './setting';
import cx from 'classnames';
import { PopupEvents } from './event';
import { CraftButton } from '../Button';
import { CraftText } from '../Text';
import { CraftContainer } from '../Container';

export const craftConfig = {
  displayName: 'Popup',
  props: {
    ...defaultProps,
    events: { showPopup: true },
  },
  related: {
    settings: PopupSettings,
    events: PopupEvents,
  },
};

export const CraftPopup: UserComponent<PopupProps> = (props: any) => {
  const {
    id,
    connectors: { connect },
    actions: { setProp },
  } = useNode();
  const {
    enabled,
    actions: { setNodeEvent },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  const {
    titleComponent,
    contentComponent,
    firstButtonComponent,
    secondButtonComponent,
    containerActionsComponent,
    styledClassNames,
    events,
  } = props;

  const { showPopup } = events;
  const styledClassNamesValues = (Object.values(styledClassNames) as string[]).flat();

  const handleClose = () => {
    if (!enabled)
      setProp((props) => {
        if (props.events) props.events.showPopup = false;
      });
  };

  useEffect(() => {
    if (showPopup) {
      setNodeEvent('selected', id);
    }
  }, [showPopup]);
  return (
    <StyledModal
      id={id}
      ref={connect}
      className={cx(['modal', styledClassNamesValues])}
      style={{
        display: showPopup ? 'block' : 'none',
      }}
    >
      <StyledModalContent className='modal-content'>
        <CraftText {...titleComponent} nestedPropKey='titleComponent' />
        <CraftText {...contentComponent} nestedPropKey='contentComponent' />
        <CraftContainer {...containerActionsComponent}>
          <CraftButton {...firstButtonComponent} onClick={handleClose} nestedPropKey='firstButtonComponent' />
          <CraftButton {...secondButtonComponent} onClick={handleClose} nestedPropKey='secondButtonComponent' />
        </CraftContainer>
      </StyledModalContent>
    </StyledModal>
  );
};

CraftPopup.craft = craftConfig;
