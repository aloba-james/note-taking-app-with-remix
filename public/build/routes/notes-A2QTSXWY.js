import {
  require_node
} from "/build/_shared/chunk-SC45I27P.js";
import {
  Form,
  Link,
  __toESM,
  init_esm,
  require_jsx_dev_runtime,
  useActionData,
  useCatch,
  useLoaderData,
  useNavigation
} from "/build/_shared/chunk-COVR7QTD.js";

// app/routes/notes.jsx
init_esm();

// app/components/NewNote.jsx
init_esm();

// app/components/NewNote.css
var NewNote_default = "/build/_assets/NewNote-HBKIPWFQ.css";

// app/components/NewNote.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function NewNote() {
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", id: "note-form", children: [
    data?.message && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: data.message }, void 0, false, {
      fileName: "app/components/NewNote.jsx",
      lineNumber: 13,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "title", children: "Title" }, void 0, false, {
        fileName: "app/components/NewNote.jsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "title", name: "title", required: true }, void 0, false, {
        fileName: "app/components/NewNote.jsx",
        lineNumber: 16,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/NewNote.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "content", children: "Content" }, void 0, false, {
        fileName: "app/components/NewNote.jsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { id: "content", name: "content", rows: "5", required: true }, void 0, false, {
        fileName: "app/components/NewNote.jsx",
        lineNumber: 20,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/NewNote.jsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-actions", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { disabled: isSubmitting, children: isSubmitting ? "Submitting..." : "Add Note" }, void 0, false, {
      fileName: "app/components/NewNote.jsx",
      lineNumber: 23,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/NewNote.jsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/NewNote.jsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
var NewNote_default2 = NewNote;
function links() {
  return [{ rel: "stylesheet", href: NewNote_default }];
}

// app/components/Notelist.jsx
init_esm();

// app/components/NoteList.css
var NoteList_default = "/build/_assets/NoteList-KS7CKPGL.css";

// app/components/Notelist.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function NoteList({ notes }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { id: "note-list", children: notes.map(
    (note, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "note", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: note.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("article", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "note-meta", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: [
            "#",
            index + 1
          ] }, void 0, true, {
            fileName: "app/components/Notelist.jsx",
            lineNumber: 13,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("time", { dateTime: note.id, children: new Date(note.id).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
          }) }, void 0, false, {
            fileName: "app/components/Notelist.jsx",
            lineNumber: 15,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/Notelist.jsx",
            lineNumber: 14,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Notelist.jsx",
          lineNumber: 12,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { children: note.title }, void 0, false, {
          fileName: "app/components/Notelist.jsx",
          lineNumber: 26,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Notelist.jsx",
        lineNumber: 11,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: note.content }, void 0, false, {
        fileName: "app/components/Notelist.jsx",
        lineNumber: 28,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Notelist.jsx",
      lineNumber: 10,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/Notelist.jsx",
      lineNumber: 9,
      columnNumber: 11
    }, this) }, note.id, false, {
      fileName: "app/components/Notelist.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this)
  ) }, void 0, false, {
    fileName: "app/components/Notelist.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
var Notelist_default = NoteList;
function links2() {
  return [{ rel: "stylesheet", href: NoteList_default }];
}

// app/routes/notes.jsx
var import_node = __toESM(require_node());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function links3() {
  return [...links(), ...links2()];
}
function meta() {
  return {
    title: "All notes",
    description: "A better way of keeping track of your notes"
  };
}
function NotesPage() {
  const notes = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { id: "content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NewNote_default2, {}, void 0, false, {
      fileName: "app/routes/notes.jsx",
      lineNumber: 22,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Notelist_default, { notes }, void 0, false, {
      fileName: "app/routes/notes.jsx",
      lineNumber: 23,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/notes.jsx",
    lineNumber: 21,
    columnNumber: 9
  }, this);
}
function CatchBoundary() {
  const caughtResponse = useCatch();
  const message = caughtResponse.data?.message || "Data not found";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NewNote_default2, {}, void 0, false, {
      fileName: "app/routes/notes.jsx",
      lineNumber: 69,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "info-message", children: message }, void 0, false, {
      fileName: "app/routes/notes.jsx",
      lineNumber: 70,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/notes.jsx",
    lineNumber: 68,
    columnNumber: 9
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "error", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "An error occurred here" }, void 0, false, {
      fileName: "app/routes/notes.jsx",
      lineNumber: 80,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: error.message }, void 0, false, {
      fileName: "app/routes/notes.jsx",
      lineNumber: 81,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
      "Back to ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/", children: "Home" }, void 0, false, {
        fileName: "app/routes/notes.jsx",
        lineNumber: 85,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/notes.jsx",
      lineNumber: 84,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/notes.jsx",
    lineNumber: 79,
    columnNumber: 9
  }, this);
}
export {
  CatchBoundary,
  ErrorBoundary,
  NotesPage as default,
  links3 as links,
  meta
};
//# sourceMappingURL=/build/routes/notes-A2QTSXWY.js.map
