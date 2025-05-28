import { useA11y } from "../context/AccessibilityContext";
import {
  PlusIcon,
  MinusIcon,
  MoonIcon,
  SunIcon,
  EyeDropperIcon,
  EyeSlashIcon,
  CursorArrowRaysIcon,
  LinkIcon,
  SwatchIcon
} from "@heroicons/react/24/outline";

function IconBtn({ onClick, children, title }) {
  return (
    <button
      onClick={onClick}
      title={title}
      className="grid h-10 w-10 place-content-center rounded-full bg-white shadow hover:bg-gray-200"
    >
      {children}
    </button>
  );
}

export default function AccessibilityToolbar() {
  const {
    fontScale,
    setFontScale,
    setDarkMode,
    darkMode,
    setHighContrast,
    highContrast,
    setDaltonism,
    daltonism,
    setHideImages,
    hideImages,
    setHighlightLinks,
    highlightLinks,
    setCursorLarge,
    cursorLarge
  } = useA11y();

  return (
    <aside className="fixed right-4 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-2">
      <IconBtn
        onClick={() => fontScale < 3 && setFontScale(fontScale + 1)}
        title="Aumentar tamaño"
      >
        <PlusIcon className="h-6 w-6" />
      </IconBtn>
      <IconBtn
        onClick={() => fontScale > -3 && setFontScale(fontScale - 1)}
        title="Disminuir tamaño"
      >
        <MinusIcon className="h-6 w-6" />
      </IconBtn>
      <IconBtn
        onClick={() => setDarkMode(!darkMode)}
        title={darkMode ? "Modo claro" : "Modo oscuro"}
      >
        {darkMode ? (
          <SunIcon className="h-6 w-6" />
        ) : (
          <MoonIcon className="h-6 w-6" />
        )}
      </IconBtn>
      <IconBtn
        onClick={() => setHighContrast(!highContrast)}
        title="Alto contraste"
      >
        <EyeDropperIcon className="h-6 w-6" />
      </IconBtn>
      <IconBtn
        onClick={() => setDaltonism(!daltonism)}
        title="Escala de grises (daltonismo)"
      >
        <SwatchIcon className="h-6 w-6" />
      </IconBtn>
      <IconBtn
        onClick={() => setHideImages(!hideImages)}
        title={hideImages ? "Mostrar imágenes" : "Ocultar imágenes"}
      >
        <EyeSlashIcon className="h-6 w-6" />
      </IconBtn>
      <IconBtn
        onClick={() => setHighlightLinks(!highlightLinks)}
        title="Subrayar enlaces"
      >
        <LinkIcon className="h-6 w-6" />
      </IconBtn>
      <IconBtn
        onClick={() => setCursorLarge(!cursorLarge)}
        title="Cursor grande"
      >
        <CursorArrowRaysIcon className="h-6 w-6" />
      </IconBtn>
    </aside>
  );
}
