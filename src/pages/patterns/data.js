export const patterns = {
  creational: [
    {
      name: "Singleton",
      desc:
        "Garantiza que una clase tenga una única instancia y proporciona un punto de acceso global a ella.",
      img: "/assets/singleton.svg",
      code: {
        js: `class Singleton {
  constructor() { if (Singleton.instance) return Singleton.instance;
    // estado...
    Singleton.instance = this;
  }
}
export default Object.freeze(new Singleton());`,
        java: `public class Singleton {
  private static final Singleton INSTANCE = new Singleton();
  private Singleton() {}
  public static Singleton getInstance() { return INSTANCE; }
}`
      }
    },
    {
      name: "Factory Method",
      desc:
        "Define una interfaz para crear un objeto, pero deja que las subclases decidan qué clase instanciar.",
      img: "/assets/factory.svg",
      code: {
        js: `class Dialog { createButton() {} }
class WindowsDialog extends Dialog {
  createButton() { return new WindowsButton(); }
}`,
        java: `abstract class Dialog { public abstract Button createButton(); }
class WindowsDialog extends Dialog {
  @Override public Button createButton() { return new WindowsButton(); }
}`
      }
    }
    /* …Completa con Builder, Prototype, Abstract Factory… */
  ],
  structural: [
    /* Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy */
  ],
  behavioral: [
    /* Chain of Responsibility, Command, Iterator, Mediator, Memento,
       Observer, State, Strategy, Template Method, Visitor, etc. */
  ]
};
