import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import Inner from './inner';
import './index.css';
import shadowcss from  './index.shadowcss';

export default (props) => {
  const {children, className, style} = props;
  const [root, setRoot] = useState(null);
  const ref = useRef();

  useEffect(() => {
    // 使用组件的最外层div作为shadowDOM根节点
    const root = ref.current.attachShadow({ mode: "closed" });
    setRoot(root);

    // 设置样式
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(shadowcss);
    root.adoptedStyleSheets = [sheet];
  }, [])

  return (
    // 最外层是不隔离的，能访问的，可用于自定义样式，内部处理shadowDOM中，处于隔离状态
    <div ref={ref} className={classnames('btn-wrapper', className)} style={style}>
      {root && <Inner root={root} {...props}>{children}</Inner>}
    </div>
  )
}