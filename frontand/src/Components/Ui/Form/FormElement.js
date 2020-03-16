import React from 'react';
import FormGroup from "reactstrap/es/FormGroup";
import {PropTypes} from 'prop-types';
import {Col, FormFeedback, Input, Label} from "reactstrap";

const FormElement = (props) => {
    return (
        <FormGroup>
            <Label sm={2} for={props.propertyName}>{props.title}</Label>
            <Col sm={5}>
                <Input
                    invalid={!!props.error}
                    type={props.type}
                    name={props.propertyName} id={props.propertyName}
                    value={props.value}
                    onChange={props.onChange}
                    required={props.required}
                    autoComplete={props.autoComplete}
                />
                <FormFeedback>{props.error}</FormFeedback>
            </Col>

        </FormGroup>
    );
};

FormElement.propTypes = {
    propertyName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    required: PropTypes.bool,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    autoComplete: PropTypes.string
};

export default FormElement;