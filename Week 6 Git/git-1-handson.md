# Git Hands-on Lab 1: Git Basics & Local-to-Remote Setup

## Objectives

Familiarize yourself with fundamental Git commands and workflows:
- `git init`: Initialize a new local repository.
- `git status`: Check the state of the working directory and staging area.
- `git add`: Stage changes for the next commit.
- `git commit`: Record staged changes to the repository history.
- `git push`: Upload local commits to a remote repository.
- `git pull`: Fetch and merge changes from a remote repository.

In this lab, you will:
- Configure Git user details on your local machine.
- Set up a default editor for Git commits.
- Create and initialize a local Git repository.
- Connect, pull, and push files to a remote GitHub repository.

> [!NOTE]
> **Environment Note:** This lab assumes you are using **Git Bash** (recommended on Windows), macOS Terminal, or a Linux shell. If you are using Windows Command Prompt (`cmd`) or PowerShell, some commands (like `ls` or `cat`) have different syntax, which is noted below where applicable.

---

## Step 1: Check Git Installation

### Command

```bash
git --version
```

## Step 2: Configure Git Username

### Command

```bash
git config --global user.name "Your Name"
```

## Step 3: Configure Git Email

### Command

```bash
git config --global user.email "your-email@gmail.com"
```

## Step 4: Verify Git Configuration

### Command

```bash
git config --global --list
```

## Step 5: Configure VS Code as Default Git Editor

### Command

```bash
git config --global core.editor "code --wait"
```

*Note: VS Code is configured as the default Git editor in this setup, which will open a new window to write commit messages when needed.*

## Step 6: Verify Default Editor

### Command

```bash
git config --global core.editor
```

## Step 7: Create a Local Repository

### Command

```bash
mkdir GitDemo
cd GitDemo
git init
```

*This creates a new folder named `GitDemo`, navigates into it, and initializes a hidden `.git` folder that tracks your project's history.*

## Step 8: Check Repository Status

### Command

```bash
git status
```

*You should see that you are on branch `master` (or `main` depending on your Git default settings) and there are no commits yet.*

## Step 9: Create welcome.txt

### Command

```bash
echo "Welcome to the version control" > welcome.txt
```

*On Windows Command Prompt or PowerShell, this command works fine to create a file with the specified text.*

## Step 10: Verify File

### Command

```bash
ls
```

*For Windows Command Prompt, use `dir` instead of `ls` if you are not using Git Bash.*

## Step 11: View File Content

### Command

```bash
cat welcome.txt
```

*For Windows Command Prompt, use `type welcome.txt` instead of `cat welcome.txt`.*

## Step 12: Check Repository Status

### Command

```bash
git status
```

*Git will show `welcome.txt` as an **untracked** file, meaning it exists in the folder but is not yet tracked by Git.*

## Step 13: Add File to Staging Area

### Command

```bash
git add welcome.txt
```

*This stages `welcome.txt`, preparing it to be included in the next commit.*

## Step 14: Commit Changes

### Command

```bash
git commit -m "Add welcome.txt"
```

*This records a snapshot of your staged changes with a descriptive log message.*

## Step 15: Verify Repository Status

### Command

```bash
git status
```

*The status should show "nothing to commit, working tree clean", meaning all local changes have been successfully recorded.*

## Step 16: Connect Remote Repository

Create an empty repository named `GitDemo` on GitHub. Do not initialize it with a README or `.gitignore` file to ensure a clean first push. Then connect your local repository to GitHub:

### Command

```bash
git remote add origin https://github.com/YOUR-USERNAME/GitDemo.git
```

*(Replace `YOUR-USERNAME` with your actual GitHub username)*

## Step 17: Rename Branch to Main

To follow modern GitHub conventions, rename the default branch from `master` to `main`:

### Command

```bash
git branch -M main
```

## Step 18: Pull Remote Repository

### Command

```bash
git pull origin main
```

> [!IMPORTANT]
> **Troubleshooting Pull Issues:**
> If you initialized your GitHub repository with a README or license file on the web interface, the remote history and your local history are completely independent. This command might fail with the error:
> `fatal: refusing to merge unrelated histories`
> To resolve this, run:
> ```bash
> git pull origin main --allow-unrelated-histories
> ```
> This will pull down the remote files and merge them into your local workspace.

## Step 19: Push Repository

Push your commits from the local `main` branch to the remote repository on GitHub:

### Command

```bash
git push -u origin main
```

*The `-u` (or `--set-upstream`) flag links your local `main` branch to the `main` branch on GitHub, so future pushes and pulls can simply use `git push` or `git pull`.*

## Step 20: Verify Remote Repository

Open your web browser, navigate to your GitHub repository URL, and verify that `welcome.txt` is available in the remote repository.