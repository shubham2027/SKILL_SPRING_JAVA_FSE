# Git Hands-on Lab 3: Git Branching & Merging

## Objectives

- Understand Git branching concepts and why branches are used.
- Create and switch between branches.
- Make changes and commit within a feature branch.
- Compare differences between branches.
- Merge a feature branch back into the main branch.
- Delete a branch after a successful merge.

---

> [!NOTE]
> **Branching Concept:** In Git, a branch is simply a lightweight, movable pointer to a specific commit. The default branch name in Git was historically `master`, and is now commonly `main`. Creating branches allows team members to work on features or bug fixes in isolation without affecting the stable `main` branch.

# Part 1: Branching

## Step 1: Check Current Branch

### Command

```bash
git branch
```

*Lists all local branches. The active branch is marked with an asterisk (`*`).*

## Step 2: Create GitNewBranch

### Command

```bash
git branch GitNewBranch
```

*This creates a new pointer named `GitNewBranch` pointing to the exact same commit as your current branch, but does not switch your active workspace to it.*

## Step 3: List Available Branches

### Command

```bash
git branch -a
```

*Lists all local and remote-tracking branches. You will see both `main` and `GitNewBranch`.*

## Step 4: Switch to GitNewBranch

### Command

```bash
git checkout GitNewBranch
```

*Switches your active branch pointer to `GitNewBranch`. Any new commits will now be recorded on this branch.*

> [!TIP]
> **Shortcut Option:** Instead of running Step 2 and Step 4 separately, you can create and switch to a branch in one step using:
> ```bash
> git checkout -b GitNewBranch
> ```

## Step 5: Create a File in the Branch

### Command

```bash
echo "This file was created in GitNewBranch" > branch-file.txt
```

## Step 6: Check Status

### Command

```bash
git status
```

*Observe that `branch-file.txt` is listed as untracked under `GitNewBranch`.*

## Step 7: Add the File

### Command

```bash
git add branch-file.txt
```

## Step 8: Commit Changes

### Command

```bash
git commit -m "Add file in GitNewBranch"
```

## Step 9: Check Status

### Command

```bash
git status
```

*The working tree should be clean on `GitNewBranch`.*

---

# Part 2: Merging

## Step 10: Switch to Main Branch

Before merging changes from a feature branch, you must always switch to the target branch (usually `main`) that you want to merge *into*.

### Command

```bash
git checkout main
```

## Step 11: Compare Main and GitNewBranch

Verify the changes introduced in the feature branch before performing the merge:

### Command

```bash
git diff main GitNewBranch
```

*This displays the differences line-by-line between the two branches.*

## Step 12: Merge GitNewBranch into Main

### Command

```bash
git merge GitNewBranch
```

> [!NOTE]
> **Fast-Forward Merges:**
> Because the `main` branch did not receive any new commits since `GitNewBranch` was created, Git performs a **Fast-Forward** merge. This means Git simply moves the `main` branch pointer forward to point to the latest commit of `GitNewBranch` without creating a new merge commit.

## Step 13: View Git Log

### Command

```bash
git log --oneline --graph --decorate
```

### Interpretation of Log Options:
- `--oneline`: Condenses each commit description to a single line (SHA and commit message).
- `--graph`: Draws a text-based representation of the commit history graph on the left edge.
- `--decorate`: Displays branch pointers, tags, and HEAD refs alongside the commits.

## Step 14: Delete GitNewBranch

Once a branch's changes are safely merged into `main`, the branch pointer is no longer needed and can be safely deleted.

### Command

```bash
git branch -d GitNewBranch
```

*Note: Using a lowercase `-d` is safe because Git will prevent deletion if the branch contains unmerged changes. To force delete a branch, use `-D`.*

## Step 15: Verify Branches

### Command

```bash
git branch
```

*Only the `main` branch should remain.*

## Step 16: Check Final Status

### Command

```bash
git status
```

*The workspace is clean and up to date.*