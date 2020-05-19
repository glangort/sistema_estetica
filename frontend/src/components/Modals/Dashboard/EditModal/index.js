import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  // Form,
  // FormGroup,
} from 'reactstrap';
import './styles.css';

import DatePicker from 'react-datepicker';
// import { parseISO, parse, setMinutes } from 'date-fns';
// import { setHours } from 'date-fns/esm';
// import SelectSearch from 'react-select-search';

const ModalExample = (props) => {
  const { buttonLabel, className } = props;
  const [startDate, setStartDate] = useState('');
  // const [startTime, setStartTime] = useState('');
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <Button className={props.class} onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className} centered>
        <ModalHeader toggle={toggle}>
          Escolha uma nova data para o atendimento.
        </ModalHeader>
        <ModalBody>
          {/* Arrumar os campos que não estavam pegando o css  */}
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </ModalBody>
        <ModalFooter>
          <Button color='primary'>Salvar</Button>{' '}
          <Button color='secondary' onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ModalExample;
