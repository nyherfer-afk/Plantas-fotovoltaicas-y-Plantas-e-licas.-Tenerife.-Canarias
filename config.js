var config = {
    style: 'mapbox://styles/yherfer/cmi6cfwxq00l201s91m9g93tp',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoieWhlcmZlciIsImEiOiJjbWhxM3BubTcwZXIxMnJxejAzMHFnNjlyIn0.MKIyaonngEZu_LWUacSNGQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Plantas fotovoltaícas y Parques eólicos. Tenerife. Canarias',
    subtitle: 'Storymaps Plantas fotovoltaicas y Parques eólicos en Tenerife',
    byline: 'By Yanira Hdez Fdez',
    footer: 'Source: Datos abiertos Gobierno de España. https://datos.tenerife.es/es/datos/conjuntos-de-datos/infraestructuras-de-generacion-de-energia-en-tenerife <br>  <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Planta Solten I',
            image: 'https://www.iter.es/wp-content/uploads/2015/11/2006_SOLTENI-2048x1361.jpg',
            description: 'Planta Fotovoltaica <br>  <br> Potencia instalada: 13.000 kW',
            location: {
                center: [-16.52524, 28.06986],
                zoom: 15,
                pitch: 70,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Planta Solten II',
            image: 'https://www.iter.es/wp-content/uploads/2015/11/2007-2008_SOLETN_II-2048x1487.jpg',
            description: 'Planta Fotovoltaica <br>  <br> Potencia instalada: 11.000 kW',
            location: {
                center: [-16.513459, 28.072191],
                zoom: 18,
                pitch: 60,
                bearing: -8,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Planta Metropolitano',
            image: 'https://vialibre-ffe.com/images/image/2443fotovoltaica.jpg',
            description: 'Planta Fotovoltaica <br>  <br> Potencia instalada: 880 kW',
            location: {
                center: [-16.294896, 28.451211],
                zoom: 18,
                pitch: 60,
                bearing: -8
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Planta Bodega Comarcal',
            image: 'https://static.construible.es/media/2016/12/0808_suntechnics.jpg',
            description: 'Planta Fotovoltaica <br>  <br> Potencia instalada: 200 kW',
            location: {
                center: [-16.38401923613404, 28.4825784393044],
                zoom: 18,
                pitch: 60,
                bearing: -20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Parque La Roca',
            image: 'https://www.iter.es/wp-content/uploads/2019/05/2019.05.22-Arete-y-la-Roca_red.jpg',
            description: 'Planta Eólica <br>  <br> Potencia instalada: 18.400 kW',
            location: {
                center: [-16.511866, 28.081618],
                zoom: 17,
                pitch: 50,
                bearing: 20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Planta Icor',
            image: 'https://www.atlanticohoy.com/uploads/s1/27/96/58/9/imagen-de-placas-solares-de-un-parque-fotovoltaico-pixabay_4_1000x563.png',
            description: 'Planta Fotovoltaica <br>  <br> Potencia instalada: 2.000 kW',
            location: {
                center: [-16.442229, 28.194341],
                zoom: 18,
                pitch: 70,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Parque MADE',
            image: 'https://innovaciontenerife.com/wp-content/uploads/2024/04/Paqrue-55_-ITER-1080x550.jpg',
            description: 'Planta Eólica <br>  <br> Potencia instalada: 4.800 kW',
            location: {
                center: [-16.513429, 28.06909],
                zoom: 18,
                pitch: 60,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eighth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Planta Finca Roja',
            image: 'https://cdn.diariodeavisos.com/wp-content/uploads/2017/12/p455281afot.jpg',
            description: 'Planta Fotovoltaica <br>  <br> Potencia instalada: 5.000 kW',
            location: {
                center: [-16.485455, 28.15565],
                zoom: 17,
                pitch: 70,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ninth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Parque CAT',
            image: 'https://innovaciontenerife.com/wp-content/uploads/2024/04/Paqrue-55_-ITER-1080x550.jpg',
            description: 'Planta Eólica <br>  <br> Potencia instalada: 18.400 kW',
            location: {
                center: [-16.482718, 28.121992],
                zoom: 18,
                pitch: 60,
                bearing: 20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tenth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Parque Areté',
            image: 'https://www.iter.es/wp-content/uploads/2019/05/2019.05.22-Arete-y-la-Roca_red.jpg',
            description: 'Planta Eólica <br>  <br> Potencia instalada: 16.800 kW',
            location: {
                center: [-16.506128, 28.079662],
                zoom: 17,
                pitch: 60,
                bearing: 15
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eleventh-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Planta Piloto',
            image: 'https://cdn.diariodeavisos.com/wp-content/uploads/2017/12/p455281afot.jpg',
            description: 'Planta Fotovoltaica <br>  <br> Potencia instalada: 100 kW',
            location: {
                center: [-16.512063, 28.070243],
                zoom: 18,
                pitch: 60,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twelfth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Planta Finca Verde',
            image: 'https://www.atlanticohoy.com/uploads/s1/27/96/58/9/imagen-de-placas-solares-de-un-parque-fotovoltaico-pixabay_4_1000x563.png',
            description: 'Planta Fotovoltaica <br>  <br> Potencia instalada: 5.000 kW',
            location: {
                center: [-16.486771, 28.155972],
                zoom: 18,
                pitch: 60,
                bearing: -8.0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

    ]
};
