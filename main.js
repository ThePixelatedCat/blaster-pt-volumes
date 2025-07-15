let data = [
    new Blaster( 'Knight-L', '130', '36', "Printkeep!" ),
    new Blaster( 'Lynx 2.x', '100.0125', '34.925', "Orion Blasters" ),
    new Blaster( 'Falx', '120', '34.925', "FLP" )
]

function Blaster ( name, draw, id, maker ) {
    this.name = name;
    this.draw = draw;
    this.id = id;
    this.maker = maker;
 
    this.volume = function () {
        return ((Math.PI * ((this.id / 2) ** 2) * this.draw) / 1000).toFixed(2);
    }
};

$('#data-table').DataTable( {
    data,
    columns: [
        { data: 'maker', className: 'dt-center' },
        { data: 'name', className: 'dt-center' },
        { data: 'draw', className: 'dt-center', searchable: false },
        { data: 'id', className: 'dt-center', searchable: false },
        { data: 'volume', className: 'dt-center', searchable: false },
    ],
    scrollY: '650px',
    scrollCollapse: true,
    paging: false,
    language: {
        search: 'Search by Name or Maker:'
    },
    layout: {
        topStart: 'info',
        bottomStart: null
    }
} );