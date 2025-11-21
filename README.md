# Annot Web Frontend

Single-page React + Material UI UI for annotating LC-MS / GC-MS tables. Columns are detected in the browser; one multipart POST with file + params is sent to your Django endpoint, which returns the annotated file. The UI previews the result and lets users download it: <https://annot.dev>

- Parses the uploaded file locally to list columns, detect separator, and pre-fill m/z/RT selects.
- Lets the user choose LC/GC mode, tolerances, shifts, libraries, ion mode, and adducts.
- Sends a single request with the file + params to `API_URL`.
- Shows status, a preview table, and a Download CSV button from either the returned link or blob.
