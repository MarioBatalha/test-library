import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import Todo from './toDo';

describe('Test for todo component', () =>{
    it('Should add new task when form has been submited', async () =>{
        const {getByTestId, getByText} = render(<Todo />)//Renderização do component
        const {fieldNode} = await waitForElement(() =>{
            getByTestId('form-field')//Buscar input
        })
        //Digitar no input
        fireEvent.change(
            fieldNode,
            {target: {value: 'testing'}}
        )
        //Buscar o botão
        expect(fieldNode.value).toEqual('testing')
        const btnNode = waitForElement(
            () => getByTestId('form-btn'))
            //Clicar no botão
            fireEvent.click(btnNode)

            const tableNode = await waitForElement(
                () => getByTestId('table')
            )
         
            const tdNode=  await waitForElement(
                () => getByText('testing')
            )
            expect(tdNode).toBeDifened()
    })
});