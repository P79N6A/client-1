import * as React from "react";
/**
 * button
 */
export default React.memo((props) => {
    return (React.createElement("div", { style: { whiteSpace: "pre-wrap", width: "100%" }, dangerouslySetInnerHTML: { __html: props.html } }));
});
//# sourceMappingURL=Text.js.map