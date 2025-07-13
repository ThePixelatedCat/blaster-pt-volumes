const TAGS = Object.freeze({
    PRINTED: '3D Printed',
    MAGFED: 'Mag-Fed',
    INJECTION_MOLDED: 'Injection Molded',
    SILLYBUTTS: 'Sillybutts',
    CHARAMILE_DESIGNS: 'Charamile Designs',
    HASBRO: 'Hasbro',
    BUZZ_BEE: 'Buzz Bee',
    DZ: 'Dart Zone',
    PK: 'Printkeep!',
    ORION_BLASTER: 'Orion Blasters',
});

let data = [
    new Blaster( 'Knight-L', '130', '36', TAGS.PRINTED, TAGS.MAGFED, TAGS.PK ),
    new Blaster( 'Lynx 2.x', '100.0125', '34.925', TAGS.PRINTED, TAGS.MAGFED, TAGS.ORION_BLASTER ),
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