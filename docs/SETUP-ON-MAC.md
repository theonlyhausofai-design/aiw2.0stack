# Running the AIW 2.0 Stack on your Mac

This guide moves the stack off the cloud (Claude Code on the web) and onto your
own Mac (Claude Code desktop). Once you finish this, the firewall problem and the
disappearing-files problem are both gone for good.

You are not redoing any work. Everything you have done is saved in GitHub. This
guide just sets up the tool on your machine and pulls your work down.

If any step shows an error, paste the error to Claude in the desktop app and ask
for help. That is what it is there for.

---

## Phase A, Install the Claude Code desktop app

1. Go to https://claude.ai/code and download the Mac app.
2. Open the downloaded file and drag Claude Code into your Applications folder.
3. Open it. Sign in with the same account you use now (theonlyhausofai@gmail.com).

---

## Phase B, Install the three helper tools

The stack needs three free tools: Node, the GitHub CLI, and the Vercel CLI.
The cleanest way to install them on a Mac is with Homebrew, a free installer.

1. Open the Terminal app. Press Command and Spacebar, type "Terminal", press Return.

2. Install Homebrew. Copy this whole line, paste it into Terminal, press Return,
   and follow the prompts (it will ask for your Mac password):

   ```
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

   When it finishes, it may print two lines starting with `echo`. If it does,
   copy and run those two lines so Homebrew is on your path.

3. Install Node and the GitHub CLI. Paste this, press Return:

   ```
   brew install node gh
   ```

4. Install the Vercel CLI. Paste this, press Return:

   ```
   npm install -g vercel
   ```

5. Check they all installed. Paste each line, press Return after each. You should
   see a version number or a path, not "command not found":

   ```
   node --version
   gh --version
   vercel --version
   ```

---

## Phase C, Get your project onto the Mac

1. Log in to GitHub from Terminal. Paste this, press Return, and follow the
   prompts (choose "Login with a web browser" when asked):

   ```
   gh auth login
   ```

2. Pick a folder for your work and clone the repo. This pulls down everything
   you have done:

   ```
   cd ~/Documents
   gh repo clone theonlyhausofai-design/aiw2.0stack
   cd aiw2.0stack
   ```

3. Switch to your working branch:

   ```
   git checkout claude/stoic-mccarthy-auDKr
   ```

---

## Phase D, Open the project in Claude Code and reconnect your keys

1. In the Claude Code desktop app, open the folder you just cloned
   (`~/Documents/aiw2.0stack`).

2. Two files did not come down from GitHub on purpose, because they hold secrets:
   - `.env.local` (your nine API keys)
   - `website-factory/clients/_agency/agency-brand.json` (your agency profile)

3. Run this command in Claude Code:

   ```
   /setup
   ```

   It will walk you through pasting your nine keys again. Have them ready. This
   time the keys stay on your Mac, so this is the last time you paste them.
   Because there is no firewall now, all five required services should test green
   (HTTP 200), including Apify.

4. Put your agency profile back. Drop your `agency-brand.json` backup file into
   `website-factory/clients/_agency/`. If you do not have the backup, run
   `/setup-agency` to rebuild it.

---

## Phase E, Run your deep niche research

Once `/setup` shows all five required services green, you are unblocked. Run:

```
/research
```

This runs the Apify scrapers across your three finalist niches. It costs roughly
one to two dollars per niche and takes thirty to sixty minutes each. This is the
step the firewall was blocking. On your Mac, it just works.

---

## What to remember

- Your work lives in two places now: on your Mac, and in GitHub when you push.
- Commit and push often so GitHub always has a copy.
- Your keys and agency file live only on your Mac. Keep a backup of both somewhere
  safe (a password manager is good for the keys).
