import defaultTheme from 'mdx-deck/themes';
import { fonts, colors } from './constants';
import { DefaultLayout } from './Layouts';
import Blockquote from './Blockquote';

import okaidia from 'react-syntax-highlighter/styles/prism/okaidia';

export const darkTheme = {
  ...defaultTheme,
  colors: {
    background: colors.black,
    text: colors.white,
    preBackground: '#464547',
    code: '#ff5b5b',
    link: colors.white,
  },
  prism: {
    style: okaidia,
  },
  heading: {
    textAlign: 'left',
    width: '100%',
  },
  h1: {
    fontFamily: fonts.serif,
    fontSize: '54px',
    fontWeight: 400,
    marginTop: '2em',
    marginBottom: '1em',
  },
  h2: {
    fontFamily: fonts.serif,
    fontSize: '40px',
    fontWeight: 400,
    marginTop: '2em',
    marginBottom: '1em',
  },
  h3: {
    fontFamily: fonts.sansSerif,
    fontSize: '24px',
    fontWeight: 300,
    marginLeft: '40px',
  },
  p: {
    fontFamily: fonts.sansSerif,
    fontSize: '20px',
    fontWeight: 300,
    marginLeft: '40px',
    lineHeight: 1.5,
    maxWidth: '50%',
    textAlign: 'left',
  },
  pre: {
    backgroundColor: colors.black,
    color: colors.white,
    marginLeft: '80px',
    padding: '20px',
    maxWidth: '80%',
  },
  components: {
    blockquote: Blockquote,
    wrapper: DefaultLayout,
  },
};

export default darkTheme;

export const lightTheme = {
  ...darkTheme,
  colors: {
    background: colors.white,
    text: colors.black,
    preBackground: '#464547',
    code: '#ff5b5b',
    link: colors.black,
  },
};
