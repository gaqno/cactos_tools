interface IRoutes {
  name: string;
  href: string;
  icon: string;
  childrens: IRoutes[];
}

export const routes: IRoutes[] = [
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
    name: "Configurações",
    href: "/configuracoes",
    icon: "settings",
    childrens: []
  },
  {
    name: "Sobre",
    href: "/sobre",
    icon: "info",
    childrens: []
  }
]