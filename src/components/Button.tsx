import React from 'react';
import PropTypes from 'prop-types';
import { SlotString } from 'astro/runtime/server/render/slot.js';

interface Props {
  children: React.ReactElement;
  asChild?: boolean;
}

interface SlotProps {
  className: string;
  children: React.ReactElement;
}

function injectClassOnSlotString(
  children: React.ReactElement,
  className: string
): SlotString {
  const stringValue: string = children.props.value.toString();
  const index = stringValue.indexOf('>\n');

  const modifiedValue =
    index !== -1
      ? stringValue.slice(0, index) +
        ` class="${className}">\n` +
        stringValue.slice(index + 2)
      : stringValue;

  return new SlotString(modifiedValue, null);
}

const Slot: React.FunctionComponent<SlotProps> = (props) => {
  const { children, className } = props;

  // If it's called inside a React component
  if (children.props.children !== undefined) {
    return React.cloneElement(children, { className });
  }

  // If it's called inside a Astro component(or page)
  const newValue = injectClassOnSlotString(children, className);
  const newChildren = {
    ...children,
    props: { ...children.props, value: newValue },
  };
  return React.cloneElement(newChildren);
};

const Button = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { asChild = false, ...restProps } = props;

  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      ref={ref}
      className='flex w-fit gap-2 items-center bg-primary text-base-label py-3 px-5 text-background font-medium hover:bg-primary-hover transition-all duration-300'
      {...restProps}
    />
  );
});

Button.displayName = 'Button';
Button.propTypes = {
  children: PropTypes.element as PropTypes.Validator<
    React.ReactElement<any, string | React.JSXElementConstructor<any>>
  >,
  asChild: PropTypes.bool,
};

export default Button;
