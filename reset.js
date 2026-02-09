module.exports = {
  run: [
    {
      when: "{{exists('data')}}",
      method: "fs.rm",
      params: {
        path: "data"
      }
    },
    {
      when: "{{exists('app/web')}}",
      method: "fs.rm",
      params: {
        path: "app"
      }
    }
  ]
}
