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
        path: "app/web"
      }
    },
    {
      when: "{{exists('app/seanime-web/node_modules')}}",
      method: "fs.rm",
      params: {
        path: "app/seanime-web/node_modules"
      }
    },
    {
      when: "{{exists('app/seanime-web/out')}}",
      method: "fs.rm",
      params: {
        path: "app/seanime-web/out"
      }
    },
    {
      when: "{{exists('app/seanime-web/.next')}}",
      method: "fs.rm",
      params: {
        path: "app/seanime-web/.next"
      }
    }
  ]
}
