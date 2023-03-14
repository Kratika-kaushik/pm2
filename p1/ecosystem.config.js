module.exports = {
  apps: [
    {
    "name": "myapp",
    "script": "app.js",
    "watch": ['app.js'],
    "ignore_watch": ["node_modules", "public"],
    "instances": 1,
    "exce_mode": "cluster",
    "watch_options": {
      "usePolling": true,
      "alwaysStat": true,
      "useFsEvents": false
    },
    env: {
      "NODE_ENV": "production",
    }
  }
  ]
};
