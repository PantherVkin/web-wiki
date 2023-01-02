# Git 基础

## 文件重命名

    git mv readme readme.md

![](../.gitbook/assets/1625545040700-724ad0cc-07a4-4346-a3bf-6e99f83a13f1.png)

- 新建分支

切换分支：`git checkout temp`

    git checkout -b temp

    基于fix_css 创建新分支
    git checkout -b fix_readme fix_css

- `git tag `

为 commit 打 tag

![](../.gitbook/assets/1625545353851-58c4ab65-51ef-48c5-b93c-82ce929d8608.png)

## 版本历史

    git log --oneline

    git log -n4

    查看分支
    git branch -v
    git branch -va

    查看所有分支的历史
    git log --all

​  
 查看整个版本的演进历史
git log --oneline --all --graph

    查看类型
    git cat-file -t hash_id

    查看内容
    git cat-file -p hash_id

## .git 目录

- HEAD

![](../.gitbook/assets/1625536558587-1327ca91-41b1-4721-a40b-7e71e39b0bbc.png)

- config

存放配置信息。

- refs

heads 目录：对应我们的分支（独立的开发空间）。

tags 目录：存放的标签，对应的 commit 打上的标签。

![](../.gitbook/assets/1625545747338-b5b902a3-586e-44ce-b41a-da2e5031d7ae.png)

- objects

文件添加到暂存区后，git 会在`objects` 文件夹下创建 blob

    echo 'temp write' > readme.md
    git add readme.md
    git commit -m 'first wirte'

![](../.gitbook/assets/1625546769953-a93dc403-2bd8-42f7-9498-5e11fdeab193.png)

## commit、tree、blob 三个对象之间的关系

![](../.gitbook/assets/1625553727277-a0cf3a69-30df-4a2f-a3f5-aa5cbf4a546a.png)

commit：一个 commit 对应一棵 tree。展现当前时间点项目的文件结构。

tree：文件夹

blob：文件

## 案例：数一数 tree 的个数

新建一个 Git 仓库，有且仅有 1 个 commit，仅仅包含 /doc/readme，请问内含多少个 tree，多少个 blob？

- 初始化

![](../.gitbook/assets/1625559399317-ab2076c2-372c-449e-8f4e-874affd01738.png)

- git add

内容添加到暂存区，git 会主动的在 objects 创建对象

![](../.gitbook/assets/1625559621351-f5978828-e88a-41c9-a2d8-be781e7fbd3b.png)

- git commit

查看 `.git/objects/` 下生成的对象

![](../.gitbook/assets/1625559725331-34b11602-baa3-4c53-a9fe-a70471e0adec.png)

![](../.gitbook/assets/1625560582441-3ab3048b-e957-4840-a701-76050c3c24ad.png)

- 总结

1 个 commit ，2 个 tree ，1 个 blob

![](../.gitbook/assets/1625559120446-ad3c660b-3b05-4953-91a9-e20b2e9d8eba.png)

## 分离头指针情况的注意事项

分离头指针：

HEAD 指向 commit 的情况。

## 进一步理解 HEAD 和 branch

**HEAD：**

不仅仅可以指代新分支的最后一次提交（HEAD 最终指代于 commit）；

处于分离头指针的状态时，指代某个 commit 上；

![](../.gitbook/assets/1625564673346-6fecef54-9161-4cc0-bd90-1a45a15ed793.png)

- 常用

HEAD 快速指代 commit。

`HEAD^1 / HEAD~1` HEAD 的父亲

`HEAD^^ / HEAD~2 ` HEAD 父亲的父亲

# Git 常见场景

## 修改最新 commit 的 message

`git commit --amend`

![](../.gitbook/assets/1625645789788-fc2cdc0c-e00e-42c0-b670-b8db5b6ae716.png)

# ## 修改老旧的 commit 的 message

- git log

![](../.gitbook/assets/1625712673970-9c5805c9-e42a-44ff-abf8-7e1f06ee8b18.png)

- `git rebase -i `

**变基：**要选择被变 commit 的，父亲。

    被修改的commit是：2c05d78

    git rebase -i 7687968

修改 2c05d78 的 pick 为 reword，wq! 保存退出。

![](../.gitbook/assets/1625712856235-fcb547fa-94f3-42f5-b49d-1ebf9808deae.png)

在弹出的另一个交互式文件中，修改 commit message 为 oneFile Create Reword。

![](../.gitbook/assets/1625712930618-c8996349-5903-4a05-a8cd-b763a94d3d73.png)

- `git log`

![](../.gitbook/assets/1625712984522-e02b73c7-0817-4baa-a49c-d9b0f1467672.png)

# ## 合并连续的多个 commit

- 目标

![](../.gitbook/assets/1625714285891-0dcd2d97-0536-49ec-ab73-bda6a27e4ef1.png)

- git rebase -i 7687968

以他们的父亲。

基于 9db7962 合并，这一个为 pick ;

其他用 squash；

wq!

![](../.gitbook/assets/1625714491334-a5697bc1-4535-4356-9547-eb76e1a111e9.png)

在弹出的交互式文件，添加 commit message

![](../.gitbook/assets/1625714581789-75185fa5-e23f-4c02-8699-b0dbbbdbe2fc.png)

- git log

![](../.gitbook/assets/1625714606877-f2ea99f2-c257-49b8-a2db-512e284abe7d.png)

# ## 合并间隔的几个 commit

![](../.gitbook/assets/1625885152188-c4447dd5-d1ea-4091-9304-0fdc1e3f73d9.png)

- `git rebase -i add198`

注意：

1、 弹出的交互式文件中，未包含 add198 这个 commit，需添加进去

![](../.gitbook/assets/1625885289115-0716d4e5-0a9f-47ae-aa0c-a426a014838f.png)

2、要合并的 commit 要放在一起。

![](../.gitbook/assets/1625885417909-1db1b0bf-548c-455b-9c35-b6b1eb372a72.png)

保存后，提示：

![](../.gitbook/assets/1625886433084-63024451-6366-40e9-a72f-9fa8fc57860e.png)

- `git rebase --continue`

![](../.gitbook/assets/1625886243435-d77cfdca-7c72-48b4-ae34-22b3ada77f3d.png)

# ## 比较暂存区和 HEAD 所含文件的差异

- `git diff --cached`

暂存区与 HEAD(上一次 commit) 的差异。

![](../.gitbook/assets/1625886969055-736f8b3d-59d1-471d-83d6-07eac8d6ac27.png)

# ## 工作区和暂存区所含文件的差异

- git diff

默认将所有 工作区和暂存区 文件的差异比对。

![](../.gitbook/assets/1625887440829-f781b558-83c5-4217-b7c5-ed9eee6139d6.png)

- git diff -- file1 file2 ... filen

指定文件

![](../.gitbook/assets/1625887543524-48cb0f3b-888a-46c2-8560-6c11618d15f2.png)

# ## 暂存区恢复成和 HEAD 的一样

- `git reset HEAD`

暂存区所有文件恢复和 HEAD 一样

![](../.gitbook/assets/1625887925267-d74a7cd2-730c-4b52-a085-9a7263d09a8f.png)

- git reset HEAD -- file1 file2 ... filen

暂存区部分文件恢复和 HEAD 一样。

# ## 工作区的文件恢复为暂存区的一样

- `git checkout -- file`

![](../.gitbook/assets/1625888337472-6bf556a5-ec0e-4d7f-9880-e32e1d252a33.png)

# ## 消除最近的几次提交

    git reset --hard xxxxx

# ## 不同提交的指定文件的差异

    git diff temp master -- index.html
    git diff xxx_id xxx_id -- index.html

# ## 正确删除文件的方法

git 会直接把删除文件的情况放到暂存区。

![](../.gitbook/assets/1625890923547-e9e508cc-4ee1-41b9-9cdd-0b07ad6868d3.png)

# ## 开发中临时加塞了紧急任务怎么处理

- git stash

![](../.gitbook/assets/1625891558580-f25cbd6f-2430-40da-a7ca-ee5c93af8da5.png)

- `git stash apply`

把内容弹出来，放到工作区，stash 的堆栈里买呢还在。

![](../.gitbook/assets/1625891648528-1ee42c2c-d7b2-4242-ba28-3ce6e3d9603d.png)

- `git stash pop`
