const validateSchema = (schema) =>(req, res, next) => {
    const data = req.body;
    const { error } = schema.validate(data);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  }