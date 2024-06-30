const HOST_CONFIGURE = {
  title: "Cactos",
  description: "Cactos - ReactJS",
  theme: "light",
  toast: {
    position: "top-right",
    duration: 5000,
  },
  api: {
    url: "https://api.cactos.com",
  },
  routes: [
    {
      name: "Home",
      href: "/",
      icon: "home",
      childrens: []
    },
    {
      name: "Assistente",
      href: "/assistente",
      icon: "build",
      childrens: []
    },
    {
      name: "Financeiro",
      href: "/financeiro",
      icon: "financing",
      childrens: []
    },
    {
      name: "Sobre",
      href: "/sobre",
      icon: "info",
      childrens: []
    }
  ],
  client_extras: {
    "google-analytics": {
      trackingId: "UA-1234567890",
    },
  },
}

export default HOST_CONFIGURE;