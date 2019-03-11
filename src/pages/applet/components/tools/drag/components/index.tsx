import * as React from "react";
import { getLength, getAngle, getCursor } from "../utils";
import StyledRect from "./StyledRect";

const zoomableMap: any = {
  n: "t",
  s: "b",
  e: "r",
  w: "l",
  ne: "tr",
  nw: "tl",
  se: "br",
  sw: "bl"
};

export default class Rect extends React.Component<any, any> {
  private $element: any;

  private _isMouseDown: any;

  setElementRef = (ref: any) => (this.$element = ref);

  // Drag
  startDrag = (e: any) => {
    let { clientX: startX, clientY: startY } = e;
    this.props.onDragStart && this.props.onDragStart();
    this._isMouseDown = true;
    const onMove = (e: any) => {
      if (!this._isMouseDown) return; // patch: fix windows press win key during mouseup issue
      e.stopImmediatePropagation();
      const { clientX, clientY } = e;
      const deltaX = clientX - startX;
      const deltaY = clientY - startY;
      this.props.onDrag(deltaX, deltaY);
      startX = clientX;
      startY = clientY;
    };
    const onUp = () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
      if (!this._isMouseDown) return;
      this._isMouseDown = false;
      this.props.onDragEnd && this.props.onDragEnd();
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  };

  // Rotate
  startRotate = (e: any) => {
    if (e.button !== 0) return;
    const { clientX, clientY } = e;
    const {
      styles: {
        transform: { rotateAngle: startAngle }
      }
    } = this.props;
    const rect = this.$element.getBoundingClientRect();
    const center = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    };
    var startVector = {
      x: clientX - center.x,
      y: clientY - center.y
    };
    this.props.onRotateStart && this.props.onRotateStart();
    this._isMouseDown = true;
    const onMove = (e: any) => {
      if (!this._isMouseDown) return; // patch: fix windows press win key during mouseup issue
      e.stopImmediatePropagation();
      const { clientX, clientY } = e;
      const rotateVector = {
        x: clientX - center.x,
        y: clientY - center.y
      };
      const angle = getAngle(startVector, rotateVector);
      this.props.onRotate(angle, startAngle);
    };
    const onUp = () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
      if (!this._isMouseDown) return;
      this._isMouseDown = false;
      this.props.onRotateEnd && this.props.onRotateEnd();
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  };

  // Resize
  startResize = (e: any, cursor: any) => {
    if (e.button !== 0) return;
    document.body.style.cursor = cursor;
    const {
      styles: {
        position: { centerX, centerY },
        size: { width, height },
        transform: { rotateAngle }
      }
    } = this.props;
    const { clientX: startX, clientY: startY } = e;
    const rect = { width, height, centerX, centerY, rotateAngle };
    const type = e.target.getAttribute("class").split(" ")[0];
    this.props.onResizeStart && this.props.onResizeStart();
    this._isMouseDown = true;
    const onMove = (e: any) => {
      if (!this._isMouseDown) return; // patch: fix windows press win key during mouseup issue
      e.stopImmediatePropagation();
      const { clientX, clientY } = e;
      const deltaX = clientX - startX;
      const deltaY = clientY - startY;
      const alpha = Math.atan2(deltaY, deltaX);
      const deltaL = getLength(deltaX, deltaY);
      const isShiftKey = e.shiftKey;
      this.props.onResize(deltaL, alpha, rect, type, isShiftKey);
    };

    const onUp = () => {
      document.body.style.cursor = "auto";
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
      if (!this._isMouseDown) return;
      this._isMouseDown = false;
      this.props.onResizeEnd && this.props.onResizeEnd();
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  };

  render() {
    const {
      styles: {
        position: { centerX, centerY },
        size: { width, height },
        transform: { rotateAngle }
      },
      zoomable,
      rotatable,
      parentRotateAngle
    } = this.props;
    const style = {
      width: Math.abs(width),
      height: Math.abs(height),
      transform: `rotate(${rotateAngle}deg)`,
      left: centerX - Math.abs(width) / 2,
      top: centerY - Math.abs(height) / 2,
      zIndex: this.props.zIndex
    };
    const direction = zoomable
      .split(",")
      .map((d: any) => d.trim())
      .filter((d: any) => d);

    return (
      <StyledRect
        ref={this.setElementRef}
        onMouseDown={this.startDrag}
        style={style}
      >
        {rotatable && (
          <div className="rotate" onMouseDown={this.startRotate}>
            <i />
          </div>
        )}
        {direction.map((d: any) => {
          const cursor = `${getCursor(
            rotateAngle + parentRotateAngle,
            d
          )}-resize`;
          return (
            <div
              key={d}
              style={{ cursor }}
              className={`${zoomableMap[d]} resizable-handler`}
              onMouseDown={e => this.startResize(e, cursor)}
            />
          );
        })}
        {direction.map((d: any) => {
          return <div key={d} className={`${zoomableMap[d]} square`} />;
        })}

        {this.props.children}
      </StyledRect>
    );
  }
}
