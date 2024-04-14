/** @jest-environment jsdom **/

import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {
  
  test('debe de hacer match con el snapshot', () => {
    
    const title = 'Hola Soy goku';

    render(<FirstApp title={ title }/>);
  });

});