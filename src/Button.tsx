import React, { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

type Props = {
  children?: React.ReactNode;
  type?: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  disabled?: HTMLButtonElement;
};

export default class Button extends React.Component<Props> {
  render() {
    return (
      <button type={this.props.type} {...this.props.disabled}>
        {this.props.children}
      </button>
    );
  }
}
