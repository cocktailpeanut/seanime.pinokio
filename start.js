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
          "go run -tags=nosystray . --datadir \"{{path.resolve(cwd, '../data')}}\""
        ],
        on: [{
          event: "/seanime started.+(http:\\/\\/[0-9.:]+)/i",
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
