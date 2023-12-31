const paginas = [
    {title: "Home", direccion: "index.html"},
    {title: "About", direccion: "about.html"},
    {title: "Programas", direccion:"programas.html"},
    {title: "Ayudar", direccion: "ayuda.html"},
    {title: "Galería", direccion: "galeria.html"},
    {title: "Blog", direccion: "blog.html"},
    {title: "Eventos", direccion: "ayuda.html"},
    {title: "Contacto", direccion: "ayuda.html"},
    {title: "Donaciones", direccion: "ayuda.html"},
    {title: "FAQ", direccion: "ayuda.html"},
]

const bienvenida = [
    {title: "B i e n v e n i d o s", mensaje: "En este espacio, cada paso que das nos acerca más a un mundo donde los derechos de cada ser vivo importan. Juntos, trabajamos incansablemente para brindarles voz y protección a aquellos que más lo necesitan. Únete a nosotros para marcar la diferencia, ya sea adoptando, educando o apoyando nuestras iniciativas. Cada acción cuenta en nuestro compromiso compartido de garantizar un futuro más brillante para nuestros amigos de cuatro patas en Honduras. ¡Gracias por ser parte de este cambio!"}
]

const imagen_inicio=[
    {direccion: "https://scontent.ftgu3-4.fna.fbcdn.net/v/t39.30808-6/395442735_733095595526844_3576882319700970476_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=7yS4JJDTREEAX_E5d6t&_nc_ht=scontent.ftgu3-4.fna&oh=00_AfAZHi2uZOb_gqFr_VHBc6Pm1eicjzVmJVsXpQ8-5XjEvQ&oe=656FD186", alt: "Imagen promoviendo la adopcion animal"}
]

const mision = [
    {title: "Misión", texto: "Trabajamos incansablemente para salvaguardar el bienestar y la seguridad de los animales en Honduras. A través de la educación, la promoción de leyes de protección animal, la atención médica y la adopción responsable, nos comprometemos a ser la voz de aquellos que no pueden hablar por sí mismos. Buscamos crear conciencia sobre los derechos de los animales, fomentando una cultura de respeto y empatía hacia todas las especies. Nuestra misión es ser defensores activos y dedicados, promoviendo un entorno donde cada animal sea tratado con compasión, amor y dignidad, garantizando un futuro más seguro y compasivo para todas las criaturas que comparten nuestro mundo."},
]
const vision = [
    {title: "Visión", texto: "En AHPRA, visualizamos un Honduras donde cada animal es respetado, protegido y cuidado. Nos esforzamos por ser líderes en la defensa de los derechos de los animales, promoviendo una sociedad donde la compasión y el respeto hacia todas las formas de vida son fundamentales. Nuestra visión es un país donde los animales sean tratados con dignidad, donde sus necesidades sean comprendidas y atendidas, y donde su seguridad sea una prioridad para todos los ciudadanos. Trabajamos incansablemente para construir un futuro donde cada ser vivo tenga la oportunidad de vivir una vida plena, sin sufrimiento ni maltrato."},
]

const noticias_inicio =[
    {title: "Celebración - Dia Mundial de los Animales", texto: "Descubre como puedes apoyar la causa en este día tan importante y comparte el mensaje.", imagen:"https://scontent.ftgu3-4.fna.fbcdn.net/v/t39.30808-6/384112655_715765120593225_1286363251565292164_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=97x527zKjd8AX_qh7b7&_nc_ht=scontent.ftgu3-4.fna&oh=00_AfA-6YbMZtHp8KfutPw9mP9WS7lsC4G81HtRgUAVrKONHA&oe=65704B1F"},
    {title: "Inaugurada Primera Veterinaria Municipal", texto: "Un gran paso adelante para la integridad de los animales en Honduras.", imagen: "https://scontent.ftgu3-4.fna.fbcdn.net/v/t39.30808-6/358628123_672203621616042_2744548901035945361_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=TfqmLDk8ye8AX_Zw51Q&_nc_ht=scontent.ftgu3-4.fna&oh=00_AfA41y6aFghZOdfhmM50B8yC_XOFDHboh2byuDMPFXJqAw&oe=6571B8A4"},
    {title: "Jornadas de Alimentacion AHPRA", texto: "Los voluntarios de AHPRA en Jornadas de alimentación para animales sin hogar.", imagen: "https://scontent.ftgu3-4.fna.fbcdn.net/v/t39.30808-6/294133093_5240579019328576_561703918281812068_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_ohc=WK1WFXzZx-4AX_WrixZ&_nc_ht=scontent.ftgu3-4.fna&oh=00_AfBC-zhWmL1MqrQuOdRKUblv6TxRGViC-pwAl1RATHw0Iw&oe=65708C1E"},
]

const ejemplos = [
    {imagen: "https://scontent.ftgu3-3.fna.fbcdn.net/v/t1.6435-9/95219600_2900065140046654_1431775413100609536_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=BipkpaB5TE0AX-K7SsW&_nc_ht=scontent.ftgu3-3.fna&oh=00_AfC272RFamo5Vy1r48aU-LmTKrnxjBXXNvzUweIxn2sgyQ&oe=659357B8", alt:"Imagen de un animal rescatado"},
    {imagen: "https://estaticos-cdn.prensaiberica.es/clip/4d355f5c-3824-41ed-8be3-697466f6b34b_16-9-discover-aspect-ratio_default_0.jpg", alt:"Imagen de un animal rescatado"},
    {imagen: "https://www.eltiempo.com/files/image_640_428/files/crop/uploads/2018/07/22/5b5507da38812.r_1532317708443.0-0-1937-969.jpeg", alt:"Imagen de un animal rescatado"},
]

const noticias_blog = [
    {title: "Celebración - Dia Mundial de los Animales", texto: "Descubre como puedes apoyar la causa en este día tan importante y comparte el mensaje.", imagen:"https://scontent.ftgu3-4.fna.fbcdn.net/v/t39.30808-6/384112655_715765120593225_1286363251565292164_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=97x527zKjd8AX_qh7b7&_nc_ht=scontent.ftgu3-4.fna&oh=00_AfA-6YbMZtHp8KfutPw9mP9WS7lsC4G81HtRgUAVrKONHA&oe=65704B1F"},
    {title: "Jornadas de Alimentacion AHPRA", texto: "Los voluntarios de AHPRA en Jornadas de alimentación para animales sin hogar.", imagen: "https://scontent.ftgu3-4.fna.fbcdn.net/v/t39.30808-6/294133093_5240579019328576_561703918281812068_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_ohc=WK1WFXzZx-4AX_WrixZ&_nc_ht=scontent.ftgu3-4.fna&oh=00_AfBC-zhWmL1MqrQuOdRKUblv6TxRGViC-pwAl1RATHw0Iw&oe=65708C1E"},
    {title: "Dile NO a la Pólvora", texto: "Esta temporada navideña, recuerda que la pólvora es muy perjudicial para los animales, evita usarla.", imagen: "https://scontent.ftgu3-3.fna.fbcdn.net/v/t39.30808-6/393209021_756311826538554_8792600264083643103_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=b-TmpVrGxuYAX_Yiqkd&_nc_ht=scontent.ftgu3-3.fna&oh=00_AfDcrMS7UQl7xvc6Vt5lND_8SKaulezE7S0h_MGZ649PLA&oe=65725A49"},
    {title: "Penalización del Maltrato Animal", texto: "El código penal de Honduras incluye sanciones contra el maltrato, descubre como esto mejora el ambiente animal en el país.", imagen: "https://scontent.ftgu3-4.fna.fbcdn.net/v/t39.30808-6/392932253_730584619111275_1018859485584803833_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_ohc=KtelRYIDFAcAX9SRlAK&_nc_ht=scontent.ftgu3-4.fna&oh=00_AfBfIUlKu5sO03lQu5ad6uKLsVNrCEFvZZu__djTPN22XA&oe=6571A5D2"},
    {title: "El Mejor Amigo del Hombre", texto: "Los animales no son solo una gran compañía para los humanos, ¡también son grandes ayudadores!", imagen: "https://scontent.ftgu3-3.fna.fbcdn.net/v/t39.30808-6/343740629_632582582021395_7156257634908480223_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_ohc=qsrWXxlt4uEAX-KthSt&_nc_ht=scontent.ftgu3-3.fna&oh=00_AfDn-E3-EBXkrjgo6Tc2MrHh-8sff2HVXMlctEUDzdbEVw&oe=6570CBD1"},
    {title: "Inaugurada Primera Veterinaria Municipal", texto: "Un gran paso adelante para la integridad de los animales en Honduras.", imagen: "https://scontent.ftgu3-4.fna.fbcdn.net/v/t39.30808-6/358628123_672203621616042_2744548901035945361_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=TfqmLDk8ye8AX_Zw51Q&_nc_ht=scontent.ftgu3-4.fna&oh=00_AfA41y6aFghZOdfhmM50B8yC_XOFDHboh2byuDMPFXJqAw&oe=6571B8A4"},
]

const noticias_side = [
    {title: "Señales de una mascota feliz", imagen: "https://scontent.ftgu3-3.fna.fbcdn.net/v/t39.30808-6/307486185_5433399593379850_130592564544277914_n.png?_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_ohc=8Bxnvhlj42AAX_OzF6U&_nc_ht=scontent.ftgu3-3.fna&oh=00_AfBpvNj9vb3egB3LmqR0S1aXp2s4ausuZ7MbWZhst_CATQ&oe=65727F7A"},
    {title: "Día de la Bio- diversidad", imagen: "https://scontent.ftgu3-3.fna.fbcdn.net/v/t39.30808-6/283497466_5087404367979376_1145628646134216660_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=-kPFKb516fMAX-9-yZr&_nc_ht=scontent.ftgu3-3.fna&oh=00_AfD2o0eP9tMJHKxKaPLJ4DlGEyTDWfBa5MYBrstFZ787ng&oe=6571E69C"},
    {title: "AHPRA ahora es miembro LAPA", imagen:"https://scontent.ftgu3-4.fna.fbcdn.net/v/t39.30808-6/274090267_4826836890702793_5366097131305197451_n.png?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_ohc=p6us2CoYKOIAX8wYuG3&_nc_ht=scontent.ftgu3-4.fna&oh=00_AfA1obJkeyw9njatEm4QX-RU2T9iQ0wJNdR8EzlPm6YwWQ&oe=6571C264"},
    {title: "Dia mundial de la Tierra", imagen: "https://scontent.ftgu3-3.fna.fbcdn.net/v/t1.6435-9/175544747_3875670999152725_3806220495014044435_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=ivhhD-UL7WQAX8NbVd6&_nc_ht=scontent.ftgu3-3.fna&oh=00_AfBuJxIIGYy4JpBE4T227WkXFhIb9ipvhnDn1BkETgsZWA&oe=65944BCA"},
    {title: "El Bienestar Animal", imagen:"https://scontent.ftgu3-4.fna.fbcdn.net/v/t1.6435-9/118084142_3190333657686466_4844340454002889005_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=bz5HbnMOLPAAX9aPpsD&_nc_ht=scontent.ftgu3-4.fna&oh=00_AfCzf0x11WeSM7GdC61XL7ZqYx4FRIma4O7srS3uz0TjrQ&oe=65945859"},
    {title: "Como Denunciar Maltrato", imagen: "https://scontent.ftgu3-4.fna.fbcdn.net/v/t1.6435-9/105672315_3053874094665757_6906475133536625236_n.png?_nc_cat=107&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=4ReBfEwb8LsAX-K6Tbu&_nc_ht=scontent.ftgu3-4.fna&oh=00_AfCaH9MmAeWQaAoDzHFI8NWNbypNjfucETMWM1XvgwWW0Q&oe=659462A1"},
    {title: "No Compres Animales Silvestres", imagen: "https://scontent.ftgu3-3.fna.fbcdn.net/v/t1.6435-9/88089082_2774722452580924_2629753091737518080_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=kCvzto7UTOYAX8LCrAj&_nc_ht=scontent.ftgu3-3.fna&oh=00_AfBsiSY9xlEPMZA7jPvRoGwVRkygdPNg011BVjXr8LGmYA&oe=65942D76"},
    {title: "Dia Mundial del Vega- nismo", imagen: "https://scontent.ftgu3-4.fna.fbcdn.net/v/t1.6435-9/73495259_2511348152251690_2246355779428810752_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=uooj8KGSEUMAX8gdejd&_nc_ht=scontent.ftgu3-4.fna&oh=00_AfBVm1770zusC-rHEt9HtO427N4__WlGHLT2T0H8BCXWBw&oe=65943125"},
]
const galeria1=[
    {direccion: "https://scontent.ftgu1-3.fna.fbcdn.net/v/t39.30808-6/288413935_5153911161328696_1882048875975549564_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeGWPfCLXI_1ATUlAlcDIQqXIj4QaCW_l_siPhBoJb-X-2WsI45PjkLOGfBvtq_tLHVs4AeoAmF4w1GDUvDWFSl9&_nc_ohc=gSTXbJexiUsAX9_rBU1&_nc_ht=scontent.ftgu1-3.fna&oh=00_AfCgINr8F-WFPczmL2eHns7R2dwjeyEQvTLYotFNK9KvGQ&oe=65728295", alt: "Imagen de un caballo"}
    
]

const galeria2=[
    {direccion: "https://scontent.ftgu1-3.fna.fbcdn.net/v/t39.30808-6/290109038_5178630732190072_5358360652263562949_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeEKDvKoMUlh3C4bKalvn7M7vFwrSbEtLE68XCtJsS0sToM_U-vWcuHIBgOdvj1C3_Knwwxkai_rn42gMzokLUPL&_nc_ohc=yN84E-LbiM8AX8V-kKc&_nc_ht=scontent.ftgu1-3.fna&oh=00_AfDhzKhF_NjlWdTafVG94hzzcTW8MVbN9d16JUkb9uH2IA&oe=6572D7BF", alt: "Imagen del culpable"}
    
]

const galeria3=[
    {direccion: "https://scontent.ftgu1-3.fna.fbcdn.net/v/t39.30808-6/290529538_5190432441009901_1615151122071813084_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeHRRaxmPQMRK3wa0F1VsVBicD0XTghbqNhwPRdOCFuo2PYTfy1wad6P-tumSo8mxjHVZB8Uj53rXqMgobfTOC-V&_nc_ohc=VWx4UFkWL6EAX8WMYAF&_nc_ht=scontent.ftgu1-3.fna&oh=00_AfAYkiptGqrqArg0HtA8Ej-INgkbwPDuPbNkUIKNwOixcQ&oe=6572FE45", alt: "Imagen de la ave nacional"}
    
]

const galeria4=[
    {direccion: "https://scontent.ftgu1-3.fna.fbcdn.net/v/t39.30808-6/291637825_5220331444686667_2779721406285477860_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeF3ucUcFsKB0DkB9a5dk5doahHCAV9cR5lqEcIBX1xHme2nGZ695V5kuStsMkor4bZChBhvp7j64UYZ8DiI2GjB&_nc_ohc=1MWP9rBJaRYAX-Airlb&_nc_ht=scontent.ftgu1-3.fna&oh=00_AfBonVuAQO3DsjisH9RBx37maYt2yByEVvbMJJCrtdqZkQ&oe=65733B78", alt: "Imagen de un caballo blanco"}
    
]

const galeria5=[
    {direccion: "https://scontent.ftgu1-3.fna.fbcdn.net/v/t39.30808-6/293476242_5227536440632834_1170445624401114508_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeFn-QE_a2EVJ-inEwu-s7ctd2fbrtwc_Xx3Z9uu3Bz9fNEvOkIEVjq0t45fhfvXevjTxtRoAlAAE8meDVYZJRDp&_nc_ohc=bCZwvNIr3MoAX_DMUk1&_nc_ht=scontent.ftgu1-3.fna&oh=00_AfAlBXv5STD321LFSLmz2zUsapd-HXJmEPv7hFvuc_aoLw&oe=657241A5", alt: "Imagen de un perro"}
    
]

const galeria6=[
    {direccion: "https://scontent.ftgu1-3.fna.fbcdn.net/v/t39.30808-6/293566783_5228189443900867_7160781232024093048_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeHW_S71_LdGQwmE4YKybD8ZobHuudVycP6hse651XJw_spYDsgiRKApYCKGdFyDBubaVwR_8yErXSDm3mYMiU67&_nc_ohc=pX0cYSaabfYAX_OZnbN&_nc_ht=scontent.ftgu1-3.fna&oh=00_AfBJaCnQh-YRD0M-Sj8wCRBsugy0YlERyJbczfUpbtol8A&oe=6572EF1C", alt: "Imagen de un niño"}
    
]

const handlerBarsContext = {
    "/index.html": {
        "title": "Inicio | Fundación AHPRA",
        "paginas": paginas,
        "bienvenida": bienvenida,
        "imagen": imagen_inicio,
        "mision": mision,
        "vision": vision,
        "noticias": noticias_inicio,
        "ejemplos": ejemplos,
    },
    "/blog.html":{
        "title": "Blog | Fundación AHPRA",
        "paginas": paginas,
        "noticias":  noticias_blog,
        "side": noticias_side,
    },
    "/noticiaej.html":{
        "paginas": paginas,
    },
    "/galeria.html":{
        "title": "Galeria | Fundación AHPRA",
        "paginas": paginas,
        "galeria1": galeria1,
        "galeria2": galeria2,
        "galeria3": galeria3,
        "galeria4": galeria4,
        "galeria5": galeria5,
        "galeria6": galeria6,
    },
    "/about.html":{
        "paginas": paginas,
        "title": "Acerca de | Fundación AHPRA",
    },
}

const pageContext = (page)=>{
    const context= {...handlerBarsContext[page]}
    return context;
}
export default pageContext;