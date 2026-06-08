export default function ProjectOverviewSection() {
  return (
    <section id="proyecto" className="px-6 py-16 lg:px-8 bg-[#F1F3EE]">
      <div className="mx-auto max-w-7xl">
        {/* Intro */}
        <div className="mb-10 max-w-3xl space-y-4 animate-fade-up animate-delay-100">
          <p className="inline-flex rounded-full bg-[#C7EDE4] px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#1F4D36]">
            Propuesta de valor & modelo de negocio
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[#1E2A24] sm:text-4xl">
            EcoBioFilter combina ciencia, modularidad y un modelo comercial sostenible.
          </h2>
          <p className="text-base leading-8 text-[#42514a]">
            Nuestro sistema doméstico modular usa una capa biológica con microorganismos especializados para degradar contaminantes químicos y orgánicos, además de remover metales pesados. Es una solución diferenciada frente a los filtros convencionales, que solo retienen partículas.
          </p>
        </div>

        {/* Key cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[28px] border border-[#D8D1C4] bg-white p-6 shadow-sm animate-fade-up animate-delay-150">
            <h3 className="text-xl font-semibold text-[#1E2A24] mb-4">Problema y oportunidad</h3>
            <p className="text-sm leading-7 text-[#57615d]">El agua doméstica necesita una purificación más eficiente y con menos residuos plásticos. EcoBioFilter responde a esa necesidad con una tecnología viable para hogares y mercados conscientes.</p>
          </div>
          <div className="rounded-[28px] border border-[#D8D1C4] bg-white p-6 shadow-sm animate-fade-up animate-delay-200">
            <h3 className="text-xl font-semibold text-[#1E2A24] mb-4">Solución</h3>
            <p className="text-sm leading-7 text-[#57615d]">Un filtro modular que incorpora microorganismos como Bacillus subtilis, Pseudomonas putida y Saccharomyces cerevisiae inmovilizados en un soporte poroso. La tecnología degrada contaminantes y reduce metales pesados sin depender solo de retención mecánica.</p>
          </div>
          <div className="rounded-[28px] border border-[#D8D1C4] bg-white p-6 shadow-sm animate-fade-up animate-delay-250">
            <h3 className="text-xl font-semibold text-[#1E2A24] mb-4">Ventaja competitiva</h3>
            <p className="text-sm leading-7 text-[#57615d]">Gracias a su diseño modular, el usuario reemplaza solo los módulos internos cuando es necesario, disminuyendo costos a largo plazo y minimizando el desperdicio plástico.</p>
          </div>
        </div>

        {/* Mercado objetivo full width */}
        <div className="mt-12">
          <div className="rounded-[28px] border border-[#D8D1C4] bg-white p-6 shadow-sm animate-fade-up animate-delay-300">
            <h3 id="mercado-objetivo" className="text-xl font-semibold text-[#1E2A24] mb-4">Mercado objetivo</h3>
            <p className="text-sm leading-7 text-[#57615d]">Tres segmentos, una misma necesidad. EcoBioFilter se adapta a distintos contextos, desde apartamentos urbanos hasta comunidades rurales sin acceso a agua tratada.</p>

            <div className="mt-6 space-y-4">
              <div className="rounded-3xl border border-[#D8D1C4] bg-[#F8FFF7] p-5">
                <p className="text-sm font-semibold text-[#1E2A24]">🏙️ Hogares urbanos</p>
                <p className="mt-2 text-sm leading-7 text-[#57615d]">Familias con acueducto que desconfían de la calidad del agua y buscan reducir el gasto en agua embotellada.</p>
              </div>
              <div className="rounded-3xl border border-[#D8D1C4] bg-[#F8FFF7] p-5">
                <p className="text-sm font-semibold text-[#1E2A24]">🏘️ Zonas periurbanas</p>
                <p className="mt-2 text-sm leading-7 text-[#57615d]">Barrios en desarrollo con redes de agua en mal estado y alta exposición a sedimentos y contaminantes.</p>
              </div>
              <div className="rounded-3xl border border-[#D8D1C4] bg-[#F8FFF7] p-5">
                <p className="text-sm font-semibold text-[#1E2A24]">🌿 Comunidades rurales</p>
                <p className="mt-2 text-sm leading-7 text-[#57615d]">Familias dependientes de pozos o fuentes superficiales sin tratamiento, donde la biorremediación ofrece una solución de bajo costo.</p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-[#D8D1C4] bg-[#F4F5EF] p-4 text-center">
                <p className="text-xs uppercase tracking-[0.24em] text-[#1F4D36]">TAM estimado</p>
                <p className="mt-2 text-3xl font-semibold text-[#1E2A24]">~14M</p>
                <p className="text-sm text-[#57615d]">hogares en Colombia</p>
              </div>
              <div className="rounded-3xl border border-[#D8D1C4] bg-[#F4F5EF] p-4 text-center">
                <p className="text-xs uppercase tracking-[0.24em] text-[#1F4D36]">SAM objetivo</p>
                <p className="mt-2 text-3xl font-semibold text-[#1E2A24]">~4M</p>
                <p className="text-sm text-[#57615d]">hogares urbanos/periurbanos con desconfianza en el grifo</p>
              </div>
              <div className="rounded-3xl border border-[#D8D1C4] bg-[#F4F5EF] p-4 text-center">
                <p className="text-xs uppercase tracking-[0.24em] text-[#1F4D36]">SOM inicial</p>
                <p className="mt-2 text-3xl font-semibold text-[#1E2A24]">~50K</p>
                <p className="text-sm text-[#57615d]">hogares en fase piloto en Antioquia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Business Model Canvas */}
        <div className="mt-16 space-y-10">
          <div className="space-y-4 animate-fade-up animate-delay-400">
            <p className="inline-flex rounded-full bg-[#C7EDE4] px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#1F4D36]">Business Model Canvas</p>
            <h3 className="text-3xl font-semibold tracking-tight text-[#1E2A24] sm:text-4xl">Los 9 bloques del modelo de negocio de EcoBioFilter</h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-[28px] border border-[#D8D1C4] bg-white p-6 shadow-sm animate-fade-up animate-delay-450">
              <p className="text-sm font-semibold text-[#1E2A24] mb-3">Socios clave</p>
              <p className="text-sm leading-7 text-[#57615d]">Universidades (UdeA, UNAL), proveedores de cepas microbianas certificadas, laboratorios de calidad del agua, distribuidores de ferretería y tiendas naturistas.</p>
            </div>
            <div className="rounded-[28px] border border-[#D8D1C4] bg-white p-6 shadow-sm animate-fade-up animate-delay-500">
              <p className="text-sm font-semibold text-[#1E2A24] mb-3">Actividades clave</p>
              <p className="text-sm leading-7 text-[#57615d]">I+D en biorremediación, producción y ensamble de módulos, control de calidad microbiológico, certificación sanitaria, educación al cliente.</p>
            </div>
            <div className="rounded-[28px] border border-[#D8D1C4] bg-white p-6 shadow-sm animate-fade-up animate-delay-550">
              <p className="text-sm font-semibold text-[#1E2A24] mb-3">Propuesta de valor</p>
              <p className="text-sm leading-7 text-[#57615d]">Purificación de agua doméstica mediante microorganismos vivos. Elimina metales pesados y orgánicos. Diseño modular de bajo costo de mantenimiento. Sostenible y sin huella química.</p>
            </div>
            <div className="rounded-[28px] border border-[#D8D1C4] bg-white p-6 shadow-sm animate-fade-up animate-delay-600">
              <p className="text-sm font-semibold text-[#1E2A24] mb-3">Segmento de clientes</p>
              <p className="text-sm leading-7 text-[#57615d]">Hogares urbanos, periurbanos y rurales de Colombia. Familias que compran agua embotellada. Comunidades rurales sin acceso a agua tratada.</p>
            </div>
            <div className="rounded-[28px] border border-[#D8D1C4] bg-white p-6 shadow-sm animate-fade-up animate-delay-100">
              <p className="text-sm font-semibold text-[#1E2A24] mb-3">Recursos clave</p>
              <p className="text-sm leading-7 text-[#57615d]">Know-how microbiológico, cepas certificadas, laboratorio propio, patente del proceso, equipo científico multidisciplinar.</p>
            </div>
            <div className="rounded-[28px] border border-[#D8D1C4] bg-white p-6 shadow-sm animate-fade-up animate-delay-150">
              <p className="text-sm font-semibold text-[#1E2A24] mb-3">Relaciones con clientes</p>
              <p className="text-sm leading-7 text-[#57615d]">Servicio posventa, suscripción de mantenimiento, comunidad online de usuarios, talleres educativos sobre calidad del agua.</p>
            </div>
            <div className="rounded-[28px] border border-[#D8D1C4] bg-white p-6 shadow-sm animate-fade-up animate-delay-200">
              <p className="text-sm font-semibold text-[#1E2A24] mb-3">Canales</p>
              <p className="text-sm leading-7 text-[#57615d]">Tienda online directa · Ferreterías y tiendas de hogar · Alianzas con EPM/empresas de servicios públicos · Ferias agroambientales · Distribuidores rurales.</p>
            </div>
            <div className="rounded-[28px] border border-[#D8D1C4] bg-white p-6 shadow-sm animate-fade-up animate-delay-250">
              <p className="text-sm font-semibold text-[#1E2A24] mb-3">Estructura de costos</p>
              <p className="text-sm leading-7 text-[#57615d]">I+D · Producción de módulos · Certificaciones sanitarias · Marketing y educación · Distribución y logística.</p>
            </div>
            <div className="rounded-[28px] border border-[#D8D1C4] bg-white p-6 shadow-sm animate-fade-up animate-delay-300">
              <p className="text-sm font-semibold text-[#1E2A24] mb-3">Fuentes de ingresos</p>
              <p className="text-sm leading-7 text-[#57615d]">Venta del equipo base · Suscripción de recambio de módulos (modelo SaaS físico) · Servicio de mantenimiento · Venta a instituciones y cooperativas rurales.</p>
            </div>
          </div>

          {/* Competition + survey CTA */}
          <div className="mt-10 rounded-[28px] border border-[#D8D1C4] bg-white p-6 shadow-sm animate-fade-up animate-delay-350">
            <p className="inline-flex rounded-full bg-[#C7EDE4] px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#1F4D36]">Análisis de la competencia</p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#1E2A24] sm:text-3xl">¿Por qué EcoBioFilter es diferente?</h3>
            <p className="mt-3 text-sm leading-7 text-[#57615d]">Comparado con las soluciones existentes, EcoBioFilter ofrece ventaja en eliminación de metales pesados, menor impacto ambiental y mantenimiento modular económico.</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#E6E6E0] bg-[#FBFBFB] p-4">
                <p className="text-sm font-semibold text-[#1E2A24]">EcoBioFilter</p>
                <ul className="mt-2 text-sm text-[#57615d] list-inside list-disc">
                  <li>Elimina metales pesados (biorremediación)</li>
                  <li>Sin químicos</li>
                  <li>Modular y bajo mantenimiento</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-[#E6E6E0] bg-[#FBFBFB] p-4">
                <p className="text-sm font-semibold text-[#1E2A24]">Soluciones comunes</p>
                <ul className="mt-2 text-sm text-[#57615d] list-inside list-disc">
                  <li>Carbón activado: efectivo parcial, no modular</li>
                  <li>Ósmosis inversa: alto costo y desperdicio de agua</li>
                  <li>Agua embotellada: costo recurrente y plástico</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSffTQPYzIVzsb73bRmLt5PqpEeWLCCWbuqc0Nzpia6Qdf2Eaw/viewform?usp=sharing&ouid=105001046209916888953" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full bg-[#2F7D4E] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#256944] transition">Responder la encuesta</a>
              <p className="text-sm text-[#57615d]">Tu feedback valida supuestos clave y prioriza el siguiente paso.</p>
            </div>
          </div>

          {/* Organigrama */}
          <div className="mb-6">
            <p className="inline-flex rounded-full bg-[#C7EDE4] px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#1F4D36]">Organigrama</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[#1E2A24] sm:text-4xl">Las personas detrás de EcoBioFilter</h3>
            <p className="mt-3 text-sm leading-7 text-[#57615d]">Un equipo interdisciplinario con formación científica y visión emprendedora, comprometido con llevar la biorremediación al hogar colombiano.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-[#F8FFF7] p-6 border border-[#D8D1C4]">
              <p className="text-sm font-semibold text-[#1E2A24]">JM</p>
              <p className="mt-2 text-sm font-semibold text-[#1E2A24]">Julio Cesar Montoya Pérez</p>
              <p className="mt-1 text-sm leading-7 text-[#57615d]">I+D Microbiológico</p>
            </div>
            <div className="rounded-3xl bg-[#F8FFF7] p-6 border border-[#D8D1C4]">
              <p className="text-sm font-semibold text-[#1E2A24]">HG</p>
              <p className="mt-2 text-sm font-semibold text-[#1E2A24]">Heidy Valentina Garcia Brand</p>
              <p className="mt-1 text-sm leading-7 text-[#57615d]">Diseño de producto</p>
            </div>
            <div className="rounded-3xl bg-[#F8FFF7] p-6 border border-[#D8D1C4]">
              <p className="text-sm font-semibold text-[#1E2A24]">KC</p>
              <p className="mt-2 text-sm font-semibold text-[#1E2A24]">Katherin Yulitza Calderón Gómez</p>
              <p className="mt-1 text-sm leading-7 text-[#57615d]">Estrategia comercial</p>
            </div>
            <div className="rounded-3xl bg-[#F8FFF7] p-6 border border-[#D8D1C4]">
              <p className="text-sm font-semibold text-[#1E2A24]">MJ</p>
              <p className="mt-2 text-sm font-semibold text-[#1E2A24]">Maria José Henao</p>
              <p className="mt-1 text-sm leading-7 text-[#57615d]">Validación científica</p>
            </div>
            <div className="rounded-3xl bg-[#F8FFF7] p-6 border border-[#D8D1C4] lg:col-span-2">
              <p className="text-sm font-semibold text-[#1E2A24]">AA</p>
              <p className="mt-2 text-sm font-semibold text-[#1E2A24]">Angie Tatiana Arango Ramos</p>
              <p className="mt-1 text-sm leading-7 text-[#57615d]">Comunicación y mercadeo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
