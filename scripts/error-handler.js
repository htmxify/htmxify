htmx.defineExtension('error-handler', {
  onEvent: function (name, evt) {
    if (name !== "htmx:afterRequest") return;
    if (!evt.detail.failed && evt.detail.xhr.status !== 0) return;
    let warning = document.createElement("div");
    warning.className = "danger";
    warning.innerText =
      evt.detail.failed && evt.detail.xhr.status !== 0
        ? `Error: ${evt.detail.xhr.status} - ${evt.detail.xhr.statusText}`
        : `Network error: Check your connectivity and try again. If this issue persists, contact us.`;
    if (htmx.closest(evt.detail.requestConfig.elt, "[data-error-message]"))
      warning.innerText = htmx
        .closest(evt.detail.requestConfig.elt, "[data-error-message]")
        .getAttribute("data-error-message");
    evt.detail.target.appendChild(warning);
  },
});
