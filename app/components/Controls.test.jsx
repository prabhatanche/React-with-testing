var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Controls = require('Controls');

describe('controls' , ()=>{
    it('should exists', ()=> {
        expect(Controls).toExist();
    });
    });