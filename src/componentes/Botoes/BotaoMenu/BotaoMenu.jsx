import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

import Style from './BotaoMenu.module.css'


function SplitBasicExample() {
  return (
    <Dropdown as={ButtonGroup} className={Style.ButtonMenu} >
      <Button variant="light">Samuel Santana da Silva</Button>

      <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Sobre Mim</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Projetos</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Habilidades</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SplitBasicExample;