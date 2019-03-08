# eslint学习记录

----
## 项目安装eslint
    1.npm install eslint --save-dev (--save-dev 开发依赖)
    2.eslint --init 初始化eslint (利用package.json的script脚本运行执行)

        How would you like to use ESLint?
        To check syntax only    (仅检查语法)
        To check syntax and find problems   (检查语法并发现问题)
        To check syntax, find problems, and enforce code style  (检查语法、查找问题和执行代码样式)

        What type of modules does your project use?  (您的项目使用什么类型的模块?(用箭头键))
        JavaScript modules (import/export)
        CommonJS (require/exports)
        None of these   (以上均不)

        Which framework does your project use?  (您的项目使用哪个框架?)

        Where does your code run? (Press <space> to select, <a> to toggle all, <i> to invert selection)
        (你的代码在哪里运行?按<space>空格选择， 按<a>全选和全不选， 按<i>反向选择)

        How would you like to define a style for your project? 
        (您希望如何为您的项目定义样式?)
        Use a popular style guide 使用流行的风格指南
        Answer questions about your style 回答关于你的风格的问题
        Inspect your JavaScript file(s) 检查你的JavaScript文件

        Which style guide do you want to follow?    你想遵循哪种风格的指南?

        What format do you want your config file to be in?  您希望配置文件的格式是什么?

    3.在package.json中配置eslintConfig模块

----
## eslint命令使用记录
    1.eslilnt file.js 指定目录文件 
        eslint . 检查所有文件
    2.(.eslintignore文件)指定忽略文件
    3.eslint --fix 修复文件

----
## eslint中使用扩展 (扩展配置规则)
  extends:airbnb-base 
  https://www.jianshu.com/p/221d55a9170c 
  https://github.com/airbnb/javascript

----
## eslint规则使用记录
    0 = off, 1 = warn, 2 = error
    warn 发出警告，不终止程序
    error 发出错误，终止程序

    https://cn.eslint.org/docs/rules/

| 规则名字 | 规则内容 | 规则备注 |
| :------| ------ | :------: |
| no-console | 不使用console.log |  |
| no-multi-spaces | 不允许键和值之间存在多个空格 |  |
| template-curly-spacing | 要求或禁止模板字符串中的嵌入表达式周围空格的使用 |  |
| prefer-template | 要求使用模板字面量而非字符串连接 | |
| spaced-comment | 强制在注释中 //或 /*使用一致的空格 | |
| no-trailing-spaces | 禁用行尾空格 | |
| indent | 强制使用一致的缩进 | |
|comma-dangle | 要求或禁止末尾逗号| |
|comma-spacing|强制在逗号前后使用一致的空格| |
|no-multiple-empty-lines|禁止出现多行空行| |
|eol-last | 要求或禁止文件末尾存在空行 | |
|object-curly-spacing | 强制在大括号中使用一致的空格 | |
|key-spacing    |   强制在对象字面量的属性中键和值之间使用一致的间距| |
|quote-props | 要求对象字面量属性名称用引号括起来|
|no-undef| 禁用未声明的变量，除非它们在 /*global */ 注释中被提到 在eslint中配置过的除外globals和env属性 |
|no-undef-init | 禁止将变量初始化为 undefined| |
|prefer-arrow-callback | 要求回调函数使用箭头 | |
|arrow-spacing | 强调箭头函数前后使用一致的空格| |
|linebreak-style | 强制使用一致的换行风格 | |
|space-before-blocks |强制在块之前使用一致的空格 | |
|space-infix-ops | 	要求操作符周围有空格  | |
|no-plusplus | 禁用一元操作符 ++ 和 -- | |
|object-shorthand | 要求或禁止对象字面量中方法和属性使用简写语法 | |
|comma-dangle | 要求或禁止末尾逗号 | |
|no-throw-literal | 禁止抛出异常字面量 | |
