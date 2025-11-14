import { Router, Request, Response } from "express";
import multer from "multer";
import path from "path";

const router = Router();

// Configuración de Multer
const storage = multer.diskStorage({
  destination: "src/uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// 🟢 Ruta para crear un reporte con imagen
router.post("/reportes", upload.single("imagen"), (req: Request, res: Response) => {
  const { descripcion, lat, lng } = req.body;

  if (!req.file) {
    return res.status(400).json({ error: "Falta la imagen" });
  }

  const imagenUrl = `http://localhost:3000/uploads/${req.file.filename}`;

  // Aquí guardarías en MySQL usando tu lógica actual
  // db.query("INSERT INTO ...", ...)

  return res.json({
    mensaje: "Reporte creado exitosamente",
    data: {
      descripcion,
      lat,
      lng,
      imagenUrl,
    },
  });
});

export default router;
