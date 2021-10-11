import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import './index.css';
import x from  './index.shadow';
console.log(x);
class Inner extends React.Component {
  render() {
    const { children, root } = this.props;
    return ReactDOM.createPortal(<a>{children}</a>, root);
  }
}

export default (props) => {
  const {children, className, style} = props;
  const [root, setRoot] = useState(null);
  const ref = useRef();

  useEffect(() => {
    const root = ref.current.attachShadow({ mode: "closed" });
    setRoot(root);

    // 设置样式
    const sheet = new CSSStyleSheet();
    sheet.replaceSync('a { color: red; }');
    root.adoptedStyleSheets = [sheet];
  }, [])

  return (
    // 最外层是不隔离的，能访问的，可用于自定义样式，内部处理shadowDOM中，处于隔离状态
    <div ref={ref} className={classnames('btn-wrapper', className)} style={style}>
      {root && <Inner root={root}>{children}</Inner>}
    </div>
  )
}