module.exports = {
  message: 'NativeScript Plugins ~ made with ❤️  Choose a command to start...',
  pageSize: 32,
  scripts: {
    default: 'nps-i',
    nx: {
      script: 'nx',
      description: 'Execute any command with the @nrwl/cli',
    },
    format: {
      script: 'nx format:write',
      description: 'Format source code of the entire workspace (auto-run on precommit hook)',
    },
    '🔧': {
      script: `npx cowsay "NativeScript plugin demos make developers 😊"`,
      description: '_____________  Apps to demo plugins with  _____________',
    },
    // demos
    apps: {
      '...Vanilla...': {
        script: 'npx cowsay "Nothing wrong with vanilla 🍦"',
        description: ' 🔻 Vanilla',
      },
      demo: {
        clean: {
          script: 'nx run demo:clean',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx run demo:ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx run demo:android',
          description: '⚆  Run Android  🤖',
        },
      },
      '...Angular...': {
        script: 'npx cowsay "Test all the Angles!"',
        description: ' 🔻 Angular',
      },
      'demo-angular': {
        clean: {
          script: 'nx run demo-angular:clean',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx run demo-angular:ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx run demo-angular:android',
          description: '⚆  Run Android  🤖',
        },
      },

      '...Vue...': {
        script: 'npx cowsay "You like the vue here..."',
        description: ' 🔻 Vue',
      },
      'demo-vue': {
        clean: {
          script: 'nx run demo-vue:clean',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx run demo-vue:ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx run demo-vue:android',
          description: '⚆  Run Android  🤖',
        },
      },
    },

    '⚙️': {
      script: `npx cowsay "@@m-baldasty/* packages will keep your ⚙️ cranking"`,
      description: '_____________  @@m-baldasty/*  _____________',
    },
    // packages
    // build output is always in dist/packages
    '@@m-baldasty': {
      // @@m-baldasty/here
      here: {
        build: {
          script: 'nx run here:build.all',
          description: '@@m-baldasty/here: Build',
        },
      },
      // @marblsy/here
      here: {
        build: {
          script: 'nx run here:build.all',
          description: '@marblsy/here: Build',
        },
      },
      // @marblsy/spotify
      spotify: {
        build: {
          script: 'nx run spotify:build.all',
          description: '@marblsy/spotify: Build',
        },
      },
      'build-all': {
        script: 'nx run-many --target=build.all --all',
        description: 'Build all packages',
      },
    },
    '⚡': {
      script: `npx cowsay "Focus only on source you care about for efficiency ⚡"`,
      description: '_____________  Focus (VS Code supported)  _____________',
    },
    focus: {
      here: {
        script: 'nx run here:focus',
        description: 'Focus on @@m-baldasty/here',
      },
      here: {
        script: 'nx run here:focus',
        description: 'Focus on @marblsy/here',
      },
      spotify: {
        script: 'nx run spotify:focus',
        description: 'Focus on @marblsy/spotify',
      },
      reset: {
        script: 'nx g @@m-baldasty/plugin-tools:focus-packages',
        description: 'Reset Focus',
      },
    },
    '.....................': {
      script: `npx cowsay "That's all for now folks ~"`,
      description: '.....................',
    },
  },
};
