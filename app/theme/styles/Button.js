export default c => ({
  self: {
    margin: '12px',
    fontSize: '14px',
    fontWeight: 'bold',
    fontStyle: 'italic',
    lineHeight: '48px',
    paddingRight: '0.4em',
    letterSpacing: '0.4em',
    textTransform: 'uppercase',
    borderRadius: '0',
    margin: '12px 0px',
    padding: '0px',
    borderColor: c.brandColor,
    backgroundColor: c.brandColor,
    color: c.viewBG
  },

  tapActive: {
    backgroundColor: c.viewBG,
    color: c.brandColor
  },

  chromeless: {
    border: 'none',
    backgroundColor: 'transparent',
    color: 'inherit'
  }
});
