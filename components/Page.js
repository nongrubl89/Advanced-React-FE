import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';
import Nav from './Nav';

const GlobalStyles = createGlobalStyle`
@font-face{
    font-family: "radnika_next";
    src: url("/static/radnikanext-medium-webfont.woff2") format(woff2);
    font-weight: normal;
    font-style: normal;


}
html{
    --red: #123412;
    --black: #393939;
    --grey: #3a3a3a;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;
    --offWhite: #ededed;
    --bs: 0 12px 24px 0 rgba(0 0 0 0.09)
    --maxWidth: 1000px;
    box-sizing: border-box;

}

 *, *:before, *:after{
     box-sizing: inherit;
 } 
body{
    font-family:"radnika_next", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.5rem;
    padding: 0;
    margin:0;
    line-height: 2;
}

a{
    text-decoration: none;
    color: var(--black);
}
a:hover{
    text-decoration: underline;
}
button{
    font-family: "radika_next"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}`;

const InnerStyles = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 2rem;
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Nav />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
