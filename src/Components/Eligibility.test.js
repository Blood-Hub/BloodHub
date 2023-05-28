import React from "react";
import { screen } from '@testing-library/react';
import Eligibility from './Eligibility';
import { Quizquestions } from "./Quizquestions";
import { JSDOM } from 'jsdom';
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

describe ('Eligibility', () => {
    // beforeAll(() => {
    //     const { JSDOMEnvironment } = JSDOM;
    //     const dom = new JSDOM('<!doctype html><html><body></body></html>');
    //     global.document = dom.window.document;
    //     global.window = dom.window;
    //     global.navigator = {
    //       userAgent: 'node.js',
    //     };
    //   });
      
    //   afterAll(() => {
    //     delete global.document;
    //     delete global.window;
    //     delete global.navigator;
    //   });

    test ( 'renders quiz question correctly', () => {
        

        const currentQuestion = Quizquestions[0].question;
        const { getByText} = render(
            <BrowserRouter>
            <Eligibility currentQuestion ={currentQuestion}/>
            </BrowserRouter>
        )
        expect(screen.getByText(currentQuestion)).toBeInTheDocument();
    });
});