# Introduction to TypeScript

## Environment Setup

### Install Typescript

```bash
sudo npm install -g typescript ts-node
sudo apt install node-typescript
# Check correct installation with:
tsc --help
```

### Optional configurations

1. Add 'code' to path

In VS Code:

View > Command Palette > [insert] install path

2. Install Prettier
3. Run prettier on save

File > Preferences > Settings > [insert] format on save > Tick on format on save

4. Use single quotes with prettier

Settings > [insert] single quotes > Tick on Prettier Single Quote

5. Use two spaces for indentation

Settings > [leave search bar empty] > Editor: Tab Size => 2

6. Set theme to 'Solarized Light'

## Compiling TS to JS

We have to take into account that TS isn't recognized by browsers, so we first need to compile the TS into JS

```bash
tsc index.ts
```

Run the code to test it

```bash
node index.js
```

In order to do both (compile and run) in one command we use:

```bash
ts-node index.ts
```
