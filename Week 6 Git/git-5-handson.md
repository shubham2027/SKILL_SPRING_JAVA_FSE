# Git Hands-on Lab 5: Repository Cleanup & Synchronization

## Objectives

- Clean up and audit the local Git repository status.
- Verify remote repository tracking configurations.
- Safely pull latest changes from the remote repository.
- Push all resolved and pending local commits to the remote repository.
- Verify the updated state on GitHub.

---

> [!NOTE]
> **Repository Synchronization:** Working collaboratively or on multiple machines requires keeping your local repository in sync with the remote repository (GitHub). Always pull before you start working and push once you finish a set of tasks to prevent potential conflicts.

## Step 1: Switch to Main Branch

### Command

```bash
git checkout main
```

## Step 2: Verify Repository Status

### Command

```bash
git status
```

*Ensure that the working tree is clean (no uncommitted changes) before fetching or pushing.*

## Step 3: List Available Branches

Verify that all local temporary/feature branches have been successfully deleted, leaving only `main`:

### Command

```bash
git branch -a
```

*The `-a` flag lists all branches (both local branches and remote-tracking references starting with `remotes/origin/`).*

## Step 4: Check Remote Repository

### Command

```bash
git remote -v
```

*The `-v` (verbose) flag shows the exact URLs for fetching and pushing to your remote, usually labeled `origin`.*

## Step 5: Pull Latest Changes

Always pull latest updates from the remote branch to ensure your local branch is up to date:

### Command

```bash
git pull origin main
```

*`git pull` performs a `git fetch` (downloads metadata and new commits from remote) followed by a `git merge` (integrates those commits into your current branch).*

## Step 6: Check Repository Status

### Command

```bash
git status
```

## Step 7: Push Pending Changes

Push all local commits (like the ones from resolving merge conflicts and ignoring `.orig` files) to the remote repository:

### Command

```bash
git push origin main
```

## Step 8: Verify Repository Status

### Command

```bash
git status
```

*The output should state: `Your branch is up to date with 'origin/main'.` and `nothing to commit, working tree clean`.*

## Step 9: Verify Changes on GitHub

1. Open your web browser and navigate to your GitHub repository page.
2. Confirm that the commit count has increased.
3. Verify that `hello.xml`, `.gitignore`, and the commit history show the resolved merge conflict state.