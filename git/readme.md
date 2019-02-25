# git学习记录

----
## git忽略上传文件（提交）

### 在Git项目中定义.gitignore文件
    1.每一行指定一个规则
    2.规则列表
        #               表示此为注释,将被Git忽略

        *               所有文件
        *.a             表示忽略所有 .a 结尾的文件
        **/foo:         表示忽略/foo,a/foo,a/b/foo等
        /*.c:           表示忽略cat.c，不忽略 build/cat.c
        a/**/b:         表示忽略a/b, a/x/b,a/x/y/b等
        debug/*.obj:    表示忽略debug/io.obj，不忽略 debug/common/io.obj和tools/debug/io.obj

        !               排除，除外
        !lib.a          表示但lib.a除外  

        文件夹
        node_modules/*  忽略node_modules底下所有内容
        
