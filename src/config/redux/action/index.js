export const actionUserName = () => (dispatch) => {
    setTimeout(() => {
        return dispatch({
            type: 'CHANGE_USER',
            value: 'Dani Munif'
        })
    }, 5000);
}