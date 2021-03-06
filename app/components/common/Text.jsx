// npm libs
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { StyleSheet, css } from 'aphrodite/no-important';

// theme
import {
  createStylesheet,
  convertToStyleValue,
  createFontSizeMapping1,
  createFontSizeMapping2,
  theme as appTheme,
} from 'styles/createStylesheet';

const styles = StyleSheet.create(
  createStylesheet(theme => ({
    text: {
      color: theme.color.textPrimary,
      marginBottom: theme.spacing.base,
    },

    ...createFontSizeMapping1(theme),

    left: {
      textAlign: 'left',
    },
    right: {
      textAlign: 'right',
    },
    center: {
      textAlign: 'center',
    },
    justify: {
      textAlign: 'justify',
    },
  })),
);

const sizeMapping = {
  ...createFontSizeMapping2(appTheme),
  '': '',
};

const Text = props => {
  const { align, className, children, style, size } = props;
  return (
    <p
      className={classnames(css(styles.text), css(styles[size]), css(styles[align]), className)}
      style={convertToStyleValue(style)}
    >
      {children.length ? React.Children.map(children, child => child) : children}
    </p>
  );
};

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,

  align: PropTypes.oneOf(['center', 'left', 'justify', 'right']),
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(sizeMapping)),
  style: PropTypes.object,
};

Text.defaultProps = {
  align: 'left',
  className: '',
  size: '',
  style: {},
};

export default Text;
