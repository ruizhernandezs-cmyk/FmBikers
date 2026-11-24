document.addEventListener("DOMContentLoaded", () => {
  const WHATSAPP_EMPRESA = "5214779161838";

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuToggle.classList.toggle("open", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const motocicletas = [
    {
      id: 1,
      nombre: "Yamaha MT-03 Hyper Naked",
      marca: "Yamaha",
      modelo: "MT-03 ABS",
      anio: 2023,
      cilindrada: "321 cc Bicilíndrica",
      kilometraje: "6,400 km",
      transmision: "6 Velocidades",
      estado: "Seminueva Certificada",
      categoria: "Naked",
      precio: "$112,000 MXN",
      mensualidad: "$2,890 / mes",
      imagen: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2018/03/bannerMT03_2026.jpg",
      descripcion: "Agilidad urbana con postura agresiva Master of Torque. Ideal para uso diario y salidas rápidas de fin de semana."
    },
    {
      id: 2,
      nombre: "Royal Enfield Hunter 350",
      marca: "Royal Enfield",
      modelo: "Hunter 350 Metro",
      anio: 2024,
      cilindrada: "349 cc Monocilíndrica",
      kilometraje: "2,150 km",
      transmision: "5 Velocidades",
      estado: "Como Nueva",
      categoria: "Cruiser",
      precio: "$84,500 MXN",
      mensualidad: "$2,150 / mes",
      imagen: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=80",
      descripcion: "Estilo neo-retro con torque desde bajas revoluciones, bajo centro de gravedad y mantenimiento sumamente económico."
    },
    {
      id: 3,
      nombre: "Kawasaki Ninja 400 KRT",
      marca: "Kawasaki",
      modelo: "EX400 Ninja",
      anio: 2022,
      cilindrada: "399 cc Bicilíndrica",
      kilometraje: "9,800 km",
      transmision: "6 Velocidades + Embrague Antirrebote",
      estado: "Seminueva Certificada",
      categoria: "Deportiva",
      precio: "$128,000 MXN",
      mensualidad: "$3,250 / mes",
      imagen: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=900&q=80",
      descripcion: "Ligera, precisa y con carenado aerodinámico. La puerta de entrada perfecta al mundo deportivo sin costos excesivos."
    },
    {
      id: 4,
      nombre: "Honda CB300R Neo Sports",
      marca: "Honda",
      modelo: "CB300R ABS",
      anio: 2023,
      cilindrada: "286 cc DOHC",
      kilometraje: "5,300 km",
      transmision: "6 Velocidades",
      estado: "Seminueva Certificada",
      categoria: "Naked",
      precio: "$99,000 MXN",
      mensualidad: "$2,540 / mes",
      imagen: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?auto=format&fit=crop&w=900&q=80",
      descripcion: "Suspensión invertida Showa, iluminación Full LED y un peso pluma de 144 kg que la hace maniobrable en cualquier tráfico."
    },
    {
      id: 5,
      nombre: "Himalayan 411 Scrambler",
      marca: "Royal Enfield",
      modelo: "Himalayan 411",
      anio: 2023,
      cilindrada: "411 cc SOHC",
      kilometraje: "11,200 km",
      transmision: "5 Velocidades",
      estado: "Lista para Ruta",
      categoria: "Doble Propósito",
      precio: "$92,000 MXN",
      mensualidad: "$2,390 / mes",
      imagen: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=900&q=80",
      descripcion: "Diseñada para devorar terracería y carretera abierta con suspensiones de largo recorrido y parrillas de carga incluidas."
    },
    {
      id: 6,
      nombre: "Iron 883 Custom Bobber",
      marca: "Harley-Davidson",
      modelo: "XL883N Iron",
      anio: 2020,
      cilindrada: "883 cc V-Twin Evolution",
      kilometraje: "14,900 km",
      transmision: "5 Velocidades (Banda)",
      estado: "Edición Garage",
      categoria: "Cruiser",
      precio: "$169,000 MXN",
      mensualidad: "$4,190 / mes",
      imagen: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80",
      descripcion: "El sonido clásico V-Twin en acabado negro mate industrial. Financiamiento especial para dar el salto a alta cilindrada."
    }
  ];

  const fallbackSvg =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
        <rect width="800" height="500" fill="#111318"/>
        <circle cx="240" cy="340" r="75" fill="none" stroke="#ff5500" stroke-width="10"/>
        <circle cx="560" cy="340" r="75" fill="none" stroke="#ff5500" stroke-width="10"/>
        <path d="M240 340 L350 220 L480 220 L560 340 M350 220 L310 160 L370 160" fill="none" stroke="#f3f4f6" stroke-width="10" stroke-linecap="round"/>
        <text x="400" y="90" fill="#9ca3af" font-family="monospace" font-size="22" text-anchor="middle">FMBIKERS</text>
      </svg>`
    );

  const motoGrid = document.getElementById("motoGrid");
  const filterBar = document.getElementById("filterBar");
  const motoModal = document.getElementById("motoModal");
  const closeModalBtn = document.getElementById("closeModal");

  const specsView = document.getElementById("specsView");
  const reserveFormView = document.getElementById("reserveFormView");
  const reserveSuccessView = document.getElementById("reserveSuccessView");

  const openReserveFormBtn = document.getElementById("openReserveFormBtn");
  const backToSpecsBtn = document.getElementById("backToSpecsBtn");
  const reserveForm = document.getElementById("reserveForm");
  const finishModalBtn = document.getElementById("finishModalBtn");
  const whatsappDirectLink = document.getElementById("whatsappDirectLink");

  let motoSeleccionada = null;

  function mostrarVistaModal(vista) {
    if (!specsView || !reserveFormView || !reserveSuccessView) return;
    specsView.classList.add("hidden");
    reserveFormView.classList.add("hidden");
    reserveSuccessView.classList.add("hidden");
    vista.classList.remove("hidden");
  }

  function renderMotos(categoria = "todas") {
    if (!motoGrid) return;

    const filtradas =
      categoria === "todas"
        ? motocicletas
        : motocicletas.filter((m) => m.categoria === categoria);

    motoGrid.innerHTML = filtradas
      .map(
        (moto) => `
        <article class="moto-card" data-id="${moto.id}" tabindex="0" role="button" aria-label="Ver detalles de ${moto.nombre}">
          <div class="moto-img-wrap">
            <span class="moto-badge">${moto.categoria}</span>
            <img src="${moto.imagen}" alt="${moto.nombre}" loading="lazy" />
          </div>
          <div class="moto-card-body">
            <h2 class="moto-name">${moto.nombre}</h2>
            <div class="moto-card-footer">
              <span class="moto-price-tag">Desde ${moto.mensualidad}</span>
              <span class="moto-inspect-link">Ver datos →</span>
            </div>
          </div>
        </article>
      `
      )
      .join("");

    motoGrid.querySelectorAll("img").forEach((img) => {
      img.addEventListener("error", () => {
        img.src = fallbackSvg;
      });
    });
    motoGrid.querySelectorAll(".moto-card").forEach((card) => {
      const abrir = () => abrirFichaTecnica(Number(card.dataset.id));
      card.addEventListener("click", abrir);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          abrir();
        }
      });
    });
  }

  function abrirFichaTecnica(id) {
    const moto = motocicletas.find((m) => m.id === id);
    if (!moto || !motoModal) return;

    motoSeleccionada = moto;
    if (reserveForm) reserveForm.reset();
    mostrarVistaModal(specsView);

    document.getElementById("modalCategory").textContent = moto.categoria;
    const imgEl = document.getElementById("modalImg");
    imgEl.src = moto.imagen;
    imgEl.onerror = () => {
      imgEl.src = fallbackSvg;
    };

    document.getElementById("modalBrand").textContent = `// ${moto.marca.toUpperCase()}`;
    document.getElementById("modalTitle").textContent = moto.nombre;
    document.getElementById("modalDesc").textContent = moto.descripcion;

    document.getElementById("specModelo").textContent = moto.modelo;
    document.getElementById("specAnio").textContent = moto.anio;
    document.getElementById("specCilindrada").textContent = moto.cilindrada;
    document.getElementById("specKilometraje").textContent = moto.kilometraje;
    document.getElementById("specTransmision").textContent = moto.transmision;
    document.getElementById("specEstado").textContent = moto.estado;

    document.getElementById("specPrecio").textContent = moto.precio;
    document.getElementById("specMensualidad").textContent = moto.mensualidad;

    motoModal.classList.add("open");
    motoModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function cerrarModal() {
    if (!motoModal) return;
    motoModal.classList.remove("open");
    motoModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (openReserveFormBtn) {
    openReserveFormBtn.addEventListener("click", () => {
      if (!motoSeleccionada) return;
      document.getElementById("formMotoName").textContent = `${motoSeleccionada.nombre} (${motoSeleccionada.anio})`;
      mostrarVistaModal(reserveFormView);
      document.getElementById("clientName").focus();
    });
  }

  if (backToSpecsBtn) {
    backToSpecsBtn.addEventListener("click", () => {
      mostrarVistaModal(specsView);
    });
  }

  if (reserveForm) {
    reserveForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!motoSeleccionada) return;

      const nombre = document.getElementById("clientName").value.trim();
      const telefono = document.getElementById("clientPhone").value.trim();
      const presupuestoRaw = Number(document.getElementById("clientBudget").value);
      const presupuestoFormateado = `$${presupuestoRaw.toLocaleString("es-MX")} MXN`;

      const mensajeWhatsApp =
        `¡Hola Fm Bikers! Quiero apartar una motocicleta:\n\n` +
        `*Unidad:* ${motoSeleccionada.nombre} (${motoSeleccionada.anio})\n` +
        `*Modelo:* ${motoSeleccionada.modelo} | *Cilindrada:* ${motoSeleccionada.cilindrada}\n` +
        `*Precio de contado:* ${motoSeleccionada.precio}\n\n` +
        `*Mis datos de contacto:*\n` +
        `• *Nombre:* ${nombre}\n` +
        `• *Teléfono:* ${telefono}\n` +
        `• *Presupuesto / Enganche:* ${presupuestoFormateado}`;

      const whatsappUrl = `https://wa.me/${WHATSAPP_EMPRESA}?text=${encodeURIComponent(mensajeWhatsApp)}`;

      document.getElementById("confirmName").textContent = nombre.split(" ")[0];
      document.getElementById("confirmMoto").textContent = `${motoSeleccionada.nombre} (${motoSeleccionada.anio})`;
      document.getElementById("confirmPhone").textContent = telefono;
      document.getElementById("confirmBudget").textContent = presupuestoFormateado;

      if (whatsappDirectLink) {
        whatsappDirectLink.href = whatsappUrl;
      }

      mostrarVistaModal(reserveSuccessView);
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    });
  }

  if (finishModalBtn) {
    finishModalBtn.addEventListener("click", cerrarModal);
  }

  if (filterBar) {
    filterBar.addEventListener("click", (e) => {
      if (!e.target.classList.contains("filter-btn")) return;
      filterBar.querySelectorAll(".filter-btn").forEach((btn) => btn.classList.remove("active"));
      e.target.classList.add("active");
      renderMotos(e.target.dataset.category);
    });
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", cerrarModal);
  }

  if (motoModal) {
    motoModal.addEventListener("click", (e) => {
      if (e.target === motoModal) cerrarModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && motoModal.classList.contains("open")) cerrarModal();
    });
  }

  renderMotos();
});