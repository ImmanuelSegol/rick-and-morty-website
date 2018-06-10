const CardStyle = {
    cardImg:{
        borderRadius: '5px 5px 0px 0px',
        width: 'auto',
        height: '200px',
    },
    card:{
        height: 'auto',
        width: '250px',
        background: '#C7F2EF',
        margin: '15px',
        borderRadius: '5px',
        boxShadow: '10px 10px',
        display: 'flex',
        flexDirection: 'column',
    },
    cardInfo:{
        listStyle: 'none',
        //border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 0
    }, 
    infoItem:{
        fontSize: 10,
        padding: 5,
        margin: 2,
        borderBottom: '1px solid black',
        display: 'flex',
        justifyContent: 'space-between',
    },
    cardName:{
        textAlign: 'center',
        marginTop: 15,
        fontSize: 16,
        fontWeight: 'bold',
    },
}

export default CardStyle;