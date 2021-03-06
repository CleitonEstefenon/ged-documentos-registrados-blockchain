export default theme => ({
  root: {},
  tableRow: {
    height: '64px'
  },
  tableCell: {
    whiteSpace: 'nowrap'
  },
  tableCellInner: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    display: 'inline-flex',
    fontSize: '14px',
    fontWeight: 500,
    height: '36px',
    width: '36px'
  },
  loading: {
    margin: theme.spacing(3)
  },
  closeModalButton: {
    cursor: 'pointer'
  },

  media: {
    width: '64px',
    height: '64px',

  },
  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  badgeMargin: {
    margin: theme.spacing(2),
    marginTop: '5px'
  }
});
