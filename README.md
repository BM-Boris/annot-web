# Annot Web Frontend

Single-page React + Material UI UI for annotating LC-MS / GC-MS tables. Columns are detected in the browser; one multipart POST with file + params is sent to your Django endpoint, which returns the annotated file. The UI previews the result and lets users download it.

## Configure

1. Open `static/app.jsx` and set `API_URL` to your Django endpoint (expects one POST with the upload + parameters and returns either JSON or a file blob).
2. The UI accepts CSV/TSV/TXT up to ~25 MB; separator and columns are inferred client-side from the file header.

## Run locally

No build step needed (React/MUI are pulled from CDNs):

```bash
cd /Users/boris/annot_web/static
python3 -m http.server 8000  # or any static server
# open http://localhost:8000
```

## Expected backend responses

- **JSON**: `{ status, preview, columns, rowCount, downloadUrl }` (fields optional). `downloadUrl` can be an absolute link for the download button.
- **Blob / CSV**: any non-JSON response is treated as a file; the UI parses the first ~100 rows for preview and builds a download link from the blob.

## What the UI does

- Parses the uploaded file locally to list columns, detect separator, and pre-fill m/z/RT selects.
- Lets the user choose LC/GC mode, tolerances, shifts, libraries, ion mode, and adducts.
- Sends a single request with the file + params to `API_URL`.
- Shows status, a preview table, and a Download CSV button from either the returned link or blob.
