

export default (store) => (next) => (payload) => {
    // console.log(payload.type, payload);
    next(payload);
    // console.log(store.getState().counter.count)
}