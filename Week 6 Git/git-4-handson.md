# Git Hands-on Lab 4: Resolving Merge Conflicts

## Objectives

- Understand why Git merge conflicts occur.
- Create conflicting changes across different branches.
- Attempt to merge branches to trigger a conflict.
- Learn how to read Git conflict markers.
- Manually resolve merge conflicts and commit the resolved states.
- Clean up workspace branches.

---

> [!NOTE]
> **What is a Merge Conflict?**
> A merge conflict occurs when two different branches modify the same line(s) of a file, or when one branch deletes a file that another branch is modifying. Since Git cannot automatically determine which version is correct, it pauses the merge process and prompts the user to resolve the conflict manually.

## Step 1: Verify Main Branch Status

### Command

```bash
git checkout main
git status
```

*Ensure that the working tree is clean before starting this lab.*

## Step 2: Create GitWork Branch

Create and switch to a new branch named `GitWork` in a single command:

### Command

```bash
git checkout -b GitWork
```

## Step 3: Create hello.xml

### Command

```bash
echo "<message>Hello from GitWork branch</message>" > hello.xml
```

## Step 4: Check Status

### Command

```bash
git status
```

*`hello.xml` should appear as an untracked file.*

## Step 5: Add hello.xml

### Command

```bash
git add hello.xml
```

## Step 6: Commit Changes

### Command

```bash
git commit -m "Add hello.xml in GitWork"
```

## Step 7: Switch to Main

### Command

```bash
git checkout main
```

## Step 8: Create hello.xml with Different Content

Now, we will introduce conflicting content in the `main` branch:

### Command

```bash
echo "<message>Hello from main branch</message>" > hello.xml
```

## Step 9: Add and Commit the File

### Command

```bash
git add hello.xml
git commit -m "Add hello.xml in main"
```

## Step 10: View Git History

### Command

```bash
git log --oneline --graph --decorate --all
```

*This shows the divergent history graph where both `main` and `GitWork` branches have a commit modifying `hello.xml` after their common ancestor.*

## Step 11: Compare the Branches

### Command

```bash
git diff main GitWork
```

## Step 12: Merge GitWork into Main

Attempt to merge `GitWork` into your active branch (`main`):

### Command

```bash
git merge GitWork
```

*You will see an output message indicating a conflict, such as:*
`CONFLICT (add/add): Merge conflict in hello.xml`
`Automatic merge failed; fix conflicts and then commit the result.`

## Step 13: Check Conflict

### Command

```bash
git status
```

*Git will report both branches have added/modified the same file, listing it under "Unmerged paths" as `both added`.*

Open `hello.xml` in your text editor (e.g. VS Code). You will see Git's conflict markers:

```xml
<<<<<<< HEAD
<message>Hello from main branch</message>
=======
<message>Hello from GitWork branch</message>
>>>>>>> GitWork
```

### Understanding Conflict Markers:
- `<<<<<<< HEAD`: Marks the start of the conflict. The lines between this marker and `=======` represent the changes in your current active branch (`HEAD`, which is `main` in this case).
- `=======`: The divider separating the conflicting changes of the two branches.
- `>>>>>>> GitWork`: Marks the end of the conflict. The lines between `=======` and this marker represent the changes in the incoming branch (`GitWork` in this case).

## Step 14: Resolve the Conflict

Edit the file to resolve the conflict. Remove all of Git's conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) and edit the content to your desired final state.

Example of resolved `hello.xml` content:
```xml
<message>Hello from main and GitWork branch</message>
```

Save the file after editing.

## Step 15: Add Resolved File

Stage the resolved file. Staging the file tells Git that the conflicts in it have been resolved.

### Command

```bash
git add hello.xml
```

## Step 16: Commit Merge Conflict Resolution

### Command

```bash
git commit -m "Resolve merge conflict in hello.xml"
```

*You can run this without `-m` to open the default editor which will pre-populate a default merge conflict resolution message.*

## Step 17: Check Repository Status

### Command

```bash
git status
```

*The status should show that the merge is completed and the working tree is clean.*

## Step 18: Add Backup Files to .gitignore

Sometimes external merge tools generate `.orig` backup files. Let's make sure they are ignored. Add this rule to your `.gitignore`:

```gitignore
*.orig
```

## Step 19: Commit .gitignore

### Command

```bash
git add .gitignore
git commit -m "Ignore merge backup files"
```

## Step 20: List Branches

### Command

```bash
git branch
```

## Step 21: Delete GitWork Branch

### Command

```bash
git branch -d GitWork
```

## Step 22: View Final Git History

Verify the structure of the commit history to see how the branch split and joined back together:

### Command

```bash
git log --oneline --graph --decorate
```

## Step 23: Verify Final Status

### Command

```bash
git status
```