const defaultState={
    plah:'搜索',
    iconBox:[
        {name:'bookList',title:'精品书单'},
        {name:'cherup',title:'精品书单'},
        {name:'chirden',title:'精品书单'},
        {name:'coffee',title:'精品书单'},
        {name:'essay',title:'精品书单'},
        {name:'good',title:'精品书单'},
        {name:'hot',title:'精品书单'},
        {name:'people',title:'精品书单'},
    ],
    fourFold:[
        {title:'7元封顶','tip':'会读书',imgName:'1',className:'bottom right'},
        {title:'4元一本','tip':'赠阅计划',imgName:'2',className:'bottom'},
        {title:'图书会员卡','tip':'购物兑换',imgName:'3',className:'right'},
        {title:'5元拼团','tip':'全场任选',imgName:'4',className:''},
    ]

};

export default (state = defaultState, action) => {
    let newState=JSON.parse(JSON.stringify(state));

    return state
}