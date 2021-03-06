import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    Button,
    Modal,
    TextInput
} from '@patternfly/react-core';

export default class TextInputModal extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    static getDerivedStateFromProps (props, state) {
        if (!props.isOpen) {
            return { value: undefined };
        }

        if (state.value !== undefined) {
            return;
        }

        return {
            value: props.value || ''
        };
    };

    render () {
        const { title, isOpen, onCancel, onSubmit, ariaLabel } = this.props;
        const { value } = this.state;

        return (
            <Modal
                isSmall
                title={ title }
                className="ins-c-inventory__detail--edit"
                isOpen={ isOpen }
                onClose={ event => onCancel(event) }
                actions={ [
                    <Button key="cancel" variant="secondary" onClick={ onCancel }>
                        Cancel
                    </Button>,
                    <Button key="confirm" variant="primary" onClick={ () => onSubmit(this.state.value) }>
                        Save
                    </Button>
                ] }
            >
                <TextInput
                    value={ value }
                    type="text"
                    onChange={ value => this.setState({ value }) }
                    aria-label={ ariaLabel || 'input text' }
                />
            </Modal>
        );
    }
}

TextInputModal.propTypes = {
    title: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
    ariaLabel: PropTypes.string
};

