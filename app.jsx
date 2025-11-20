const {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Box,
  Stack,
  Paper,
  Typography,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Chip,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Alert,
  LinearProgress,
  Grid,
  IconButton,
  SvgIcon,
  useTheme,
} = MaterialUI;

const { useState, useEffect, useRef, useMemo } = React;

function LightIcon(props) {
  return (
    <SvgIcon {...props}>
     <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" fill="#ff8c82"></path> <path fillRule="evenodd" clipRule="evenodd" d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2C11.25 1.58579 11.5858 1.25 12 1.25ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H4C4.41421 11.25 4.75 11.5858 4.75 12C4.75 12.4142 4.41421 12.75 4 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM19.25 12C19.25 11.5858 19.5858 11.25 20 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H20C19.5858 12.75 19.25 12.4142 19.25 12ZM12 19.25C12.4142 19.25 12.75 19.5858 12.75 20V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V20C11.25 19.5858 11.5858 19.25 12 19.25Z" fill="#ff8c82"></path> <g opacity="0.5"> <path d="M3.66919 3.7156C3.94869 3.4099 4.42309 3.38867 4.72879 3.66817L6.95081 5.69975C7.25651 5.97925 7.27774 6.45365 6.99824 6.75935C6.71874 7.06505 6.24434 7.08629 5.93865 6.80679L3.71663 4.7752C3.41093 4.4957 3.38969 4.0213 3.66919 3.7156Z" fill="#ff8c82"></path> <path d="M20.3319 3.7156C20.6114 4.0213 20.5902 4.4957 20.2845 4.7752L18.0624 6.80679C17.7567 7.08629 17.2823 7.06505 17.0028 6.75935C16.7233 6.45365 16.7446 5.97925 17.0503 5.69975L19.2723 3.66817C19.578 3.38867 20.0524 3.4099 20.3319 3.7156Z" fill="#ff8c82"></path> <path d="M17.0261 17.0247C17.319 16.7318 17.7938 16.7319 18.0867 17.0248L20.3087 19.2471C20.6016 19.54 20.6016 20.0148 20.3087 20.3077C20.0158 20.6006 19.5409 20.6006 19.248 20.3076L17.026 18.0854C16.7331 17.7924 16.7332 17.3176 17.0261 17.0247Z" fill="#ff8c82"></path> <path d="M6.97521 17.0249C7.2681 17.3177 7.2681 17.7926 6.97521 18.0855L4.75299 20.3077C4.46009 20.6006 3.98522 20.6006 3.69233 20.3077C3.39943 20.0148 3.39943 19.54 3.69233 19.2471L5.91455 17.0248C6.20744 16.732 6.68232 16.732 6.97521 17.0249Z" fill="#ff8c82"></path> </g> 
     </SvgIcon>);
}

function DarkIcon(props) {
  return (
    <SvgIcon {...props}>
      <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M22 12.0004C22 17.5232 17.5228 22.0004 12 22.0004C10.8358 22.0004 9.71801 21.8014 8.67887 21.4357C8.24138 20.3772 8 19.217 8 18.0004C8 15.7792 8.80467 13.7459 10.1384 12.1762C11.31 13.8818 13.2744 15.0004 15.5 15.0004C17.8615 15.0004 19.9289 13.741 21.0672 11.8572C21.3065 11.4612 22 11.5377 22 12.0004Z" fill="#1C274C"/>
<path d="M2 12C2 16.3586 4.78852 20.0659 8.67887 21.4353C8.24138 20.3768 8 19.2166 8 18C8 15.7788 8.80467 13.7455 10.1384 12.1758C9.42027 11.1303 9 9.86422 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12Z" fill="#1C274C"/>    </SvgIcon>
  );
}

const API_URL = "https://api.netan.io/api/annotate/";

const baseTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: { main: mode === "dark" ? "#1fc2ad" : "#0f9d58" },
      secondary: { main: mode === "dark" ? "#67e8f9" : "#34a853" },
      background: {
        default: mode === "dark" ? "#071e22" : "#e8f5ec",
        paper: mode === "dark" ? "#1a3435" : "#f7faf9",
      },
      text: {
        primary: mode === "dark" ? "#e6fffa" : "#0b1a11",
        secondary: mode === "dark" ? "#98c7b8" : "#415b49",
      },
    },
    typography: {
      fontFamily: '"Manrope", "Space Grotesk", "Inter", "Helvetica", sans-serif',
      h4: { fontWeight: 800, letterSpacing: "-0.01em" },
      h5: { fontWeight: 700 },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: 16,
            border: `1px solid ${
              theme.palette.mode === "dark" ? "rgba(255,255,255,0.08)" : "rgba(15,157,88,0.15)"
            }`,
            boxShadow: "0 18px 48px rgba(0,0,0,0.28)",
            backgroundColor: theme.palette.background.paper,
          }),
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            textTransform: "none",
            fontWeight: 700,
          },
          contained: {
            boxShadow: "0 10px 25px rgba(0,0,0,0.18)",
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 12,
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 14,
          },
          notchedOutline: {
            borderRadius: 14,
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          size: "medium",

        },
      },
      MuiFormControl: {
        defaultProps: {
          size: "medium",

        

        },
      },
      MuiSelect: {
        defaultProps: {
          size: "medium",
        },
      },
    },
  });

const defaultAdducts = {
  pos: ["[M+H]+", "[M+Na]+", "[M+NH4]+", "[M+K]+"],
  neg: ["[M-H]-", "[M+Cl]-"],
};
const allAdducts = [
  "[M+H]+",
  "[M+Na]+",
  "[M+NH4]+",
  "[M+K]+",
  "[M-H]-",
  "[M+Cl]-",
];

function friendlySep(sep) {
  if (sep === "\t") return "tab";
  if (sep === ",") return "comma";
  if (sep === ";") return "semicolon";
  if (sep === "|") return "pipe";
  return "auto";
}

function guessColumn(columns, candidates) {
  for (const target of candidates) {
    const match = columns.find((c) => c.toLowerCase() === target.toLowerCase());
    if (match) return match;
  }
  return columns[0] || "";
}

async function readChunk(file, bytes = 8000) {
  const slice = file.slice(0, bytes);
  return await slice.text();
}

function detectSeparator(text) {
  const candidates = [",", "\t", ";", "|"];
  const scores = candidates.map((c) => ({
    sep: c,
    count: (text.match(new RegExp(`\\${c}`, "g")) || []).length,
  }));
  scores.sort((a, b) => b.count - a.count);
  return scores[0].count > 0 ? scores[0].sep : ",";
}

function parseHeader(text, sep) {
  const lines = text.split(/\r?\n/).filter((l) => l.trim().length > 0);
  if (lines.length === 0) return [];
  return lines[0].split(sep).map((s) => s.trim());
}

function parsePreview(text, sep, limit = 100) {
  const lines = text.split(/\r?\n/).filter((l) => l.trim().length > 0);
  if (!lines.length) return { columns: [], rows: [] };
  const columns = lines[0].split(sep).map((s) => s.trim());
  const body = lines.slice(1, limit + 1);
  const rows = body.map((line) => {
    const parts = line.split(sep);
    const row = {};
    columns.forEach((c, idx) => {
      row[c] = parts[idx] !== undefined ? parts[idx] : "";
    });
    return row;
  });
  return { columns, rows };
}

function Settings({
  mode,
  setMode,
  columns,
  mzCol,
  setMzCol,
  rtCol,
  setRtCol,
  separator,
  setSeparator,
  lib,
  setLib,
  ionMode,
  setIonMode,
  mzDiff,
  setMzDiff,
  timeDiff,
  setTimeDiff,
  shift,
  setShift,
  timeRange,
  setTimeRange,
  ngroup,
  setNgroup,
  adducts,
  setAdducts,
  hasFile,
}) {
  const isLC = mode === "lc";
  const isGC = mode === "gc";
  return (
    <Stack spacing={2}>
      <Stack
        direction={{ xs: "row", sm: "row" }}
        alignItems={{ xs: "flex-start", sm: "center" }}
        justifyContent="space-between"
        spacing={2}
      >
        <Typography variant="h5" fontWeight={700}>
          Parameters
        </Typography>
        <ToggleButtonGroup
          exclusive
          color="primary"
          value={mode}
          onChange={(_, val) => val && setMode(val)}
          size="small"
        >
          <ToggleButton value="lc">LC</ToggleButton>
          <ToggleButton value="gc">GC</ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Grid container spacing={2} sx={{ pr: 3.5 }}>
        <Grid item xs={6} sm={6}>
          <FormControl fullWidth disabled={!hasFile}>
            <InputLabel>m/z column</InputLabel>
            <Select
              value={mzCol}
              label="m/z column"
              onChange={(e) => setMzCol(e.target.value)}
            >
              {columns.map((c) => (
                <MenuItem key={c} value={c}>
                  {c}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={6}>
          <FormControl fullWidth disabled={!hasFile}>
            <InputLabel>RT column</InputLabel>
            <Select
              value={rtCol}
              label="RT column"
              onChange={(e) => setRtCol(e.target.value)}
            >
              {columns.map((c) => (
                <MenuItem key={c} value={c}>
                  {c}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={6}>
          <FormControl fullWidth disabled={!hasFile}>
            <InputLabel>Separator</InputLabel>
            <Select
              value={separator}
              label="Separator"
              onChange={(e) => setSeparator(e.target.value)}
              displayEmpty
              renderValue={(val) =>
                !val || val === "auto" ? "Auto detect" : val === "\t" ? "Tab" : val
              }
            >
              <MenuItem value="auto">Auto detect</MenuItem>
              <MenuItem value=",">Comma ,</MenuItem>
              <MenuItem value=";">Semicolon ;</MenuItem>
              <MenuItem value="\t">Tab</MenuItem>
              <MenuItem value="|">Pipe |</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6} sm={6}>
          <FormControl fullWidth disabled={!isLC}>
            <InputLabel>LC library</InputLabel>
            <Select
              value={lib}
              label="LC library"
              onChange={(e) => setLib(e.target.value)}
            >
              <MenuItem value="hmdb">HMDB (m/z)</MenuItem>
              <MenuItem value="annot">Annot (m/z + RT)</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={6}>
          <FormControl fullWidth disabled={!isLC}>
            <InputLabel>Ion mode</InputLabel>
            <Select
              value={ionMode}
              label="Ion mode"
              onChange={(e) => setIonMode(e.target.value)}
            >
              <MenuItem value="pos">Positive</MenuItem>
              <MenuItem value="neg">Negative</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6} sm={6}>
          <TextField
            fullWidth
            label="m/z tolerance"
            value={mzDiff}
            onChange={(e) => setMzDiff(e.target.value)}
            helperText="Relative tolerance (e.g., 5e-6)"
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            fullWidth
            label="RT tolerance"
            value={timeDiff}
            onChange={(e) => setTimeDiff(e.target.value)}
            helperText="Relative RT tolerance"
            disabled={isLC && lib === "hmdb"}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            fullWidth
            label="RT shift (sec)"
            value={shift}
            onChange={(e) => setShift(e.target.value)}
            helperText="Use 'auto' or numeric"
            disabled={isLC && lib === "hmdb"}
          />
        </Grid>

        <Grid item xs={6} sm={6}>
          <TextField
            fullWidth
            label="GC time window (sec)"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            disabled={isLC}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            fullWidth
            label="GC min group size"
            value={ngroup}
            onChange={(e) => setNgroup(e.target.value)}
            disabled={isLC}
          />
        </Grid>
      </Grid>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          LC adducts
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {allAdducts.map((adduct) => {
            const active = adducts.includes(adduct);
            return (
              <Chip
                key={adduct}
                label={adduct}
                color={active ? "primary" : "default"}
                variant={active ? "filled" : "outlined"}
                disabled={!isLC}
                onClick={() => {
                  if (!isLC) return;
                  if (active) {
                    setAdducts(adducts.filter((a) => a !== adduct));
                  } else {
                    setAdducts([...adducts, adduct]);
                  }
                }}
              />
            );
          })}
        </Box>
      </Box>
    </Stack>
  );
}

function PreviewTable({ columns, rows }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 2,
        overflow: "auto",
        maxHeight: 420,
        background: theme.palette.background.paper,
      }}
    >
      <Table size="small" stickyHeader>
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell
                key={col}
                sx={{
                  fontWeight: 700,
                  backgroundColor: theme.palette.mode === "dark" ? "#132922" : "#e8f5ec",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {col}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow key={idx} hover>
              {columns.map((col) => (
                <TableCell
                  key={col}
                  sx={{ borderBottom: "1px solid rgba(255,255,255,0.04)", color: "text.secondary" }}
                >
                  {row[col] === null || row[col] === undefined ? "" : String(row[col])}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

function App() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No file selected");
  const [columns, setColumns] = useState([]);
  const [separator, setSeparator] = useState("auto");
  const [detectedSep, setDetectedSep] = useState("");
  const [mode, setMode] = useState("lc");
  const [lib, setLib] = useState("hmdb");
  const [ionMode, setIonMode] = useState("pos");
  const [mzCol, setMzCol] = useState("");
  const [rtCol, setRtCol] = useState("");
  const [mzDiff, setMzDiff] = useState("0.000005");
  const [timeDiff, setTimeDiff] = useState("0.05");
  const [shift, setShift] = useState("auto");
  const [timeRange, setTimeRange] = useState("2.0");
  const [ngroup, setNgroup] = useState("3");
  const [adducts, setAdducts] = useState(defaultAdducts.pos);
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);
  const [previewCols, setPreviewCols] = useState([]);
  const [previewRows, setPreviewRows] = useState([]);
  const [rowCount, setRowCount] = useState(0);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [modeTheme, setModeTheme] = useState("light");
  const [logs, setLogs] = useState("");  

  const fileInputRef = useRef(null);
  const theme = useMemo(() => baseTheme(modeTheme), [modeTheme]);

  useEffect(() => {
    setAdducts(defaultAdducts[ionMode]);
  }, [ionMode]);

  useEffect(() => {
    if (columns.length) {
      setMzCol((prev) => prev || guessColumn(columns, ["mz", "m/z"]));
      setRtCol((prev) => prev || guessColumn(columns, ["rt", "retention_time"]));
    }
  }, [columns]);

  const handleFile = (nextFile) => {
    if (!nextFile) return;
    setFile(nextFile);
    setFileName(nextFile.name);
    setAlert(null);
    extractColumns(nextFile);
  };

  const extractColumns = async (selectedFile) => {
    setLoading(true);
    try {
      const text = await readChunk(selectedFile);
      const sep = detectSeparator(text);
      const cols = parseHeader(text, sep);
      if (!cols.length) throw new Error("Не удалось прочитать заголовок файла.");
      setColumns(cols);
      setDetectedSep(sep);
    } catch (err) {
      setAlert({ severity: "error", message: err.message });
    } finally {
      setLoading(false);
    }
  };

  const annotate = async () => {
    if (!file) {
      setAlert({ severity: "warning", message: "Upload a feature table first." });
      return;
    }
    setLoading(true);
    setAlert(null);
    setLogs("");
    setDownloadUrl("");

    const fd = new FormData();
    fd.append("file", file);
    fd.append("mode", mode);
    fd.append("mz_col", mzCol);
    fd.append("rt_col", rtCol);

    // separator:
    //  - если пользователь выбрал , ; \t |  → отправляем
    //  - если "auto" → НЕ отправляем, бэк сам делает авто-detect
    if (separator && separator !== "auto") {
      fd.append("separator", separator);
    }

    fd.append("mz_diff", mzDiff || "5e-6");
    fd.append("time_diff", timeDiff || "0.05");
    fd.append("shift", shift || "auto");

    if (mode === "lc") {
      fd.append("ion_mode", ionMode);
      fd.append("lib", lib);
      if (adducts.length) {
        fd.append("adducts", adducts.join(","));
      }
    } else {
      fd.append("time_range", timeRange || "2.0");
      fd.append("ngroup", ngroup || "3");
    }

    try {
      const res = await fetch(API_URL, { method: "POST", body: fd });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Annotation failed");
      }

      const preview = data.preview || [];
      const cols = data.columns || (preview.length ? Object.keys(preview[0]) : []);

      setPreviewCols(cols);
      setPreviewRows(preview);
      setRowCount(data.rowCount || preview.length);
      setLogs(data.logs || "");

      if (data.csv) {
        const url = "data:text/csv;charset=utf-8," + encodeURIComponent(data.csv);
        setDownloadUrl(url);
      } else {
        setDownloadUrl("");
      }
    } catch (err) {
      setAlert({ severity: "error", message: err.message });
    } finally {
      setLoading(false);
    }
  };


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          py: 4,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Container maxWidth="md" sx={{ px: { xs: 2, md: 3 } }}>
          <Box sx={{ position: "relative", textAlign: "center", mb: 3.5 }}>
            <IconButton
              onClick={() => setModeTheme((m) => (m === "dark" ? "light" : "dark"))}
              sx={{ position: "absolute", left: -5,
                 top: { xs: -20, sm: 8 },
                 p: 1.25,
                "& .MuiSvgIcon-root": {
      fontSize: { xs: 31, sm: 45 }},
              }}
              color="inherit"
              aria-label="toggle theme"
              
            >
              {modeTheme === "dark" ? <LightIcon /> : <DarkIcon />}
            </IconButton>
            <Typography
              variant="h1"
              fontWeight={600}
              sx={{ letterSpacing: "-0.02em", color: theme.palette.text.primary }}
            >
              ANNOT
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "text.secondary", mt: 0.5 }}>
              The art of aligning — in one flow.
            </Typography>
          </Box>

          <Stack spacing={2}>
            <Paper sx={{ p: 3, maxWidth: 900, mx: "auto" }}>
  <Stack spacing={1.2}>
    {/* шапка: кнопка строго напротив "Feature file" */}
    <Stack spacing={0.5}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h5" fontWeight={700}>
          Feature file
        </Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={() => fileInputRef.current?.click()}
        >
          Upload
        </Button>
      </Stack>

      <Typography variant="body2" color="text.secondary">
        Expected columns:       
      </Typography>
      <Typography variant="body2" color="text.secondary">
        mz (required), rt for LC RT-aware or GC.
      </Typography>
    </Stack>

    <input
      ref={fileInputRef}
      type="file"
      accept=".csv,.tsv,.txt"
      id="hidden-file-input"
      hidden
      onChange={(e) => handleFile(e.target.files?.[0])}
    />

    <Typography variant="body2" color="text.secondary">
      {fileName}
    </Typography>
  </Stack>
</Paper>


            <Paper sx={{ p: 3, maxWidth: 900, mx: "auto" }}>
              <Settings
                mode={mode}
                setMode={setMode}
                columns={columns}
                mzCol={mzCol}
                setMzCol={setMzCol}
                rtCol={rtCol}
                setRtCol={setRtCol}
                separator={separator}
                setSeparator={setSeparator}
                lib={lib}
                setLib={setLib}
                ionMode={ionMode}
                setIonMode={setIonMode}
                mzDiff={mzDiff}
                setMzDiff={setMzDiff}
                timeDiff={timeDiff}
                setTimeDiff={setTimeDiff}
                shift={shift}
                setShift={setShift}
                timeRange={timeRange}
                setTimeRange={setTimeRange}
                ngroup={ngroup}
                setNgroup={setNgroup}
                adducts={adducts}
                setAdducts={setAdducts}
                hasFile={Boolean(file)}
              />
            </Paper>

            <Paper sx={{ p: 3, maxWidth: 900, mx: "auto" }}>
              <Stack
                direction={{ xs: "row", md: "row" }}
                justifyContent="space-between"
                alignItems={{ xs: "flex-start", md: "center" }}
                spacing={2}
              >
                <div>
                  <Typography variant="h5" fontWeight={700}>
                    Output
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {rowCount
                      ? `Previewing ${previewRows.length} of ${rowCount} rows`
                      : "Preview will appear after annotation."}
                  </Typography>
                  {detectedSep && (
                    <Typography variant="body2" color="text.secondary">
                      Detected separator: {friendlySep(detectedSep)}
                    </Typography>
                  )}
                </div>
                <Button variant="contained" onClick={annotate} disabled={loading}>
                  {loading ? "Working…" : "Annotate"}
                </Button>
              </Stack>
              {loading && <LinearProgress sx={{ mt: 2 }} />}
              {alert && (
                <Alert severity={alert.severity} sx={{ mt: 2 }}>
                  {alert.message}
                </Alert>
              )}
              {previewCols.length > 0 && (
  <Box mt={3}>
    <PreviewTable columns={previewCols} rows={previewRows} />
  </Box>
)}

{logs && (
  <Box mt={3}>
    <Box
      component="pre"
      sx={{
        p: 1.5,
        borderRadius: 2,
        border: "1px solid rgba(255,255,255,0.12)",
        maxHeight: 220,
        overflow: "auto",
        fontSize: 12,
        fontFamily:
          "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
        whiteSpace: "pre-wrap",
      }}
    >
      {logs}
    </Box>
  </Box>
)}

{downloadUrl && (
  <Box mt={2} display="flex" justifyContent="flex-end">
    <Button
      variant="outlined"
      color="secondary"
      component="a"
      href={downloadUrl}
      download
    >
      Download CSV
    </Button>
  </Box>
)}

            </Paper>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
