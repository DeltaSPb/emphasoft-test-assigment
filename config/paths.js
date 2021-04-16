const path = require('path');

module.exports = {
  // Исходники
  src: path.resolve(__dirname, '../src'),
  // Директория для файлов сборки
  build: path.resolve(__dirname, '../dist'),
  // Статические файлы, которые будут скопированы в директорию для файлов сборки
  public: path.resolve(__dirname, '../public'),
};
