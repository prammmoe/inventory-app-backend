export default function response(values, res) { // Use default for easier res naming
  var data = {
    status: 200,
    values: values,
  };
  res.json(data);
  res.end();
}
