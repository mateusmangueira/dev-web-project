import React, { useState } from 'react';
import { Container, Badge, NotificationList } from './styles';
import { MdNotifications } from 'react-icons/md';

export default function Notifications() {

  const [visable, setVisable] = useState(false);

  function handleToggleVisible() {
    setVisable(!visable);
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible}>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>
      <NotificationList visable={visable}>
      </NotificationList>
    </Container>
  );
}