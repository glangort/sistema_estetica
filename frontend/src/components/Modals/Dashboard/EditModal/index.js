import React, { useState, useRef } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
} from 'reactstrap';

import DatePicker from 'react-datepicker';
import { parseISO, parse, setMinutes } from 'date-fns';
import { setHours } from 'date-fns/esm';
import SelectSearch from 'react-select-search';

const ModalExample = (props) => {
  const { buttonLabel, className } = props;
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
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
          <Form>
            <FormGroup>
              <DatePicker
                dateFormat='dd/MM/yyyy'
                selected={startDate}
                placeholderText='Selecione uma nova data.'
                onChange={(date) => setStartDate(date)}
              />{' '}
              <DatePicker
                selected={startTime}
                onChange={(time) => setStartTime(time)}
                showTimeSelect
                showTimeSelectOnly
                timeCaption='Horario'
                dateFormat='hh:mm aa'
                placeholderText='Selecione um novo horario.'
              />
            </FormGroup>
          </Form>
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
