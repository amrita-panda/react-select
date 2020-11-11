const INPUTS =[
    {
        key:'single',
        type:'select',
        label:'without multi select without create',
        isMultiOptions:false,
        isSearchableOptions:true,
        isCreateableOptions:false,
        isClearableOptions:true,
        value:'strawberry', //single select takes default value in string
        options:[
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' },
        ]
    },
    {
        key:'singlecreateble',
        type:'select',
        label:'without multi select creatable',
        isMultiOptions:false,
        isSearchableOptions:true,
        isCreateableOptions:true,
        isClearableOptions:true,
        value:[{ value: 'chocolate', label: 'Chocolate' }], //createble selects takes in 'value label pair'
        options:[
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' },
        ]
    },
    {
        key:'multi',
        type:'select',
        label:"without multi without search without create and with out clear",
        isMultiOptions:false,
        issearchableOptions:false,
        isCreateableOptions:false,
        isClearableOptions:false,
        value:'vanilla',
        options:[
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' },
        ]
    },
    {
        key:'multicreate',
        type:'select',
        label:"multi select create",
        isMultiOptions:true,
        isSearchableOptions:true,
        isCreateableOptions:true,
        isClearableOptions:true,
        value:[{ value: 'chocolate', label: 'Chocolate' }, { value: 'strawberry', label: 'Strawberry' },],  //createble selects takes in 'value label pair'
        options:[
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' },
        ]
    },
    {
        key:'multicreate',
        type:'select',
        label:"with multi select without create/search /clear",
        isMultiOptions:true,
        isSearchableOptions:false,
        isCreateableOptions:false,
        isClearableOptions:false,
        value:[{ value: 'chocolate', label: 'Chocolate' }, { value: 'strawberry', label: 'Strawberry' },],  //createble selects takes in 'value label pair'
        options:[
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' },
        ]
    }
]
export default INPUTS;