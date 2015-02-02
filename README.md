# tooltip-with-edge-detect
jQuery tooltip with edge detect.

Use this tooltip when you need a tooltip that will auto arrange itself so that it doesn't go out of the screen window. If it detects that it's going to fall over the window edge, it swaps it's position so as to fit in the screen.

Default behavior:
- display tooltip on the bottom-right of the mouse (with some delta)
- if on the right we go over the edge, then just display it to the left of the mouse
- if at the bottom we go over the edge, then just display it on top of the mouse
