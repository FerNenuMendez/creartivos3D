const mates=[
    {
        id:1,
        nombre:'CAPITAN AMERICA',
        linea:'Superheroes',
        precio:2000,
        img1:'../../../mates/cap1.JPG',
        // img2:'../../../mates/cap1.JPG',
        // img3:'../../../mates/cap2.JPG',
        // img4:'../../../mates/cap3.JPG',
    },
    {
        id:2,
        nombre:'IROMAN',
        linea:'Superheroes',
        precio:2000,
        img1:'../../../mates/iron1.JPG',
        // img2:'../../../mates/iron1.JPG',
        // img3:'../../../mates/iron2.HEIC',
        // img4:'../../../mates/iron3.HEIC',
    },
    {
        id:3,
        nombre:'BATMAN',
        linea:'Superheroes',
        precio:2000,
        img1:'../../../mates/bat1.JPG',
        // img2:'../../../mates/bat1.JPG',
        // img3:'../../../mates/bat2.JPG',
        // img4:'../../../mates/bat3.JPG',
    },
    {
        id:4,
        nombre:'Darth Vader',
        linea:'StarWars',
        precio:1500,
        img1:'../../../mates/vader1.JPG',
        // img2:'../../../mates/vader1.JPG',
        // img3:'../../../mates/vader2.JPG',
        // img4:'../../../mates/vader3.JPG',
    },
    {
        id:5,
        nombre:'Mandalorian',
        linea:'StarWars',
        precio:1500,
        img1:'../../../mates/mando1.JPG',
            // img2:'../../../mates/mando1.JPG',
            // img3:'../../../mates/mando2.JPG',
            // img4:'../../../mates/mando3.JPG',
    },
    {
        id:6,
        nombre:'Stormtrooper',
        linea:'StarWars',
        precio:1500,
        img1:'../../../mates/troo1.JPG',
            // img2:'../../../mates/troo1.JPG',
            // img3:'../../../mates/troo2.JPG',
            // img4:'../../../mates/troo3.JPG',
    },
    {
        id:7,
        nombre:'Mickey 2',
        linea:'Disney',
        precio:2200,
        img1:'../../../mates/mick2.JPG',
            //  img2:'recursos/Mates/cap1.JPG',
            //  img3:'recursos/Mates/cap2.JPG',
            //  img4:'recursos/Mates/cap3.JPG',
    },
    {
        id:8,
        nombre:'Chimuelo',
        linea:'Disney',
        precio:2200,
        img1:'../../../mates/chi1.JPG',
            // img2:'../../../mates/chi1.JPG',
            // img3:'../../../mates/chi2.JPG',
            // img4:'../../../mates/chi3.JPG',
    },
    {
        id:9,
        nombre:'Stitch',
        linea:'Disney',
        precio:2200,
        img1:'../../../mates/stitch1.JPG',
            // img2:'../../../mates/stitch1.JPG',
            // img3:'../../../mates/stitch2.JPG',
            // img4:'../../../mates/stitch3.JPG',
    },
    {
        id:10,
        nombre:'Capitan Pelusa',
        linea:'Personajes',
        precio:1500,
        img1:'../../../mates/pelusa1.JPG',
            // img2:'../../../mates/pelusa1.JPG',
            // img3:'../../../mates/pelusa2.JPG',
            // img4:'../../../mates/pelusa3.JPG',
    },
    {
        id:11,
        nombre:'Frida',
        linea:'Personajes',
        precio:1500,
        img1:'../../../mates/fri1.JPG',
            // img2:'../../../mates/fri1.JPG',
            // img3:'../../../mates/fri2.JPG',
            // img4:'../../../mates/fri3.JPG',
    },
    {
        id:12,
        nombre:'Harry Potter',
        linea:'Fantasia',
        precio:1500,
        img1:'../../../mates/harry1.HEIC',
            // img2:'../../../mates/harry1.HEIC',
            // img3:'../../../mates/harry2.HEIC',
            // img4:'../../../mates/harry3.HEIC',
    },
    // {
    //     id:13,
    //     nombre:'Rick Sanchez',
    //     linea:'Fantasia',
    //     precio:1500,
    //     img1:'../../../mates/rick1.HEIC',
    //         // img2:'../../../mates/rick1.HEIC',
    //         // img3:'../../../mates/rick2.HEIC',
    //         // img4:'../../../mates/rick3.HEIC',
    // },
    // {
    //     id:14,
    //     nombre:'Bob Esponja',
    //     linea:'Fantasia',
    //     precio:1500,
    //         img1:'../../../mates/bob1.JPG',
    //         // img2:'../../../mates/bob1.JPG',
    //         // img3:'../../../mates/bob2.JPG',
    //         // img4:'../../../mates/bob3.JPG',
    // },
];

export const getProductsByCategory = (category) => {
    return new Promise((res) => {
        const productos = mates.filter(product => product.linea === category);
        setTimeout(() => {
                res(productos);
            }, 2000);
        });
}
export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(mates);
        }, 2000);
    });
}
export const getProductById = (id) => {
    return new Promise((res) => {
        const producto = mates.filter(product => product.id === id);
        setTimeout(() => {
                res(producto);
            }, 1000);
        });
}

export default mates