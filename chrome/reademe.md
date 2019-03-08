### 谷歌浏览器 调试技巧

----
## 断点调试

#### dom断点调试
    1.点击 Elements 标签。
    2.转至要设置断点的元素。
    3.右键点击此元素。
    4.将鼠标指针悬停在 Break on 上，然后选择 Subtree modifications、Attribute modifications 或 Node removal。
    
    DOM 更改断点的类型
    1.Subtree modifications： 在移除或添加当前所选节点的子级，或更改子级内容时触发这类断点。 在子级节点属性发生2变化或对当前所选节点进行任何更改时不会触发这类断点。
    2.Attributes modifications：在当前所选节点上添加或移除属性，或属性值发生变化时触发这类断点。
    3.Node Removal：在移除当前选定的节点时会触发。

#### 设置条件断点
    1.点击 Sources 标签。
    2.打开包含您想要中断的代码行的文件。
    3.转至代码行。
    4.代码行的左侧是行号列。 右键点击行号列。
    5.选择 Add conditional breakpoint。 代码行下方将显示一个对话框。
    6.在对话框中输入条件。
    7.按 Enter 键激活断点。 行号列顶部将显示一个橙色图标。

#### xhr/fetch断点调试
    1.点击 Sources 标签。
    2.展开 XHR Breakpoints 窗格。
    3.点击 Add breakpoint。
    4.输入要对其设置断点的字符串。 DevTools 会在 5.XHR 的请求网址的任意位置显示此字符串时暂停。
    6.按 Enter 键以确认。
    
    e.g 输入1.txt 请求的地址中包含1.txt的所有请求创建xhr断点

#### 事件侦听器断点
    1.点击 Sources 标签
    2.展开 Event Listener Breakpoints 窗格。 DevTools 会显示 Animation 等事件类别列表。
    3.勾选这些类别之一以在触发该类别的任何事件时暂停，或者展开类别并勾选特定事件

#### 异常断点
    如果想要在引发已捕获或未捕获异常的代码行暂停，可以使用异常断点 throw