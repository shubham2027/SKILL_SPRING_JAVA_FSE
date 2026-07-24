# Git Hands-on Lab 2: Ignoring Files with .gitignore

## Objectives

- Understand the purpose of a `.gitignore` file.
- Learn how to ignore unwanted files (like temporary/log files) and folders.
- Verify ignored files using `git status`.

---

> [!NOTE]
> **Environment Note:** This lab relies on Unix shell tools like `touch` and `mkdir`. If you are using Windows Command Prompt (`cmd`), you can create a file using `type nul > filename` instead of `touch filename`. If using PowerShell, you can use `New-Item filename` or `ni filename`.

## Step 1: Navigate to Git Repository

### Command

```bash
cd GitDemo
```

## Step 2: Create a Log File

### Command

```bash
touch application.log
```

*Windows Command Prompt Alternative: `type nul > application.log`*

*PowerShell Alternative: `New-Item application.log`*

## Step 3: Create a Log Folder

### Command

```bash
mkdir log
```

## Step 4: Create a File Inside Log Folder

### Command

```bash
touch log/test.txt
```

*Windows Command Prompt Alternative: `type nul > log\test.txt`*

*PowerShell Alternative: `New-Item log/test.txt`*

## Step 5: Check Git Status

### Command

```bash
git status
```

*You should see that Git lists `application.log` and the `log/` folder as untracked files.*

## Step 6: Create .gitignore File

### Command

```bash
touch .gitignore
```

*Windows Command Prompt Alternative: `type nul > .gitignore`*

*PowerShell Alternative: `New-Item .gitignore`*

## Step 7: Add Ignore Rules

Add the following content to `.gitignore` using your default editor (e.g. `code .gitignore`):

```gitignore
*.log
log/
```

### Explanation of Rules:
- `*.log`: Instructs Git to ignore all files ending with the `.log` extension, regardless of which folder they are in.
- `log/`: Instructs Git to recursively ignore the entire `log` directory and all its contents.

## Step 8: Check Git Status

### Command

```bash
git status
```

*The `application.log` and the `log/` folder should no longer appear under untracked files. Only the `.gitignore` file itself should be shown as untracked.*

> [!WARNING]
> **Pro Tip (Already Tracked Files):**
> If a file has already been added to Git's index and committed, adding its path to `.gitignore` **will not** make Git ignore it. To ignore it, you must first untrack it using:
> ```bash
> git rm --cached <file>
> ```
> and then commit the deletion of that path.

## Step 9: Add .gitignore

### Command

```bash
git add .gitignore
```

## Step 10: Commit Changes

### Command

```bash
git commit -m "Add gitignore rules for log files"
```

## Step 11: Verify Status

### Command

```bash
git status
```

*The working tree should be clean, and your logs are now safely ignored, preventing accidental commits of temporary execution outputs.*