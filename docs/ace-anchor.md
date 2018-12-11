# Anchor 对象

## 说明

定义文档中的浮动指针。无论何时在光标之前插入或删除文本，都会更新光标的位置。

## 事件监听

### 1 修改监听

> Fires whenever the anchor position changes.

每当锚位置改变时触发。

```javascript
Anchor.on("change", function(Object e){})
```

## 方法

### 1 detach

> When called, the 'change' event listener is removed.

调用时，将删除`change`事件侦听器。

```javascript
Anchor.detach()
```

### 2 添加文本选中

> Returns the current document.

返回当前文档。

```javascript
/**
 * @return {Document} Document 当前文档
 */
Anchor.getDocument()
```

### 3 获取锚点位置信息

> Returns an object identifying the row and column position of the current anchor.

返回标识当前锚点的行和列位置的对象。

```javascript
/**
 * @return {Object} currRange 当前所有选中范围
 *        @param {Number} row 锚点行
 *        @param {Number} column 锚点列
 */
Anchor.getPosition()
```

### 4 onChange

```javascript
Anchor.onChange()
```

### 5 设置锚点位置信息

> Sets the anchor position to the specified row and column. If noClip is true, the position is not clipped.

将锚点位置设置为指定的行和列。如果noClip为true，则不会剪切位置。

```javascript
/**
 * @param {Number} row 锚点行
 * @param {Number} column 锚点列
 * @param {Boolean} noClip 是否剪切
 */
Anchor.setPosition(row,column,noClip)
```