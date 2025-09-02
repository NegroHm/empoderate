# 🌸 Empodérate - Salón de Belleza

Sitio web oficial del salón de belleza Empodérate, especializado en estilismo, maquillaje, diseño de cejas y uñas.

## ✨ Características

- **🎨 Diseño elegante** con paleta de colores rosados
- **📱 Completamente responsivo** y optimizado para móvil
- **🎠 Carrusel hero** con 3 imágenes rotativas
- **👥 Sección de equipo** con modales interactivos
- **🖼️ Portfolio carruseles** para cada estilista
- **📋 Servicios dinámicos** fáciles de actualizar
- **💅 Combos y promociones** configurables
- **📍 Integración con Google Maps**
- **📝 Formulario de contacto** con validación

## 🚀 Desarrollo Local

```bash
# Clonar repositorio
git clone https://github.com/NegroHm/empoderate.git
cd empoderate

# Ejecutar servidor local
python3 -m http.server 8000
# o
npm run dev
```

Visita: http://localhost:8000

## 📱 Optimizaciones Móviles

- ✅ Scroll bloqueado en modales
- ✅ Navegación táctil mejorada
- ✅ Carruseles con soporte touch
- ✅ Formularios optimizados para iOS
- ✅ Tablas con scroll horizontal
- ✅ Prevención de zoom accidental

## 🔧 Agregar Contenido

### Nuevo Servicio
Edita `script.js` línea 47 y agrega al array `featuredServices`:
```javascript
{
    titulo: "Nuevo Servicio",
    descripcion: "Descripción del servicio",
    imagen: "url-imagen",
    link: "#servicios"
}
```

### Nueva Estilista
Edita `script.js` línea 2 y agrega al array `teamData`:
```javascript
{
    nombre: "Nombre Apellido",
    especialidad: "Especialidad",
    imagen: "url-foto",
    descripcion: "Descripción detallada",
    experiencia: "X años de experiencia",
    portfolio: ["img1.jpg", "img2.jpg", ...]
}
```

### Nuevo Combo
Edita `script.js` línea 118 y agrega al array `combosData`:
```javascript
{
    titulo: "Nombre Combo",
    servicios: ["Servicio 1", "Servicio 2"],
    descuento: "X% OFF"
}
```

## 🌐 Deploy

El proyecto está configurado para deploy automático en Vercel al hacer push a la rama `main`.

## 📞 Contacto

- **Instagram:** @empoderate_bp
- **Dirección:** Av. Principal 123, Barrio Parque
- **Teléfono:** +54 11 1234-5678