### 谷歌浏览器 调试技巧

----
#### 断点调试

    dom断点调试
    1.点击 Elements 标签。
    2.转至要设置断点的元素。
    3.右键点击此元素。
    4.将鼠标指针悬停在 Break on 上，然后选择 Subtree modifications、Attribute modifications 或 Node removal。
    
    DOM 更改断点的类型
    1.Subtree modifications： 在移除或添加当前所选节点的子级，或更改子级内容时触发这类断点。 在子级节点属性发生2变化或对当前所选节点进行任何更改时不会触发这类断点。
    2.Attributes modifications：在当前所选节点上添加或移除属性，或属性值发生变化时触发这类断点。
    3.Node Removal：在移除当前选定的节点时会触发。
