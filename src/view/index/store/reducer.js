const defaultState={
    plah:'搜索'
};

export default (state = defaultState, action) => {
    let newState=JSON.parse(JSON.stringify(state));

    return state
}