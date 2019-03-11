export default {
  'POST /api/applet': (req, res) => {
    res.send({
      pages: [
        {
          title: 'applet1',
          ui_data: [],
        },
        {
          title: 'applet2',
          ui_data: [],
        },
        {
          title: 'applet3',
          ui_data: [],
        },
        {
          title: 'applet4',
          ui_data: [],
        },
      ],
      theme: {
        color: '#fff',
        background: 'orange',
      },
    });
  },
};
