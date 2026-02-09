module.exports = {
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        path: "app",
        env: {
          CGO_ENABLED: "0"
        },
        message: [
          "go run -tags=nosystray . --host 127.0.0.1 --port {{port}} --datadir \"{{path.resolve(cwd, '../data')}}\""
        ],
        on: [{
          event: "/(http:\\/\\/[0-9.:]+)/",
          done: true
        }]
      }
    },
    {
      when: "{{input.event && input.event[1]}}",
      method: "local.set",
      params: {
        url: "{{input.event[1]}}"
      }
    }
  ]
}
