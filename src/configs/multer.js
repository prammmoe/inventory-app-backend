import multer, { diskStorage } from 'multer';

const storage = diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + '-' + file.mimetype.split('/')[1]);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 1000000, // 1 mb
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Hanya gambar yang diizinkan'), false);
    }
  },
});

export default upload;
