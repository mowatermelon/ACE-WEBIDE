# watermelon ace editor

An online javascript Editor based on ace Editor and layui

## feature

- 36 kinds of color themes switching
- Over 20 themes (TextMate/Sublime Text .tmtheme files can be imported)
- Automatic indent and outdent
- An optional command line
- Handles huge documents (four million lines seems to be the limit!)
- Fully customizable key bindings including vim and Emacs modes
- Search and replace with regular expressions
- Highlight matching parentheses
- Toggle between soft tabs and real tabs
- Displays hidden characters
- Drag and drop text using the mouse
- Line wrapping
- Code folding
- Multiple cursors and selections
- Live syntax checker
- Cut, copy, and paste functionality
- Go to the method definition
- .etc

## how work

``` bash
# serve with hot reload at localhost:4040
node pro.dev.js
# or node pro.dev.js [port]
# eg node pro.dev.js 5555
```

![项目整体预览](https://user-images.githubusercontent.com/18508817/44247661-9525d700-a218-11e8-9225-7462f7c79b61.png)

## shortcuts

### about file

- find once : ctrl-f
- find and select : ctrl-alt-k

- outdent : shift-Tab
- indent : Tab
- block outdent : ctrl-[
- block indent : ctrl-]

- to uppercase : ctrl-u
- tolowercase : ctrl-shift-u
- transpose letters : alt-shift-x

- reduce the font size : ctrl-9
- increase the size : ctrl-0

- zoom in screen : ctrl-+
- zoom out the screen : ctrl--

- show keyboard shortcuts : ctrl-alt-h

### about edit

- select all : ctrl-a
- deselect : ctrl-alt-n

- replace : ctrl-h

- undo : ctrl-z
- redo : ctrl-shift-z|ctrl-y

- copy : ctrl-c
- cut : ctrl-x
- paste : ctrl-v

- move lines up : alt-Up
- move lines down : alt-Down

- fold : alt-l|ctrl-F1
- unfold : alt-shift-l|ctrl-shift-F1
- fold other : alt-0
- unfold all : alt-shift-0

- toggle fold widget : F2
- toggle parent fold widget : alt-F2

- overwrite : Insert

- Up : Up
- Down : Down
- Left : Left
- Right : Right

- scroll up : ctrl-Up
- scroll down : ctrl-Down

- toggle recording : ctrl-alt-e
- toggle comment : ctrl-/
- toggle block comment: ctrl-shift-/

- sortlines : ctrl-alt-s
- split into lines : ctrl-alt-L

### about remove

- remove word left : ctrl-Backspace
- remove word right : ctrl-Delete
- remove to line start : alt-Backspace
- remove to line end : alt-Delete
- remove line : ctrl-d

- del: Delete
- backspace : shift-Backspace|Backspace

### about select

- select to start: ctrl-shift-Home
- select to end : ctrl-shift-End
- select page down : shift-PageDown
- select page up : shift-Pageup

- select next before: shift-Left
- select next after : shift-Right
- select word left : ctrl-shift-Left
- select word right : ctrl-shift-Right

- select up : shift-Up
- select down : shift-Down
- expand to line : ctrl-shift-L

- select line start : shift-Home|alt-shift-Left
- select line end : shift-End|alt-shift-Right

- expandToMatching : ctrl-shift-m
- select to matching : ctrl-shift-p

- copy lines up : alt-shift-Up
- copy lines down : alt-shift-Down

### about goTo

- go to line : ctrl-l

- go to next error : alt-e
- go to previous error : alt-shift-e

- find next : ctrl-k
- find previous : ctrl-shift-k
- select or find next : alt-k
- select or find previous : alt-shift-k

- go to start : ctrl-Home
- go to end : ctrl-End
- go to pagedown : PageDown
- go to pageup : Pageup

- go to word left : ctrl-Left
- go to word right : ctrl-Right
- go to line start : alt-Left|Home
- go to line end : alt-Right|End

- jump to matching : ctrl-p
