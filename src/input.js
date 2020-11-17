module.exports.INPUTS =[
    {
        key:'single_input',
        type:'select',
        label:'without multi select without create',
        multi:false,
        serach:false,
        create:false,
        clear:false,
        value:'strawberry', //single select takes default value in string
        disabled:false,
        options:[
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' },
        ]
    },
    {
        key:'noramlDate_input',
        type:'date',
        label:"Date",
        value:null,//to make initially empty put null instead if  empty string //prepolute
        format:'MM/dd/yyyy',  //format should never be empty
        showTime:false,
        options:[]
    },
    {
        key:'select_serach',
        type:'switch',
        label:' Select searchable',
        value:false, //single select takes default value in string
        disabled:false,
        options:[
           
        ]
    },
    {
        key:'select_clear',
        type:'switch',
        label:' Select clearable',
        value:false, //single select takes default value in string
        disabled:false,
        options:[
           
        ]
    },
    {
        key:'select_multi',
        type:'switch',
        label:' Multiple select',
        value:false, //single select takes default value in string
        disabled:false,
        options:[
           
        ]
    },
    {
        key:'select_create',
        type:'switch',
        label:'Creatable Select',
        value:false, //single select takes default value in string
        disabled:false,
        options:[
           
        ]
    },
    {
        key:'select_disabled',
        type:'switch',
        label:'Disable Select',
        value:false, //single select takes default value in string
        disabled:false,
        options:[
           
        ]
    },
    {
        key:"date_showTime",
        type:'switch',
        label:'show Time',
        value:false, //single select takes default value in string
        disabled:false,
        options:[
           
        ]

    },
    {
        key:"date_format",
        type:'text',
        label:'Enter Format',
        value:false, 
        disabled:false,
        options:[
           
        ]

    }
  
    // {
    //     key:'singlecreateble',
    //     type:'select',
    //     label:'without multi select creatable',
    //     isMultiOptions:false,
    //     isSearchableOptions:true,
    //     isCreateableOptions:true,
    //     clear:true,
    //     value:[{ value: 'chocolate', label: 'Chocolate' }], //createble selects takes in 'value label pair'
    //     options:[
    //         { value: 'chocolate', label: 'Chocolate' },
    //         { value: 'strawberry', label: 'Strawberry' },
    //         { value: 'vanilla', label: 'Vanilla' },
    //     ]
    // },
    // {
    //     key:'multi',
    //     type:'select',
    //     label:"without multi without search without create and with out clear",
    //     isMultiOptions:false,
    //     issearchableOptions:false,
    //     isCreateableOptions:false,
    //     clear:false,
    //     value:'vanilla',
    //     options:[
    //         { value: 'chocolate', label: 'Chocolate' },
    //         { value: 'strawberry', label: 'Strawberry' },
    //         { value: 'vanilla', label: 'Vanilla' },
    //     ]
    // },
    // {
    //     key:'multicreate',
    //     type:'select',
    //     label:"multi select create",
    //     isMultiOptions:true,
    //     isSearchableOptions:true,
    //     isCreateableOptions:true,
    //     clear:true,
    //     value:[{ value: 'chocolate', label: 'Chocolate' }, { value: 'strawberry', label: 'Strawberry' },],  //createble selects takes in 'value label pair'
    //     options:[
    //         { value: 'chocolate', label: 'Chocolate' },
    //         { value: 'strawberry', label: 'Strawberry' },
    //         { value: 'vanilla', label: 'Vanilla' },
    //     ]
    // },
    // {
    //     key:'multicreate',
    //     type:'select',
    //     label:"with multi select without create/search /clear",
    //     isMultiOptions:true,
    //     isSearchableOptions:false,
    //     isCreateableOptions:false,
    //     clear:false,
    //     value:[{ value: 'chocolate', label: 'Chocolate' }, { value: 'strawberry', label: 'Strawberry' },],  //createble selects takes in 'value label pair'
    //     options:[
    //         { value: 'chocolate', label: 'Chocolate' },
    //         { value: 'strawberry', label: 'Strawberry' },
    //         { value: 'vanilla', label: 'Vanilla' },
    //     ]
    // },
    // {
    //     key:'multicreate',
    //     type:'select',
    //     label:"with multi select without create/search /clear",
    //     // isMultiOptions:false,
    //     // isSearchableOptions:false,
    //     // isCreateableOptions:false,
    //     // isClearableOptions:false,
    //     value:'',  //createble selects takes in 'value label pair'
    //     options:[
    //         { value: 'chocolate', label: 'Chocolate' },
    //         { value: 'strawberry', label: 'Strawberry' },
    //         { value: 'vanilla', label: 'Vanilla' },
    //     ]
    // },

    // {
    //     key:'noramlDate',
    //     type:'date',
    //     label:"Date",
    //     value:new Date('11-10-2020'),//to make initially empty put null instead if  empty string //prepolute
    //     format:'MM-dd-yyyy',  
    //     showTime:false,
    //     options:[]
    // },
    // {
    //     key:'noramlDateTime',
    //     type:'date',
    //     label:"Date",
    //     // isMultiOptions:false,
    //     // isSearchableOptions:false,
    //     // isCreateableOptions:false,
    //     // isClearableOptions:false,
    //     value:new Date('10-20-2020 09:03 AM'),//PREPOPULATE U need to pass as month-day-year and if time and same format as time format
    //     format:'yyyy/dd/MM h:mm aa',  
    //     showTime:true,
    //     options:[]
    // },
    // {
    //     key:'noramlDateTimewithSecond',
    //     type:'date',
    //     label:"Date",
    //     // isMultiOptions:false,
    //     // isSearchableOptions:false,
    //     // isCreateableOptions:false,
    //     // isClearableOptions:false,
    //     value:new Date(),
    //     format:'yyyy/dd/MM h:mm aa',  
    //     showTime:true,
    //     options:[]
    // },
    // {
    //     key:'datewithTextTimewithSecond',
    //     type:'date',
    //     label:"Date",
    //     // isMultiOptions:false,
    //     // isSearchableOptions:false,
    //     // isCreateableOptions:false,
    //     // isClearableOptions:false,
    //     value:new Date(),
    //     format:'MMMM d, yyyy hh:mm:ss aa',  
    //     showTime:true,
    //     options:[]
    // },
    // {
    //     key:'datewithTextTimewithSecond1',
    //     type:'date',
    //     label:"Date",
    //     // isMultiOptions:false,
    //     // isSearchableOptions:false,
    //     // isCreateableOptions:false,
    //     // isClearableOptions:false,
    //     value:new Date(),
    //     format:'MMMM dd yyyy hh:mm:ss aa',  
    //     showTime:true,
    //     options:[]
    // },
    // {
    //     key:'datewithTextTimewithSecond2',
    //     type:'date',
    //     label:"Date",
    //     // isMultiOptions:false,
    //     // isSearchableOptions:false,
    //     // isCreateableOptions:false,
    //     // isClearableOptions:false,
    //     value:null,
    //     format:'dd MMMM yyyy hh:mm:ss aa', 
    //     clear:true, 
    //     showTime:true,
    //     disabled:true,
    //     options:[],
       
    // }
]
module.exports.selectProps=[
    {
        key:'serachableToggle',
        type:'switch',
        label:'SelectSearchable',
        value:false, //single select takes default value in string
        disabled:false,
        options:[
           
        ]
    },
    {
        key:'clearToggle',
        type:'switch',
        label:'Selectclearable',
        value:false, //single select takes default value in string
        disabled:false,
        options:[
           
        ]
    },
    {
        key:'selectMultiToggle',
        type:'switch',
        label:'multiple select',
        value:false, //single select takes default value in string
        disabled:false,
        options:[
           
        ]
    },
    {
        key:'creatable',
        type:'switch',
        label:'creatableselect',
        value:false, //single select takes default value in string
        disabled:false,
        options:[
           
        ]
    },

]

//export default INPUTS;