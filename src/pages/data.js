/*  DevPattern – listado completo de patrones de diseño
    ---------------------------------------------------
    Para cada patrón:
      name  : Nombre legible
      desc  : Descripción breve
      img   : Ruta sugerida en /src/assets  (añade la imagen con ese nombre)
      code  : Ejemplo { js, java }
*/

export const patterns = {
  /* ───────────── CREACIONALES ───────────── */
  creational: [
    {
      name: "Singleton",
      desc:
        "Garantiza que una clase posea solo una instancia y proporcione un punto de acceso global a ella.",
      img: "/assets/singleton.svg",
      code: {
        js: `class Singleton {
  constructor() {
    if (Singleton._instance) return Singleton._instance;
    /* estado inicial */
    Singleton._instance = this;
  }
}
export default Object.freeze(new Singleton());`,
        java: `public final class Singleton {
  private static final Singleton INSTANCE = new Singleton();
  private Singleton() {}
  public static Singleton getInstance() { return INSTANCE; }
}`
      }
    },
    {
      name: "Factory Method",
      desc:
        "Define una interfaz para crear un objeto, pero permite a las subclases decidir qué clase instanciar.",
      img: "/assets/factory-method.svg",
      code: {
        js: `class Dialog { createButton() { /* override */ } }
class WindowsDialog extends Dialog {
  createButton() { return new WindowsButton(); }
}`,
        java: `abstract class Dialog { public abstract Button createButton(); }
class WindowsDialog extends Dialog {
  @Override public Button createButton() { return new WindowsButton(); }
}`
      }
    },
    {
      name: "Abstract Factory",
      desc:
        "Permite crear familias de objetos relacionados sin especificar sus clases concretas.",
      img: "/assets/abstract-factory.svg",
      code: {
        js: `class GUIFactory { createButton(){} createCheckbox(){} }
class WinFactory extends GUIFactory {
  createButton(){ return new WinButton(); }
  createCheckbox(){ return new WinCheckbox(); }
}`,
        java: `interface GUIFactory { Button createButton(); Checkbox createCheckbox(); }
class WinFactory implements GUIFactory {
  public Button createButton() { return new WinButton(); }
  public Checkbox createCheckbox() { return new WinCheckbox(); }
}`
      }
    },
    {
      name: "Builder",
      desc:
        "Separa la construcción de un objeto complejo de su representación, de modo que el mismo proceso pueda crear distintas representaciones.",
      img: "/assets/builder.svg",
      code: {
        js: `class BurgerBuilder {
  addCheese(){ this.cheese=true; return this; }
  addBacon(){ this.bacon=true; return this; }
  build(){ return new Burger(this); }
}`,
        java: `class Burger {
  private boolean cheese, bacon;
  public static class Builder {
    private boolean cheese, bacon;
    public Builder cheese(){ this.cheese=true; return this; }
    public Builder bacon(){ this.bacon=true; return this; }
    public Burger build(){ return new Burger(this); }
  }
  private Burger(Builder b){ cheese=b.cheese; bacon=b.bacon; }
}`
      }
    },
    {
      name: "Prototype",
      desc:
        "Permite copiar objetos existentes sin que el código dependa de sus clases.",
      img: "/assets/prototype.svg",
      code: {
        js: `const original = { wheels:4, clone(){ return { ...this }; } };
const car2 = original.clone();`,
        java: `class Shape implements Cloneable {
  public Shape clone() throws CloneNotSupportedException {
    return (Shape) super.clone();
  }
}`
      }
    }
  ],

  /* ───────────── ESTRUCTURALES ───────────── */
  structural: [
    {
      name: "Adapter",
      desc:
        "Permite colaborar a interfaces incompatibles envolviendo un objeto dentro de una interfaz esperada.",
      img: "/assets/adapter.svg",
      code: {
        js: `class OldPrinter { printOld(txt){ console.log(txt);} }
class PrinterAdapter {
  constructor(old){ this.old=old;}
  print(text){ this.old.printOld(text); }
}`,
        java: `class OldPrinter { void printOld(String s){ System.out.println(s);} }
class PrinterAdapter implements Printer {
  private OldPrinter adaptee;
  PrinterAdapter(OldPrinter p){ this.adaptee=p; }
  public void print(String txt){ adaptee.printOld(txt); }
}`
      }
    },
    {
      name: "Bridge",
      desc:
        "Separa una abstracción de su implementación para que ambas puedan variar independientemente.",
      img: "/assets/bridge.svg",
      code: {
        js: `class Remote { constructor(device){ this.device=device; } toggle(){ this.device.toggle(); } }`,
        java: `interface Device{ void toggle(); }
class Remote { private Device dev; Remote(Device d){dev=d;} void toggle(){dev.toggle();} }`
      }
    },
    {
      name: "Composite",
      desc:
        "Compone objetos en estructuras de árbol y permite tratar a objetos individuales y compuestos de la misma forma.",
      img: "/assets/composite.svg",
      code: {
        js: `class Component { operation(){} }
class Leaf extends Component { operation(){/*…*/} }
class Composite extends Component {
  constructor(){ super(); this.children=[];}
  add(c){ this.children.push(c); }
  operation(){ this.children.forEach(c=>c.operation());}
}`,
        java: `abstract class Component{ abstract void operation(); }
class Composite extends Component{
  List<Component> children=new ArrayList<>();
  void add(Component c){ children.add(c); }
  void operation(){ children.forEach(Component::operation); }
}`
      }
    },
    {
      name: "Decorator",
      desc:
        "Añade responsabilidades a un objeto de manera dinámica, proporcionando una alternativa flexible a la herencia.",
      img: "/assets/decorator.svg",
      code: {
        js: `class Coffee { cost(){ return 5; } }
class MilkDecorator {
  constructor(base){ this.base=base; }
  cost(){ return this.base.cost()+1; }
}`,
        java: `interface Coffee{ int cost(); }
class MilkDecorator implements Coffee{
  private Coffee base;
  MilkDecorator(Coffee c){ base=c; }
  public int cost(){ return base.cost()+1; }
}`
      }
    },
    {
      name: "Facade",
      desc:
        "Proporciona una interfaz unificada a un conjunto de interfaces de un subsistema.",
      img: "/assets/facade.svg",
      code: {
        js: `class HomeCinemaFacade {
  playMovie(){ /* enciende DVD, proyector, audio… */ }
}`,
        java: `class HomeCinemaFacade{
  void playMovie(){ /* encender dispositivos */ }
}`
      }
    },
    {
      name: "Flyweight",
      desc:
        "Reduce el consumo de memoria compartiendo el estado interno entre varios objetos.",
      img: "/assets/flyweight.svg",
      code: {
        js: `class TreeTypeFactory{
  static cache=new Map();
  static get(type){ if(!this.cache.has(type)) this.cache.set(type,{type});
    return this.cache.get(type);
  }
}`,
        java: `class TreeTypeFactory{
  private static final Map<String,TreeType> cache=new HashMap<>();
  public static TreeType get(String k){
    return cache.computeIfAbsent(k, TreeType::new);
  }
}`
      }
    },
    {
      name: "Proxy",
      desc:
        "Proporciona un sustituto o representante de otro objeto para controlar su acceso.",
      img: "/assets/proxy.svg",
      code: {
        js: `class ImageProxy {
  constructor(url){ this.url=url; this.real=null; }
  display(){
    if(!this.real) this.real=new Image(this.url);
    this.real.display();
  }
}`,
        java: `class ImageProxy implements Image{
  private RealImage real;
  public void display(){
    if(real==null) real=new RealImage();
    real.display();
  }
}`
      }
    }
  ],

  /* ───────────── CONDUCTUALES ───────────── */
  behavioral: [
    {
      name: "Chain of Responsibility",
      desc:
        "Permite pasar la solicitud a lo largo de una cadena de manejadores hasta que uno la procese.",
      img: "/assets/chain.svg",
      code: {
        js: `class Handler{
  setNext(n){ this.next=n; return n; }
  handle(r){ if(this.next) return this.next.handle(r); }
}`,
        java: `abstract class Handler{
  private Handler next;
  public Handler setNext(Handler n){ next=n; return n; }
  public void handle(Request r){
    if(next!=null) next.handle(r);
  }
}`
      }
    },
    {
      name: "Command",
      desc:
        "Encapsula una petición como un objeto, permitiendo parametrizar clientes con operaciones diferentes.",
      img: "/assets/command.svg",
      code: {
        js: `class LightOnCmd{ constructor(light){ this.light=light; } execute(){ this.light.on(); } }`,
        java: `class LightOnCmd implements Command{ private Light l; LightOnCmd(Light l){ this.l=l;} public void execute(){ l.on(); } }`
      }
    },
    {
      name: "Iterator",
      desc:
        "Proporciona un modo de acceder secuencialmente a los elementos de un objeto agregado sin exponer su representación interna.",
      img: "/assets/iterator.svg",
      code: {
        js: `for (const item of [1,2,3]) console.log(item);`,
        java: `Iterator<Integer> it = list.iterator();
while(it.hasNext()) System.out.println(it.next());`
      }
    },
    {
      name: "Mediator",
      desc:
        "Define un objeto que encapsula cómo interactúan un conjunto de objetos.",
      img: "/assets/mediator.svg",
      code: {
        js: `class ChatRoom{ show(user,msg){ console.log(user+':'+msg);} }`,
        java: `class ChatRoom{ static void show(User u,String m){ System.out.println(u.getName()+": "+m);} }`
      }
    },
    {
      name: "Memento",
      desc:
        "Permite capturar y externalizar el estado interno de un objeto para restaurarlo más tarde.",
      img: "/assets/memento.svg",
      code: {
        js: `class EditorMemento{ constructor(content){ this.content=content;} }`,
        java: `class Memento{ private String state; Memento(String s){ state=s; } String get(){ return state;} }`
      }
    },
    {
      name: "Observer",
      desc:
        "Define una dependencia uno-a-muchos de modo que los objetos se notifiquen automáticamente de cambios.",
      img: "/assets/observer.svg",
      code: {
        js: `class Subject{
  observers=[];
  notify(){ this.observers.forEach(o=>o.update()); }
}`,
        java: `class Subject{
  private List<Observer> obs=new ArrayList<>();
  public void notifyObs(){ obs.forEach(Observer::update); }
}`
      }
    },
    {
      name: "State",
      desc:
        "Permite a un objeto alterar su comportamiento cuando cambia su estado interno.",
      img: "/assets/state.svg",
      code: {
        js: `class TrafficLight{ constructor(){ this.state='RED'; }
  change(){ this.state=this.state==='RED'?'GREEN':'RED'; } }`,
        java: `class TrafficLight{
  private State state=new Red();
  void change(){ state=state.next(); }
}`
      }
    },
    {
      name: "Strategy",
      desc:
        "Define una familia de algoritmos, los encapsula y los hace intercambiables.",
      img: "/assets/strategy.svg",
      code: {
        js: `function bubble(a){/*…*/} function quick(a){/*…*/}`,
        java: `interface Sort{ void sort(int[] a); } class QuickSort implements Sort{/*…*/}`
      }
    },
    {
      name: "Template Method",
      desc:
        "Define el esqueleto de un algoritmo en una operación, delegando pasos a subclases.",
      img: "/assets/template.svg",
      code: {
        js: `class Game{ start(){ this.init(); this.play(); this.end(); } }`,
        java: `abstract class Game{ final void play(){ init(); start(); end(); } abstract void start(); }`
      }
    },
    {
      name: "Visitor",
      desc:
        "Permite definir nuevas operaciones sin cambiar las clases de los elementos sobre los que opera.",
      img: "/assets/visitor.svg",
      code: {
        js: `class Visitor{ visitElement(e){ /*…*/ } }`,
        java: `interface Visitor{ void visit(Element e); }`
      }
    }
  ]
};
