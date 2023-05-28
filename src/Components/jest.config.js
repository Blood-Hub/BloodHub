const { TestEnvironment, default: JSDOMEnvironment } = require("jest-environment-jsdom");

const config = {
    verbose: true,
  };
  
  module.exports = config;

  "jest"; {
    "moduleNameMapper"; {
    "\\.(css|less)$";"identity-obj-proxy",
    "\\.(mp4|webm)$"; "..\jest.config.js"
    }
  }

  {
    const config = {
      testEnvironment: 'jsdom',
      testEnvironmentOptions: {
        customExportConditions: ['react-native'],
      },
    };
    
    module.exports = config;
  };

  module.exports = {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: ['node_modules'],
          use: ['babel-loader'],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.gif$/,
          type: 'asset/inline',
        },
        {
          test: /\.(ttf|eot|svg)$/,
          type: 'asset/resource',
        },
      ],
    },
    resolve: {
      alias: {
        config$: './configs/app-config.js',
        react: './vendor/react-master',
      },
      extensions: ['.js', '.jsx'],
      modules: [
        'node_modules',
        'bower_components',
        'shared',
        '/shared/vendor/modules',
      ],
    },
  };

    { "version"; "0.2.0",
      "configurations";[]
     
      "name"; "Debug Jest Tests",
      "type"; "node",
      "request"; "launch",
      "runtimeArgs"; [
        "--inspect-brk",
        "${workspaceRoot}/node_modules/jest/bin/jest.js",
        "--runInBand"
      ],
      "console"; "integratedTerminal",
      "internalConsoleOptions"; "neverOpen"}
    
    
  
  test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();

  
  
  });

