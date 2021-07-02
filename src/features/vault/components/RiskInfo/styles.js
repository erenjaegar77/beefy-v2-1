const defaultFont = {
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
}

const boldFont = {
    ...defaultFont,
    fontWeight: 600,
}

const styles = (theme) => ({
    cardActions: {
        margin: '10px'
    },
    cardSubtitle: {
        ...boldFont,
        fontSize: '18px',
        lineHeight: '24px',
        color: '#8585A6',
        letterSpacing: '0.2px'
    },
    riskList: {
        marginBottom: '12px'
    },
    riskRow: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        marginBottom: '18px'
    },
    risk: {
        ...boldFont,
        fontSize: "24px",
        lineHeight: "30px",
        color: "#FFFFFF",
    },
    riskCategory: {
        ...defaultFont,
        fontSize: "15px",
        lineHeight: "24px",
        letterSpacing: "0.2px",
        color: "#8585A6",
    },
    infoContainer: {
        display: 'flex',
        alignItems: "flex-start"
    },
    moreInfoContainer: {
        display: 'flex',
        alignItems: "center",
        position: 'relative'
    },
    moreInfoLabel: {
        ...boldFont,
        marginRight: "5px",
        fontSize: "14px",
        lineHeight: "24px",
        letterSpacing: "0.2px",
        color: "#6B7199",
    },
    moreInfoIcon: {
        
    },
    notes: {
        "& p": {
            ...defaultFont,
            fontSize: '14px',
            lineHeight: '20px',
            letterSpacing: '0.2px'
        },
        "& p:first-child": {
            marginBottom: '12px'
        }
    },
    arrow: {
        marginTop: "5px",
        marginRight: "8px"
    }
});

export default styles;
