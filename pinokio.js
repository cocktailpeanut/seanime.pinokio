module.exports = {
  version: "5.0",
  title: "Seanime",
  description: "Anime and manga media server with a local web interface. https://github.com/5rahim/seanime",
  icon: "icon.png",
  menu: async (kernel, info) => {
    const installing = info.running("install.js")
    const installed = info.exists("app/web/index.html")
    const running = info.running("start.js")
    const updating = info.running("update.js")
    const resetting = info.running("reset.js")

    if (installing) {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Installing",
        href: "install.js"
      }]
    }

    if (installed) {
      if (running) {
        const local = info.local("start.js")
        if (local && local.url) {
          return [{
            default: true,
            icon: "fa-solid fa-rocket",
            text: "Open Web UI",
            href: local.url
          }, {
            icon: "fa-solid fa-terminal",
            text: "Terminal",
            href: "start.js"
          }, {
            icon: "fa-solid fa-arrows-rotate",
            text: "Update",
            href: "update.js"
          }, {
            icon: "fa-solid fa-broom",
            text: "Reset",
            href: "reset.js"
          }]
        }

        return [{
          default: true,
          icon: "fa-solid fa-terminal",
          text: "Terminal",
          href: "start.js"
        }]
      }

      if (updating) {
        return [{
          default: true,
          icon: "fa-solid fa-arrows-rotate",
          text: "Updating",
          href: "update.js"
        }]
      }

      if (resetting) {
        return [{
          default: true,
          icon: "fa-solid fa-broom",
          text: "Resetting",
          href: "reset.js"
        }]
      }

      return [{
        default: true,
        icon: "fa-solid fa-power-off",
        text: "Start",
        href: "start.js"
      }, {
        icon: "fa-solid fa-arrows-rotate",
        text: "Update",
        href: "update.js"
      }, {
        icon: "fa-solid fa-plug",
        text: "Reinstall",
        href: "install.js"
      }, {
        icon: "fa-solid fa-broom",
        text: "Factory Reset",
        href: "reset.js"
      }]
    }

    return [{
      default: true,
      icon: "fa-solid fa-plug",
      text: "Install",
      href: "install.js"
    }]
  }
}
