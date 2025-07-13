const TAGS = Object.freeze({
    /* Material/Production Process */
    PRINTED: '3D Printed',
    INJECTION_MOULDED: 'Injection Moulded',
    METAL: 'Metal',

    /* Loading Mechanism */
    MAG: 'Mag Fed',
    CYLINDER: 'Cylinder Fed',
    SINGLESHOT: 'Single Shot',

    /* 1st-Party Company */
    HASBRO: 'Hasbro',
    BUZZ_BEE: 'Buzz Bee',
    DZ: 'Dart Zone',
    SIREN: 'Siren',
    XSHOT: 'X-Shot',
    /* 3rd-Party Company */
    SABRE: 'Sabre',
    WORKER: 'Worker',
    /* Hobby Designer */
    SILLYBUTTS: 'Sillybutts',
    CHARAMILE: 'Charamile Designs',
    PK: 'Printkeep!',
    ORION: 'Orion Blasters',
    FLP: 'FLP',
    
    /* Misc */
    TURNAROUND: 'Turnaround',
});

let data = [
    new Blaster( 'Knight-L', '130', '36', TAGS.PRINTED, TAGS.MAG, TAGS.PK ),
    new Blaster( 'Lynx 2.x', '100.0125', '34.925', TAGS.PRINTED, TAGS.MAG, TAGS.ORION, TAGS.TURNAROUND ),
    new Blaster( 'Falx', '120', '34.925', TAGS.PRINTED, TAGS.METAL, TAGS.MAG, TAGS.FLP )
]

function Blaster ( name, draw, id, ...tags ) {
    this.name = name;
    this.draw = draw;
    this.id = id;
    this._tags = tags;
 
    this.volume = function () {
        return ((Math.PI * ((this.id / 2) ** 2) * this.draw) / 1000).toFixed(2);
    }
    
    this.tags = function () {
        return this._tags.join(', ');
    }
};

$('#data-table').DataTable( {
    data,
    columns: [
        { data: 'name', className: 'dt-center' },
        { data: 'volume', className: 'dt-center', searchable: false },
        { data: 'draw', className: 'dt-center', searchable: false },
        { data: 'id', className: 'dt-center', searchable: false },
        { data: 'tags' }
    ],
    scrollY: '650px',
    scrollCollapse: true,
    paging: false,
    language: {
        search: 'Search by Name or Tags:'
    },
    layout: {
        topStart: 'info',
        bottomStart: null
    }
} );