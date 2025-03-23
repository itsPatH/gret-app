import { Request, Response } from 'express';

export const getUser = (req: Request, res: Response) => {
  const userId = req.params.id;
  // Lógica para obtener datos de usuario
  res.json({ message: `User data for ${userId}` });
};

export const updateUser = (req: Request, res: Response) => {
  const userId = req.params.id;
  // Lógica para actualizar datos de usuario
  res.json({ message: `User data for ${userId} updated` });
};
