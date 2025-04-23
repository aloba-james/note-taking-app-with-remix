import {
  require_node
} from "/build/_shared/chunk-SC45I27P.js";
import {
  Link,
  __toESM,
  init_esm,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-COVR7QTD.js";

// app/routes/notes.$noteId.jsx
init_esm();

// app/styles/note-details.css
var note_details_default = "/build/_assets/note-details-BRVJV52J.css";

// app/routes/notes.$noteId.jsx
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function NoteDetailsPage() {
  const note = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { id: "note-details", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/notes", children: " Back to all Notes" }, void 0, false, {
        fileName: "app/routes/notes.$noteId.jsx",
        lineNumber: 15,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/notes.$noteId.jsx",
        lineNumber: 14,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: note.title }, void 0, false, {
        fileName: "app/routes/notes.$noteId.jsx",
        lineNumber: 17,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/notes.$noteId.jsx",
      lineNumber: 13,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { id: "note-details-content", children: note.content }, void 0, false, {
      fileName: "app/routes/notes.$noteId.jsx",
      lineNumber: 19,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/notes.$noteId.jsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
function links() {
  return [{ rel: "stylesheet", href: note_details_default }];
}
function meta({ data }) {
  return {
    title: data.title,
    description: "A better way of keeping track of your notes"
  };
}
export {
  NoteDetailsPage as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/notes.$noteId-IX5FDCSB.js.map
