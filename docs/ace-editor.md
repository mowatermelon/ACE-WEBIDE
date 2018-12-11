# Editor 对象

## 说明

> The main entry point into the Ace functionality.

Ace编辑器对外提供对象中基本编辑器对象，大部分编辑器事件挂载都在这个对象上。

> The Editor manages the `EditSession` (which manages Documents), as well as the `VirtualRenderer`, which draws everything to the screen.

编辑器管理EditSession（管理文档）以及VirtualRenderer，它将所有内容绘制到屏幕上。

> Event sessions dealing with the mouse and keyboard are bubbled up from `Document` to the `Editor`, which decides what to do with them.

处理鼠标和键盘的事件会话从Document传递到编辑器过程中编辑器将如何处理它们。

## 事件监听

### 1 失焦监听

> Emitted - onCe the editor has been blurred.

监听编辑器的失焦事件，可以绑定相关失焦之后的执行方法，没有任何形参。

```javascript
Editor.on("blur", function(){})
```

### 2 基础修改监听

> Emitted whenever the document is changed.

监听编辑器的修改事件，可以绑定相关修改之后的执行方法，有一个对象事件形参，可以做相关处理。

```javascript
Editor.on("change", function(Object e){})
```

### 3 修改选中样式监听

> Emitted when the selection style changes, via `Editor.setSelectionStyle()`.

监听编辑器修改选中样式之后的事件，可以绑定相关修改选中样式之后的执行方法，有一个对象事件形参，可以做相关处理。

```javascript
Editor.on("changeSelectionStyle", function(Object data){})
```

### 4 修改session监听

> Emitted whenever the EditSession changes.

监听编辑器修改编辑器session之后的事件，可以绑定相关修改编辑器session之后的执行方法，有一个对象事件形参，可以做相关处理。

```javascript
Editor.on("changeSession", function(Object e){})
```

### 5 复制监听

> Emitted when text is copied.

监听编辑器的复制事件，可以绑定相关复制之后的执行方法，会将当前复制内容做为形参进行传递。

```javascript
Editor.on("copy", function(String text){})
```

### 6 聚焦监听

> Emitted - onCe the editor comes into focus.

监听编辑器的聚焦事件，可以绑定相关聚焦之后的执行方法。

```javascript
Editor.on("focus", function(){})
```

### 7 粘贴监听

> Emitted when text is pasted.

监听编辑器的粘贴事件，可以绑定相关粘贴之后的执行方法，有一个对象事件形参，可以做相关处理。

```javascript
Editor.on("paste", function(Object e){})
```

## 方法

### 1 添加文本选中

> Adds the selection and cursor.

添加文本选中高亮效果

```javascript
/**
 * @param {Range} orientedRange 需要高亮的代码范围
 *        @param {Number} startRow 起始行
 *        @param {Number} startColumn 起始列
 *        @param {Number} endRow 结束行
 *        @param {Number} endColumn 结束列
 * @return {Range} currRange 当前所有选中范围
 */
Editor.addSelectionMarker(orientedRange)
```

### 2 使文本对齐（mark）

> Aligns the cursors or selected text.

对齐游标或选定的文本。

```javascript
Editor.alignCursors()
```

### 3 标注（mark）

> Outdents the current line.

目前的线路。

```javascript
Editor.blockOutdent()
```

### 4 编辑器失焦

> Blurs the current textInput.

手动使编辑器失焦

```javascript
Editor.blur()
```

### 5 聚焦当前选中（mark）

> Attempts to center the current selection on the screen.

尝试将当前选择集中在屏幕上。

```javascript
Editor.centerSelection()
```

### 6 清除当前选中（mark）

> Empties the selection (by de-selecting it). This function also emits the 'changeSelection' event.

手动清除当前选中，这个方法还会触发`changeSelection`事件

```javascript
Editor.clearSelection()
```

### 7 压缩复制内容代码（mark）

> Copies all the selected lines down one row.

将当前选中的代码内容压缩到一行，会返回一个`Number`类型的行号

```javascript
/**
 * @return {Number} currRow 当前复制行
 */
Editor.copyLinesDown()
```

### 8 压缩复制内容代码（mark）

> Copies all the selected lines up one row.

将当前选中的代码内容压缩到一行，会返回一个`Number`类型的行号

```javascript
/**
 * @return {Number} currRow 当前复制行
 */
Editor.copyLinesUp()
```

### 9 编辑器对象销毁

> Cleans up the entire editor.

销毁当前编辑器对象

```javascript
Editor.destroy()
```

### 10 清除选择（mark）

> Removes all the selections except the last added one.

删除除最后添加的选中内容之外的所有选中。

```javascript
Editor.exitMultiSelectMode()
```

### 11 当前内容检索（mark）

> Attempts to find `needle` within the document. For more information on `options`, see `Search`.

在当前编辑器内容中寻找内容，如果找到，则此方法返回文本首次出现的范围。

```javascript
/**
 * 搜索options.needle。如果找到，则此方法返回文本首次出现的范围。
 * 如果options.backwards为true，则搜索会在会话中倒退。
 * @param {String} needle 需要寻找的字符串或正则表达式
 * @param {Object} options 寻找的限定范围
  *        @param backwards: 是否从当前光标所在的位置向后搜索。默认为false。
  *        @param wrap: 是否在搜索结束时将搜索自动回到开头。默认为false。
  *        @param caseSensitive: 搜索是否应区分大小写。默认为false。
  *        @param wholeWord: 搜索是否需要做完整匹配。默认为false。
  *        @param range: 要在其中搜索的范围。将整个文档设置为null
          *        @param {Number} startRow 起始行
          *        @param {Number} startColumn 起始列
          *        @param {Number} endRow 结束行
          *        @param {Number} endColumn 结束列
  *        @param regExp: 搜索是否是正则表达式。默认为false。
  *        @param start: 开始搜索的起始范围或光标位置
  *        @param skipCurrent: 是否在搜索中包含当前行。默认为false。
 * @param {Boolean} animate 是否需要动画，聚焦到寻找内容
 */
Editor.find(needle,options,animate)

```

### 12 全文检索中（mark）

> Finds and selects all the occurrences of needle.

查找并选择内容的，并且返回包含该内容出现所有次数的数组。

```javascript
/**
 * 搜索所有出现选项.needle。如果找到，则此方法返回首先出现文本的范围数组。
 * 如果options.backwards为true，则搜索会在会话中倒退。
 * @param {String} The
 * @param {Object} The
 * @param {Boolean} keeps
 * @return {Number} currRowArr 包含所有次数的数组
 */
Editor.findAll(The, The, keeps)
```

### 13 前文检索中（mark）

> Performs another search for `needle` in the document. For more information on `options`, see `Search`.

在当前内容之前检索关键词，如果找到会自动跳转。

```javascript
/**
 * 搜索options.needle。如果找到，则此方法返回当前文本之前，第一次匹配到关键词的范围，自动跳转。
 * 如果options.backwards为true，则搜索会在会话中倒退。
 * @param {Object} options 寻找的限定范围
  *        @param needle 需要寻找的字符串或正则表达式
  *        @param backwards: 是否从当前光标所在的位置向后搜索。默认为false。
  *        @param wrap: 是否在搜索结束时将搜索自动回到开头。默认为false。
  *        @param caseSensitive: 搜索是否应区分大小写。默认为false。
  *        @param wholeWord: 搜索是否需要做完整匹配。默认为false。
  *        @param range: 要在其中搜索的范围。将整个文档设置为null
          *        @param {Number} startRow 起始行
          *        @param {Number} startColumn 起始列
          *        @param {Number} endRow 结束行
          *        @param {Number} endColumn 结束列
  *        @param regExp: 搜索是否是正则表达式。默认为false。
  *        @param start: 开始搜索的起始范围或光标位置
  *        @param skipCurrent: 是否在搜索中包含当前行。默认为false。
 * @param {Boolean} animate 是否需要动画，聚焦到寻找内容
 */
Editor.findPrevious(options,animate)
```

### 15 后文检索中（mark）

> Performs another search for `needle` in the document. For more information on `options`, see `Search`.

在当前内容之后检索关键词，如果找到会自动跳转。

```javascript
/**
 * 搜索options.needle。如果找到，则此方法返回当前文本之后，第一次匹配到关键词的范围，自动跳转。
 * 如果options.backwards为true，则搜索会在会话中倒退。
 * @param {Object} options 寻找的限定范围
  *        @param needle 需要寻找的字符串或正则表达式
  *        @param backwards: 是否从当前光标所在的位置向后搜索。默认为false。
  *        @param wrap: 是否在搜索结束时将搜索自动回到开头。默认为false。
  *        @param caseSensitive: 搜索是否应区分大小写。默认为false。
  *        @param wholeWord: 搜索是否需要做完整匹配。默认为false。
  *        @param range: 要在其中搜索的范围。将整个文档设置为null
          *        @param {Number} startRow 起始行
          *        @param {Number} startColumn 起始列
          *        @param {Number} endRow 结束行
          *        @param {Number} endColumn 结束列
  *        @param regExp: 搜索是否是正则表达式。默认为false。
  *        @param start: 开始搜索的起始范围或光标位置
  *        @param skipCurrent: 是否在搜索中包含当前行。默认为false。
 * @param {Boolean} animate 是否需要动画，聚焦到寻找内容
 */
Editor.findNext(options,animate)
```

### 16 手动聚焦

> Brings the current `textInput` into focus.

手动给当前编辑器聚焦。

```javascript
Editor.focus()
```

### 17 遍历当前选中（mark）

> Executes a command for each selection range.

给当前选中范围，执行相关事件

```javascript
/**
 * @param {String} cmd 需要执行的指令
 * @param {String} args 当前选中的内容
 */
Editor.forEachSelection(cmd,args)
```

### 18 判断当前行为是否可用

> Returns true if the `behaviors` are currently enabled. `Behaviors` in this case is the auto-pairing of special characters, like quotation marks, parenthesis, or brackets.

如果当前启用了行为，则返回`true`。在这种情况下，`Behaviors`是特殊字符的自动配对，如引号，括号或括号。

```javascript
/**
 * @return {Boolean} isEnabled 行为是否启动
 */
Editor.getBehavioursEnabled()
```

### 19 获取选中内容（mark）

> Returns the string of text currently highlighted.

返回当前选中高亮部分的内容

```javascript
/**
 * @return {String} copytext 当前选中的范围文本
 */
Editor.getCopyText()
```

### 20 获取当前游标位置（mark）

> Gets the current position of the cursor.

获取游标的当前位置。

```javascript
/**
 * @return {Object} cursorObj 当前游标位置信息对象
 */
Editor.getCursorPosition()
```

### 21 获取当前游标屏幕位置（mark）

> Returns the screen position of the cursor.

获取游标的当前相对屏幕的位置。

```javascript
/**
 * @return {Number} currPosition 当前游标相对屏幕的位置信息
 */
Editor.getCursorPositionScreen()
```

### 22 获取鼠标拖拽延迟

> Returns the current mouse drag delay.

返回当前鼠标拖动延迟时长。

```javascript
/**
 * @return {Number} dragDelay 当前鼠标拖动延迟时长
 */
Editor.getDragDelay()
```

### 23 获取可见行索引（mark）

> Returns the index of the first visible row.

返回第一个可见行的索引。

```javascript
/**
 * @return {Number} visibleRow 第一个可见行的索引。
 */
Editor.getFirstVisibleRow()
```

### 24 获取当前行是否一直高亮

> Returns true if current lines are always highlighted.

如果始终突出显示当前行，则返回`true`。

```javascript
/**
 * @return {Boolean} isAlwaysMark 是否一致高亮当前行
 */
Editor.getHighlightActiveLine()
```

### 25 当前选中内容是否高亮

> Returns true if currently highlighted words are to be highlighted.

获取当前选中内容是否被高亮

```javascript
/**
 * @return {Boolean} isHighlighted 当前选中内容是否被高亮
 */
Editor.getHighlightSelectedWord()
```

### 26 获取当前键盘处理程序

> Returns the keyboard handler, such as "vim" or "windows".

返回键盘处理程序，例如`vim`或`windows`。

```javascript
/**
 * @return {String} currHandler 当前键盘处理程序
 */
Editor.getKeyboardHandler()
```

### 27 获取当前搜索对象参数

> Returns an object containing all the search options. For more information on options, see Search.

返回包含所有搜索选项的对象。

```javascript
/**
 * @return {Object} option 包含所有搜索选项的对象
 */
Editor.getLastSearchOptions()
```

### 28 获取当前搜索对象参数

> Returns the index of the last visible row.

返回最后一个可见行的索引。

```javascript
/**
 * @return {Number} visibleRow 最后一个可见行的索引。
 */
Editor.getLastVisibleRow()
```

### 29 获取指定行和列中的字符个数

> Works like EditSession.getTokenAt(), except it returns a number.

像`EditSession.getTokenAt()`一样工作，除了它返回一个数字。

```javascript
/**
 * @param {Object} row 行信息
 * @param {Object} column 列信息
 * @return {Number} charCount 范围内的字数统计
 */
Editor.getNumberAt(row, column)
```

### 30 获取当前是否启动复写

> Returns true if overwrites are enabled; false otherwise.

如果启用了覆盖，则返回`true`;否则返回`false`。

```javascript
/**
 * @return {Boolean} isOverwrite 是否能够覆盖
 */
Editor.getOverwrite()
```

### 31 获取打印边距所在的列号

> Returns the column number of where the print margin is.

返回打印边距所在的列号。

```javascript
/**
 * @return {Number} marginColumn 打印边距所在的列号。
 */
Editor.getPrintMarginColumn()
```

### 32 获取当前是否只读

> Returns true if the editor is set to read-only mode.

如果编辑器设置为只读模式，则返回true。

```javascript
/**
 * @return {Boolean} isReadOnly 编辑器是否只读
 */
Editor.getReadOnly()
```

### 33 获取当前鼠标滚动速度

> Returns the value indicating how fast the mouse scroll speed is (in milliseconds).

返回表示鼠标滚动速度有多快的值（以毫秒为单位）。

```javascript
/**
 * @return {Number} scrollSpeed 表示鼠标滚动速度有多快的值（以毫秒为单位）
 */
Editor.getScrollSpeed()
```

### 34 获取当前高亮对象

> Returns selection object.

返回选择对象。

```javascript
/**
 * @return {Object} Selection 当前高亮对象
 */
Editor.getSelection()
```

### 35 获取当前高亮对象范围信息

> Returns the Range for the selected text.

返回所选文本的范围。

```javascript
/**
 * @return {Range} Range 当前高亮对象范围
 *        @param {Number} startRow 起始行
 *        @param {Number} startColumn 起始列
 *        @param {Number} endRow 结束行
 *        @param {Number} endColumn 结束列
 */
Editor.getSelectionRange()
```

### 36 获取当前高亮文本的样式

> Returns the current selection style.

返回当前的选择样式。

```javascript
/**
 * @return {String} selectionStyle 当前高亮对象样式
 */
Editor.getSelectionStyle()
```

### 37 获取当前session内容

> Returns the current session being used.

返回当前正在使用的`session`内容。

```javascript
/**
 * @return {Object}  EditSession 当前编辑器的session内容
 */
Editor.getSession()
```

### 38 获取当前折叠小部件

> Returns true if the fold widgets are shown.

如果显示折叠小部件，则返回`true`。

```javascript
/**
 * @return {Boolean} isShowFoldWidgets 是否显示折叠小部件
 */
Editor.getShowFoldWidgets()
```

### 39 获取当前是否显示不可见字符

> Returns true if invisible characters are being shown.

如果显示不可见字符，则返回`true`。

```javascript
/**
 * @return {Boolean} isShowInvisibles 是否显示不可见字符
 */
Editor.getShowInvisibles()
```

### 40 获取当前是否显示打印边距

> Returns true if the print margin is being shown.

如果正在显示打印边距，则返回true。

```javascript
/**
 * @return {Boolean} isShowPrintMargin 是否显示打印边距
 */
Editor.getShowPrintMargin()
```

### 41 获取当前主题路径（mark）

> Returns the path of the current theme.

返回当前主题的路径。

```javascript
/**
 * @return {String} currTheme 当前主题的路径。
 */
Editor.getTheme()
```

### 42 获取当前编辑器内容

> Returns the current session's content.

返回编辑器纯文本内容

```javascript
/**
 * @return {String} currContent 当前编辑器纯文本内容
 */
Editor.getValue()
```

### 43 获取当前是否启用了wrap

> Returns true if the wrapping behaviors are currently enabled.

如果当前启用了`wrapping`行为，则返回`true`。

```javascript
/**
 * @return {Boolean} isWrapBehavioursEnabled 是否启用了Wrap
 */
Editor.getWrapBehavioursEnabled()
```

### 44 跳转到指定行列（mark）

> Moves the cursor to the specified line number, and also into the indicated column.

将光标移动到指定的行号，也移动到指示的列中。

```javascript
/**
 * @param {Number} lineNumber 需要跳转的行号
 * @param {Number} column 需要跳转的列号
 * @param {Boolean} animate 是否动态跳转
 */
Editor.gotoLine(lineNumber, column, animate)
```

### 45 跳转到下一页（mark）

> Shifts the document to wherever "page down" is, as well as moving the cursor position.

将文档移动到向下翻一页，以及移动光标位置。

```javascript
Editor.gotoPageDown()
```

### 46 跳转到上一页（mark）

> Shifts the document to wherever "page up" is, as well as moving the cursor position.

将文档移动到向上翻一页，以及移动光标位置。

```javascript
Editor.gotoPageUp()
```

### 47 缩进当前行

> Indents the current line.

缩进当前行。

```javascript
Editor.indent()
```

### 48 给编辑中插入内容

> Inserts text into wherever the cursor is pointing.

将文本插入光标所指向的位置。

```javascript
/**
 * @param {String} text 需要插入的文本
 */
Editor.insert(String text)
```

### 49 获取当前是否聚焦

> Returns true if the current textInput is in focus.

如果当前`textInput`处于焦点，则返回`true`。

```javascript
/**
 * @return {Boolean} isFocused 当前编辑器是否聚焦
 */
Editor.isFocused()
```

### 50 获取指定行是否在屏幕上全可见。

> Indicates if the entire row is currently visible on the screen.

指示整个行当前是否在屏幕上全可见。

```javascript
/**
 * @param {Number} row 当前需要检索的行号
 * @return {Boolean} isRowFullyVisible 指定行是否在屏幕上全可见。
 */
Editor.isRowFullyVisible(row)
```

### 51 获取指定行是否在屏幕上可见。

> Indicates if the row is currently visible on the screen.

指示整个行当前是否在屏幕上可见。

```javascript
/**
 * @param {Number} row 当前需要检索的行号
 * @return {Boolean} isRowFullyVisible 指定行是否在屏幕上可见。
 */
Editor.isRowVisible(row)
```

### 52 跳到下一个匹配内容

> Moves the cursor's row and column to the next matching bracket.

将光标的行和列移动到下一个匹配的括号。

```javascript
/**
 * @param {Object} select 当前需要匹配的选择对象
 */
Editor.jumpToMatching(select)
```

### 53 修改光标前数值

> If the character before the cursor is a number, this functions changes its value by amount.

如果光标前的字符是数字，则此函数会按数量更改其值。

```javascript
/**
 * @param {Number} amount 需要修改的数值内容
 */
Editor.modifyNumber(amount)
```

### 54 移动页面游标

> Moves the cursor to the specified row and column. Note that this does not de-select the current selection.

将光标移动到指定的行和列。请注意，这不会取消选择当前选择。

```javascript
/**
 * @param {Number} row 当前需要跳转的行号
 * @param {Number} column 当前需要跳转的行号
 */
Editor.moveCursorTo(row, column)
```

### 55 移动页面游标

> Moves the cursor to the position indicated by pos.row and pos.column.

将光标移动到`pos.row`和`pos.column`指示的位置。

```javascript
/**
 * @param {Object} pos 当前需要检索的位置信息
 *        @param {Number} row 当前需要检索的行号
 *        @param {Number} column 当前需要检索的列号
 */
Editor.moveCursorToPosition(Object pos)

```

### 56 下移当前行（mark）

> Shifts all the selected lines down one row.

将所有选定的行向下移动一行。

```javascript
/**
 * @return {Number} moveNumber 所移动的行号
 */
Editor.moveLinesDown()
```

### 57 前移当前行（mark）

> Shifts all the selected lines up one row.

将所有选定的行向上移动一行。

```javascript
/**
 * @return {Number} moveNumber 所移动的行号
 */
Editor.moveLinesUp()
```

### 58 指定次数下移当前选定内容（mark）

> Moves the cursor down in the document the specified number of times. Note that this does de-select the current selection.

将光标在文档中向下移动指定的次数。请注意，这会取消选择当前选择。

```javascript
/**
 * @param {Number} times 需要下移的行数
 */
Editor.navigateDown(times)
```

### 59 指定次数上移当前选定内容（mark）

> Moves the cursor up in the document the specified number of times. Note that this does de-select the current selection.

将光标在文档中向上移动指定的次数。请注意，这会取消选择当前选择。

```javascript
/**
 * @param {Number} times 需要下移的行数
 */
Editor.navigateUp(times)
```

### 60 跳转到页面底部（mark）

> Moves the cursor to the end of the current file. Note that this does de-select the current selection.

将光标移动到当前文件的末尾。请注意，这会取消选择当前选择。

```javascript
Editor.navigateFileEnd()
```

### 61 跳转到页面头部（mark）

> Moves the cursor to the start of the current file. Note that this does de-select the current selection.

将光标移动到当前文件的开头。请注意，这会取消选择当前选择。

```javascript
Editor.navigateFileStart()
```

### 62 指定次数左移当前选定内容（mark）

> Moves the cursor left in the document the specified number of times. Note that this does de-select the current selection.

将光标在文档中向左移动指定的次数。请注意，这会取消选择当前选择。

```javascript
/**
 * @param {Number} times 需要左移的行数
 */
Editor.navigateLeft(times)
```

### 63 指定次数右移当前选定内容（mark）

> Moves the cursor right in the document the specified number of times. Note that this does de-select the current selection.

将光标在文档中向右移动指定的次数。请注意，这会取消选择当前选择。

```javascript
/**
 * @param {Number} times 需要右移的行数
 */
Editor.navigateRight(times)
```

### 64 移动光标到行末

> Moves the cursor to the end of the current line. Note that this does de-select the current selection.

将光标移动到当前行的末尾。请注意，这会取消选择当前选择。

```javascript
Editor.navigateLineEnd()
```

### 65 移动光标到行头

> Moves the cursor to the start of the current line. Note that this does de-select the current selection.

将光标移动到当前行的开头。请注意，这会取消选择当前选择。

```javascript
Editor.navigateLineStart()
```

### 66 跳转到指定行

> Moves the cursor to the specified row and column. Note that this does de-select the current selection.

将光标移动到指定的行和列。请注意，这会取消选择当前选择。

```javascript
/**
 * @param {Number} row 当前需要检索的行号
 * @param {Number} column 当前需要检索的列号
 */
Editor.navigateTo(row, column)
```

### 67 移动到当前单词左侧

> Moves the cursor to the word immediately to the left of the current position. Note that this does de-select the current selection.

将光标移动到当前位置左侧的单词。请注意，这会取消选择当前选择。

```javascript
Editor.navigateWordLeft()
```

### 68 移动到当前单词右侧

> Moves the cursor to the word immediately to the right of the current position. Note that this does de-select the current selection.

将光标移动到当前位置右侧的单词。请注意，这会取消选择当前选择。

```javascript
Editor.navigateWordRight()
```

### 69 监听事件枚举

> 常用

- onBlur()
- onCopy()
- onPaste()
- onCut()
- onFocus()

> 不常用

- onCursorChange()
- onChangeAnnotation()
- onChangeBackMarker()
- onChangeBreakpoint()
- onChangeFold()
- onChangeFrontMarker()
- onChangeMode()
- onChangeWrapLimit()
- onChangeWrapMode()
- onCommandKey()
- onCompositionEnd()
- onCompositionStart()
- onCompositionUpdate()
- onDocumentChange()
- onScrollLeftChange()
- onScrollTopChange()
- onSelectionChange()
- onTextInput()
- onTokenizerUpdate()

### 70 操作重做

> Perform a redo operation on the document, reimplementing the last change.

对文档执行重做操作，重新实现最后一次更改。

```javascript
Editor.redo()
```

### 71 操作撤消

> Perform an undo operation on the document, reverting the last change.

对文档执行撤消操作，恢复上次更改。

```javascript
Editor.undo()
```

### 72 删除编辑器文字（mark）

> Removes words of text from the editor. A "word" is defined as a string of characters bookended by whitespace.

从编辑器中删除文字。 `单词`被定义为由空格预订的字符串。

```javascript
/**
 * @param {String} dir 当前需要检索的行号
 */
Editor.remove(dir)
```

### 73 删除选中内容（mark）

> Removes all the lines in the current selection

删除当前选择中的所有行

```javascript
Editor.removeLines()
```

### 74 删除选择标记（mark）

> Removes the selection marker.

删除选择标记。

```javascript
/**
 * @param {Range} The 需要删除的标记
 *        @param {Number} startRow 起始行
 *        @param {Number} startColumn 起始列
 *        @param {Number} endRow 结束行
 *        @param {Number} endColumn 结束列
 */
Editor.removeSelectionMarker(The)
```

### 75 删除当前选择右侧的所有单词，直到行尾

> Removes all the words to the right of the current selection, until the end of the line.

删除当前选择右侧的所有单词，直到行尾。

```javascript
Editor.removeToLineEnd()
```

### 76 删除当前选择左侧的所有单词，直到行头

> Removes all the words to the left of the current selection, until the start of the line.

删除当前选择左侧的所有单词，直到行头。

```javascript
Editor.removeToLineStart()
```

### 77 删除当前选择右侧的所有单词

> Removes the word directly to the right of the current selection.

直接删除当前选择右侧的单词。

```javascript
Editor.removeWordRight()
```

### 78 删除当前选择左侧的所有单词

> Removes the word directly to the left of the current selection.

直接删除当前选择左侧的单词。

```javascript
Editor.removeWordLeft()
```

### 79 单次替换（mark）

> Replaces the first occurrence of options.needle with the value in replacement.

将第一次出现的`options.needle`替换为替换值。

```javascript
/**
 * @param {String} replacement 需要替换的内容
 * @param {Object} options 寻找的限定范围
  *        @param needle 需要寻找的字符串或正则表达式
  *        @param backwards: 是否从当前光标所在的位置向后搜索。默认为false。
  *        @param wrap: 是否在搜索结束时将搜索自动回到开头。默认为false。
  *        @param caseSensitive: 搜索是否应区分大小写。默认为false。
  *        @param wholeWord: 搜索是否需要做完整匹配。默认为false。
  *        @param range: 要在其中搜索的范围。将整个文档设置为null
          *        @param {Number} startRow 起始行
          *        @param {Number} startColumn 起始列
          *        @param {Number} endRow 结束行
          *        @param {Number} endColumn 结束列
  *        @param regExp: 搜索是否是正则表达式。默认为false。
  *        @param start: 开始搜索的起始范围或光标位置
  *        @param skipCurrent: 是否在搜索中包含当前行。默认为false。
 */
Editor.replace(replacement,options)
```

### 80 全部替换（mark）

> Replaces all occurrences of options.needle with the value in replacement.

将所有出现的`options.needle`替换为替换值。

```javascript
/**
 * @param {String} replacement 需要替换的内容
 * @param {Object} options 寻找的限定范围
  *        @param needle 需要寻找的字符串或正则表达式
  *        @param backwards: 是否从当前光标所在的位置向后搜索。默认为false。
  *        @param wrap: 是否在搜索结束时将搜索自动回到开头。默认为false。
  *        @param caseSensitive: 搜索是否应区分大小写。默认为false。
  *        @param wholeWord: 搜索是否需要做完整匹配。默认为false。
  *        @param range: 要在其中搜索的范围。将整个文档设置为null
          *        @param {Number} startRow 起始行
          *        @param {Number} startColumn 起始列
          *        @param {Number} endRow 结束行
          *        @param {Number} endColumn 结束列
  *        @param regExp: 搜索是否是正则表达式。默认为false。
  *        @param start: 开始搜索的起始范围或光标位置
  *        @param skipCurrent: 是否在搜索中包含当前行。默认为false。
 */
Editor.replaceAll(replacement,options)
```

### 81 重置编辑器大小

> Triggers a resize of the editor.

触发编辑器的调整大小。

```javascript
/**
 * @param {Boolean} force 是否强制重新计算大小
 */
Editor.resize(force)
```

### 82 滚动到下一页

> Scrolls the document to wherever "page down" is, without changing the cursor position.

滚动到下一页

```javascript
Editor.scrollPageDown()
```

### 83 滚动到上一页

> Scrolls the document to wherever "page up" is, without changing the cursor position.

滚动到上一页

```javascript
Editor.scrollPageUp()
```

### 84 滚动到指定范围（mark）

> Scrolls to a line. If center is true, it puts the line in middle of screen (or attempts to).

滚动到一行。如果`center`为`true`，则将该行放在屏幕中间（或尝试）。

```javascript
/**
 * @param {Number} line 当前需要跳转的行号
 * @param {Boolean} center 是否需要居中显示
 * @param {Boolean} animate 是否启动动画
 * @return {Function} callback 跳转完成的回调事件
 */
Editor.scrollToLine(line, center, animate, callback)
```

### 85 滚动到指定行

> Moves the editor to the specified row.

将编辑器移动到指定的行。

```javascript
/**
 * @param {Object} row 当前需要检索的行号
 */
Editor.scrollToRow(row)
```

### 86 全选（mark）

> Selects all the text in editor.

选择编辑器中的所有文本。

```javascript
Editor.selectAll()
```

### 87 添加到高亮部分（mark）

> Finds the next occurrence of text in an active selection and adds it to the selections.

在活动选择中查找下一个文本，并将其添加到选择中。

```javascript
/**
 * @param {Number} dir
 * @param {Boolean} skip
 */
Editor.selectMore(dir, skip)
```

### 88 在活动光标的上方或下方添加光标（mark）

> Adds a cursor above or below the active cursor.

在活动光标的上方或下方添加光标。

```javascript
/**
 * @param {Number} dir
 * @param {Boolean} skip
 */
Editor.selectMoreLines(dir, skip)
```

### 89 向后选择当前页所有内容

> Selects the text from the current position of the document until where a "page down" finishes.

选择文档当前位置的文本，直到“向下翻页”完成。

```javascript
Editor.selectPageDown()
```

### 90 向前选择当前页所有内容

> Selects the text from the current position of the document until where a "page up" finishes.

选择文档当前位置的文本，直到“向上翻页”完成。

```javascript
Editor.selectPageUp()
```

### 91 设置滚动动画（mark）

```javascript
Editor.setAnimatedScroll()
```

### 92 开启特殊符号自动匹配（mark）

> Specifies whether to use behaviors or not. "Behaviors" in this case is the auto-pairing of special characters, like quotation marks, parenthesis, or brackets.

指定是否使用行为。在这种情况下，“行为”是特殊字符的自动配对，如引号，括号或括号。

```javascript
/**
 * @param {Boolean} enabled 设置当前行为是否可用
 */
Editor.setBehavioursEnabled(enabled)
```

### 93 设置缩进向导（mark）

```javascript
Editor.setDisplayIndentGuides()
```

### 94 设置鼠标延迟

> Sets the delay (in milliseconds) of the mouse drag.

设置鼠标拖动的延迟（以毫秒为单位）。

```javascript
/**
 * @param {Number} dragDelay 需要延迟的时间
 */
Editor.setDragDelay(dragDelay)
```

### 95 setFadeFoldWidgets（mark）

```javascript
Editor.setFadeFoldWidgets()
```

### 96 设置编辑器大小（mark）

> Set a new font size (in pixels) for the editor text.

为编辑器文本设置新的字体大小（以像素为单位）。

```javascript
/**
 * @param {Number} size 需要设置的字体大小
 */
Editor.setFontSize(size)
```

### 97 设置当前行高亮状态（mark）

> Determines whether or not the current line should be highlighted.

确定是否应突出显示当前行。

```javascript
/**
 * @param {Boolean} shouldHighlight 是否应突出显示当前行
 */
Editor.setHighlightActiveLine(shouldHighlight)
```

### 98 setHighlightGutterLine

```javascript
Editor.setHighlightGutterLine()
```

### 99 设置当前单词高亮状态（mark）

> Determines if the currently selected word should be highlighted.

确定是否应突出显示当前选定的单词。

```javascript
/**
 * @param {Boolean} shouldHighlight 是否应突出显示当前选定的单词
 */
Editor.setHighlightSelectedWord(shouldHighlight)
```

### 100 设置键处理程序

> Sets a new key handler, such as "vim" or "windows".

设置新的键处理程序，例如“vim”或“windows”。

```javascript
/**
 * @param {String} keyboardHandler
 */
Editor.setKeyboardHandler(keyboardHandler)
```

### 101 设置是否覆盖前文

> Pass in true to enable overwrites in your session, or false to disable. If overwrites is enabled, any text you enter will type over any text after it. If the value of overwrite changes, this function also emits the changeOverwrite event.

传入`true`表示会话中的覆盖，或者`false`表示禁用。如果启用了覆盖，则您输入的任何文本都将在其后面的任何文本上键入。如果`overwrite`的值发生更改，则此函数也会发出`changeOverwrite`事件。

```javascript
/**
 * @param {Boolean} overwrite 是否启用了覆盖
 */
Editor.setOverwrite(overwrite)
```

### 102 设置定义打印边距

> Sets the column defining where the print margin should be.

设置定义打印边距

```javascript
/**
 * @param {Number} showPrintMargin
 */
Editor.setPrintMarginColumn(showPrintMargin)
```

### 103 设置是否只读（mark）

> If readOnly is true, then the editor is set to read-only mode, and none of the content can change.

如果`readOnly`为`true`，则编辑器设置为只读模式，并且任何内容都不能更改。

```javascript
/**
 * @param {Boolean} readOnly
 */
Editor.setReadOnly(readOnly)
```

### 104 设置滚动速度

> Sets how fast the mouse scrolling should do.

设置鼠标滚动的速度。

```javascript
/**
 * @param {Number} speed 滚动速度
 */
Editor.setScrollSpeed(speed)
```

### 105 设置高亮样式

> Indicates how selections should occur.

设置高亮样式。

```javascript
/**
 * @param {String} style 需要设置的样式
 */
Editor.setSelectionStyle(style)
```

### 106 设置session（mark）

> Sets a new editsession to use. This method also emits the 'changeSession' event.

设置要使用的新editsession。此方法还会发出'changeSession'事件。

```javascript
/**
 * @param {EditSession} session 设置session
 */
Editor.setSession(session)
```

### 107 是否显示折叠小部件（mark）

> Indicates whether the fold widgets are shown or not.

是否显示折叠小部件。

```javascript
/**
 * @param {Boolean} show 是否显示
 */
Editor.setShowFoldWidgets(show)
```

### 108 是否显示特殊字符（mark）

> If showInvisibles is set to true, invisible characters—like spaces or new lines—are show in the editor.

如果`showInvisibles`设置为`true`，则在编辑器中显示不可见的字符空格或新行。

```javascript
/**
 * @param {Boolean} showInvisibles 是否显示不可见字符
 */
Editor.setShowInvisibles(showInvisibles)
```

### 109 是否显示打印边距（mark）

> If showPrintMargin is set to true, the print margin is shown in the editor.

如果`showPrintMargin`设置为`true`，则打印边距将显示在`editor`中

```javascript
/**
 * @param {Boolean} showPrintMargin 是否显示打印边距
 */
Editor.setShowPrintMargin(showPrintMargin)
```

### 110 设置编辑器样式（mark）

> Adds a new `class`, `style`, to the `editor`.

向编辑器添加新类样式。

```javascript
/**
 * @param {String} style
 */
Editor.setStyle(style)
```

### 111 设置编辑器主题（mark）

> Sets a new theme for the editor. theme should exist, and be a directory path, like `ace/theme/textmate.`

设置编辑器主题。

```javascript
/**
 * @param {String} theme
 */
Editor.setTheme(theme)
```

### 112 给编辑插入内容（mark）

> Sets the current document to val.

将当前文档设置为val。

```javascript
/**
 * @param {String} val 需要插入当编辑器中的内容
 * @param {Number} cursorPos 需要插入的行号
 * @return {String} val 插入完内容之后的全部内容值
 */
Editor.setValue(val, cursorPos)
```

### 113 指定是否使用wrap

> Specifies whether to use wrapping behaviors or not, i.e. automatically wrapping the selection with characters such as brackets when such a character is typed in.

指定是否使用`wrap`行为，即在键入此类字符时使用括号等字符自动`wrap`选择。

```javascript
/**
 * @param {Boolean} enabled 是否使用wrap
 */
Editor.setWrapBehavioursEnabled(enabled)
```

### 114 sortLines（mark）

```javascript
Editor.sortLines()
```

### 115 在当前选择处拆分线（mark）

> Splits the line at the current selection (by inserting an '\n').

在当前选择处拆分线（通过插入`\n`）。

```javascript
Editor.splitLine()
```

### 116 切换选定行的注释状态（mark）

> Given the currently selected range, this function either comments all the lines, or uncomments all of them.

给定当前选定的范围，此函数要么注释所有行，要么取消注释所有行。

```javascript
Editor.toggleCommentLines()
```

### 117 设置编辑器overwrite（mark）

> Sets the value of overwrite to the opposite of whatever it currently is.

将`overwrite`的值设置为与当前任何值相反的值。

```javascript
Editor.toggleOverwrite()
```

### 118 设置编辑器小写（mark）

> Converts the current selection entirely into lowercase.

将当前选择完全转换为小写。

```javascript
Editor.toLowerCase()
```

### 118 设置编辑器大写（mark）

> Converts the current selection entirely into uppercase.

将当前选择完全转换为大写。

```javascript
Editor.toUpperCase()
```

### 119 转置当前行（mark）

> Transposes current line.

转置当前行。

```javascript
Editor.transposeLetters()
```

### 119 转置所选范围（mark）

> Transposes the selected ranges.

转置所选范围，即切换当前选中状态

```javascript
/**
 * @param {Number} dir 需要切换选中的范围
 */
Editor.transposeSelections(dir)
```

### 119 删除编辑器样式（mark）

> Removes the class style from the editor.

从编辑器中删除类样式。

```javascript
/**
 * @param {Object} style 需要切换选中的范围
 */
Editor.unsetStyle(style)
```

### 119 更新光标和标记图层（mark）

> Updates the cursor and marker layers.

更新光标和标记图层。

```javascript
Editor.updateSelectionMarkers()
```