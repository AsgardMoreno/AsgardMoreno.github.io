var palabras;
let generarPalabra = function() {
  palabras = [
  'disculpa',
'traer',
'salvo',
'quedar',
'hubiese',
'detective',
'lleno',
'llegue',
'vayas',
'haras',
'cualquiera',
'podamos',
'hablamos',
'proximo',
'increible',
'dejen',
'vuelo',
'verlo',
'parecen',
'pedir',
'idiota',
'santa',
'pelea',
'haberlo',
'encuentro',
'hotel',
'tomo',
'trasero',
'tuviera',
'prefiero',
'dando',
'perfecto',
'coronel',
'honor',
'viejos',
'capaz',
'teniamos',
'podras',
'contacto',
'confiar',
'hacerme',
'mirar',
'llamas',
'cuantas',
'estacion',
'correcto',
'llevare',
'podido',
'tratar',
'ponte',
'esposo',
'muchacho',
'relacion',
'cerebro',
'sargento',
'comandante',
'sabias',
'pidio',
'jesus',
'escuchar',
'estaran',
'medico',
'dulce',
'carta',
'perdio',
'ellas',
'dejaste',
'vista',
'sientate',
'dejas',
'camara',
'luces',
'novia',
'rayos',
'quienes',
'estupido',
'regresa',
'excelente',
'escuche',
'codigo',
'error',
'intenta',
'conoci',
'veremos',
'debio',
'hermosa',
'tocar',
'pruebas',
'funciona',
'tienda',
'pensado',
'muertos',
'banco',
'depende',
'podremos',
'jugando',
'dejalo',
'haberte',
'ocurrio',
'unidad',
'oigan',
'matado',
'intentando',
'necesitaba',
'especie',
'embargo',
'pedazo',
'tomando',
'abogado',
'hablado',
'contar',
'mirando',
'imposible',
'hubieras',
'reunion',
'hagamos',
'debido',
'doble',
'cargo',
'principe',
'personal',
'espiritu',
'cielos',
'deberian',
'papel',
'decision',
'aquella',
'estrella',
'escribir',
'edificio',
'encontro',
'corte',
'accidente',
'delante',
'podre',
'cuestion',
'guardia',
'carrera',
'soldados',
'diablo',
'posicion',
'probar',
'llame',
'ponga',
'espada',
'humano',
'calma',
'pedi',
'ganas',
'duele',
'malditos',
'libertad',
'aprender',
'varios',
'vengo',
'negocios',
'direccion',
'pelear',
'escuche',
'vendra',
'prometo',
'volvera',
'director',
'sucedio',
'perra',
'cayo',
'nuevos',
'llave',
'simple',
'vayamos',
'norte',
'espacio',
'tambien',
'vuelvo',
'diferente',
'digame',
'robot',
'quedo',
'empezo',
'humanos',
'quiso',
'segundos',
'solamente',
'color',
'novio',
'planeta',
'quedarme',
'parecer',
'dara',
'parar',
'energia',
'despues',
'terrible',
'sirve',
'llena',
'conocido',
'trajo',
'escuchame',
'digamos',
'reina',
'consejo',
'tendran',
'siguen',
'abran',
'ordenes',
'interesa',
'senti',
'saldra',
'destino',
'volar',
'basura',
'baile',
'respeto',
'enseguida',
'pesar',
'pasara',
'golpe',
'hayan',
'hermanos',
'normal',
'encontraron',
'paciente',
'iglesia',
'fuerzas',
'tomado',
'bomba',
'llevan',
'derecha',
'libros',
'evitar',
'larga',
'proteger',
'sigan',
'navidad',
'informe',
'subir',
'izquierda',
'eramos',
'gracioso',
'confia',
'silencio',
'cuento',
'salgan',
'encuentras',
'abuelo',
'diste',
'princesa',
'hermoso',
'amable',
'bolsa',
'vidas',
'vestido',
'entendido',
'hable',
'enemigo',
'arreglar',
'tantos',
'bajar',
'quedarse',
'crimen',
'entender',
'salido',
'adentro',
'maquina',
'intentar',
'caballo',
'hable',
'peligro',
'caballero',
'partir',
'millon',
'batalla',
'pudiste',
'varias',
'usando',
'mataste',
'tomare',
'lleve',
'verdadera',
'soldado',
'bonita',
'acuerdas',
'irnos',
'cuesta',
'nueve',
'brazo',
'dejenme',
'mataron',
'formas',
'alguno',
'haran',
'traido',
'destruir',
'absoluto',
'preocupa',
'estilo',
'huele',
'definitivo',
'entrada',
'radio',
'perros',
'acabas',
'investigar',
'bienvenida',
'valor',
'muestra',
'asesinato',
'mando',
'vieron',
'aquellos',
'reglas',
'llamame',
'desea',
'abuela',
'tarjeta',
'presento',
'quede',
'malas',
'busco',
'bienvenido',
'acceso',
'fondo',
'anillo',
'quedarte',
'tomas',
'divertido',
'tantas',
'detener',
'puertas',
'pistola',
'llame',
'comienza',
'velocidad',
'partido',
'cuidar',
'calmate',
'obviamente',
'muere',
'escena',
'despierta',
'recordar',
'presion',
'teniendo',
'llevara',
'cambia',
'cartas',
'tercer',
'echar',
'directo',
'cancion',
'cuantos',
'cerrar',
'sabia',
'querer',
'cambiado',
'seria',
'correr',
'imagino',
'beber',
'envio',
'entro',
'cenar',
'horrible',
'llegamos',
'animales',
'comenzar',
'piensan',
'seccion',
'poniendo',
'suelo',
'bella',
'vuelvas',
'habeis',
'pocos',
'perdona',
'habia',
'hablo',
'experiencia',
'ayudame',
'asuntos',
'proyecto',
'defensa',
'accion',
'principio',
'orgulloso',
'metros',
'adonde',
'precio',
'diles',
'mueve',
'hables',
'escuchen',
'partes',
'lugares',
'llevamos',
'bailar',
'alejate',
'sentado',
'proposito',
'seguimos',
'pedido',
'llegas',
'puntos',
'perdiendo',
'vender',
'necesario',
'molesta',
'dejame',
'charles',
'operacion',
'banda',
'oiste',
'resulta',
'quedo',
'miembros',
'permite',
'diferencia',
'salida',
'yendo',
'jodido',
'debiste',
'dioses',
'triste',
'quedas',
'sentia',
'robar',
'pones',
'hazme',
'hogar',
'jovenes',
'llegue',
'pista',
'mate',
'saliendo',
'memoria',
'puente',
'llego',
'volviendo',
'lucha',
'haberme',
'habido',
'viento',
'camion',
'imagen',
'toque',
'sonido',
'universidad',
'parecio',
'tercera',
'llaves',
'broma',
'drogas',
'policias',
'suficiente',
'necesitar',
'llamaba',
'tomen',
'dejaron',
'carga',
'escrito',
'temprano',
'salgamos',
'nuevas',
'olvida',
'agradezco',
'pongo',
'coger',
'pondre',
'seremos',
'pareja',
'lider',
'fueras',
'publico',
'trato',
'calor',
'llevaba',
'termina',
'digale',
'recibir',
'confio',
'viniste',
'vosotros',
'puedan',
'vives',
'cuentas',
'terminado',
'hablare',
'luchar',
'respecto',
'querian',
'encantaria',
'infierno',
'olvides',
'recien',
'heroe',
'marca',
'verme',
'creemos',
'poderes',
'guarda',
'enfermo',
'miembro',
'hablemos',
'quitate',
'olvidalo',
'sujeto',
'ejemplo',
'cientos',
'animal',
'viviendo',
'llamando',
'sugiero',
'cuida',
'manten',
'repente',
'podias',
'gustaba',
'querria',
'tiempos',
'perdimos',
'opinion',
'vuelvan',
'vimos',
'quizas',
'cuantas',
'costa',
'serie',
'olvide',
'leyes',
'perdiste',
'aceptar',
'obtener',
'vuestra',
'reloj',
'ventana',
'torre',
'prision',
'mires',
'dejan',
'momentos',
'ayudarte',
'comenzo',
'bosque',
'fuese',
'central',
'cansado',
'vuestro',
'quedara',
'podria',
'viven',
'preocupe',
'objetivo',
'tuvieron',
'refiero',
'detente',
'compre',
'asiento',
'andar',
'tengamos',
'tropas',
'regresen',
'quedado',
'enorme',
'dejamos',
'propios',
'siglo',
'hubieran',
'consigue',
'manejar',
'conto',
'cantidad',
'fuente',
'planes',
'ponen',
'acaban',
'desearia',
'merece',
'cinta',
'socio',
'lei',
'hechos',
'sorpresa',
'seres',
'riesgo',
'recoger',
'millas',
'algun',
'averiguar',
'llegara',
'peligroso',
'encantado',
'crear',
'cliente',
'romper',
'robots',
'prisa',
'entiende',
'llevaron',
'caminar',
'verla',
'podran',
'decidido',
'acabamos',
'zapatos',
'ganado',
'demonio',
'limpiar',
'gordo',
'recuperar',
'estemos',
'daria',
'agentes',
'termino',
'sienta',
'pensamos',
'llegaron',
'termine',
'virus',
'esperamos',
'actuar',
'verano',
'premio',
'faltan',
'quedese',
'noticia',
'gusto',
'conocia',
'pasan',
'quita',
'lastima',
'dejarlo',
'trabajas',
'ocupado',
'trate',
'clases',
'caray',
'esperas',
'visita',
'oficiales',
'penso',
'muero',
'primeros',
'creeme',
'preguntar',
'consegui',
'corriendo',
'muerta',
'controlar',
'canal',
'verde',
'traigo',
'felices',
'discutir',
'deber',
'unidos',
'enviar',
'salud',
'diferentes',
'brazos',
'agradable',
'caliente',
'aguanta',
'recibido',
'quedamos',
'meter',
'escapar',
'aviones',
'preparado',
'metido',
'levanta',
'huellas',
'peliculas',
'trabajaba',
'estarias',
'vuelves',
'tranquila',
'menor',
'arbol',
'herida',
'hambre',
'enamorado',
'piloto',
'tormenta',
'principal',
'llevarte',
'piernas',
'mirame',
'relaciones',
'harias',
'perdone',
'nombres',
'blanca',
'tardes',
'sepas',
'conocen',
'pulso',
'primo',
'sheriff',
'dejarme',
'pasamos',
'corta',
'traere',
'cerveza',
'estais',
'toques',
'juicio',
'ibamos',
'estuvimos',
'brillante',
'agarra',
'fueran',
'olvidar',
'monstruo',
'traigan',
'suelta',
'cabello',
'quedare',
'escuchado',
'olvidado',
'silla',
'locura',
'propiedad',
'joder',
'intente',
'carcel',
'amenaza',
'vinieron',
'prensa',
'murieron',
'voluntad',
'medicina',
'ayudarme',
'ultima',
'opcion',
'decirles',
'epoca',
'hablaba',
'cuan',
'pocas',
'hielo',
'preguntaba',
'casas',
'llegaste',
'dispuesto',
'botella',
'tratado',
'llevado',
'leche',
'balas',
'video',
'propias',
'levantate',
'esperan',
'cierta',
'inspector',
'hablan',
'total',
'lengua',
'volvi',
'modelo',
'huevos',
'cocina',
'pondra',
'historias',
'aseguro',
'estudio',
'efecto',
'hablaremos',
'quedense',
'salimos',
'numeros',
'motivo',
'dira',
'convierte',
'victima',
'refieres',
'pierna',
'trajiste',
'tomamos',
'resolver',
'cortar',
'victoria',
'truco',
'pongas',
'menudo',
'datos',
'aparte',
'vivia',
'hiciera',
'mantiene',
'enfermedad',
'completo',
'vacaciones',
'sistemas',
'volvamos',
'tension',
'carro',
'traes',
'oeste',
'flores',
'exito',
'dedos',
'darles',
'cuales',
'revisar',
'pense',
'escribio',
'quede',
'veinte',
'preocupado',
'esperanza',
'seguros',
'queria',
'ingles',
'flota',
'firma',
'recibi',
'pusieron',
'parado',
'ministro',
'salvo',
'reino',
'naves',
'estupida',
'consigo',
'calles',
'examen',
'alerta',
'naturaleza',
'matrimonio',
'acabado',
'perdida',
'famoso',
'revista',
'compra'];

} 
