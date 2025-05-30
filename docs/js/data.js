/*  DevPattern – data.js
    Formato compatible con public/js/patterns.js
    Cada registro incluye:
      - category   : "creacional" | "estructural" | "comportamiento"
      - name       : nombre del patrón
      - summary    : descripción breve
      - image      : ruta SVG
      - examples   : { js, java }
*/
const PATTERNS = [
  /* ───────────────────── CREACIONALES ───────────────────── */
  {
    category: "creacional",
    name: "Singleton",
    summary:
      "Garantiza que una clase posea solo una instancia y proporcione un punto de acceso global a ella.",
    image: "../assets/singleton.png",
    examples: {
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
    category: "creacional",
    name: "Factory Method",
    summary:
      "Define una interfaz para crear un objeto, pero permite a las subclases decidir qué clase instanciar.",
    image: "../assets/factory-method.png",
    examples: {
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
    category: "creacional",
    name: "Abstract Factory",
    summary:
      "Permite crear familias de objetos relacionados sin especificar sus clases concretas.",
    image: "../assets/abstract-factory.png",
    examples: {
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
    category: "creacional",
    name: "Builder",
    summary:
      "Separa la construcción de un objeto complejo de su representación, de modo que el mismo proceso pueda crear distintas representaciones.",
    image: "../assets/builder.png",
    examples: {
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
    category: "creacional",
    name: "Prototype",
    summary:
      "Permite copiar objetos existentes sin que el código dependa de sus clases.",
    image: "../assets/prototype.png",
    examples: {
      js: `const original = { wheels:4, clone(){ return { ...this }; } };
const car2 = original.clone();`,
      java: `class Shape implements Cloneable {
  public Shape clone() throws CloneNotSupportedException {
    return (Shape) super.clone();
  }
}`
    }
  },

  /* ───────────────────── ESTRUCTURALES ───────────────────── */
  {
    category: "estructural",
    name: "Adapter",
    summary:
      "Permite colaborar a interfaces incompatibles envolviendo un objeto dentro de una interfaz esperada.",
    image: "../assets/adapter.png",
    examples: {
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
    category: "estructural",
    name: "Bridge",
    summary:
      "Separa una abstracción de su implementación para que ambas puedan variar independientemente.",
    image: "../assets/bridge.png",
    examples: {
      js: `class Remote { constructor(device){ this.device=device; } toggle(){ this.device.toggle(); } }`,
      java: `interface Device{ void toggle(); }
class Remote { private Device dev; Remote(Device d){dev=d;} void toggle(){dev.toggle();} }`
    }
  },
  {
    category: "estructural",
    name: "Composite",
    summary:
      "Compone objetos en estructuras de árbol y permite tratar a objetos individuales y compuestos de la misma forma.",
    image: "../assets/composite.png",
    examples: {
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
    category: "estructural",
    name: "Decorator",
    summary:
      "Añade responsabilidades a un objeto de manera dinámica, proporcionando una alternativa flexible a la herencia.",
    image: "../assets/decorator.png",
    examples: {
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
    category: "estructural",
    name: "Facade",
    summary:
      "Proporciona una interfaz unificada a un conjunto de interfaces de un subsistema.",
    image: "../assets/facade.png",
    examples: {
      js: `class HomeCinemaFacade {
  playMovie(){ /* enciende DVD, proyector, audio… */ }
}`,
      java: `class HomeCinemaFacade{
  void playMovie(){ /* encender dispositivos */ }
}`
    }
  },
  {
    category: "estructural",
    name: "Flyweight",
    summary:
      "Reduce el consumo de memoria compartiendo el estado interno entre varios objetos.",
    image: "../assets/flyweight.png",
    examples: {
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
    category: "estructural",
    name: "Proxy",
    summary:
      "Proporciona un sustituto o representante de otro objeto para controlar su acceso.",
    image: "../assets/proxy.png",
    examples: {
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
  },

  /* ──────────────────── COMPORTAMIENTO ──────────────────── */
  {
    category: "comportamiento",
    name: "Chain of Responsibility",
    summary:
      "Permite pasar la solicitud a lo largo de una cadena de manejadores hasta que uno la procese.",
    image: "/assets/chain.png",
    examples: {
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
    category: "comportamiento",
    name: "Command",
    summary:
      "Encapsula una petición como un objeto, permitiendo parametrizar clientes con operaciones diferentes.",
    image: "../assets/command.png",
    examples: {
      js: `class LightOnCmd{ constructor(light){ this.light=light; } execute(){ this.light.on(); } }`,
      java: `class LightOnCmd implements Command{ private Light l; LightOnCmd(Light l){ this.l=l;} public void execute(){ l.on(); } }`
    }
  },
  {
    category: "comportamiento",
    name: "Iterator",
    summary:
      "Proporciona un modo de acceder secuencialmente a los elementos de un objeto agregado sin exponer su representación interna.",
    image: "../assets/iterator.png",
    examples: {
      js: `for (const item of [1,2,3]) console.log(item);`,
      java: `Iterator<Integer> it = list.iterator();
while(it.hasNext()) System.out.println(it.next());`
    }
  },
  {
    category: "comportamiento",
    name: "Mediator",
    summary:
      "Define un objeto que encapsula cómo interactúan un conjunto de objetos.",
    image: "../assets/mediator.png",
    examples: {
      js: `class ChatRoom{ show(user,msg){ console.log(user+':'+msg);} }`,
      java: `class ChatRoom{ static void show(User u,String m){ System.out.println(u.getName()+": "+m);} }`
    }
  },
  {
    category: "comportamiento",
    name: "Memento",
    summary:
      "Permite capturar y externalizar el estado interno de un objeto para restaurarlo más tarde.",
    image: "../assets/memento.png",
    examples: {
      js: `class EditorMemento{ constructor(content){ this.content=content;} }`,
      java: `class Memento{ private String state; Memento(String s){ state=s; } String get(){ return state;} }`
    }
  },
  {
    category: "comportamiento",
    name: "Observer",
    summary:
      "Define una dependencia uno-a-muchos de modo que los objetos se notifiquen automáticamente de cambios.",
    image: "../assets/observer.png",
    examples: {
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
    category: "comportamiento",
    name: "State",
    summary:
      "Permite a un objeto alterar su comportamiento cuando cambia su estado interno.",
    image: "../assets/state.png",
    examples: {
      js: `class TrafficLight{ constructor(){ this.state='RED'; }
  change(){ this.state=this.state==='RED'?'GREEN':'RED'; } }`,
      java: `class TrafficLight{
  private State state=new Red();
  void change(){ state=state.next(); }
}`
    }
  },
  {
    category: "comportamiento",
    name: "Strategy",
    summary:
      "Define una familia de algoritmos, los encapsula y los hace intercambiables.",
    image: "../assets/strategy.png",
    examples: {
      js: `function bubble(a){/*…*/} function quick(a){/*…*/}`,
      java: `interface Sort{ void sort(int[] a); } class QuickSort implements Sort{/*…*/}`
    }
  },
  {
    category: "comportamiento",
    name: "Template Method",
    summary:
      "Define el esqueleto de un algoritmo en una operación, delegando pasos a subclases.",
    image: "../assets/template.png",
    examples: {
      js: `class Game{ start(){ this.init(); this.play(); this.end(); } }`,
      java: `abstract class Game{ final void play(){ init(); start(); end(); } abstract void start(); }`
    }
  },
  {
    category: "comportamiento",
    name: "Visitor",
    summary:
      "Permite definir nuevas operaciones sin cambiar las clases de los elementos sobre los que opera.",
    image: "../assets/visitor.png",
    examples: {
      js: `class Visitor{ visitElement(e){ /*…*/ } }`,
      java: `interface Visitor{ void visit(Element e); }`
    }
  }
];
