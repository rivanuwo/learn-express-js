const model = require('../models/index');

exports.list = async (req, res) => {
  try {
      const users = await model.users.findAll({});
      if (users.length !== 0) {
        res.json({
          'status': 'OK',
          'messages': '',
          'data': users
        })
      } else {
        res.json({
          'status': 'ERROR',
          'messages': 'EMPTY',
          'data': {}
        })
      }
    } catch (err) {
      res.json({
        'status': 'ERROR',
        'messages': err.message,
        'data': {}
      })
    }
}

exports.detail = async (req, res) => {
  // const users = await model.users.findOne(req.params.id);
  // res.json(users);
}

exports.formUpdate = async (req, res) => {
  const users = await model.users
      .query()
      .select('id', 'first_name', 'email')
      .findById(req.params.id);
  res.json(users);
}

exports.create = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
    } = req.body;
    const users = await model.users.create({
      name,
      email,
      password,
    });
  if (users) {
    res.status(201).json({
      'status': 'OK',
      'messages': 'User berhasil ditambahkan',
      'data': users,
    })
  }
 } catch (err) {
   res.status(400).json({
     'status': 'ERROR',
     'messages': err.message,
     'data': {},
   })
 }
}

// exports.update = async (req, res) => {
//   const users = await model.users
//       .query()
//       .patchAndFetchById(req.params.id, {
//           first_name: 'Habibah',
//           last_name: 'Habibi'
//       });
//   res.json(users);
// }

exports.delete = async (req, res) => {
  const users = await model.users
      .query()
      .deleteById(req.params.id);
  res.json(users);
}
